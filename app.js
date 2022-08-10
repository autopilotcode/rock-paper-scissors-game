const startGameBtn = document.getElementById("start-game-btn");

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

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;

const getPlayerChoice = function () {
  // const selection = prompt("Rock, Paper or Scissirs?", "");
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase(); //toUpperCase method
  if (
      selection !== ROCK && 
      selection !== PAPER && 
      selection !== SCISSORS
      ) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener("click", function() {
  if (gameIsRunning) {       //if true - stop the game
    return;
  }
  console.log("The game is starting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
