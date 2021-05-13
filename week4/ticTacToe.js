const chooseTL = document.getElementById("topLeft");
const chooseTM = document.getElementById("topMid");
const chooseTR = document.getElementById("topRight");
const chooseML = document.getElementById("midLeft");
const chooseMM = document.getElementById("midMid");
const chooseMR = document.getElementById("midRight");
const chooseBL = document.getElementById("bottomLeft");
const chooseBM = document.getElementById("bottomMid");
const chooseBR = document.getElementById("bottomRight");

const board = document.getElementById("board");

let count = 0;

function playGame() {
  // if clicked enter X or O
}
chooseTR.addEventListener("click", play);
chooseTR.addEventListener("click", play);
chooseTR.addEventListener("click", play);
chooseML.addEventListener("click", play);
chooseMM.addEventListener("click", play);
chooseMR.addEventListener("click", play);
chooseBL.addEventListener("click", play);
chooseBM.addEventListener("click", play);
chooseBR.addEventListener("click", play);


function play() {
  if (count % 1 == 0) {
    let X = document.createTextNode("X");
    chooseBR.appendChild(X);
  } else {
    let O = document.createTextNode("O");
    chooseBR.appendChild(O);
  }
}

function reset() {
  // clear the changes from gameplay
}
