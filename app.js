function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  

  if (playerChoice == "rock" && computerChoice == "rock") {
    return "It's a Draw!";
  }
  if (playerChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  }
  if (playerChoice == "rock" && computerChoice == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  }

  if (playerChoice == "paper" && computerChoice == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  }
  if (playerChoice == "paper" && computerChoice == "paper") {
    return "It's a Draw!";
  }
  if (playerChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  }

  if (playerChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  }
  if (playerChoice == "scissors" && computerChoice == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  }
  if (playerChoice == "scissors" && computerChoice == "scissors") {
    return "It's a Draw!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Rock or Paper or Scissors?").toLowerCase();
    const computerChoice = getComputerChoice();
    let winner = playRound(playerChoice, computerChoice);
    console.log(winner);
    console.log(`playerScore = ${playerScore}`);
    console.log(`computerScore = ${computerScore}`);
  }

  if (playerScore > computerScore) {
    return "You won the best of five!";
  } else if (playerScore == computerScore) {
    return "Draw!";
  } else {
    return "You lose the best of five";
  }
}

console.log(game());
