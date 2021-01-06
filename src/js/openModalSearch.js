const refs = {
  closeModalBtn: document.querySelector('[data-modal-search-close]'),
  backdropModalSearch: document.querySelector('[data-search-backdrop]'),
  modalSearch: document.querySelector('.modal-search'),
};

const searchButtons = document.querySelectorAll('[data-buttonsSearch]');
searchButtons.forEach(btn => btn.addEventListener('click', onOpenModalSearch));
refs.closeModalBtn.addEventListener('click', onCloseModalSearch);
refs.backdropModalSearch.addEventListener('click', onBackdropClick);

function onOpenModalSearch() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.modalSearch.classList.toggle('is-open');
  refs.backdropModalSearch.classList.toggle('is-hiden');
}

function onCloseModalSearch() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdropModalSearch.classList.toggle('is-hiden');
  refs.modalSearch.classList.toggle('is-open');
}

function onBackdropClick(event) {
  console.log('click');
  if (event.currentTarget === event.target) {
    onCloseModalSearch();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModalSearch();
  }
}
