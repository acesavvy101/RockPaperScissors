function getComputerChoice () {
    const randomNumber = Math.random() * 100; // also put () cus Math.random is a function
    if (randomNumber<33.3) {
        return "rock";
    } else if (randomNumber>33.3 && randomNumber<66.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    let input = prompt ("Enter Rock/Paper/Scissors" ," ");

    input = input.toLowerCase(); // THIS IS WHAT MAKES IT CASE INSENSITIVE

    if (input === "scissors" || input === "rock" || input === "paper") { /* 1.  this has to be input === for all 3 , or else the || operator is gonna return true cus strings are truthy values 
                                                                            2.  normalize input to lower case, AND compare it agains lowercase words to make it case insensitive!!!*/
        return input; // what the assignment asks: "will return one of the valid choices depending on what the user inputs."
    } else {
        return "Invalid";
    }
}


const rock = document.createElement("button");
rock.id = "rock"
const paper = document.createElement("button");
paper.id = "paper"
const scissors = document.createElement("button");
scissors.id = "scissors"

rock.textContent = "rock"; // to label the button
paper.textContent = "paper";
scissors.textContent = "scissors";

rock.style.color= "#B3DEE2";
rock.style.backgroundColor = "#d86d9c"
paper.style.color= "#bfc4ff";
paper.style.backgroundColor = "#fffabf"
scissors.style.color= "#e89ec5";
scissors.style.backgroundColor = "#c6e4e2"

// this is how u connect the button as a user input for the function
rock.addEventListener("click", () => playRound("rock" , getComputerChoice())); // set the arguments for the playround functions
paper.addEventListener("click", () => playRound("paper" , getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors" , getComputerChoice()));

const div = document.querySelector("div");
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);

function showMessage (message) {
    const p = document.createElement("p");
    p.textContent = message; //the text content of p is the argument "message" itself
    div.appendChild(p);
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    let safeHumanChoice = humanChoice.toLowerCase();
    console.log (safeHumanChoice,computerChoice);
    //this entire fuckass time my logic isnt wrong i just had some syntax issues smhhh
    if (safeHumanChoice === "rock" && computerChoice === "scissors") {
        showMessage("You win! rock beats scissors!");
        showMessage(`Human Score: ${++humanScore}`);
    } else if (safeHumanChoice === "scissors" && computerChoice === "paper") {
        showMessage("You win! scissors beats paper!");
        showMessage(`Human Score: ${++humanScore}`);
    } else if (safeHumanChoice === "paper" && computerChoice === "rock") {
        showMessage("You win! paper beats rock!");
        showMessage(`Human Score: ${++humanScore}`);
    } else if (safeHumanChoice === "scissors" && computerChoice === "rock") {
        showMessage("You lose! rock beats scissors!");
        showMessage(`Computer Score: ${++computerScore}`);
    } else if (safeHumanChoice === "paper" && computerChoice === "scissors") {
        showMessage("You lose! scissors beats paper!");
        showMessage(`Computer Score: ${++computerScore}`);
    } else if (safeHumanChoice === "rock" && computerChoice === "paper") {
        showMessage("You lose! paper beats rock!");
        showMessage(`Computer Score: ${++computerScore}`);
    } else if (safeHumanChoice === computerChoice) {
        showMessage("It's a tie!");
    }


     if (humanScore >= 5)  { //first to reach 5
        showMessage("You are a winner :)");
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;        
    } else if (computerScore >= 5) {
        showMessage("You are a loser Womp womp");
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;   
    }
}
  

