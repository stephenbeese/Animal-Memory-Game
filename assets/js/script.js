// Array for card images
let cards = [
    {
        name: 'cat',
        img: 'assets/images/cat.jpeg',
    },
    {
        name: 'chicken',
        img: 'assets/images/chicken.jpeg',
    },
    {
        name: 'cow',
        img: 'assets/images/cow.jpeg',
    },
    {
        name: 'duck',
        img: 'assets/images/duck.jpeg',
    },
    {
        name: 'pig',
        img: 'assets/images/pig.jpeg',
    },
    {
        name: 'sheep',
        img: 'assets/images/sheep.jpeg',
    },
    {
        name: 'cat',
        img: 'assets/images/cat.jpeg',
    },
    {
        name: 'chicken',
        img: 'assets/images/chicken.jpeg',
    },
    {
        name: 'cow',
        img: 'assets/images/cow.jpeg',
    },
    {
        name: 'duck',
        img: 'assets/images/duck.jpeg',
    },
    {
        name: 'pig',
        img: 'assets/images/pig.jpeg',
    },
    {
        name: 'sheep',
        img: 'assets/images/sheep.jpeg',
    }
]

// Randomly sorts cards and pushes them into divs with class "img-div"
function createGameBoard() {
    cards.sort(() => Math.random() - 0.5);

    let images = document.getElementsByClassName("img-div");
    let card = document.createElement('img');

    for (i = 0; i < cards.length; i++) {
        let card = document.createElement('img');
        animalImg = cards[i].img
        card.setAttribute('src', animalImg)
        card.setAttribute('class', 'image')
        images[i].appendChild(card);
        console.log(card, i)
    }
}

createGameBoard();

// function runGame()

// function checkMatch()

// function cardPicked()