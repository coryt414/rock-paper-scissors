// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
//  Step 1 - getComputerChoice function

/*
Return random string with choices "rock", "paper", or "scissors"
Math.random - returns value between 0 and 1
*/
let randomNumber = 0;
let computerChoice = null;
let humanChoice = null;


function getRandom() {
    return Math.random();
}


function getComputerChoice(randomNumber) {
    randomNumber = getRandom();
    if (randomNumber < 0.33) {
        return "rock"
    }
    else if (randomNumber > 0.66) {
        return "scissors"
    }
    else {
        return "paper"
    }
}


// Step 2 - getHumanChoice function

/*
Prompt user for choice between "rock", "paper", or "scissors"
Return user choice
*/
function getHumanChoice() {
    humanChoice = null;
    while (humanChoice === null) {
        humanChoice = prompt("What's your play? Rock, Paper, or Scissors?");
        humanChoice = humanChoice.toLowerCase()
        //if (humanChoice.toLowerCase === "rock" || humanChoice.toLowerCase === "paper" || humanChoice.toLowerCase === "scissors") {
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice
        }
        else {
            console.log(humanChoice + " is not a valid input. Please try again.");
            humanChoice = null;
        }
    }
}

// Step 3 - Declare variables to track score (humanScore & computerScore)
let humanScore = 0;
let computerScore = 0;


// Step 4 - Create a function playRound to play a single round

/*
Take humanChoice & computerChoice as paramenters
Make humanChoice case agnostic (i.e. rock == ROCK == rOcK)
Generate a console log to declare round winner
Increment humanScore or computerScore based on result
*/
function playRound(humanChoice,computerChoice) {
    while (humanScore === 0 && computerScore === 0) {
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        humanChoice = getHumanChoice();
        
        if (humanChoice === computerChoice) {
            humanChoice = null;
            console.log("Match draw, both players made the same choice!");
        }

        else if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
            ){
                humanScore += 1;
                console.log("Human player wins!");
                return humanScore
            }
            else {
                computerScore += 1;
                console.log("Computer player wins!");
                return computerScore
            }
    }
}
playRound(humanChoice,computerChoice);
// Step 5 - Write function playGame to play 5-round game