const fullStuckBatton = document.querySelector('.info__full-stack-button');
const popup = document.querySelector('.popup');
const list = document.querySelector('.elements');
const body = document.querySelector('.body');
const listContainer = document.querySelector('.list-items');
const portfolioButton = document.querySelector('.info__button-portfolio');
const popupPortfolio = document.querySelector('.popup-portfolio');
const popupPortfolioContainer = document.querySelector('.element-container');

fullStuckBatton.addEventListener('click', () => {
    popup.classList.add('popup_open');
})

listContainer.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
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






