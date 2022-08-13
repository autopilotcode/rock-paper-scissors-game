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
  ).toUpperCase(); //.toUpperCase method
  if (selection !== ROCK && 
    selection !== PAPER && 
    selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
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
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === SCISSORS && pChoice === ROCK) ||
      (cChoice === PAPER && pChoice === SCISSORS)
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
  const computerChoice = getComputerChoice(); //might be undefined (if incorrect choice)
  let winner;
    if (playerChoise) {
      winner = getWinner(computerChoice, playerChoise);
    } else {
      winner = getWinner(computerChoice); //we know that plyaerChoice is undefined
    }
  //         if playerChoise is truthy use playerChoise otherwise use DEFAULT_USER_CHOICE
  // let message = `'You picked' ${playerChoise ? playerChoise : DEFAULT_USER_CHOICE}, 'computer picked' ${computerChoice}, 'therefore you ' `;
  let message = `'You picked' ${playerChoise || DEFAULT_USER_CHOICE}, 'computer picked' ${computerChoice}, 'therefore you ' `;

  if (winner === RESULT_DRAW) {
    message = message + "had a draw.";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "Won!";
  } else {
    message = message + "Lost.";
  }
  alert(message);
  gameIsRunning = false; //now we can tap to bottom and start a new game

  //my own additional output
      console.log(
        "computerChoice is:",
        computerChoice,
        " - Calculation method is: <0.34=ROCK, <0.67=PAPER, otherwise=SCISSORS"
      );
      console.log("playerSelection is:", playerChoise);
      console.log("winner is:", winner);
});






//-----------------------------------------------
//not related to the game (rest operator practice)

let a, b;
const sumUp = (resultHandler, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
    for (const num of numbers) {
      sum += validateNumber(num);
    } 
    resultHandler(sum);
};

const substractUp = function() {
  let sum = 0;
  for (const num of arguments) {  //don't use this (arguments - build in operator)
    sum -= num;
  }
  return sum;
};

const showResult = (result) => {
  alert('The result after adding all numbers is: ' + result);
}

//here sumUo will execute showResult
sumUp(showResult, 5, 'qwqe', -3, 6, 1);
sumUp(showResult, 5, 10, -3, 6, 10, 25, 88);
console.log(substractUp(1, 10, 15, 20));
