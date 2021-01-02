const menuBtn = document.querySelector('[data-menu-button]');
const closeMenuBtn = document.querySelector('[data-close-menu-button]');
const navigation = document.querySelector('.navigation');
// const backdropMenu = document.querySelector('.backdrop-menu');

menuBtn.addEventListener('click', onOpenMobileMenu);
closeMenuBtn.addEventListener('click', onCloseMobileMenu);
// backdropMenu.addEventListener('click', onBackdropClick);

function onOpenMobileMenu(event) {
  // window.addEventListener('keydown', onEscKeyPress);
  navigation.classList.toggle('is-open');
  // backdropMenu.classList.toggle("is-hiden");
}

function onCloseMobileMenu(event) {
  // window.removeEventListener('keydown', onEscKeyPress);
  navigation.classList.toggle('is-open');
  // backdropMenu.classList.toggle("is-hiden");
}

// function onBackdropClick(event) {
//     if (event.currentTarget === event.target) {
//         onCloseMobileMenu();
//     }
// }

// function onEscKeyPress(event) {
//     const ESC_KEY_CODE = 'Escape';
//     const isEscKey = event.code === ESC_KEY_CODE;

//     if (isEscKey) {
//         onCloseMobileMenu();
//     }
// }
