let playerScore = 0;
let comScore = 0;
let comChose = document.getElementById('com-chose');
let playerChose = document.getElementById('player-chose');



// computer selects random number between 1 and 3
function computerPlay() {
    let compChoice = Math.floor(Math.random() * Math.floor(3));

    if (compChoice === 0) {
        return "scissors";
    } else if (compChoice === 1) {
        return "rock";
    } else if (compChoice === 2) {
        return "paper";
    }

}
// player plays a round by picking rock paper or scissors
document.getElementById('rock').addEventListener('click', function(e) {
    console.log("rock");
    console.log(playRound('rock'));
    console.log(comScore + " " + playerScore);
    let physcomscore = document.getElementById('com-score');
    physcomscore.textContent = comScore;

    const physplayscore = document.getElementById('play-score');
    physplayscore.textContent = playerScore;

    playerChose.textContent = "You chose rock";

});
document.getElementById('paper').addEventListener('click', function(e) {
    console.log("paper");
    console.log(playRound('paper'));
    console.log(comScore + " " + playerScore);
    let physcomscore = document.getElementById('com-score');
    physcomscore.textContent = comScore;

    const physplayscore = document.getElementById('play-score');
    physplayscore.textContent = playerScore;

    playerChose.textContent = "You chose paper";

});
document.getElementById('scissors').addEventListener('click', function(e) {
    console.log("scissors");
    console.log(playRound('scissors'));
    console.log(comScore + " " + playerScore);
    let physcomscore = document.getElementById('com-score');
    physcomscore.textContent = comScore;

    const physplayscore = document.getElementById('play-score');
    physplayscore.textContent = playerScore;

    playerChose.textContent = "You chose scissors";
});

//plays a round with the players choice
function playRound(playerSelection) {

    computerSelection = computerPlay();

    console.log(computerSelection);

    comChose.textContent = "Computer chose " + computerSelection;

    // if nobody has reached 5, continue playing
    if (comScore < 4 && playerScore < 4) {

        if (playerSelection == "rock") {
            if (computerSelection == "rock") {
                return ++playerScore + ++comScore + "P-R.C-R It's a tie";
            } else if (computerSelection == "paper") {
                return ++comScore + "P-R.C-P You lose";
            } else if (computerSelection == "scissors") {
                return ++playerScore + "P-R.C-S You win";
            }
        }
        if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                return ++playerScore + "P-P.C-R You win";
            } else if (computerSelection == "paper") {
                return ++playerScore + ++comScore + "P-P.C-P It's a tie";
            } else if (computerSelection == "scissors") {
                return ++comScore + "P-P.C-S You lose";
            }
        }
        if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                return ++comScore + "P-S.C-R You Lose";
            } else if (computerSelection == "paper") {
                return ++playerScore + "P-S.C-P You win";
            } else if (computerSelection == "scissors") {
                return ++playerScore + ++comScore + "P-S.C-S It's a tie";
            }
        }



        // if someone or both have reached 5, game ends, they have won
    } else if (comScore == 4) {
        let gameOutcome = document.getElementById('game-outcome');
        gameOutcome.textContent = "You lose!";
        return "You Lost!";
    } else if (playerScore == 4) {
        let gameOutcome = document.getElementById('game-outcome');
        gameOutcome.textContent = "You win!";
        return "You won!";
    } else if (comScore == 4 && playerScore == 4) {
        let gameOutcome = document.getElementById('game-outcome');
        gameOutcome.textContent = "It's a draw!";
        return "It's a draw";
    }
}