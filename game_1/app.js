const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'papper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!';
    }
    if (computerChoice === 'rock' && userChoice === "papper") {
        result = 'You win!';
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You lose!';
    }
    if (computerChoice === 'papper' && userChoice === "rock") {
        result = 'You lose!';
    }
    if (computerChoice === 'papper' && userChoice === "scissors") {
        result = 'You win!';
    }
    if (computerChoice === 'scissors' && userChoice === "papper") {
        result = 'You lose!';
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You win!';
    }
    resultDisplay.innerHTML = result;
}
