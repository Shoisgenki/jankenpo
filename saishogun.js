function getRandIndex(){
    return Math.floor(Math.random() * 3);
}

function getComputerChoice(choice1, choice2, choice3){
    var choices = [choice1, choice2, choice3];
    return choices[getRandIndex()];
}

function playRound(){
    var computerSelection = getComputerChoice("Rock", "Paper", "Scissors").toLowerCase();

    var playerSelection = prompt("Enter your choice").toLowerCase();

    if (computerSelection == playerSelection) {
        console.log("It's a tie!");
    }

    else if (computerSelection == "rock" & playerSelection == "paper") {
        console.log("You win! Paper beats Rock.");
    }

    else if (computerSelection == "paper" & playerSelection == "rock") {
        console.log("You lose! Paper beats Rock.");
    }

    else if (computerSelection == "scissors" & playerSelection == "paper") {
        console.log("You lose! Scissors beat Paper.");
    }

    else if (computerSelection == "scissors" & playerSelection == "rock") {
        console.log("You win! Rock beats Scissors.");
    }

    else if (computerSelection == "paper" & playerSelection == "scissors") {
        console.log("You win! Scissors beat Paper.");
    }

    else {
        console.log("You lose! Rock beats Scissors")
    }
}

playRound();

