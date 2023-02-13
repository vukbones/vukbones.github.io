function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (computerChoice === 1){
        return "rock";
    }
    else if (computerChoice === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let userChoice = prompt("Rock, paper or scissors? ").toLowerCase()

function roPaScRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper"){
        return "Computer wins!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "Player wins!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "Computer wins!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "Player wins!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "Player wins!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "Computer wins!"
    }
    else if (playerSelection === computerSelection){
        return "It's a draw!"
    }
}

let computer = getComputerChoice();

console.log(`You chose ${userChoice}`)
console.log(`Computer chose ${computer}`)

console.log(roPaScRound(userChoice, computer))