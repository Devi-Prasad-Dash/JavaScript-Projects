let RandomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 0) {
        alert('Please enter a number greater than 0')
    }
    else if (guess > 100) {
        alert('Please enter a number less than 100')
    }
    else {
        prevGuess.push(guess);
        displayGuess(guess);
        if (numGuess === 10) {
            displayMeassage(`Game over, random number was ${RandomNumber}`)
            endGame();
        }
        else {
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === RandomNumber) {
        displayMeassage(`You guessed it right, random number was ${RandomNumber}`)
        endGame();
    }
    else if (guess < RandomNumber) {
        displayMeassage(`Number is too low`);
    }
    else if (guess > RandomNumber) {
        displayMeassage(`Number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMeassage(msg) {
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id='newgame'>Start a new game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', function (e) {
        RandomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 0;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame = true;
    });
}