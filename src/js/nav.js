import { getOneCategory } from './api';
import card from '../templates/card.hbs';
import { onCloseMobileMenu } from './menu';
import { navigation, backdrop } from './menu';

const mainContainer = document.querySelector('.main-container');
const property = document.querySelectorAll('[data-property]');
const transport = document.querySelectorAll('[data-transport]');
const work = document.querySelectorAll('[data-work]');
const electronics = document.querySelectorAll('[data-electronics]');
const business = document.querySelectorAll('[data-business-and-services]');
const sport = document.querySelectorAll('[data-recreation-and-sport]');
const free = document.querySelectorAll('[data-free]');
const trade = document.querySelectorAll('[data-trade]');
const clean = document.querySelector('[data-clean]');

property.forEach(el => el.addEventListener('click', getProperty));
transport.forEach(el => el.addEventListener('click', getTransport));
work.forEach(el => el.addEventListener('click', getWork));
electronics.forEach(el => el.addEventListener('click', getElectronics));
business.forEach(el => el.addEventListener('click', getBusiness));
sport.forEach(el => el.addEventListener('click', getSport));
free.forEach(el => el.addEventListener('click', getFree));
trade.forEach(el => el.addEventListener('click', getTrade));
clean.addEventListener('click', cleanContainer);

function getProperty() {
  onCloseMenu();
  getOneCategory('property').then(data => render(data));
}
function getTransport() {
  onCloseMenu();
  getOneCategory('transport').then(data => render(data));
}
function getWork() {
  onCloseMenu();
  getOneCategory('work').then(data => render(data));
}
function getElectronics() {
  onCloseMenu();
  getOneCategory('electronics').then(data => render(data));
}
function getBusiness() {
  onCloseMenu();
  getOneCategory('business and services').then(data => render(data));
}
function getSport() {
  onCloseMenu();
  getOneCategory('recreation and sport').then(data => render(data));
}
function getFree() {
  onCloseMenu();
  getOneCategory('free').then(data => render(data));
}
function getTrade() {
  onCloseMenu();
  getOneCategory('trade').then(data => render(data));
}

function cleanContainer() {
  mainContainer.innerHTML = '';
}

function onCloseMenu() {
  if (window.innerWidth < 1280) {
    onCloseMobileMenu();
  }
}

// transport.addEventListener(
//   'click',
//   getOneCategory('transport').then(data => render(data)),
// );

// property.addEventListener('click', logValue);

// function logValue(event) {
//   console.log(123);
//   const value = event.target.textContent;
//   console.log(value);
//   onCloseMobileMenu();
//   if (value === 'Нерухомість') {
//     mainContainer.innerHTML = '';
//     getOneCategory('property').then(data => renderProductCard(data));
//   }
// }

function render(data) {
  mainContainer.innerHTML = '';
  mainContainer.insertAdjacentHTML('afterbegin', card(data));
}
