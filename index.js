const fullStuckBatton = document.querySelector('.info__full-stack-button');
const popup = document.querySelector('.popup');
const list = document.querySelector('.elements');
const body = document.querySelector('.body');
const listContainer = document.querySelector('.list-items');
const portfolioButton = document.querySelector('.info__button-portfolio');
const popupPortfolio = document.querySelector('.popup-portfolio');
const popupPortfolioContainer = document.querySelector('.element-container');
const templateItem = document.querySelector('#template-item').content;
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
    'подключение любых сторонних библиотек (jQuery и другие)',
    'работа с серверами (отправка запросов, синхронизация, API)'
]

const interval = 100;

fullStuckBatton.addEventListener('click', () => {
    popup.classList.add('popup_open');
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
        popup.classList.remove('popup_open');
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


