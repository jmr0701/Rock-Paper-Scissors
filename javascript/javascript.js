let humanScore = 0;
let computerScore = 0;
let tiedScore = 0;

function getComputerChoice (){
    let number = Math.floor(Math.random() * 3);
    if (number === 0){
        return "Rock";
    } else if (number === 1){
        return "Paper";
    } else if (number === 2){
        return "Scissors";
    }
};

function getHumanChoice (){
    playerChoice = prompt ("Rock, paper or scissors?");
    return playerChoice;
}