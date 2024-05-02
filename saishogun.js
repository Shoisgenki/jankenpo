document.getElementById("rock-button").addEventListener("click", function() {
    playRound("rock");
});

document.getElementById("paper-button").addEventListener("click", function() {
    playRound("paper");
});

document.getElementById("scissors-button").addEventListener("click", function() {
    playRound("scissors");
});

res = document.getElementById("result");

function getComputerChoice(){
    function getRandIndex(){
        return Math.floor(Math.random() * 3);
    }
    var choices = ["rock", "paper", "scissors"];
    return choices[getRandIndex()];
}

function playRound(playerSelection){
    var computerSelection = getComputerChoice();

    if (computerSelection === playerSelection) {
        res.textContent = "It's a Tie!";
    } else if ((computerSelection === "rock" && playerSelection === "paper") ||
               (computerSelection === "paper" && playerSelection === "scissors") ||
               (computerSelection === "scissors" && playerSelection === "rock")) {
        res.textContent = "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase();
    } else {
        res.textContent = "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase();
    }
}

