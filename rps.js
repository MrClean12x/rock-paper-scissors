

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


if(playerSelection == computerSelection){
    console.log("tie")
}

if (
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
   (playerSelection == "PAPER" && computerSelection == "ROCK") ||
   (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ){
   console.log("You win")
   }
if (
        (playerSelection == "ROCK" && computerSelection == "PAPER") ||
        (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
        (playerSelection == "SCISSORS" && computerSelection == "ROCK")
    ){
        console.log("You lose")
        }
