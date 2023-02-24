function getComputerChoice () {
    computerChoice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (computerChoice === 1){
        return 1;
    }
    else if (computerChoice === 2){
        return 2;
    }
    else{
        return 3;
    }
}

function roPaScRound(playerSelection, computerSelection){
    if (playerSelection === 1 && computerSelection === 2){
        punteggio_user++;        
        return 0;
    }
    else if (playerSelection === 2 && computerSelection === 1){
        punteggio_computer++;
        return 1;
    }
    else if (playerSelection === 3 && computerSelection === 1){
        punteggio_user++;
        return 0;
    }
    else if (playerSelection === 1 && computerSelection === 3){
        punteggio_computer++;
        return 1;
    }
    else if (playerSelection === 3 && computerSelection === 2){   
        punteggio_computer++;
        return 1;
    }
    else if (playerSelection === 2 && computerSelection === 3){
        punteggio_user++;
        return 0;
    }
    else if (playerSelection === computerSelection){
        return 2;
    }
}


// function game(){
//     let numPlayerWon = 0;
//     let numComputerWon = 0;
//     for (let i = 0; i < 5; i++){
//         let userChoice = prompt("Rock, paper or scissors? ").toLowerCase();
//         let computer = getComputerChoice();
//         console.log(`You chose ${userChoice}`);
//         console.log(`Computer chose ${computer}`);
//         if (roPaScRound(userChoice, computer) === 1){
//             console.log("Player wins this one match!")
//             numPlayerWon++;
//         }
//         else if(roPaScRound(userChoice, computer) === 0){
//             console.log("Computer wins this one match!");
//             numComputerWon++;
//         }
//         else{
//             console.log("Draw match!");
//         }
//     }
//     if (numComputerWon > numPlayerWon){
//         return "Computer won!"
//     }
//     else if(numComputerWon < numPlayerWon){
//         return "Player won!"
//     }
//     else{
//         return "Tie game!"
//     }
// }

// console.log(game());

let punteggio_user = 0;
let punteggio_computer = 0;

function azzerapunt(){
    punteggio_user = 0;
    punteggio_computer = 0;
}

function winner_check(azzera, punt_user, punt_comp){
    if(punt_user == 5 || punt_comp == 5){
        azzera();
    }
}


const tu = document.getElementById("tu");


const nemico = document.getElementById("nemico");

const mano = document.getElementById("mano");

mano.addEventListener("click", () =>{
    winner_check(azzerapunt, punteggio_user, punteggio_computer);
    let computer = getComputerChoice();
    let user = 1
    console.log(roPaScRound(user, computer));
    console.log(punteggio_computer, punteggio_user)
    tu.textContent = punteggio_user.toString();
    nemico.textContent = punteggio_computer.toString();
})

const pugnale = document.getElementById("pugnale");

pugnale.addEventListener("click", () =>{
    winner_check(azzerapunt, punteggio_user, punteggio_computer);
    let computer = getComputerChoice();
    let user = 2
    console.log(roPaScRound(user, computer));
    tu.textContent = punteggio_user.toString();
    nemico.textContent = punteggio_computer.toString();
})

const diavolo = document.getElementById("diavolo");

diavolo.addEventListener("click", () =>{
    winner_check(azzerapunt, punteggio_user, punteggio_computer);
    let computer = getComputerChoice();
    let user = 3
    console.log(roPaScRound(user, computer));
    tu.textContent = punteggio_user.toString();
    nemico.textContent = punteggio_computer.toString();
})



