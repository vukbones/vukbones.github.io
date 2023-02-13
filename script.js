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

function roPaScRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper"){        
        return 0;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){   
        return 1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return 0;
    }
    else if (playerSelection === computerSelection){
        return 2;
    }
}


function game(){
    let numPlayerWon = 0;
    let numComputerWon = 0;
    for (let i = 0; i < 5; i++){
        let userChoice = prompt("Rock, paper or scissors? ").toLowerCase();
        let computer = getComputerChoice();
        console.log(`You chose ${userChoice}`);
        console.log(`Computer chose ${computer}`);
        if (roPaScRound(userChoice, computer) === 1){
            console.log("Player wins this one match!")
            numPlayerWon++;
        }
        else if(roPaScRound(userChoice, computer) === 0){
            console.log("Computer wins this one match!");
            numComputerWon++;
        }
        else{
            console.log("Draw match!");
        }
    }
    if (numComputerWon > numPlayerWon){
        return "Computer won!"
    }
    else if(numComputerWon < numPlayerWon){
        return "Player won!"
    }
    else{
        return "Tie game!"
    }
}

console.log(game());