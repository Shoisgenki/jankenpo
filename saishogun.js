
function getRandIndex(){
    return Math.floor(Math.random() * 3);
}

function getComputerChoice(choice1, choice2, choice3){
    var choices = [choice1, choice2, choice3];
    return choices[getRandIndex()];
}

console.log(getComputerChoice("Rock", "Paper", "Scissors"));

