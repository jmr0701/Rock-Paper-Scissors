let humanScore = 0;
let computerScore = 0;
let tiedScore = 0;

function playRound (){
    let computerSelection = getComputerChoice().toLowerCase();
    let playerSelection = getHumanChoice().toLowerCase();


    if (playerSelection === computerSelection){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("It's a tie!");
        tiedScore++
    }

    if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("Computer wins!");
        computerScore++;

    }
    if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("You win!");
        humanScore++;
    }

    if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("You win!");
        humanScore++;
    }
    if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("Computer wins!");
        computerScore++;
    }

    if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("Computer wins!");
        computerScore++;
    }
    if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("You win!");
        humanScore++;
    }

    console.log ("Your score is: " + humanScore);
    console.log ("The computer's score is: " + computerScore);
    console.log ("You and the computer tied: " + tiedScore + " times")

}

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