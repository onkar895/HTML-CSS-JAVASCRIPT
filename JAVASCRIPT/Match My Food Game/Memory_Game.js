const cardArr = [{
        name: 'CheeseBurger',
        img: 'Images/cheeseburger.png'

    },
    {
        name: 'Fries',
        img: 'Images/fries.png'

    },
    {
        name: 'Hotdog',
        img: 'Images/hotdog.png'

    },
    {
        name: 'Ice-creame',
        img: 'Images/ice-cream.png.'

    },
    {
        name: 'MilkShake',
        img: 'Images/milkshake.png'

    },
    {
        name: 'Pizza',
        img: 'Images/pizza.png'

    }
]

cardArr.sort(() => 0.5 - Math.random())
    // console.log(cardArr);

const grid = document.querySelector('#grid');
const result = document.querySelector('#result');
// console.log(result);
// console.log(grid);


let cardsChosen = [];
let cardsChosenID = [];


// Function defination
function createBoard() {
    for (let count = 0; count < cardArr.length; count++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/blank.png')
        card.setAttribute('data-id', count)
            // console.log(card, count + 1)

        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}


function flipcard() {
    // console.log(cardArr);

    let cardID = this.getAttribute('data-id')
    console.log('clicked', cardID)

    cardsChosen.push(cardArr[cardID].name)
    console.log(cardsChosen);

    cardsChosenID.push(cardID)
    console.log(cardsChosenID);

    this.setAttribute('src', cardArr[cardID].img)
}

function CheckTheMatch() {
    const cards = document.querySelector('img')

    const optionOneid = cardsChosenID[0]
    const optionTwoid = cardsChosenID[1]

    if (optionOneid == optionTwoid) {
        alert("You have found the right food match");
        cards[optionOneid].setAttribute['src', 'Images/blank.png']
        cards[optionTwoid].setAttribute['src', 'Images/blank.png']

        cards[optionOneid].removeEventListner()
    }



}

// Function Calling
createBoard();