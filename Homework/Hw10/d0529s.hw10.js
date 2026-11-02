// Keep asking until the user enters one of the three allowed choices.
function getUserChoice() {
    const choices = ["rock", "paper", "scissors"];

    while (true) {
        const response = prompt("Choose rock, paper, or scissors:");

        // Treat Cancel as a graceful way to stop instead of prompting forever.
        if (response === null) {
            return null;
        }

        const userChoice = response.trim().toLowerCase();
        if (choices.includes(userChoice)) {
            return userChoice;
        }

        console.log("Invalid choice. Please enter rock, paper, or scissors.");
    }
}

function playGame() {
    const choices = ["rock", "paper", "scissors"];
    const winningChoices = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    let playAgain = true;

    while (playAgain) {
        const userChoice = getUserChoice();

        if (userChoice === null) {
            console.log("Game canceled. Thanks for playing!");
            break;
        }

        // Math.random() selects a random valid choice for the computer.
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Print both choices and the outcome for this round in the console.
        if (userChoice === computerChoice) {
            console.log(`User chose: ${userChoice} Computer chose: ${computerChoice} It's a tie!`);
        } else if (winningChoices[userChoice] === computerChoice) {
            console.log(`User chose: ${userChoice} Computer chose: ${computerChoice} You win!`);
        } else {
            console.log(`User chose: ${userChoice} Computer chose: ${computerChoice} Computer wins!`);
        }

        // Ask whether the user wants to play another round.
        playAgain = confirm("Would you like to play another round?");
    }

    if (!playAgain) {
        console.log("Thanks for playing!");
    }
}

playGame();
