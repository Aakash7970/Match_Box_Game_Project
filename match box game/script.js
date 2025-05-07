// Puzzle 1: Button Order Logic
let correctSequence = [2, 3, 1];
let userSequence = [];

function checkOrder(num) {
  userSequence.push(num);
  if (userSequence.length === 3) {
    const isCorrect = JSON.stringify(userSequence) === JSON.stringify(correctSequence);
    document.getElementById("puzzle1-status").innerText = isCorrect
      ? "Correct!"
      : "Wrong order. Try again!";
    if (isCorrect) markSolved("puzzle1");
    userSequence = [];
  }
}

// Puzzle 2: Math Puzzle
function checkMath() {
  const answer = parseInt(document.getElementById("puzzle2-input").value);
  if (answer === 37) {
    document.getElementById("puzzle2-status").innerText = "Correct!";
    markSolved("puzzle2");
  } else {
    document.getElementById("puzzle2-status").innerText = "Nope. Try again!";
  }
}
// Puzzle 3: Programer name
function checkPro() {
    const ans = document.getElementById("puzzle3-input").value.trim().toLowerCase();
    if (ans === "aakash") {
      document.getElementById("puzzle3-status").innerText = "Correct!";
      markSolved("puzzle3");
    } else {
      document.getElementById("puzzle3-status").innerText = "Wrong code!";
    }
  }

// Puzzle 4: Secret Code
function checkCode() {
  const code = document.getElementById("puzzle4-input").value.trim().toLowerCase();
  if (code === "magic") {
    document.getElementById("puzzle4-status").innerText = "Correct!";
    markSolved("puzzle4");
  } else {
    document.getElementById("puzzle4-status").innerText = "Wrong code!";
  }
}

// Success Checker
const solved = {
  puzzle1: false,
  puzzle2: false,
  puzzle3: false,
  puzzle4: false
};

function markSolved(id) {
  solved[id] = true;
  checkAllSolved();
}

function checkAllSolved() {
  if (solved.puzzle1 && solved.puzzle2 && solved.puzzle3 && solved.puzzle4) {
    document.getElementById("success-message").classList.remove("hidden");
  }
}
