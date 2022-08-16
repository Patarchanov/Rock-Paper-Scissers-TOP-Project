/* Variables */
let player_box = 0;
let computer_box = 0;
let rounds = 0;

/* DOM Variables */
const playerScore_span = document.getElementById("player_box");
const computerScore_span = document.getElementById("computer_box");
const scores = document.querySelector(".scores");
const results = document.querySelector(".results_box");
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");

/* Computer play */
function getComputerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

/* GAME */

/* Converting lowercase words to upper+lower */
function convertToWord(word) {
  if (word === "rock")
  return "Rock";
  if (word === "paper")
  return "Paper";
  return "Scissors";
}
/* Function when you win */
function win(player, computer) {
  player_box++;
  playerScore_span.innerHTML = player_box;
  computerScore_span.innerHTML = computer_box;
  results.innerHTML = `${convertToWord(player)} beats ${convertToWord(computer)}. You WIN!`;
}

/* Function when you lose */
function lose(player, computer) {
  computer_box++;
  playerScore_span.innerHTML = player_box;
  computerScore_span.innerHTML = computer_box;
  results.innerHTML = `${convertToWord(player)} beats ${convertToWord(computer)}. You LOST!`;
}

/* Function when it's tie */
function tie(player, computer) {
  results.innerHTML = `${convertToWord(player)} equals ${convertToWord(computer)}. It's a TIE!`;
}

/* Function comparing the both choices and choosing the winner */
function game(userChoice) {
  const computerChoice = getComputerPlay();
  switch (userChoice + " " + computerChoice) {
    case "rock scissors":
    case "paper rock":
    case "scissors paper":
      win(userChoice, computerChoice);
      results.style.color = '#000000'
      break;
    case "rock paper":
    case "paper scissors":
    case "scissors rock":
      lose(userChoice, computerChoice);
      results.style.color = '#000000'
      break;
    case "rock rock":
    case "paper paper":
    case "scissors scissors":
      tie(userChoice, computerChoice);
      results.style.color = '#000000'
      break;
  }
  checkWinner();
}

// Winner check function
function checkWinner() {
  if (player_box < 5 && computer_box < 5) {
    return results;
  } else {
    declareWinner();
    player_box = 0;
    computer_box = 0;
  }
}

// Declaring the winner
function declareWinner(){
  if (player_box === 5) {
    results.innerText = "You won the game!!!"
    results.style.color = '#85d356'
  } else if (computer_box === 5){
    results.innerText = "Sorry, you lost..."
    results.style.color = '#DC143C'
  }
}

/* Function activating the game by your click of an choice */
function main() {
  rockChoice.addEventListener('click', function() {
    game("rock");
  })

  paperChoice.addEventListener('click', function() {
    game("paper");
  })

  scissorsChoice.addEventListener('click', function() {
    game("scissors");
  })
}
console.log(main());

/* Function finishing the game after 5 wins/losses */
