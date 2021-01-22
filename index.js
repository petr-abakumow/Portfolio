const fullStuckBatton = document.querySelector('.info__full-stack-button');
const popup = document.querySelector('.popup');
const list = document.querySelector('.elements');
const body = document.querySelector('.body');
const listContainer = document.querySelector('.list-items');
const portfolioButton = document.querySelector('.info__button-portfolio');
const popupPortfolio = document.querySelector('.popup-portfolio');
const popupPortfolioContainer = document.querySelector('.element-container');
const templateItem = document.querySelector('#template-item').content;
const fotoMobail = document.querySelector('.foto');
const closePopupButton = document.querySelector('.popup__close');
const closePopupPortfolioButton = document.querySelector('.popup-portfolio__close');

const array = [
    'HTML5',
    'CSS3',
    'Java Script (ES6)',
    'вёрстка/файловая структура по методологии БЭМ',
    'создание адаптивных и кроссбраузерных web-страниц',
    'объектно-ориентированное программирование',
    'анимации',
    'вёрстка/настройка/валидация форм',
    'сборка проекта через WebPack',
    'работа в системе контроля версий GIT',
    'работа с графическими редакторами figma/фотошоп',
    'работа с серверами (отправка запросов, синхронизация, API)'
]

const interval = 100;

fullStuckBatton.addEventListener('click', () => {
    popup.classList.add('popup-opened');
    array.forEach((el, index) => {
        setTimeout(() => {
          const item = templateItem.cloneNode(true);
          item.querySelector('.elements__item').textContent = el;
          list.append(item);
        }, index * interval);
      });
})

listContainer.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        list.textContent = '';
        popup.classList.remove('popup-opened');
    }
})

portfolioButton.addEventListener('click', () => {
    popupPortfolio.classList.add('popup-opened');
    console.log(popupPortfolio)
})

popupPortfolio.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        popupPortfolio.classList.remove('popup-opened');
    }
})

popupPortfolioContainer.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        popupPortfolio.classList.remove('popup-opened');
    }
})

function foto() {
    if (window.screen.width <= 767) {
        fotoMobail.setAttribute('src', './image/foto-petr-mobail.png');
    }
}
foto()

closePopupButton.addEventListener('click', () => {
    popup.classList.remove('popup-opened');
    list.textContent = '';
})

closePopupPortfolioButton.addEventListener('click', () => {
    popupPortfolio.classList.remove('popup-opened');
})
