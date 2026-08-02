// ────────────────────────────────────────────────────────────────
// 📊 Klinova - Global Form Tracking (GA4 + Google Ads + Debug Dev)
// ────────────────────────────────────────────────────────────────
(function () {
  'use strict';

  // ────────────────────────────────────────────────────────────────
  // Helper sécurisé pour dataLayer
  // ────────────────────────────────────────────────────────────────
  function pushDL(eventName, params = {}) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });

      // Debug local uniquement
      if (location.hostname.includes('localhost') || location.hostname.includes('staging')) {
        console.log('📊 [KLINOVA] dataLayer push:', eventName, params);
      }
    } catch (error) {
      console.warn('⚠️ [KLINOVA] DataLayer push failed:', error);
    }
  }

  // ────────────────────────────────────────────────────────────────
  // Lecture des data-attributes sur le bouton de formulaire
  // ────────────────────────────────────────────────────────────────
  function getTrackingData(button) {
    const d = button.dataset;
    return {
      form_id: d.formId || '',
      form_name: d.formName || '',
      form_type: d.formType || 'devis',
      form_location: d.formLocation || d.trackingSource || window.location.pathname,
      conversion_value: d.value ? parseFloat(d.value) : 0,
      currency: 'EUR',
      source: d.trackingSource || 'website',
      campaign: d.trackingCampaign || '',
      medium: d.trackingMedium || 'site',
      content: d.trackingContent || '',
      action: d.action || '',
      intent: d.intent || '',
    };
  }

  // ────────────────────────────────────────────────────────────────
  // Initialisation principale (déclenchée au DOM ready)
  // ────────────────────────────────────────────────────────────────
  function initTracking() {
    // 1️⃣ Clics sur boutons de formulaire
    document.addEventListener('click', (e) => {
      const button = e.target.closest('button[type="submit"][data-form-id]');
      if (!button) return;

      const data = getTrackingData(button);
      pushDL('form_submit_click', {
        ...data,
        event_category: 'form_interaction',
        event_action: 'submit_click',
        event_label: data.form_name,
        status: 'intent',
      });
    });

    // 2️⃣ Succès réel du formulaire
    document.addEventListener('formSuccess', (e) => {
      const { formId, ...extra } = e.detail || {};

      const button = document.querySelector(
        `button[data-form-id="${formId}"]`
      );

      if (!button) return;

      const data = getTrackingData(button);

      pushDL('form_submit_success', {
        ...data,
        ...extra,
        event_category: 'conversion',
        event_action: 'form_success',
        status: 'success',
      });
    });

    // 3️⃣ Erreurs de soumission
    document.addEventListener('formError', (e) => {
      const { formId, error, errorType } = e.detail || {};
      const button = document.querySelector(`button[data-form-id="${formId}"]`);
      if (!button) return;
      const data = getTrackingData(button);

      pushDL('form_submit_error', {
        ...data,
        event_category: 'form_interaction',
        event_action: 'form_error',
        status: 'error',
        error_type: errorType || 'unknown',
        error_message: (error && error.message) || 'Erreur inconnue',
      });
    });

    // 4️⃣ Erreurs de validation (champ manquant, etc.)
    document.addEventListener('formValidationError', (e) => {
      const { formId, field, validationType } = e.detail || {};
      const button = document.querySelector(`button[data-form-id="${formId}"]`);
      if (!button) return;
      const data = getTrackingData(button);

      pushDL('form_validation_error', {
        ...data,
        event_category: 'form_interaction',
        event_action: 'validation_error',
        field_name: field,
        validation_type: validationType,
        status: 'validation_failed',
      });
    });

    console.log('✅ [KLINOVA] Form tracking ready');
  }

  // ────────────────────────────────────────────────────────────────
  // API globale (manuelle)
  // ────────────────────────────────────────────────────────────────
  window.KlinovaTracking = {
    triggerFormSuccess(formId, extra = {}) {
      document.dispatchEvent(new CustomEvent('formSuccess', { detail: { formId, ...extra } }));
    },
    triggerFormError(formId, error, errorType = 'fetch_error') {
      document.dispatchEvent(new CustomEvent('formError', { detail: { formId, error, errorType } }));
    },
    triggerValidationError(formId, field, validationType) {
      document.dispatchEvent(
        new CustomEvent('formValidationError', { detail: { formId, field, validationType } })
      );
    },
    push: pushDL,
    test() {
      console.log('🧪 [KLINOVA] test event');
      pushDL('test_event', { source: 'manual_test' });
    },
  };

  // ────────────────────────────────────────────────────────────────
  // Initialisation différée (n'impacte pas LCP)
  // ────────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', () => setTimeout(initTracking, 1500));
  } else {
    setTimeout(initTracking, 1500);
  }
})();
