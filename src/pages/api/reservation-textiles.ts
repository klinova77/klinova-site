import type { APIRoute } from 'astro';
import { getSlotById, formatSlotLabel } from '../../config/textilesSlots';
// import { Resend } from 'resend'; // Uncomment when ready to use

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validation basique
    if (!data.clientName || !data.clientEmail || !data.clientPhone || !data.serviceType) {
      return new Response(JSON.stringify({ error: 'Champs requis manquants' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validation spécifique selon le type de réservation
    if (data.slotType === 'scheduled' && !data.selectedSlot) {
      return new Response(JSON.stringify({ error: 'Créneau requis pour une réservation programmée' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Construire le contenu de l'email
    let emailContent = `
=== NOUVELLE RÉSERVATION TEXTILES KLINOVA ===

TYPE D'INTERVENTION: ${data.slotType === 'urgent' ? 'INTERVENTION URGENTE' : 'CRÉNEAU PROGRAMMÉ'}
`;

    if (data.slotType === 'scheduled' && data.selectedSlot) {
      const slot = getSlotById(data.selectedSlot);
      if (slot) {
        emailContent += `
CRÉNEAU SÉLECTIONNÉ: ${formatSlotLabel(slot)}
DATE/HEURE: ${new Date(slot.datetime).toLocaleString('fr-FR')}
`;
      }
    } else if (data.slotType === 'urgent') {
      emailContent += `
DEMANDE URGENTE: Intervention selon disponibilité
⚠️ IMPORTANT: Contact téléphonique recommandé pour confirmation rapide
`;
    }

    emailContent += `
--- INFORMATIONS CLIENT ---
Nom: ${data.clientName}
Email: ${data.clientEmail}
Téléphone: ${data.clientPhone}
Adresse: ${data.clientAddress}

--- DÉTAILS SERVICE ---
Type de nettoyage: ${data.serviceType}
Description du problème: ${data.problemDescription || 'Non spécifié'}
Photos fournies: ${data.photoUrls && data.photoUrls.length > 0 ? `OUI (${data.photoUrls.length} photos)` : 'NON'}
Crédit d'impôt 50%: ${data.taxCredit ? '✅ OUI - Client souhaite bénéficier du crédit d\'impôt' : 'NON'}
`;

    if (data.photoUrls && data.photoUrls.length > 0) {
      emailContent += `
--- PHOTOS ---`;
      data.photoUrls.forEach((url: string, index: number) => {
        emailContent += `
Photo ${index + 1}: ${url}`;
      });
    }

    emailContent += `

--- ACTIONS À FAIRE ---
1. Confirmer la disponibilité ${data.slotType === 'urgent' ? '(PRIORITÉ URGENCE)' : 'du créneau'}
2. Analyser les photos si fournies pour le devis
3. ${data.taxCredit ? 'Préparer un devis détaillé avec modalités crédit d\'impôt (50% du montant)' : 'Envoyer un devis personnalisé par email/SMS'}
4. Programmer l'intervention
${data.slotType === 'urgent' ? '5. APPELER LE CLIENT RAPIDEMENT (urgence)' : ''}
${data.taxCredit ? `\n⚠️ IMPORTANT: Inclure les justificatifs pour la déclaration fiscale (attestation service à la personne)` : ''}

Réservation reçue le: ${new Date().toLocaleString('fr-FR')}
    `;

    // En développement, on simule l'envoi d'email
    if (import.meta.env.DEV) {
      console.log('=== EMAIL DE RÉSERVATION (MODE DEV) ===');
      console.log(emailContent);
      console.log('=======================================');
    }

    // TODO: Intégrer avec Resend
    // Uncomment and configure when ready:
    /*
    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    
    // Email principal pour Klinova
    await resend.emails.send({
      from: 'reservations@klinova.fr',
      to: 'contact@klinova.fr',
      subject: `[KLINOVA] ${data.slotType === 'urgent' ? '🚨 URGENCE' : 'Nouvelle réservation'} textiles - ${data.clientName}`,
      text: emailContent,
    });

    // Email de confirmation client
    const clientEmailContent = `Bonjour ${data.clientName},

Nous avons bien reçu votre demande de réservation pour un nettoyage de textiles.

${data.slotType === 'scheduled' && data.selectedSlot ? 
  `Créneau demandé : ${formatSlotLabel(getSlotById(data.selectedSlot))}` : 
  'Type : Intervention urgente selon disponibilité'
}

${data.slotType === 'urgent' ? 
  '⚡ INTERVENTION URGENTE : Nous vous recontacterons dans les plus brefs délais pour organiser votre intervention.' :
  'Nous vous recontacterons sous 24h pour confirmer votre rendez-vous et vous transmettre un devis personnalisé.'
}

${data.photoUrls && data.photoUrls.length > 0 ? 
  `Nous avons bien reçu vos ${data.photoUrls.length} photo(s) qui nous aideront à établir un devis précis.\n\n` : ''
}${data.taxCredit ? 
  `💰 CRÉDIT D'IMPÔT : Comme demandé, votre devis inclura les modalités pour bénéficier du crédit d'impôt de 50% (service à la personne). Vous recevrez tous les justificatifs nécessaires pour votre déclaration fiscale.\n\n` : ''
}En cas d'urgence, n'hésitez pas à nous contacter directement au 06 76 73 86 61.

Cordialement,
L'équipe Klinova

---
KLINOVA
6 rue d'Armaillé, 75017 Paris
contact@klinova.fr
06 76 73 86 61`;

    await resend.emails.send({
      from: 'contact@klinova.fr',
      to: data.clientEmail,
      subject: `${data.slotType === 'urgent' ? 'Demande urgente reçue' : 'Confirmation de votre demande de réservation'} - Klinova`,
      text: clientEmailContent,
    });
    */

    // TODO: Optionnel - Enregistrer dans une base de données
    // Exemple avec Supabase:
    /*
    import { createClient } from '@supabase/supabase-js';
    
    const supabase = createClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.SUPABASE_ANON_KEY
    );
    
    const { error: dbError } = await supabase
      .from('textile_bookings')
      .insert([
        {
          slot_type: data.slotType,
          selected_slot: data.selectedSlot,
          service_type: data.serviceType,
          client_name: data.clientName,
          client_email: data.clientEmail,
          client_phone: data.clientPhone,
          client_address: data.clientAddress,
          problem_description: data.problemDescription,
          photo_urls: data.photoUrls || [],
          has_photos: data.photoUrls && data.photoUrls.length > 0,
          created_at: new Date().toISOString(),
          status: data.slotType === 'urgent' ? 'urgent' : 'pending'
        }
      ]);

    if (dbError) {
      console.error('Erreur base de données:', dbError);
      // Continue quand même car l'email principal est envoyé
    }
    */

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Réservation envoyée avec succès' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur API reservation-textiles:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Erreur interne du serveur' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};