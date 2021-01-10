const openModalAdd = document.querySelectorAll('[data-open-modal-add]');
const closeBtnAdd = document.querySelector('.close-modal-add-btn');
const backdropAdd = document.querySelector('.backdrop-add');
const modalAdd = document.querySelector('.modal-add');

openModalAdd.forEach(el => el.addEventListener('click', onOpenModalAdd));
closeBtnAdd.addEventListener('click', onCloseModalAdd);
backdropAdd.addEventListener('click', onBackdropClick);

function onOpenModalAdd() {
  window.addEventListener('keydown', onEscKeyPress);
  backdropAdd.classList.toggle('is-hiden');
  modalAdd.classList.toogle('is-open');
}

function onCloseModalAdd() {
  window.removeEventListener('keydown', onEscKeyPress);
  backdropAdd.classList.toggle('is-hiden');
  modalAdd.classList.toogle('is-open');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalAdd();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModalAdd();
  }
}
