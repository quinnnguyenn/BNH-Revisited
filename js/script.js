const choices = ["Bear", "Ninja", "Hunter"];
const results = document.getElementById("results");
const resultsBox = document.getElementById("resultsBox");
const playerWinsDisplay = document.getElementById("playerWins");
const computerWinsDisplay = document.getElementById("computerWins");
const scoreboard = document.getElementById("scoreboard");
const resetBtn = document.getElementById("resetBtn");

let playerWins = 0;
let computerWins = 0;

document.querySelectorAll("button[data-choice]").forEach(button => {
  button.addEventListener("click", () => {
    const uchoice = button.getAttribute("data-choice");
    const compchoice = choices[Math.floor(Math.random() * choices.length)];

    let playerWon = false;
    let computerWon = false;
    let message = "";


    if (uchoice === compchoice) {
      message = "It's a tie!";
    } else if (
      (uchoice === "Bear" && compchoice === "Hunter") ||
      (uchoice === "Hunter" && compchoice === "Ninja") ||
      (uchoice === "Ninja" && compchoice === "Bear")
    ) {
      playerWon = true;
      message = "You Win!";
    } else {
      computerWon = true;
      message = "The Computer Wins!";
    }

    if (playerWon) playerWins++;
    if (computerWon) computerWins++;

    playerWinsDisplay.textContent = playerWins;
    computerWinsDisplay.textContent = computerWins;
    results.innerHTML = `You chose ${uchoice}<br>The computer chose ${compchoice}<br>${message}`;
    resultsBox.style.display = "block";
    scoreboard.style.display = "block";
  });
});

resetBtn.addEventListener("click", () => {
  resultsBox.style.display = "none";
  scoreboard.style.display = "none";
  results.innerHTML = "";
  playerWins = 0;
  computerWins = 0;
  playerWinsDisplay.textContent = playerWins;
  computerWinsDisplay.textContent = computerWins;
});