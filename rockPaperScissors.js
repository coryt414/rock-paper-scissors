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



// Step 4 - Create a function playRound to play a single round

/*
Take humanChoice & computerChoice as paramenters
Make humanChoice case agnostic (i.e. rock == ROCK == rOcK)
Generate a console log to declare round winner
Increment humanScore or computerScore based on result
*/

//playRound(humanChoice,computerChoice);
//#console.log("Human score is: " + humanScore);
//console.log("Computer score is: " + computerScore);


// Step 5 - Write function playGame to play 5-round game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        
        if (humanChoice === computerChoice) {
            humanChoice = null;
            console.log("Match draw, both players played: " + computerChoice + "!");
        }
    
        else if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
            ){
                humanScore += 1;
                console.log("Human played: " + humanChoice + "  |  Computer played: " + computerChoice);
                console.log("Human player wins!");
                return humanScore
            }
            else {
                computerScore += 1;
                console.log("Human played: " + humanChoice + "  |  Computer played: " + computerChoice);
                console.log("Computer player wins!");
                return computerScore
            }
    }
    while (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice,computerChoice);
        console.log("Human score is: " + humanScore + "  |  Computer score is: " + computerScore);
    }
}
playGame();