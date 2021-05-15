document.querySelector(".board").addEventListener('click', playerTurn);
let gameRunning = true;
let currentPlayer = "X";
const player1 = "X"
const player2 = "O"

function playerTurn(event) {
  if (!event.target.innerHTML.length) {
    event.target.innerHTML = currentPlayer;
    // forces turn taking
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }
}

//  reset came functionality
function reset() {
  restartGame();
}

let gameStart = ["", "", "", "", "", "", "", "", ""];

function handleSquareClick(clickedSquareEvent) {
  const clickedSquare = clickedSquareEvent.target;
  // turn string into integer that is assigned to index to use in array 
  const clickedSquareIndex = parseInt(
    clickedSquare.getAttribute('data-square')
  );
  if (gameStart[clickedSquareIndex] !== '' || !gameRunning) {
    console.log(gameStart);
    return;
  }
  handleSquarePlayed(clickedSquare, clickedSquareIndex);
  checkWinner();
}

// function called in handleSquareClick
function handleSquarePlayed(clickedSquare, clickedSquareIndex) {
  gameStart[clickedSquareIndex] = currentPlayer;
  clickedSquare.innerHTML = currentPlayer;
}

// function to handle player change
function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayersTurn();
}

const winnerIf = [
  // array of each possible winning conditions
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  let gameWon = false;
  // loop through the winnerIf arrays 
  for (let i = 0; i <= 7; i++) {
    let winner = winnerIf[i];
    let a = gameStart[winner[0]];
    let b = gameStart[winner[1]];
    let c = gameStart[winner[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      gameWon == true;
      break;
    }
  }
  if (gameWon) {
    statusDisplay.innerHTML = winningMessage();
    gameRunning = false;
  }
  // handles if no one wins but there are no empty spaces a "draw"
  let drawGame = !gameStart.includes("");
  if (drawGame) {
    statusDisplay.innerHTML = drawMessage();
    gameRunning = false;
    return;
  }
  handlePlayerChange();
}

document.querySelectorAll('.square').forEach(square => square.addEventListener('click', handleSquareClick));

// set status to display on page
const statusDisplay = document.querySelector('.gameInfo');
// messages for gameplay and winner
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw! Try again.`;
const currentPlayersTurn = () => `It's ${currentPlayer}'s turn`;

// // Who's turn to start
statusDisplay.innerHTML = currentPlayersTurn();

// restart the game set player and clear the array
function restartGame() {
  gameRunning = true;
  currentPlayer = "X";
  gameStart = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayersTurn();
  document.querySelectorAll('.square').forEach(square => square.innerHTML = "");
}