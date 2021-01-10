import { getOneCategory } from './api';
import card from '../templates/card.hbs';
import { onCloseModalSearch } from './openModalSearch';

const mainContainer = document.querySelector('.main-container');
const searchModalButton = document.querySelector('[data-search-modal-buuton]');
const textForBadStatus = document.querySelector('.tex-for-bad-status');
const inputSearchModal = document.querySelector('.input-modal-search');

searchModalButton.addEventListener('click', fetchCategory);
inputSearchModal.addEventListener('submit', fetchCategory);
inputSearchModal.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    console.log('enter');
    return fetchCategory();
  }
});

function renderProductCard(data) {
  mainContainer.insertAdjacentHTML('afterbegin', card(data));
}
function clearMainConteiner() {
  mainContainer.innerHTML = '';
}

function fetchCategory(event) {
  event.preventDefault();
  const query = inputSearchModal.value;
  if (
    query === 'Нерухомість' ||
    query === 'недвижимость' ||
    query === 'property'
  ) {
    // getOneCategory('property').then(({ data }) => {
    getOneCategory('property').then(data => {
      if (data.length > 0) {
        clearMainConteiner(),
          renderProductCard(data),
          onCloseModalSearch(),
          (inputSearchModal.value = ''),
          (textForBadStatus.textContent = ' ');
      }
    });
  } else if (
    query === 'Транспорт' ||
    query === 'транспорт' ||
    query === 'transport'
  ) {
    getOneCategory('transport').then(data => {
      if (data.length > 0) {
        clearMainConteiner(),
          renderProductCard(data),
          onCloseModalSearch(),
          (inputSearchModal.value = ''),
          (textForBadStatus.textContent = ' ');
      }
    });
  } else if (query === 'Робота' || query === 'работа' || query === 'work') {
    getOneCategory('work').then(data => {
      if (data.length > 0) {
        clearMainConteiner(),
          renderProductCard(data),
          onCloseModalSearch(),
          (inputSearchModal.value = ''),
          (textForBadStatus.textContent = ' ');
      }
    });
  } else if (
    query === 'Електроніка' ||
    query === 'электрика' ||
    query === 'electronics'
  ) {
    getOneCategory('electronics').then(data => {
      if (data.length > 0) {
        clearMainConteiner(),
          renderProductCard(data),
          onCloseModalSearch(),
          (inputSearchModal.value = ''),
          (textForBadStatus.textContent = ' ');
      }
    });
  } else if (
    query === 'Бізнес та послуги' ||
    query === 'бизнес и услуги' ||
    query === 'business and services'
  ) {
    getOneCategory('business and services').then(data => {
      if (data.length > 0) {
        clearMainConteiner(),
          renderProductCard(data),
          onCloseModalSearch(),
          (inputSearchModal.value = ''),
          (textForBadStatus.textContent = ' ');
      }
    });
  } else if (
    query === 'Відпочинок і спорт' ||
    query === 'отдых и спорт' ||
    query === 'recreation and sport'
  ) {
    getOneCategory('recreation and sport').then(data => {
      if (data.length > 0) {
        clearMainConteiner(),
          renderProductCard(data),
          onCloseModalSearch(),
          (inputSearchModal.value = ''),
          (textForBadStatus.textContent = ' ');
      }
    });
  } else if (
    query === 'Віддам безкоштовно' ||
    query === 'отдам даром' ||
    query === 'free'
  ) {
    getOneCategory('free').then(data => {
      if (data.length > 0) {
        clearMainConteiner(),
          renderProductCard(data),
          onCloseModalSearch(),
          (inputSearchModal.value = ''),
          (textForBadStatus.textContent = ' ');
      }
    });
  } else if (query === 'Обмін' || query === 'обмен' || query === 'trade') {
    getOneCategory('trade').then(data => {
      if (data.length > 0) {
        clearMainConteiner(),
          renderProductCard(data),
          onCloseModalSearch(),
          (inputSearchModal.value = ''),
          (textForBadStatus.textContent = ' ');
      }
    });
  }
  textForBadStatus.textContent = 'status 404';
}
