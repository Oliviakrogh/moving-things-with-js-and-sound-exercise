// Your code here
"use strict";

const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
  playMovementSound();
}
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    // 400px bred bane minus 40px bred dodger fx
    dodger.style.left = `${left + 5}px`;
  }
  playMovementSound();
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom < 360) {
    dodger.style.bottom = `${bottom + 5}px`;
  }
  playMovementSound();
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers);

  if (bottom < 360) {
    dodger.style.bottom = `${bottom - 5}px`;
  }
  playMovementSound();
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function playMovementSound() {
  const movementSound = document.getElementById("movementSound");
  movementSound.currentTime = 0;
  movementSound.play();
}

function playGameOver() {
  const gameOver = document.getElementById("gameOver");
  gameOver.currentTime = 0;
  gameOver.play();
}
