// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
var playing = document.getElementById("play-button");   
playing.onclick = function(){
    location.href = "./game.html";
}