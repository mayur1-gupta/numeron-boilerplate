// Iteration 2: Generate 2 random numbers and display them on the screen
const firstNumberElement = document.getElementById('number1');
const secondNumberElement = document.getElementById('number2');
let firstNumber = Math.round(Math.random() * 100);
firstNumberElement.innerHTML = firstNumber;

let secondNumber = Math.round(Math.random() * 100);
secondNumberElement.innerHTML = secondNumber;

// Iteration 3: Make the options buttons functional
const greaterThanButton = document.getElementById('greater-than');
const equalToButton = document.getElementById('equal-to');
const lesserThanButton = document.getElementById('lesser-than');

let score = 0;

greaterThanButton.onclick = () => {
    if (firstNumber > secondNumber) {
        score++;
        resetTimer(timerId);
    } else {
        location.href = "./gameover.html";
    }
    firstNumber = Math.round(Math.random() * 100);
    firstNumberElement.innerHTML = firstNumber;
    console.log(score);
    secondNumber = Math.round(Math.random() * 100);
    secondNumberElement.innerHTML = secondNumber;
}

equalToButton.onclick = () => {
    if (firstNumber === secondNumber) {
        score++;
        resetTimer(timerId);
    } else {
        location.href = "./gameover.html";
    }
    firstNumber = Math.round(Math.random() * 100);
    firstNumberElement.innerHTML = firstNumber;
    console.log(score);
    secondNumber = Math.round(Math.random() * 100);
    secondNumberElement.innerHTML = secondNumber;
}

lesserThanButton.onclick = () => {
    if (firstNumber < secondNumber) {
        score++;
        resetTimer(timerId);
    } else {
        location.href = "./gameover.html";
    }
    firstNumber = Math.round(Math.random() * 100);
    firstNumberElement.innerHTML = firstNumber;
    console.log(score);
    secondNumber = Math.round(Math.random() * 100);
    secondNumberElement.innerHTML = secondNumber;
}

// Iteration 4: Build a timer for the game
let remainingTime = 5;
const timerElement = document.getElementById("timer");
let timerId;

function startTimer() {
    remainingTime = 5;
    timerElement.innerHTML = remainingTime;
    timerId = setInterval(() => {
        remainingTime--;
        if (remainingTime === 0) {
            location.href = "./gameover.html"
        }
        timerElement.innerHTML = remainingTime;
    }, 1000);
    localStorage.setItem("score", score);
}

function resetTimer(intervalId) {
    clearInterval(intervalId);
    startTimer();
}
startTimer();