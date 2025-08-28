let computerChoice;
let humanChoice;

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

function getHumanChoice() {

    humanChoice = prompt("Rock, Paper or Scissors? Type one and Press Enter");

    humanChoice = humanChoice.toUpperCase();
    return humanChoice;

}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {

    if(computerChoice==="ROCK" && humanChoice==="PAPER") {
        alert(`You:${humanChoice}
            Computer:${computerChoice}`)
            humanScore += 1;
    }else if(computerChoice==="PAPER" && humanChoice==="SCISSORS") {
        alert(`You:${humanChoice}
            Computer:${computerChoice}`)
            humanScore += 1;
    }else if(computerChoice==="SCISSORS" && humanChoice==="ROCK") {
        alert(`You:${humanChoice}
            Computer:${computerChoice}`)
            humanScore += 1;
    }else if(computerChoice==="SCISSORS" && humanChoice==="PAPER") {
        alert(`You:${humanChoice}
            Computer:${computerChoice}`)
            computerScore += 1;
    }else if(computerChoice==="PAPER" && humanChoice==="ROCK") {
        alert(`You:${humanChoice}
            Computer:${computerChoice}`)
            computerScore += 1;
    }else if(computerChoice==="ROCK" && humanChoice==="SCISSORS") {
        alert(`You:${humanChoice}
            Computer:${computerChoice}`)
            computerScore += 1;
    }else {
        alert(`DRAW!`)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);