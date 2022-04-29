

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

playerChoice = prompt("Rock, Paper, or Scissors")
playerSelection = playerChoice.toUpperCase();
computerSelection = computerPlay();
console.log(playerSelection)
console.log(computerSelection)

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie"
    }

    if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ){
        return "you win"
    }
    if (
        (playerSelection == "ROCK" && computerSelection == "PAPER") ||
        (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
        (playerSelection == "SCISSORS" && computerSelection == "ROCK")
    ){
        return "you lose"
    }
}

console.log(playRound(playerSelection,computerSelection));