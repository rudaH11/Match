const cardArray = [
    {
        name: 'cheese',
        img: 'img/cheese.png'
    },
    {
        name: 'cheesecake',
        img: 'img/cheesecake.png'
    },
    {
        name: 'cherry',
        img: 'img/cherry.png'
    },
    {
        name: 'chocolate',
        img: 'img/chocolate.png'
    },
    {
        name: 'ice',
        img: 'img/ice.png'
    },
    {
        name: 'strawberry',
        img: 'img/strawberry.png'
    },
    {
        name: 'cheese',
        img: 'img/cheese.png'
    },
    {
        name: 'cheesecake',
        img: 'img/cheesecake.png'
    },
    {
        name: 'cherry',
        img: 'img/cherry.png'
    },
    {
        name: 'chocolate',
        img: 'img/chocolate.png'
    },
    {
        name: 'ice',
        img: 'img/ice.png'
    },
    {
        name: 'strawberry',
        img: 'img/strawberry.png'
    }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard () {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/diagram.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log(cards);
    console.log('check for match');

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/diagram.png');
        cards[optionTwoId].setAttribute('src', 'img/diagram.png');
        alert('You have clicked the same image!');
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'img/ok.png');
        cards[optionTwoId].setAttribute('src', 'img/ok.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'img/diagram.png');
        cards[optionTwoId].setAttribute('src', 'img/diagram.png');
        alert('Sorry try again!');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = 'Congratulations you found them all!';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500);
    }
}
