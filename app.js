// const start = function() {
//     console.log('The game is starting...');
// };
// const person = {
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };                       //functions can be stored in an object
// person.greet();
//                          //startGame();  direct execution
// console.dir(start);
//startGameBtn.addEventListener('click', start);        //indirect execution

const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;

const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WON";
const RESULT_COMPUTER_WINS = "COMPUTER_WON";

const getPlayerChoice = () => {
  // const selection = prompt("Rock, Paper or Scissirs?", "");
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase(); //toUpperCase method
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random(); //generate value between 0 & 1
  console.log("randomValue = ", randomValue);
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

//arrow function + ternary operator
const getWinner = (cChoise, pChoice) => 
  cChoise === pChoice
    ? RESULT_DRAW
    : (cChoise === ROCK && pChoice === PAPER) ||
      (cChoise === SCISSORS && pChoice === ROCK) ||
      (cChoise === PAPER && pChoice === SCISSORS)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

// const getWinner = function (cChoice, pChoice) {
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     //we don't need parenthesis here, because of operator presedence
//     //it was set by code editor
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === SCISSORS && pChoice === ROCK) ||
//     (cChoice === PAPER && pChoice === SCISSORS)
//   ) {
//     {
//       return RESULT_PLAYER_WINS;
//     }
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }
// };

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    //if true - stop the game
    return;
  }
  console.log("The game is starting...");
  const playerChoise = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner = getWinner(computerChoice, playerChoise);
  let message = `'You picked' ${playerChoise}, 'computer picked' ${computerChoice}, 'therefore you ' `;
  if (winner = RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner = RESULT_PLAYER_WINS) {
    message = message + 'Won!';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;  //now we can tap to bottom and start a new game

  //my own additional output
  console.log(
    "computerChoice is:",
    computerChoice,
    " - Calculation method is: <0.34=ROCK, <0.67=PAPER, otherwise=SCISSORS"
  );
  console.log("playerSelection is:", playerChoise);
  console.log("winner is:", winner);
});
