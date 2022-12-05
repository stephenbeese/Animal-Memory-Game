document.addEventListener('DOMContentLoaded', function(){
    let start = document.getElementById('start');
    start.addEventListener('click', runGame);
});

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

function runGame() {
    let start = document.getElementById('start'); 
    start.removeEventListener('click', runGame); // removes event listener to start game 

    let score = document.getElementById('score');
    if (score.innerHTML === '120') { // tests if a game has been completed yet 
        score.innerHTML = '0'; // resets game score when starting a new game

        for (i = 0; i < 12; i++) { // deletes images ready for the next game 
            let images = document.getElementById([i]); 
            imgDiv = images.parentNode;
            imgDiv.removeChild(images);
            imgDiv.classList.remove('green') // removes green class when starting a new game 
        }

    }
    createGameBoard();
    // setTimer();
}

/**
 * This function reveals the image of the card clicked
 */
function cardPicked() {
    let cardId = this.getAttribute('id'); // gets id attribute
    let name = this.getAttribute('class'); // gets class attribute
    document.getElementById(cardId).style.opacity = "1"; // changes image clicked opacity to 1 

    cardsPicked.push(name); // pushes class name into cardsPicked array.
    cardIds.push(cardId); // pushes ids into card Ids

    document.getElementById(cardId).removeEventListener('click', cardPicked); // removes event listener from the cards picked

    if (cardsPicked.length === 2) {
        setTimeout(checkMatch, 100)
    }
}

// Randomly sorts cards and pushes them into divs with class "img-div"
function createGameBoard() {
    cards.sort(() => Math.random() - 0.5); // randomly sorts cards array

    let images = document.getElementsByClassName("img-div");

    for (i = 0; i < cards.length; i++) {
        let card = document.createElement('img'); // creates img element

        let animalImg = cards[i].img; // picks out the image file path
        let animalName = cards[i].name; // picks out the card name

        card.setAttribute('src', animalImg); // sets the image source to img element
        card.classList.add(animalName); // adds image class and class of specific animal name
        card.setAttribute('id', [i]); // sets id attribute to index number

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

    let firstCardParent = firstCardId.parentNode;
    let secondCardParent = secondCardId.parentNode;
    
    
    if (card1 === card2) {
        setTimeout(addScore, 500);
        firstCardParent.classList.add('green'); // changes matched cards backgrounds to green 
        secondCardParent.classList.add('green');
    } else {
        firstCardParent.classList.add('red'); // sets unmatched cards background to red 
        secondCardParent.classList.add('red');
        setTimeout(removeImage, 500);
    }

    function removeImage(){
        firstCardParent.classList.remove('red'); // removes red background
        secondCardParent.classList.remove('red'); 
        firstCardId.style.opacity = "0"; // makes image transparent again
        secondCardId.style.opacity = "0";
        firstCardId.addEventListener('click', cardPicked); // adds event listener back to image
        secondCardId.addEventListener('click', cardPicked);
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

    if (score.innerHTML === '120') {
        alert('You have won the game, press start to play again!')
        let start = document.getElementById('start');
        start.addEventListener('click', runGame) // adds eventlistener back to start button
    }
}

// function setTimer()

