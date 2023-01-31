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

function game(playerChoice) {
  const computerChoice = getComputerChoice();
  let winner = playRound(playerChoice, computerChoice);

  const winnerConatiner = document.querySelector(".winner");
  winnerConatiner.textContent = winner;

  const playerScoreContainer = document.querySelector(".playerScore");
  playerScoreContainer.textContent = `Player Score = ${playerScore}`;

  const computerScoreContainer = document.querySelector(".computerScore");
  computerScoreContainer.textContent = `Computer Score = ${computerScore}`;

  if (playerScore >= 5){
    alert("You Win!");
    computerScore = 0;
    playerScore = 0;
  } 
  if (computerScore >= 5){
    alert("Computer Wins!");
    computerScore = 0;
    playerScore = 0;
  }
}

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    game(e.target.dataset.choice);
  })
);
