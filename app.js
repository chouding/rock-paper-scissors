function computerPlay() {
    const choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
} 

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerChoice === 'rock') {
            return "You Tied! Rock equals Rock"
        }
        else if (computerChoice === 'paper') {
            return "You Lose! Paper beats Rock"
        }
        else if (computerChoice === 'scissors') {
            return "You Win! Rock beats Scissors"
        }
    }
    else if (playerSelection === 'paper') {
        if (computerChoice === 'paper') {
            return "You Tied! Paper equals Paper"
        }
        else if (computerChoice === 'rock') {
            return "You Win! Paper beats Rock"
        }
        else if (computerChoice === 'scissors') {
            return "You Lose! Scissors beat Paper"
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerChoice === 'scissors') {
            return "You Tied! Scissors equal Scissors"
        }
        else if (computerChoice === 'paper') {
            return "You Win! Scissors beats Paper"
        }
        else if (computerChoice === 'rock') {
            return "You Lose! Rock beats Scissors"
        }
    }
}

let game = () => {
    for (let i = 0; i < 5; i++) {
        const result = playRound(prompt('Rock, Paper, or Scissors?'),computerPlay());
        console.log(result)
    }
} 
game()