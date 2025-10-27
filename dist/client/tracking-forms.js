// public/scripts/tracking-forms.js
// Script global pour le tracking des formulaires Stop-Punaises

(function () {
  'use strict';

  // Helper sécurisé pour dataLayer
  function pushDL(eventName, params) {
    params = params || {};
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 
        event: eventName, 
        ...params,
        timestamp: new Date().toISOString()
      });
      
      // Debug en dev (détecte localhost/staging)
      if (location.hostname === 'localhost' || location.hostname.includes('staging')) {
        console.log('📊 DataLayer Push:', eventName, params);
      }
    } catch (error) {
      console.warn('DataLayer push failed:', error);
    }
  }

  // Extrait les données de tracking depuis les data-attributes du bouton
  function getTrackingDataFromButton(button) {
    const dataset = button.dataset;
    
    return {
      form_id: dataset.formId || '',
      form_name: dataset.formName || '',
      form_type: dataset.formType || 'devis',
      conversion_value: dataset.value ? parseFloat(dataset.value) : 290,
      currency: 'EUR',
      source: dataset.trackingSource || 'direct',
      campaign: dataset.trackingCampaign || '',
      medium: dataset.trackingMedium || 'website',
      content: dataset.trackingContent || '',
      // Données custom du tracking object
      action: dataset.action || '',
      intent: dataset.intent || '',
    };
  }

  // Attend que le DOM soit prêt
  function initTracking() {
    // 1. TRACKING DES CLICS SUR BOUTONS SUBMIT
    document.addEventListener('click', function(event) {
      const button = event.target.closest('button[type="submit"][data-form-id]');
      if (!button) return;

      const trackingData = getTrackingDataFromButton(button);
      
      pushDL('form_button_click', {
        ...trackingData,
        event_category: 'form_interaction',
        event_action: 'submit_click',
        button_type: 'submit',
        user_action: 'click_intent'
      });
    });

    // 2. TRACKING DES SUCCÈS DE FORMULAIRE
    document.addEventListener('formSuccess', function(event) {
      const detail = event.detail || {};
      const formId = detail.formId;
      
      // Trouve le bouton correspondant pour récupérer les data-*
      const button = document.querySelector('button[data-form-id="' + formId + '"]');
      if (!button) {
        console.warn('Button not found for form:', formId);
        return;
      }

      const trackingData = getTrackingDataFromButton(button);
      
      // EVENT PRINCIPAL POUR GOOGLE ADS
      pushDL('lead_generated', {
        ...trackingData,
        event_category: 'conversion',
        event_action: 'form_submit_success',
        status: 'success',
        lead_type: trackingData.form_type,
        lead_source: trackingData.source
      });

      // Event secondaire pour GA4 (si différent)
      pushDL('form_submit_success', {
        ...trackingData,
        status: 'success'
      });
    });

    // 3. TRACKING DES ERREURS DE FORMULAIRE
    document.addEventListener('formError', function(event) {
      const detail = event.detail || {};
      const formId = detail.formId;
      const error = detail.error;
      const errorType = detail.errorType;
      
      const button = document.querySelector('button[data-form-id="' + formId + '"]');
      if (!button) return;

      const trackingData = getTrackingDataFromButton(button);
      
      pushDL('form_submit_error', {
        ...trackingData,
        event_category: 'form_interaction',
        event_action: 'form_error',
        status: 'error',
        error_type: errorType || 'unknown',
        error_message: (error && error.message) || 'Erreur inconnue'
      });
    });

    // 4. TRACKING DES VALIDATIONS DE FORMULAIRE (optionnel)
    document.addEventListener('formValidationError', function(event) {
      const detail = event.detail || {};
      const formId = detail.formId;
      const field = detail.field;
      const validationType = detail.validationType;
      
      const button = document.querySelector('button[data-form-id="' + formId + '"]');
      if (!button) return;

      const trackingData = getTrackingDataFromButton(button);
      
      pushDL('form_validation_error', {
        ...trackingData,
        event_category: 'form_interaction',
        event_action: 'validation_error',
        field_name: field,
        validation_type: validationType,
        status: 'validation_failed'
      });
    });

    console.log('✅ Stop-Punaises Form Tracking initialized');
  }

  // 5. HELPER FUNCTIONS GLOBALES
  window.StopPunaisesTracking = {
    // Pour déclencher manuellement un succès de formulaire
    triggerFormSuccess: function(formId, additionalData) {
      additionalData = additionalData || {};
      document.dispatchEvent(new CustomEvent('formSuccess', {
        detail: Object.assign({ formId: formId }, additionalData)
      }));
    },

    // Pour déclencher manuellement une erreur de formulaire  
    triggerFormError: function(formId, error, errorType) {
      errorType = errorType || 'fetch_error';
      document.dispatchEvent(new CustomEvent('formError', {
        detail: { 
          formId: formId, 
          error: error, 
          errorType: errorType 
        }
      }));
    },

    // Pour déclencher une erreur de validation
    triggerValidationError: function(formId, field, validationType) {
      document.dispatchEvent(new CustomEvent('formValidationError', {
        detail: { 
          formId: formId, 
          field: field, 
          validationType: validationType 
        }
      }));
    },

    // Push direct dans dataLayer (pour cas spéciaux)
    pushToDataLayer: pushDL,

    // Helper pour tester
    test: function() {
      console.log('🧪 Testing tracking...');
      pushDL('test_event', { source: 'manual_test' });
    }
  };

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTracking);
  } else {
    initTracking();
  }
})();