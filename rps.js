
let playerScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("input")

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

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



function playRound(playerSelection){
    let computerSelection = computerPlay()
    let result = ""

    
    if(playerSelection == computerSelection){
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }

    if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ){  playerScore += 1
        result = ("You win! " + playerSelection + " beats " + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        if (playerScore == 5) {
            result += "<br><br> You won the game! Reload page to play again"
            disableButtons()
        }
    }
    if (
        (playerSelection == "ROCK" && computerSelection == "PAPER") ||
        (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
        (playerSelection == "SCISSORS" && computerSelection == "ROCK")
    ){  computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

    if (computerScore == 5) {
        result += '<br><br>I won the game! Reload the page to play again'
        disableButtons()
    }
    }
    document.getElementById("result").innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})


