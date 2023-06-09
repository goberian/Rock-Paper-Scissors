//global variables
let playerInput;

//Returns a random computer choice
function getComputerChoice() {
    const choiceType = ["Rock", "Paper", "Scissors"];
    let randomComputerChoice = choiceType[Math.floor(Math.random() * choiceType.length)];
    return randomComputerChoice;
}

//Returns user input uppercase first char, lower case remaining chars
function caseInsensitivePlayerInput(playerInput) {
    let firstLetter = playerInput.charAt(0).toUpperCase();
    let remainingLetters = playerInput.slice(1).toLowerCase();
    let checkedPlayerInput = firstLetter.concat(remainingLetters);
    return checkedPlayerInput;
}

//Return player selection after all checks/corrections
function playerSelection(playerInput) {
    while ((caseInsensitivePlayerInput(playerInput) != "Rock") &&
        (caseInsensitivePlayerInput(playerInput) != "Paper") &&
        (caseInsensitivePlayerInput(playerInput) != "Scissors")) {
        playerInput = prompt("Enter your choice:\nRock, Paper or Scissors?").trim();
    }
    let selection = caseInsensitivePlayerInput(playerInput);
    return selection;
}

//play ONE round of game
function playRound(playerSelection, getComputerChoice) {
    console.log("---------------------------------");
    if (playerSelection == getComputerChoice) {
        console.log("It's a Tie!");
        return "draw";
    } else {
        switch (playerSelection) {
            case "Rock":
                if (getComputerChoice == "Scissors") {
                    console.log("You Win! Rock beats Scissors!");
                    return "playerWon";
                } else {
                    console.log("You Lose! Paper beats Rock!");
                    return "playerLost";
                }
                break;
            case "Paper":
                if (getComputerChoice == "Rock") {
                    console.log("You Win! Paper beats Rock!");
                    return "playerWon";
                } else {
                    console.log("You Lose! Scissors beats Paper!");
                    return "playerLost";
                }
                break;
            default:
                if (getComputerChoice == "Paper") {
                    console.log("You Win! Scissors beats Paper!");
                    return "playerWon";
                } else {
                    console.log("You Lose! Rock beats Scissors!");
                    return "playerLost";
                }
        }
    }
}


//main game loop, play 5 rounds and declare winner
function game(playRound) {

    let gameStatus = "",
        playerScore = 0,
        computerScore = 0;

    let i = 0;
    while (i < 5) {
        playerInput = prompt("Enter your choice:\nRock, Paper or Scissors?");
        if (playerInput != null) {
            playerInput = playerInput.trim();
            gameStatus = playRound(playerSelection(playerInput), getComputerChoice());
            if (gameStatus == "draw") {
            } else {
                if (gameStatus == "playerWon") {
                    playerScore++;
                } else if (gameStatus == "playerLost") {
                    computerScore++;
                }
            }
            console.log("Player Score:", playerScore);
            console.log("Computer Score:", computerScore);
            i++;
        }
        else {
            console.log("Invalid option");
        }
    }
    console.log("---------------------------------");
    if (playerScore == computerScore) {
        console.log("It's a tie!")
    } else {
        if (playerScore > computerScore) {
            console.log("Congratulations, You Won!");
        } else {
            console.log("You Lost, Better luck next time!");
        }
    }
}

//Trigger game
game(playRound);






