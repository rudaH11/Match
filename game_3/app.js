const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquere() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });


    let randomSquere = squares[Math.floor(Math.random() * 9)];
    randomSquere.classList.add('mole');

    hitPosition = randomSquere.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            console.log(result);
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
    timerId = setInterval(randomSquere, 500);
}


moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is' + result);
    }
}
let countDownTimerId = setInterval(countDown, 1000);
