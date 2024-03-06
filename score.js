// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score");

var scorecard = document.getElementById("score-board").innerHTML = score;

const PlayButton = document.getElementById("play-again-button");
PlayButton.onclick = function(){
    location.href = "./index.html";
}