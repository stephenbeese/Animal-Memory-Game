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
/**
 * This function reveals the image of the card clicked
 */
function cardPicked() {    
    alert("You have clicked a card");
    let cardId = this.getAttribute('id'); // gets id attribute
    let name = this.getAttribute('class');

    console.log(cardId);
    console.log(name);
    
    document.getElementById(cardId).style.opacity = "1"; // changes image clicked opacity to 1 

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
        card.setAttribute('id', [i]); // 

        card.addEventListener('click', cardPicked); // adds event listener to call cardPicked function 

        images[i].appendChild(card); // adds images within "img-div" class
    }
}

createGameBoard();



// function runGame()

// function checkMatch()

// function cardPicked() {
//     alert("You have clicked a card")
// }