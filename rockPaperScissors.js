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
    let humanScore = 0;
    let computerScore = 0;
    document.querySelector('#play-again').style.display = 'none';
    let playerOptions = document.querySelector('#player-options');
    playerOptions.addEventListener('click', (e) => {
        let target = e.target;

        switch(target.id) {
            case 'rock':
                gameStatus = playRound("rock");
                console.log(humanScore);
                break;

            case 'paper':
                gameStatus = playRound("paper");

                break;

            case 'scissors':
                gameStatus = playRound("scissors");
                break;
        }
        let gameOver = document.querySelector('#play-again');
        gameOver.addEventListener('click', () => {
            humanScore = 0;
            computerScore = 0;
            humanScoreDisplay.textContent = "Human score: " + humanScore;
            computerScoreDisplay.textContent = "Computer score: " +  computerScore;
            document.querySelector('#player-options').style.display = 'block';
        });

        console.log(gameStatus)
        if (gameStatus === true) {
            gameOverMsg.textContent = "Game Over! Click the button below to replay."
            document.querySelector('#play-again').style.display = 'block'
            document.querySelector('#player-options').style.display = 'none';
        }
    });

    const humanScoreDisplay = document.querySelector('#human-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    const humanChoiceDisplay = document.querySelector('#human-choice');
    const computerChoiceDisplay = document.querySelector('#computer-choice');
    const roundResultDisplay = document.querySelector('#round-result');
    const winnerDisplay = document.querySelector("#winner")
    const gameOverMsg = document.querySelector('#game-over-msg')
    humanScoreDisplay.textContent = "Human score: " + humanScore;
    computerScoreDisplay.textContent = "Computer score: " +  computerScore;
    humanChoiceDisplay.textContent = "Human played: ";
    computerChoiceDisplay.textContent = "Computer played: ";
    roundResultDisplay.textContent = "Result: "

    console.log(humanScore)

    function playRound(humanChoice) {
        let gameStatus = false
        computerChoice = getComputerChoice();
        humanChoiceDisplay.textContent = "Human played: " + humanChoice;
        computerChoiceDisplay.textContent = "Computer played: " + computerChoice;
        if (humanChoice === computerChoice) {
            humanChoice = null;
            roundResultDisplay.textContent = "Result: Match draw, both players played: " + computerChoice + "!";
        }
    
        else if(
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
            ){
                humanScore += 1;
                roundResultDisplay.textContent = "Result: Human played: " + humanChoice + " Computer played: " + computerChoice + " Human player wins!";
                humanScoreDisplay.textContent = "Human score: " + humanScore;
                computerScoreDisplay.textContent = "Computer score: " +  computerScore;
                if(humanScore >= 5) {
                    winnerDisplay.textContent = "Human player was the first to 5 rounds!"
                    gameStatus = true
                }

                else if(computerScore >= 5) {
                    winnerDisplay.textContent = "Computer player was the first to 5 rounds :("
                    gameStatus = true
                }
                return gameStatus
            }
            else {
                computerScore += 1;
                roundResultDisplay.textContent = "Result: Human played: " + humanChoice + " Computer played: " + computerChoice + " Computer player wins!";
                humanScoreDisplay.textContent = "Human score: " + humanScore;
                computerScoreDisplay.textContent = "Computer score: " +  computerScore;
                if(humanScore >= 5) {
                    winnerDisplay.textContent = "Human player was the first to 5 rounds!"
                    gameStatus = true
                }

                else if(computerScore >= 5) {
                    winnerDisplay.textContent = "Computer player was the first to 5 rounds :("
                    gameStatus = true
                }
                return gameStatus
            }
    }


//        console.log("Human score is: " + humanScore + "  |  Computer score is: " + computerScore);
