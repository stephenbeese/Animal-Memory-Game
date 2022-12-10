document.addEventListener('DOMContentLoaded', function () {
    let start = document.getElementById('start');
    start.addEventListener('click', runGame);
});

let cards = ['chicken', 'cow', 'pig', 'sheep', 'duck', 'cat']; // Array for card images
cards = cards.concat(cards); // doubles array

let cardsPicked = []; // empty array for picked cards
let cardIds = []; // empty array for picked cards id
let highScores = [];

function runGame() {
    let start = document.getElementById('start');
    start.removeEventListener('click', runGame); // removes event listener to start game 

    let score = document.getElementById('score');
    if (score.innerHTML === '120') { // tests if a game has been completed yet 
        score.innerHTML = '0'; // resets game score when starting a new game

        for (i = 0; i < 12; i++) { // deletes images ready for the next game 
            let images = document.getElementById([i]);
            let imgDiv = images.parentNode;
            imgDiv.removeChild(images);
            imgDiv.classList.remove('green'); // removes green class when starting a new game 
        }
        message.innerHTML = 'Start matching!';
        // updateHighScore();
    }
    createGameBoard();
    setTimer();
}

/**
 * Randomly sorts cards and pushes them into divs with class "img-div"
 */
function createGameBoard() {
    cards.sort(() => Math.random() - 0.5); // randomly sorts cards array

    let images = document.getElementsByClassName("img-div");

    for (i = 0; i < cards.length; i++) {
        let card = document.createElement('img'); // creates img element

        let animalName = cards[i]; // picks out the card name
        let animalImg = `assets/images/${animalName}.png`; // picks out the image file path
        
        card.setAttribute('src', animalImg); // sets the image source to img element
        card.classList.add(animalName); // adds image class and class of specific animal name
        card.setAttribute('id', [i]); // sets id attribute to index number

        card.addEventListener('click', cardPicked); // adds event listener to call cardPicked function 

        images[i].appendChild(card); // adds images within "img-div" class
    }

    let message = document.getElementById('message');
    message.style.opacity = '1';
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

    message.style.opacity = '0';

    if (cardsPicked.length === 2) {
        setTimeout(checkMatch, 100);
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
        message.innerHTML = "You've found a match!";
        message.style.opacity = "1";
    } else {
        firstCardParent.classList.add('red'); // sets unmatched cards background to red 
        secondCardParent.classList.add('red');
        setTimeout(removeImage, 500);
        message.innerHTML = "Not a match, please try again";
        message.style.opacity = "1";
    }

    function removeImage() {
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

function setTimer() {
    var time = 0;
    let timer = document.getElementById('timer');
    let score = document.getElementById('score');

     var timeIncrease = setInterval(function(){
     ++time;
     timer.innerHTML = time;
    
    var checkScore = setInterval(function(){ // checks if score is 120 every 1000 milliseconds to turn off timer
        if (score.innerHTML === '120') {
            clearInterval(timeIncrease);
            clearInterval(checkScore);
         }
     }, 100);

    }, 1000);
 }

/**
 * adds 20 points to the score when a match has been made 
 */
function addScore() {
    let score = document.getElementById('score');
    let addScore = parseInt(score.innerHTML) + 20;
    score.innerHTML = addScore;
    let completionTime = document.getElementById('timer').innerHTML;

    if (score.innerHTML === '120') {
        message.innerHTML = `Congratulations! You matched the cards in ${completionTime} seconds!<br>Press start to play again</br>`;
        message.style.opacity = "1";
        let start = document.getElementById('start');
        start.addEventListener('click', runGame); // adds eventlistener back to start button

        setTimeout(updateHighScore, 2000);
    }
}

function updateHighScore() {
    let completionTime = document.getElementById('timer').innerHTML;
    console.log(completionTime);
    highScores.push(parseInt(completionTime));
    highScores.sort((a, b) => a - b);
    console.log(highScores);

    let highScoreOne = document.getElementById('score-one');
    let highScoreTwo = document.getElementById('score-two');
    let highScoreThree = document.getElementById('score-three');

    if (highScores.length === 1) {
        highScoreOne.innerHTML = `${highScores[0]} seconds`;
    } else if (highScores.length === 2) {
        highScoreOne.innerHTML = `${highScores[0]} seconds`;
        highScoreTwo.innerHTML = `${highScores[1]} seconds`;
    } else if (highScores.length >= 3) {
        highScoreOne.innerHTML = `${highScores[0]} seconds`;
        highScoreTwo.innerHTML = `${highScores[1]} seconds`;
        highScoreThree.innerHTML = `${highScores[2]} seconds`;
    }
}