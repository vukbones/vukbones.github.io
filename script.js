let computer = function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (computerChoice === 1){
        return "Rock";
    }
    else if (computerChoice === 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

console.log(computer());