export function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('modal-open');
}

export function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('modal-open');
}

export function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModal();
  }
}

export function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseMobileMenu();
  }
}
