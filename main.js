 // 1. randomly return 'rock', 'paper', or 'scissors'

 function computerPlay() {
     let compChoice = Math.floor(Math.random() * Math.floor(3));

     if (compChoice === 0) {
         return "Scissors";
     } else if (compChoice === 1) {
         return "Rock";
     } else if (compChoice === 2) {
         return "Paper";
     }

 }

 // player clicks button and value is used for the playRound() function

 document.getElementById('rock').addEventListener('click', playerChoiceRock);

 document.getElementById('paper').addEventListener('click', playerChoicePaper);

 document.getElementById('scissors').addEventListener('click', playerChoiceScissors);

 function playerChoiceRock() {
     console.log('You chose rock');
     playerResult = 'rock';
     return 'rock';
 }

 function playerChoicePaper() {
     console.log('You chose paper');
     playerResult = 'paper';
     return 'paper';
 }

 function playerChoiceScissors() {
     console.log('You chose scissors');
     playerResult = 'scissors';
     return 'scissors';
 }

 let playerResult = playerChoice();



 //plays round of rock paper scissors

 let playerScore = 0;
 let comScore = 0;

 function playRound(computerSelection, playerSelection) {

     computerSelection = computerPlay();
     playerSelection = playerResult;

     // player played paper
     if (computerSelection === "Scissors" && playerSelection === "paper") {
         return ++comScore + "c=s You lose! Scissors cuts paper!";
     } else if (computerSelection === "Rock" && playerSelection === "paper") {
         return ++playerScore + "c=r You win! Paper covers rock";
     } else if (computerSelection === "Paper" && playerSelection === "paper") {
         return "c=p Draw! Paper is neutral";

         // player played rock
     } else if (computerSelection === "Rock" && playerSelection === "rock") {
         return "c=r Draw! Rock is neutral";
     } else if (computerSelection === "Paper" && playerSelection === "rock") {
         return ++comScore + "c=p You lose! Paper covers rock";
     } else if (computerSelection === "Scissors" && playerSelection === "rock") {
         return ++playerScore + "c=s You win! Rock beats scissors";

         // player played scissors
     } else if (computerSelection === "Rock" && playerSelection === "scissors") {
         return ++comScore + "c=r You lose! Rock beats scissors";
     } else if (computerSelection === "Paper" && playerSelection === "scissors") {
         return ++playerScore + "c=p You Win! Scissors cuts paper";
     } else if (computerSelection === "Scissors" && playerSelection === "scissors") {
         return "c=s Draw! Scissors are neutral";
     }
 }

 console.log(playRound());



 // playRound() plays five rounds and determines a winner at the end

 /* function game() {

      console.log(playRound());

      console.log(playRound());

      console.log(playRound());

      console.log(playRound());

      console.log(playRound());

      if (comScore > playerScore) {
          return "Computer wins."
      } else if (playerScore > comScore) {
          return "Yay, You won!"
      } else if (comScore == playerScore) {
          return "The winner is... It's a tie..."
      }
  }

  console.log(game()); */

 playRound();