function getComputerChoice(){
    function getRandIndex(){
        return Math.floor(Math.random() * 3);
    }
    var choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandIndex()];
}

function playRound(){
    var computerSelection = getComputerChoice().toLowerCase();

    var playerSelection = prompt("Enter your choice").toLowerCase();

    if (computerSelection == playerSelection) {
        return ("It's a tie!");
    }

    else if (computerSelection == "rock" & playerSelection == "paper" || computerSelection == "paper" & playerSelection == "scissors" || computerSelection == "scissors" & playerSelection == "rock") {
        return("You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection);
    }

    else {
        return ("You lose! " + computerSelection + " beats " + playerSelection);
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let tiedRounds = 0;
    for(i=0; i<5; i++){
        let result = playRound();
        if (result.includes('win')) {
            playerScore++;
        }
        else if (result.includes('lose')) {
            computerScore++;
        }
        else {
            tiedRounds++;
        }
    }

    if (playerScore > computerScore){
        console.log("You win! with a score of " + playerScore + " - " + computerScore);
    }
    else if (computerScore > playerScore){
        console.log("You lose! with a score of " + playerScore + " - " + computerScore);
    }
    else {
        console.log("Tie!");
    }

    console.log("Total tied rounds: " + tiedRounds);
}

playGame();