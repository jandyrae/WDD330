document.querySelector(".board").addEventListener('click', playerTurn);
let gameRunning = true;
let currentPlayer = "X";
const player1 = "X";
const player2 = "O";
let gameStart = ["", "", "", "", "", "", "", "", ""];
let winningArray;
let winClass;

// set status to display on page
const statusDisplay = document.querySelector('.gameInfo');
// messages for gameplay
const drawMessage = () => `Game ended in a draw! Try again.`;
const currentPlayersTurn = () => `It's ${currentPlayer}'s turn`;
// Who's turn to start
statusDisplay.innerHTML = currentPlayersTurn();

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
// reset came functionality
function reset() {
  restartGame();
}

function handleSquareClick(clickedSquareEvent) {
  const clickedSquare = clickedSquareEvent.target;
  // turn string into integer that is assigned to index to use in array 
  const clickedSquareIndex = parseInt(clickedSquare.getAttribute('data-square'));
  if (gameStart[clickedSquareIndex] !== '' || !gameRunning) {
    // console.log(gameStart); 
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
  let i = 0;
  handlePlayerChange();
  gameWon = false;
  // loop through the winnerIf arrays 
  while (i <= 7) {
    let winner = winnerIf[i];
    let a = gameStart[winner[0]];
    let b = gameStart[winner[1]];
    let c = gameStart[winner[2]];
    console.log(a, b, c);
    console.log(gameStart, gameWon);
    if (a != '' && b != '' && c != '' && a == b && a == c) {
      winningArray = winner;
      console.log(winner);
      gameWon = true;
      console.log(gameStart, gameWon);
      break;
    }
    i++;
  }
  if (gameWon) {
    winningPlayer = currentPlayer;
    if (winningPlayer === "O") {
      winningPlayer = "X";
    } else {
      winningPlayer = "O";
    }
    document.querySelector("#winner").innerHTML = `Player ${winningPlayer} has won!`;
    statusDisplay.innerHTML = "";
    markWinner(winningArray);
    gameRunning = false;
  }
  // handles if no one wins but there are no empty spaces a "draw" 
  let drawGame = !gameStart.includes("") && !gameWon;
  if (drawGame) {
    statusDisplay.innerHTML = drawMessage();
    gameRunning = false;
    return;
  }
}

function markWinner(winningArray) {
  for (let x = 0; x < winningArray.length; x++) {
    winClass = document.getElementById(`square${winningArray[x]+1}`);
    console.log(winClass)
    winClass.style.color = "green";
  }
}
document.querySelectorAll('.square').forEach(square => square.addEventListener('click', handleSquareClick));
// restart the game set player and clear the array
function restartGame() {
  gameRunning = true;
  currentPlayer = "X";
  gameStart = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll('.square').forEach(square => square.style.color = "black");
  document.querySelector("#winner").innerHTML = "";
  statusDisplay.innerHTML = currentPlayersTurn();
  document.querySelectorAll('.square').forEach(square => square.innerHTML = "");
}