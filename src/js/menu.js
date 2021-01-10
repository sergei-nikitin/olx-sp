const openMenuBtn = document.querySelector('[data-menu-button]');
const closeMenuBtn = document.querySelector('[data-close-menu-button]');
export const navigation = document.querySelector('.navigation');
export const backdrop = document.querySelector('[data-backdrop]');

openMenuBtn.addEventListener('click', onOpenMobileMenu);
closeMenuBtn.addEventListener('click', onCloseMobileMenu);
backdrop.addEventListener('click', onBackdropClick);

function onOpenMobileMenu(event) {
  window.addEventListener('keydown', onEscKeyPress);
  navigation.classList.toggle('is-open');
  backdrop.classList.toggle('is-hiden');
}

export function onCloseMobileMenu(event) {
  window.removeEventListener('keydown', onEscKeyPress);
  navigation.classList.toggle('is-open');
  backdrop.classList.toggle('is-hiden');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseMobileMenu();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseMobileMenu();
  }
}
