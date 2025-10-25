let humanScore = 0;
let computerScore = 0;

let pPoints = document.querySelector("#pPoints");
pPoints.textContent = humanScore;
let cPoints = document.querySelector("#cPoints");
cPoints.textContent = computerScore;
let results = document.querySelector(".resultsInfo");

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", function(e) {
  playGame("Rock");
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", function(e) {
  playGame("Paper");
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", function(e) {
  playGame("Scissors");
});

function playGame (btnSelection){

    playRound(btnSelection);

    if (humanScore === 5){
        console.log ("You are the winner!");
        results.textContent = "You are the winner!";
        results.style.backgroundColor = "green";
    } else if (computerScore === 5){
        console.log ("You lose! The computer is the winner!");
        results.textContent = "You lose! The computer is the winner!";
        results.style.backgroundColor = "red";
    }
}

function playRound(btnSelection) {

    const computerSelection = getComputerChoice();
    const playerSelection = btnSelection;

    console.log(`You played: ${playerSelection}`);
    console.log(`The computer played: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        results.textContent = "It's a tie!";
        return;
    }

    switch (`${playerSelection}|${computerSelection}`) {

        // Player is the winner
        case 'Rock|Scissors':
        case 'Paper|Rock':
        case 'Scissors|Paper':
            console.log("You win!");
            humanScore++;
            pPoints.textContent = humanScore;
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            break;

        // Computer is the winner
        case 'Rock|Paper':
        case 'Paper|Scissors':
        case 'Scissors|Rock':
            console.log("Computer wins!");
            computerScore++;
            cPoints.textContent = computerScore;
            results.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
            break;
    }

    //Display the icon of the hand played that round by the player and computer
    document.querySelector('.playerWindow').innerHTML = `<img src="images/${playerSelection}.svg" alt=${playerSelection} style="width:100%;height:100%;object-fit:contain;">`;
    document.querySelector('.computerWindow').innerHTML = `<img src="images/${computerSelection}.svg" alt=${computerSelection} style="width:100%;height:100%;object-fit:contain;">`;

    console.log ("Your score is: " + humanScore);
    console.log ("The computer's score is: " + computerScore);
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