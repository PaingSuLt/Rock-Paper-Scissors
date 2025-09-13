let computerChoice = "";
let humanChoice = "";

let computerScore = 0;
let humanScore = 0;

const displayScore = document.querySelector("#score");
const suggestion = document.querySelector("#suggestion");


function getComputerChoice() {

    computerChoice = Math.floor(Math.random()*3);

    if(computerChoice===0) {
        return "ROCK";
    }else if(computerChoice===1) {
        return "PAPER";
    }else {
        return "SCISSORS";
    }
}

/////This section is for showing the Result/////
const displayResult = document.querySelector("#result");


function exitFunction() {
    
    if(humanScore === 5 || computerScore === 5) {

        if (humanScore === 5) {
        displayResult.textContent = "Sugoi MaMa itsumo Win!!!🤗";
        }else if (computerScore === 5) {
        displayResult.textContent = "MaMa Lost against AI!!! BOOOOO🤪";
        }
    
    suggestion.textContent = "U can keep playing or press Reset to reset scores";

    return true;

    }else {
        return false;
    }
    
}




////this is to reset both scores and to play the game again/////
function playGame() {

    humanScore = 0;
    computerScore = 0;
    displayScore.textContent = 'SuLatt EtoneMa having fun💩? play as many times as you want my Queen😘';
    displayResult.textContent = "";
    suggestion.textContent = "";
    
}




const play = document.querySelector("#play");
play.addEventListener("click",() => {

    playGame();

});

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {

    userIsRock();

});

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {

    userIsPaper();

});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {

    userIsScissors();

});



function userIsRock() {

    exitFunction();

    humanChoice = "ROCK";
    computerChoice = getComputerChoice();
    if(humanChoice === computerChoice) {
        displayScore.textContent = `MaMa chose ${humanChoice} score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }else if(humanChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore += 1;
        displayScore.textContent = `MaMa chose ${humanChoice} score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }else if(humanChoice === "ROCK" && computerChoice === "SCISSORS") {
        humanScore += 1;
        displayScore.textContent = `MaMa chose ${humanChoice} score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }
    

}



function userIsPaper() {

    exitFunction();

    humanChoice = "PAPER";
    computerChoice = getComputerChoice();
    if(humanChoice === computerChoice) {
        displayScore.textContent = `MaMa chose ${humanChoice} score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }else if(humanChoice === "PAPER" && computerChoice === "ROCK") {
        humanScore += 1;
        displayScore.textContent = `MaMa chose ${humanChoice} score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }else if(humanChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore += 1;
        displayScore.textContent = `MaMa chose ${humanChoice} score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }

}



function userIsScissors() {

    exitFunction();

    humanChoice = "SCISSORS";
    computerChoice = getComputerChoice();
    if(humanChoice === computerChoice) {
        displayScore.textContent = `MaMa chose ${humanChoice}   score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }else if(humanChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore += 1;
        displayScore.textContent = `MaMa chose ${humanChoice}   score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }else if(humanChoice === "SCISSORS" && computerChoice === "PAPER") {
        humanScore += 1;
        displayScore.textContent = `MaMa chose ${humanChoice}   score:${humanScore} AND Computer chose ${computerChoice} score:${computerScore}`;
    }

}