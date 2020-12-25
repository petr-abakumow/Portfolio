
const initialCards = [
    {
        name: 'Здесь будет название первой работы в портфолио',
        link: './image/gidraFoto.jpg'
    },
    {
        name: 'Здесь будет название второй работы в портфолио',
        link: 'https://cdn.pixabay.com/photo/2016/02/05/15/12/two-1181082_1280.png'
    },
    {
        name: '3',
        link: 'https://free-images.com/or/2778/pay_gold_three_number.jpg'
    },
    {
        name: '4',
        link: 'https://printfiles.ru/files/uploads/raspechatat/tsyfry-formata-a4/4.jpg'
    },
    {
        name: '5',
        link: 'https://avatars.mds.yandex.net/get-zen_doc/1710127/pub_5e36dd84def5226f076b7c0c_5e36ef648b16e54eabd3f527/scale_1200'
    },
    {
        name: '6',
        link: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/7218d158115559.Y3JvcCwxMjgzLDEwMDQsMCwxMg.jpg'
    }
]

const containerSelector = document.querySelector('.portfolio__cards');
const templateSelector = document.querySelector('#cards-container').content;

initialCards.forEach((item) => {
    const card = templateSelector.querySelector('.cards-item').cloneNode(true);
    const cardName = card.querySelector('.cards-item__name');
    cardName.textContent = item.name;
    const cardImage = card.querySelector('.cards-item__image');
    cardImage.src = item.link;
    containerSelector.append(card);
    console.log(card)
})


