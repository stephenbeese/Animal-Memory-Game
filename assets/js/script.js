// Array for card images
let cards = [
    {
        name: 'cat',
        img: 'assets/images/cat.png',
    },
    {
        name: 'chicken',
        img: 'assets/images/chicken.png',
    },
    {
        name: 'cow',
        img: 'assets/images/cow.png',
    },
    {
        name: 'duck',
        img: 'assets/images/duck.png',
    },
    {
        name: 'pig',
        img: 'assets/images/pig.png',
    },
    {
        name: 'sheep',
        img: 'assets/images/sheep.png',
    },
    {
        name: 'cat',
        img: 'assets/images/cat.png',
    },
    {
        name: 'chicken',
        img: 'assets/images/chicken.png',
    },
    {
        name: 'cow',
        img: 'assets/images/cow.png',
    },
    {
        name: 'duck',
        img: 'assets/images/duck.png',
    },
    {
        name: 'pig',
        img: 'assets/images/pig.png',
    },
    {
        name: 'sheep',
        img: 'assets/images/sheep.png',
    }
]

let cardsPicked = []; // empty array for picked cards
let cardIds = []; // empty array for picked cards id

/**
 * This function reveals the image of the card clicked
 */
function cardPicked() {
    let cardId = this.getAttribute('id'); // gets id attribute
    let name = this.getAttribute('class'); // gets class attribute
    document.getElementById(cardId).style.opacity = "1"; // changes image clicked opacity to 1 

    cardsPicked.push(name); // pushes class name into cardsPicked array.
    cardIds.push(cardId); // pushes ids into card Ids

    console.log(cardsPicked);

    if (cardsPicked.length === 2) {
        setTimeout(checkMatch, 500);
    }

}

// Randomly sorts cards and pushes them into divs with class "img-div"
function createGameBoard() {
    cards.sort(() => Math.random() - 0.5); // randomly sorts cards array

    let images = document.getElementsByClassName("img-div");
    let card = document.createElement('img');

    for (i = 0; i < cards.length; i++) {
        let card = document.createElement('img'); // creates img element

        let animalImg = cards[i].img; // picks out the image file path
        let animalName = cards[i].name; // picks out the card name

        card.setAttribute('src', animalImg); // sets the image source to img element
        card.classList.add(animalName); // adds image class and class of specific animal name
        card.setAttribute('id', [i]); // sets id attribut to index number

        card.addEventListener('click', cardPicked); // adds event listener to call cardPicked function 

        images[i].appendChild(card); // adds images within "img-div" class
    }
}
/**
 * checks for a match 
 */
function checkMatch() {

    let card1 = cardsPicked[0];
    let card2 = cardsPicked[1];

    let firstCardId = document.getElementById(cardIds[0]);
    let secondCardId = document.getElementById(cardIds[1]);  

    if (card1 === card2) {
        // alert("you've made a match");
        addScore();
    } else {
        firstCardId.style.opacity = "0";
        secondCardId.style.opacity = "0";
        // alert('Not a match, please try again');
    }

    cardsPicked = []; // clears array
    cardIds = []; // clears array
}

/**
 * adds 20 points to the score when a match has been made 
 */
function addScore() {
    let score = document.getElementById('score');
    let addScore = parseInt(score.innerHTML) + 20;
    score.innerHTML = addScore;
}

createGameBoard();


// function runGame()