(() => {
  const form = document.querySelector('form[data-enhance]');
  if (!form) return;

  const alertBox = form.querySelector('#form-alert');
  const submitBtn = form.querySelector('button[type="submit"]');
  const defaultBtnText = submitBtn ? submitBtn.textContent : '';

  function showAlert(msg, ok = false) {
    if (!alertBox) return;
    alertBox.textContent = msg;
    alertBox.classList.remove('hidden');
    alertBox.classList.toggle('border-red-300', !ok);
    alertBox.classList.toggle('text-red-700', !ok);
    alertBox.classList.toggle('border-green-300', ok);
    alertBox.classList.toggle('text-green-700', ok);
    alertBox.classList.add('bg-white');
  }

  form.addEventListener('submit', async (e) => {
    // Utiliser fetch uniquement si tout va bien côté client
    e.preventDefault();

    const data = new FormData(form);
    // petite protection anti-bot: ignorer si honeypot rempli
    if ((data.get('website') || '').toString().trim()) {
      return; // no-op
    }

    try {
      submitBtn && (submitBtn.disabled = true, submitBtn.textContent = 'Envoi…');

      const res = await fetch(form.action || '/api/contact', {
        method: form.method || 'POST',
        headers: { 'Accept': 'application/json', 'X-Requested-With': 'fetch' },
        body: data
      });

      if (res.ok) {
        showAlert('Merci, votre message a bien été envoyé.', true);
        form.reset();
      } else {
        const payload = await res.json().catch(() => ({}));
        const firstError = payload?.errors && Object.values(payload.errors)[0]?.[0];
        showAlert(firstError || 'Une erreur est survenue. Vérifiez les champs et réessayez.');
      }
    } catch {
      showAlert('Impossible de contacter le serveur. Réessayez dans un instant.');
    } finally {
      submitBtn && (submitBtn.disabled = false, submitBtn.textContent = defaultBtnText);
    }
  }, { passive: false });
})();
