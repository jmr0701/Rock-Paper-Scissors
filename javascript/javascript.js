let humanScore = 0;
let computerScore = 0;
let tiedScore = 0;

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", function(e) {
  playRound("Rock");
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", function(e) {
  playRound("Paper");
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", function(e) {
  playRound("Scissors");
});

function playGame (){

    for (i=0; i<5; i++){
        playRound ();
    }

    if (humanScore > computerScore){
        console.log ("You are the winner!");
    } else if (humanScore < computerScore){
        console.log ("You lose! The computer is the winner!");
    } else if (humanScore === computerScore){
        console.log ("It's a tie!");
    }
}

function playRound (btnSelection){
    let computerSelection = getComputerChoice();
    let playerSelection = btnSelection;


    if (playerSelection === computerSelection){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("It's a tie!");
        tiedScore++
    }

    if (playerSelection === "Rock" && computerSelection === "Paper"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("Computer wins!");
        computerScore++;

    }
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("You win!");
        humanScore++;
    }

    if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("You win!");
        humanScore++;
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("Computer wins!");
        computerScore++;
    }

    if (playerSelection === "Scissors" && computerSelection === "Rock"){
        console.log("You played: " + playerSelection);
        console.log("The computer played: " + computerSelection);
        console.log("Computer wins!");
        computerScore++;
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper"){
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

//playGame()