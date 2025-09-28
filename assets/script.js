const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Copie IP (gère plusieurs boutons via data-copy)
function bindCopy(button, selector) {
  const target = document.querySelector(selector);
  if (!target) return;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(target.textContent.trim());
      button.textContent = 'Copié !';
      setTimeout(() => { button.textContent = 'Copier'; }, 1200);
    } catch {
      alert('Impossible de copier. Copiez manuellement.');
    }
  });
}

const copyPrimary = document.getElementById('copy-ip');
if (copyPrimary) bindCopy(copyPrimary, '#server-ip');

document.querySelectorAll('[data-copy]').forEach(btn => {
  bindCopy(btn, btn.getAttribute('data-copy'));
});
