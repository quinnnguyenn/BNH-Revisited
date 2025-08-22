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
    let message = "";

    switch (uchoice) {
      case "Bear":
        message = compchoice === "Bear" ? "It's a tie!" :
                  compchoice === "Ninja" ? "You Win!" : "The Computer Wins!";
        break;
      case "Ninja":
        message = compchoice === "Bear" ? "The Computer Wins!" :
                  compchoice === "Ninja" ? "It's a tie!" : "You Win!";
        break;
      case "Hunter":
        message = compchoice === "Bear" ? "You win!" :
                  compchoice === "Ninja" ? "The Computer Wins!" : "It's a tie!";
        break;
    }

    if (message === "You win!") {
      playerWins++;
    } else if (message === "The Computer Wins!") {
      computerWins++;
    }

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
});