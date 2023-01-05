function getComputerChoice(){
    let number = Math.floor(Math.random()*150) + 1;
    console.log(number);
    if(number <= 50){
        return "Rock";
    } else if (number <= 100){
        return "Paper";
    } else {
        return "Scissors";
    }
}
