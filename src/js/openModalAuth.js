const openModalAuth = document.querySelectorAll('[data-open-modal-auth]');
const closeBtn = document.querySelector('.close-modal-auth-btn');
const backdrop = document.querySelector('.auth-backdrop');
const modalAuth = document.querySelector('.modal-auth');

openModalAuth.forEach(element =>
  element.addEventListener('click', onOpenModalAuth),
);
// searchButtons.forEach(btn => btn.addEventListener('click', onOpenModalSearch));
closeBtn.addEventListener('click', onCloseModalAuth);
backdrop.addEventListener('click', onBackdropClick);

function onOpenModalAuth() {
  window.addEventListener('keydown', onEscKeyPress);
  backdrop.classList.toggle('is-hiden');
  modalAuth.classList.toogle('is-open');
}

function onCloseModalAuth() {
  window.removeEventListener('keydown', onEscKeyPress);
  backdrop.classList.toggle('is-hiden');
  modalAuth.classList.toogle('is-open');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalAuth();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModalAuth();
  }
}
