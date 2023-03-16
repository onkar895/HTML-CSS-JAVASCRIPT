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

    },
    {
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

const displayresult = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenID = [];
let cardsWon = [];


// Function defination
function createBoard() {
    for (let count = 0; count < cardArr.length; count++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'Images/blank.png')
        card.setAttribute('data-id', count)
            // console.log(card, count + 1)

        card.addEventListener('click', flipcard);
        grid.appendChild(card)

    }
}

// Check the match
function CheckTheMatch() {
    console.log("Check for match");
    const cards = document.querySelector('img')
    console.log(cards);

    const optionOneid = cardsChosenID[0]
    const optionTwoid = cardsChosenID[1]

    if (optionOneid == optionTwoid) {

        cards[optionOneid].setAttribute['src', 'Images/blank.png']
        cards[optionTwoid].setAttribute['src', 'Images/blank.png']
        alert("You have clicked on same images ");
    } else if (cardsChosen[0] === cardsChosen[1]) {

        alert("You have found the right food match");
        cards[optionOneid].setAttribute['src', 'Images/white.png']
        cards[optionTwoid].setAttribute['src', 'Images/white.png']

        // Remove the  click ability on the cards
        cards[optionOneid].removeEventListener('click', flipcard)
        cards[optionTwoid].removeEventListener('click', flipcard)

        cardsWon.push(cardsChosen)
        console.log(cardsWon);
    } else {

        cards[optionOneid].setAttribute['src', 'Images/blank.png']
        cards[optionTwoid].setAttribute['src', 'Images/blank.png']
        alert("Plz try again by selecting right match ");
    }

    cardsChosen = [];
    cardsChosenID = [];

    displayresult.textcontent = cardsWon.length

    if (cardsWon.length === cardArr.length / 2) {
        displayresult.textcontent = "Congratulation! You won"
    }
}

// Flip the cards
function flipcard() {
    // console.log(cardArr);

    let cardID = this.getAttribute('data-id')
    console.log('clicked', cardID)

    cardsChosen.push(cardArr[cardID].name)
    console.log(cardsChosen);

    cardsChosenID.push(cardID)
        // console.log(cardsChosenID);

    this.setAttribute('src', cardArr[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout(CheckTheMatch, 500)
    }
}

// Function Calling
createBoard();