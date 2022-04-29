
let playerScore = 0
let computerScore = 0
let roundWinner = ""

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }
//console.log(computerPlay())



function playRound(playerSelection, computerSelection){

    
    if(playerSelection == computerSelection){
        roundWinner =  "tie"
    }

    if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ){  playerScore++
        roundWinner =  "player wins"
    }
    if (
        (playerSelection == "ROCK" && computerSelection == "PAPER") ||
        (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
        (playerSelection == "SCISSORS" && computerSelection == "ROCK")
    ){  computerScore++
        roundWinner =  "computer wins"
    }
}







while (true){
    let playerChoice = prompt("Rock, Paper, or Scissors");
    let playerSelection = playerChoice.toUpperCase();
    let computerSelection = computerPlay();
    playRound(playerSelection,computerSelection)
    console.log(playerScore)
    console.log(computerScore)
    console.log(roundWinner)
    if (playerScore == 5)
        //console.log("You win!");
        break;
    if (computerScore == 5)
        //console.log("You lose.")
        break;
}


