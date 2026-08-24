import React, { useState } from 'react';
import { TEXTILES_SLOTS, TEXTILE_SERVICES, type TextileSlot, type ServiceType } from '../config/textilesSlots';

interface FormData {
  slotType: 'scheduled' | 'urgent';
  selectedSlot?: string;
  serviceType: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientAddress: string;
  problemDescription: string;
  hasPhotos: boolean;
  photoUrls: string[];
  taxCredit: boolean;
  acceptTerms: boolean;
}

interface PhotoUploadState {
  uploading: boolean;
  uploaded: string[];
  errors: string[];
}

interface BookingTextilesProps {
  cityName?: string; // ex: "Chelles", "Noisy-le-Grand", etc.
}

const BookingTextiles: React.FC<BookingTextilesProps> = ({ cityName }) => {
  // Constantes de configuration
  const MAX_PHOTOS = 8;
  const MAX_SIZE_MB = 8;

  const [formData, setFormData] = useState<FormData>({
    slotType: 'scheduled',
    selectedSlot: '',
    serviceType: '',
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    clientAddress: '',
    problemDescription: '',
    hasPhotos: false,
    photoUrls: [],
    taxCredit: false,
    acceptTerms: false
  });

  const [photoState, setPhotoState] = useState<PhotoUploadState>({
    uploading: false,
    uploaded: [],
    errors: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Upload photos via l'API Cloudinary existante
  const uploadToCloudinary = async (file: File): Promise<string> => {
    try {
      // 1. Récupérer la signature via votre API
      const signatureResponse = await fetch('/api/cloudinary-signature', {
        method: 'POST',
      });

      if (!signatureResponse.ok) {
        throw new Error('Erreur génération signature Cloudinary');
      }

      const signatureData = await signatureResponse.json();
      
      if (!signatureData.ok) {
        throw new Error(signatureData.error || 'Signature Cloudinary échouée');
      }

      // 2. Préparer le FormData avec la signature (renommé pour éviter collision)
      const fd = new FormData();
      fd.append('file', file);
      fd.append('api_key', signatureData.apiKey);
      fd.append('timestamp', signatureData.timestamp);
      fd.append('signature', signatureData.signature);
      fd.append('folder', signatureData.folder);
      fd.append('upload_preset', signatureData.uploadPreset);

      // 3. Upload vers Cloudinary
      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/image/upload`,
        {
          method: 'POST',
          body: fd,
        }
      );

      if (!uploadResponse.ok) {
        throw new Error(`Upload Cloudinary échoué: ${uploadResponse.status}`);
      }

      const uploadData = await uploadResponse.json();

      // 4. Optionnel: Notifier l'upload via votre API existante
      try {
        await fetch('/api/notify-upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            file: {
              name: file.name,
              size: file.size,
              type: file.type,
            },
            cloudinary: uploadData,
            form: {
              name: formData.clientName,   // ✅ Accès au state React
              email: formData.clientEmail, // ✅ Accès au state React
            },
          }),
        });
      } catch (notifyError) {
        console.warn('Notification upload échouée:', notifyError);
        // Continue même si la notification échoue
      }

      return uploadData.secure_url;
    } catch (error) {
      console.error('Erreur upload Cloudinary:', error);
      throw new Error(
        error instanceof Error 
          ? error.message 
          : 'Échec de l\'upload. Veuillez réessayer.'
      );
    }
  };

  const handlePhotoUpload = async (files: FileList) => {
    // Vérifier la limite totale
    if (photoState.uploaded.length + files.length > MAX_PHOTOS) {
      setPhotoState(prev => ({
        ...prev,
        errors: [`Maximum ${MAX_PHOTOS} photos autorisées`]
      }));
      return;
    }

    setPhotoState(prev => ({ ...prev, uploading: true, errors: [] }));

    try {
      // Phase 1 : Pré-validation de tous les fichiers
      const validationErrors: string[] = [];
      const validFiles: File[] = [];

      Array.from(files).forEach((file) => {
        // Validation taille
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
          validationErrors.push(`${file.name} dépasse ${MAX_SIZE_MB} MB`);
          return;
        }

        // Validation type
        if (!file.type.startsWith('image/')) {
          validationErrors.push(`${file.name} n'est pas une image`);
          return;
        }

        validFiles.push(file);
      });

      // Si il y a des erreurs de validation, on s'arrête ici
      if (validationErrors.length > 0) {
        setPhotoState(prev => ({
          ...prev,
          uploading: false,
          errors: validationErrors
        }));
        return;
      }

      // Phase 2 : Upload des fichiers valides seulement
      const uploadPromises = validFiles.map(file => uploadToCloudinary(file));
      const uploadedUrls = await Promise.all(uploadPromises);
      
      setPhotoState(prev => ({
        ...prev,
        uploaded: [...prev.uploaded, ...uploadedUrls],
        uploading: false,
        errors: []
      }));

      updateFormData('photoUrls', [...formData.photoUrls, ...uploadedUrls]);
      updateFormData('hasPhotos', true);

    } catch (error) {
      setPhotoState(prev => ({
        ...prev,
        uploading: false,
        errors: [error instanceof Error ? error.message : 'Erreur upload']
      }));
    }
  };

  const removePhoto = (indexToRemove: number) => {
    const newUrls = formData.photoUrls.filter((_, index) => index !== indexToRemove);
    updateFormData('photoUrls', newUrls);
    updateFormData('hasPhotos', newUrls.length > 0);
    
    setPhotoState(prev => ({
      ...prev,
      uploaded: prev.uploaded.filter((_, index) => index !== indexToRemove)
    }));
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Préparer les données pour l'API /api/contact existante
      const submitFormData = new FormData();
      
      // Honeypot
      submitFormData.append('website', '');
      
      // Champs de base
      submitFormData.append('prenom', formData.clientName);
      submitFormData.append('email', formData.clientEmail);
      submitFormData.append('telephone', formData.clientPhone);
      submitFormData.append('adresse', formData.clientAddress);
      
      // Tracking
      submitFormData.append('source', 'textiles-reservation');
      submitFormData.append('service', 'Nettoyage textiles - Réservation');
      submitFormData.append('rgpd', 'accepte');
      
      // Type de service et créneau dans le message
      let message = `=== RÉSERVATION TEXTILES ===\n\n`;
      
      // Ajouter la ville si fournie
      if (cityName) {
        message += `Page locale : ${cityName}\n\n`;
      }
      
      if (formData.slotType === 'urgent') {
        message += `🚨 INTERVENTION URGENTE demandée\n\n`;
      } else if (formData.selectedSlot) {
        const slot = TEXTILES_SLOTS.find(s => s.id === formData.selectedSlot);
        if (slot) {
          message += `Créneau demandé : ${slot.dateLabel} à ${slot.timeLabel}\n\n`;
        }
      }
      
      message += `Type de nettoyage : ${TEXTILE_SERVICES.find(s => s.id === formData.serviceType)?.label || formData.serviceType}\n\n`;
      
      if (formData.problemDescription) {
        message += `Description du problème :\n${formData.problemDescription}\n\n`;
      }
      
      if (formData.taxCredit) {
        message += `💰 CRÉDIT D'IMPÔT 50% : Le client souhaite bénéficier du crédit d'impôt\n\n`;
      }
      
      if (formData.photoUrls.length > 0) {
        message += `Photos fournies (${formData.photoUrls.length}) :\n${formData.photoUrls.map((url, i) => `${i+1}. ${url}`).join('\n')}\n\n`;
      }
      
      message += `Adresse d'intervention :\n${formData.clientAddress}`;
      
      submitFormData.append('message', message);
      
      // Ajouter la ville comme champ séparé pour le tracking
      if (cityName) {
        submitFormData.append('page_locale', cityName);
      }
      
      // Ajouter les URLs des photos comme dans le formulaire existant
      formData.photoUrls.forEach(url => {
        submitFormData.append('photos[]', url);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitFormData,
        headers: { 'Accept': 'application/json' }
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.ok === true) {
        const tracking = (window as any).KlinovaTracking;

        tracking?.triggerFormSuccess?.('booking-textiles-form', {
          service: 'nettoyage-textiles',
          service_name: 'Nettoyage textiles - Réservation',
          city_name: cityName || ''
        });
        setSubmitStatus('success');
        // Reset form
        setFormData({
          slotType: 'scheduled',
          selectedSlot: '',
          serviceType: '',
          clientName: '',
          clientEmail: '',
          clientPhone: '',
          clientAddress: '',
          problemDescription: '',
          hasPhotos: false,
          photoUrls: [],
          taxCredit: false,
          acceptTerms: false
        });
        setPhotoState({ uploading: false, uploaded: [], errors: [] });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Erreur API:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Grouper TOUS les créneaux par date (disponibles ET fermés)
  const allSlotsByDate = TEXTILES_SLOTS.reduce((acc, slot) => {
    const date = slot.dateLabel;
    if (!acc[date]) acc[date] = [];
    acc[date].push(slot);
    return acc;
  }, {} as Record<string, TextileSlot[]>);

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-[#3F8D65] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#1E2939] mb-4">Demande envoyée !</h3>
        <p className="text-[#475569] mb-6">
          Nous avons bien reçu votre demande de réservation. Vous recevrez une confirmation par email sous 24h ouvrées avec les détails de votre intervention.
        </p>
        <p className="text-sm text-[#475569]">
          <strong>Contact direct :</strong> 📞 06 76 73 86 61
        </p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="mt-6 text-[#3F8D65] hover:text-[#387B58] font-medium"
        >
          ← Nouvelle réservation
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
    <div className="bg-[#DFF1E8] p-6 border-b text-center">
  <h3 className="text-2xl font-bold text-[#1E2939] mb-3">
    Réserver votre intervention
  </h3>
  <p className="text-[#475569] max-w-xl mx-auto">
    Choisissez un créneau disponible ou optez pour une intervention urgente selon disponibilité
  </p>
</div>



      <form
        id="booking-textiles-form"
        onSubmit={handleSubmit}
        className="p-6 space-y-8"
      >
        {/* Type d'intervention */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#1E2939]">Type d'intervention</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <label className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
              formData.slotType === 'scheduled' 
                ? 'border-[#3F8D65] bg-[#3F8D65]/5' 
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="radio"
                name="slotType"
                value="scheduled"
                checked={formData.slotType === 'scheduled'}
                onChange={(e) => updateFormData('slotType', e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                  formData.slotType === 'scheduled' ? 'border-[#3F8D65]' : 'border-gray-300'
                }`}>
                  {formData.slotType === 'scheduled' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3F8D65]"></div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-[#1E2939]">Créneau programmé</div>
                  <div className="text-sm text-[#475569]">Samedi selon planning</div>
                </div>
              </div>
            </label>

            <label className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
              formData.slotType === 'urgent' 
                ? 'border-[#3F8D65] bg-[#3F8D65]/5' 
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <input
                type="radio"
                name="slotType"
                value="urgent"
                checked={formData.slotType === 'urgent'}
                onChange={(e) => updateFormData('slotType', e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                  formData.slotType === 'urgent' ? 'border-[#3F8D65]' : 'border-gray-300'
                }`}>
                  {formData.slotType === 'urgent' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3F8D65]"></div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-[#1E2939]">Intervention urgente</div>
                  <div className="text-sm text-[#475569]">Selon disponibilité</div>
                </div>
              </div>
            </label>
          </div>

          {/* Bloc spécial pour intervention urgente en vert Klinova */}
          {formData.slotType === 'urgent' && (
            <div className="bg-[#DFF1E8] border border-[#3F8D65]/40 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#3F8D65] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h5 className="font-medium text-[#1E2939]">Pour une intervention urgente</h5>
                  <p className="text-[#475569] text-sm mt-1">
                    Contactez-nous directement pour vérifier nos disponibilités immédiates
                  </p>
                  <a 
                    href="tel:0676738661" 
                    className="inline-flex items-center mt-3 bg-[#3F8D65] text-white px-4 py-2 rounded-lg hover:bg-[#387B58] active:bg-[#2F6B47] transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Appeler maintenant : 06 76 73 86 61
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Type de service */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#1E2939]">Type de nettoyage</h4>
          <div className="grid md:grid-cols-2 gap-4">
            {TEXTILE_SERVICES.map((service) => (
              <label key={service.id} className={`p-4 rounded-lg border cursor-pointer transition-all ${
                formData.serviceType === service.id
                  ? 'border-[#3F8D65] bg-[#3F8D65]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}>
                <input
                  type="radio"
                  name="serviceType"
                  value={service.id}
                  checked={formData.serviceType === service.id}
                  onChange={(e) => updateFormData('serviceType', e.target.value)}
                  className="sr-only"
                  required
                />
                <div className="flex items-start">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 mt-0.5 ${
                    formData.serviceType === service.id ? 'border-[#3F8D65]' : 'border-gray-300'
                  }`}>
                    {formData.serviceType === service.id && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3F8D65]"></div>
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-[#1E2939]">{service.label}</div>
                    <div className="text-sm text-[#475569]">{service.description}</div>
                    <div className="text-xs text-[#475569] mt-1">Durée : {service.estimatedDuration}</div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Sélection créneaux si programmé */}
        {formData.slotType === 'scheduled' && (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#1E2939]">Créneaux disponibles</h4>
            
            <div className="space-y-6">
              {Object.entries(allSlotsByDate).map(([date, slots]) => (
                <div key={date} className="space-y-3">
                  <h5 className="font-medium text-[#1E2939] text-base">{date}</h5>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {slots.map((slot) => (
                      <label 
                        key={slot.id} 
                        className={`relative p-3 rounded-lg border transition-all ${
                          !slot.open 
                            ? 'border-gray-200 bg-gray-100 cursor-not-allowed opacity-60' 
                            : formData.selectedSlot === slot.id
                              ? 'border-[#3F8D65] bg-[#3F8D65]/5 cursor-pointer'
                              : 'border-gray-200 hover:border-gray-300 cursor-pointer'
                        }`}
                      >
                        <input
                          type="radio"
                          name="selectedSlot"
                          value={slot.id}
                          checked={formData.selectedSlot === slot.id}
                          onChange={(e) => updateFormData('selectedSlot', e.target.value)}
                          disabled={!slot.open}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <div className={`font-medium ${!slot.open ? 'text-gray-400' : 'text-[#1E2939]'}`}>
                            {slot.timeLabel}
                          </div>
                          <div className={`text-xs ${!slot.open ? 'text-gray-400' : 'text-[#475569]'}`}>
                            {!slot.open ? 'Complet' : slot.duration}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Informations client */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#1E2939]">Vos informations</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1E2939] mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => updateFormData('clientName', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#3F8D65] focus:ring-2 focus:ring-[#3F8D65]/20 outline-none transition-all"
                placeholder="Votre nom et prénom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1E2939] mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                value={formData.clientPhone}
                onChange={(e) => updateFormData('clientPhone', e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#3F8D65] focus:ring-2 focus:ring-[#3F8D65]/20 outline-none transition-all"
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-[#1E2939] mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.clientEmail}
              onChange={(e) => updateFormData('clientEmail', e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#3F8D65] focus:ring-2 focus:ring-[#3F8D65]/20 outline-none transition-all"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1E2939] mb-2">
              Adresse d'intervention *
            </label>
            <textarea
              value={formData.clientAddress}
              onChange={(e) => updateFormData('clientAddress', e.target.value)}
              required
              rows={2}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#3F8D65] focus:ring-2 focus:ring-[#3F8D65]/20 outline-none transition-all resize-none"
              placeholder="Adresse complète avec code postal et ville"
            />
          </div>
        </div>

        {/* Description du problème */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#1E2939]">Description du problème</h4>
          <textarea
            value={formData.problemDescription}
            onChange={(e) => updateFormData('problemDescription', e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#3F8D65] focus:ring-2 focus:ring-[#3F8D65]/20 outline-none transition-all resize-none"
            placeholder="Décrivez les taches, odeurs, ou problèmes rencontrés (ex: urine de chat sur canapé, taches alimentaires, odeurs persistantes...)"
          />
        </div>

        {/* Upload photos */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#1E2939]">Photos (optionnel)</h4>
          
          {/* Zone de drop avec statut amélioré */}
          <div 
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
              photoState.uploaded.length >= MAX_PHOTOS
                ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                : 'border-gray-300 cursor-pointer hover:border-[#3F8D65] hover:bg-[#3F8D65]/5'
            }`}
            onClick={() => {
              if (photoState.uploaded.length < MAX_PHOTOS) {
                document.getElementById('photo-input')?.click();
              }
            }}
            onDrop={(e) => {
              e.preventDefault();
              if (photoState.uploaded.length < MAX_PHOTOS) {
                const files = e.dataTransfer.files;
                if (files.length > 0) handlePhotoUpload(files);
              }
            }}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              id="photo-input"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) handlePhotoUpload(e.target.files);
              }}
            />
            
            <svg className="w-8 h-8 text-[#3F8D65] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            
            {photoState.uploading ? (
              <>
                <p className="text-[#3F8D65] font-medium">Upload en cours...</p>
                <p className="text-xs text-[#64748B] mt-1">Veuillez patienter</p>
              </>
            ) : photoState.uploaded.length > 0 ? (
              <>
                <p className="text-[#475569] font-medium">
                  {photoState.uploaded.length}/{MAX_PHOTOS} photos ajoutées
                </p>
                <p className="text-xs text-[#64748B] mt-1">
                  Cliquez pour ajouter {photoState.uploaded.length < MAX_PHOTOS ? 'plus de photos' : '(limite atteinte)'}
                </p>
              </>
            ) : (
              <>
                <p className="text-[#475569] font-medium">Cliquez pour ajouter des photos</p>
                <p className="text-xs text-[#64748B] mt-1">Ou glissez-déposez • Max {MAX_PHOTOS} photos • {MAX_SIZE_MB} MB chacune</p>
              </>
            )}
          </div>

          {/* Erreurs d'upload en style vert doux */}
          {photoState.errors.length > 0 && (
            <div className="bg-[#DFF1E8] border border-[#3F8D65]/40 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#3F8D65] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h5 className="font-medium text-[#1E2939] mb-1">Vérifiez vos fichiers</h5>
                  <div className="space-y-1">
                    {photoState.errors.map((error, index) => (
                      <p key={index} className="text-[#1E2939] text-sm flex items-start">
                        <span className="mr-2">•</span>
                        <span>{error}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Photos uploadées avec grille adaptée pour 8 photos */}
          {photoState.uploaded.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
              {photoState.uploaded.map((url, index) => (
                <div key={index} className="relative group">
                  <img 
                    src={url} 
                    alt={`Photo ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg border border-[#E5E7EB]"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 bg-[#3F8D65] text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#387B58]"
                    aria-label={`Supprimer la photo ${index + 1}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="absolute bottom-1 left-1 bg-[#1E2939]/70 text-white text-xs px-2 py-1 rounded">
                    {index + 1}/{MAX_PHOTOS}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Crédit d'impôt */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-[#1E2939]">Crédit d'impôt</h4>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.taxCredit}
                onChange={(e) => updateFormData('taxCredit', e.target.checked)}
                className="w-5 h-5 text-[#3F8D65] border-gray-300 rounded focus:ring-[#3F8D65] focus:ring-2 mt-1"
              />
              <div>
                <div className="font-medium text-[#1E2939] mb-2">
                  ✅ Je souhaite bénéficier du crédit d'impôt de 50%
                </div>
                <div className="text-sm text-[#475569]">
                  En tant que service à la personne, le nettoyage de textiles à domicile ouvre droit à un crédit d'impôt de 50% du montant payé.
                </div>
                <div className="text-sm font-medium text-[#3F8D65] mt-2">
                  ✅ Si vous cochez cette case, vous recevrez un devis détaillé par email avec les modalités du crédit d'impôt.
                </div>
              </div>
            </label>
          </div>

          {formData.taxCredit && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h5 className="font-medium text-green-800">Crédit d'impôt activé</h5>
                  <p className="text-green-700 text-sm mt-1">
                    Vous recevrez un devis par email avec les détails du crédit d'impôt et les justificatifs nécessaires pour votre déclaration fiscale.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Conditions */}
        <div className="space-y-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) => updateFormData('acceptTerms', e.target.checked)}
              required
              className="w-5 h-5 text-[#3F8D65] border-gray-300 rounded focus:ring-[#3F8D65] focus:ring-2 mt-0.5"
            />
            <span className="text-sm text-[#475569]">
              J'accepte d'être contacté par Klinova pour la confirmation de mon rendez-vous et je reconnais avoir lu la{' '}
              <a href="/politique-de-confidentialite" className="text-[#3F8D65] hover:underline">
                politique de confidentialité
              </a>
            </span>
          </label>
        </div>

        {/* Bouton submit */}
        <div className="pt-6 border-t">
          <button
            data-form-id="booking-textiles-form"
            data-form-name="Booking Textiles Form"
            data-form-type="reservation"
            data-form-location="booking-textiles"
            data-service="nettoyage-textiles"
            data-service-name="Nettoyage textiles - Réservation"
            data-source="textiles-reservation"
            type="submit"
            disabled={isSubmitting || (formData.slotType === 'scheduled' && !formData.selectedSlot) || photoState.uploading}
            className="w-full bg-[#3F8D65] text-white font-medium py-4 px-6 rounded-lg hover:bg-[#387B58] active:bg-[#2F6B47] disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {isSubmitting || photoState.uploading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{photoState.uploading ? 'Upload photos...' : 'Envoi en cours...'}</span>
              </>
            ) : (
              <span>Envoyer ma demande de réservation</span>
            )}
          </button>
          
          <p className="text-center text-sm text-[#475569] mt-3">
            Vous recevrez une confirmation par email sous 24h ouvrées
          </p>
        </div>

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex">
              <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-red-800">Erreur lors de l'envoi</h4>
                <p className="text-sm text-red-600 mt-1">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement au 06 76 73 86 61.
                </p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingTextiles;