// selection of elements
const playerO = document.querySelector(".player-O");
const playerX = document.querySelector(".player-X");
const players = document.querySelector(".players");
const grid = document.querySelector(".grid");
const showWinner = document.querySelector("#show-winner");
const exitBtn = document.querySelector(".exit");
const restartBtns = document.querySelectorAll(".restart");
const winnerName = document.querySelector(".winner-name");
const boxes = document.querySelectorAll(".box");
let counter = 0;
let lastHoveredBox = box0;

// event listeners
grid.addEventListener("click", setTextToBox);
game.addEventListener("mouseover", showTextToBox);
exitBtn.addEventListener("click", () => window.close());
restartBtns.forEach((restartBtn) => {
  restartBtn.addEventListener("click", reset);
});

// functions

// setting O or X to the selected box
function setTextToBox(e) {
  const selectedBox = e.target;
  if (selectedBox.classList.contains("grid")) {
    // Do nothing as we want player to click the actual box and not the empty space
  } else if (playerX.classList.contains("active")) {
    selectedBox.innerHTML = "X";
    selectedBox.classList.add("clicked");
    selectedBox.style.pointerEvents = "none";
    playerX.classList.remove("active");
    playerO.classList.add("active");
    counter++;
  } else if (playerO.classList.contains("active")) {
    selectedBox.innerHTML = "O";
    selectedBox.classList.add("clicked");
    selectedBox.style.pointerEvents = "none";
    playerO.classList.remove("active");
    playerX.classList.add("active");
    counter++;
  }
  if (counter >= 5) {
    checkWinner();
  }
}

function showTextToBox(e) {
  const hoveredBox = e.target;
  if (hoveredBox.classList.contains("box")) {
      if (!lastHoveredBox.classList.contains("clicked")) {
        lastHoveredBox.innerText = "";
      }
    if (playerX.classList.contains("active")) {
      hoveredBox.innerText = "X";
    } else if (playerO.classList.contains("active")) {
      hoveredBox.innerText = "O";
    }
    lastHoveredBox = hoveredBox;
  } else {
    if (!lastHoveredBox.classList.contains("clicked")) {
      lastHoveredBox.innerText = "";
    }
  }
}

// Checking on every step if someone has won
function checkWinner() {
  if (
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML &&
    box1.innerHTML
  ) {
    win(box1.innerHTML);
  } else if (
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML &&
    box4.innerHTML
  ) {
    win(box4.innerHTML);
  } else if (
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML &&
    box7.innerHTML
  ) {
    win(box7.innerHTML);
  } else if (
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML &&
    box1.innerHTML
  ) {
    win(box1.innerHTML);
  } else if (
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML &&
    box2.innerHTML
  ) {
    win(box2.innerHTML);
  } else if (
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML &&
    box3.innerHTML
  ) {
    win(box3.innerHTML);
  } else if (
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML &&
    box1.innerHTML
  ) {
    win(box1.innerHTML);
  } else if (
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML &&
    box3.innerHTML
  ) {
    win(box3.innerHTML);
  }
  // checking if all the boxes are clicked and noone won
  else if (counter === 9) {
    win("Noone");
    winnerName.innerText = "Match Draw";
  }
}

// To display the winner
function win(winner) {
  game.style.display = "none";
  showWinner.style.display = "block";
  winnerName.innerText = `'${winner}' Wins`;
  game.style.display = "none";
  showWinner.style.display = "flex";
}

function reset() {
  counter = 0;
  game.style.display = "flex";
  showWinner.style.display = "none";
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.pointerEvents = "all";
    if(box.classList.contains('clicked')){
        box.classList.remove('clicked');
    }
  });
  if (playerX.classList.contains("active")) {
    playerO.classList.add("active");
    playerX.classList.remove("active");
  }
  lastHoveredBox = box0;
}
