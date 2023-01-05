function getComputerChoice(){
    let choice = Math.floor(Math.random()*3) + 1;

    if(choice == 1){
        return "rock";
    } else if (choice == 2){
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(playerChoice, computerChoice){
    if (playerChoice == "rock" && computerChoice == "rock") {
        return "It's a Draw!";
    }
    if (playerChoice == "rock" && computerChoice == "paper") {
        return "You Lose! Paper beats Rock";
    }
    if (playerChoice == "rock" && computerChoice == "scissors") {
        return "You Win! Rock beats Scissors";
    }

    if (playerChoice == "paper" && computerChoice == "rock") {
        return "You Win! Paper beats Rock";
    }
    if (playerChoice == "paper" && computerChoice == "paper") {
        return "It's a Draw!";
    }
    if (playerChoice == "paper" && computerChoice == "scissors") {
        return "You Lose! Scissors beats Paper";
    }

    if (playerChoice == "scissors" && computerChoice == "rock") {
        return "You Lose! Rock beats Scissors";
    }
    if (playerChoice == "scissors" && computerChoice == "paper") {
        return "You Win! Scissors beats Paper";
    }
    if (playerChoice == "scissors" && computerChoice == "scissors") {
        return "It's a Draw!";
    }
    
}

