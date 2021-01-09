const logoutBtn = document.querySelectorAll('[data-logout-btn]');
const closeBtnLogoutModal = document.querySelector('.btn-close-logout');
const modalLogout = document.querySelector('.div-logout');
const backdropLogout = document.querySelector('.backdrop-logout');
const cancelingBtn = document.querySelector('.canceling');

logoutBtn.forEach(btn => btn.addEventListener('click', onOpenModalLogout));
closeBtnLogoutModal.addEventListener('click', onCloseModalLogout);
cancelingBtn.addEventListener('click', onCloseModalLogout);
backdropLogout.addEventListener('click', onBackdropClick);

function onOpenModalLogout() {
  window.addEventListener('keydown', onEscKeyPress);
  modalLogout.classList.toggle('is-open');
  backdropLogout.classList.toggle('is-hiden');
}

function onCloseModalLogout() {
  window.removeEventListener('keydown', onEscKeyPress);
  modalLogout.classList.toggle('is-open');
  backdropLogout.classList.toggle('is-hiden');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalLogout();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModalLogout();
  }
}
