const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingBtn = document.getElementById("setting-btn");
const settings = document.getElementById("setting");
const settingsForm = document.getElementById("setting-form");
const difficultySelect = document.getElementById("difficulty");
const words = ["abdalla osama", "nasser elsaid", "ahmed hagag", "john hany", "hussin ahmed", "eslam eid", "yousef elkholi","my team","score","real madrid","c sharpe","hello","arsenal"];
let randomWord;
let score = 0;
let time = 10;
text.focus();
const timeInterval = setInterval(updateTime, 1000);
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
function addWordToDOM() {
randomWord = getRandomWord();
word.innerHTML = randomWord;
}
addWordToDOM();
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}
function gameOver() {
  endgameEl.innerHTML = `
        <h1>GAMEOVER</h1>
        <p>your score is = ${score}</p>
        <button onclick="location.reload()">Restart Game</button>
    `;
  endgameEl.style.display = "flex";
}
function updateTime() {
  time--;
  timeEl.innerHTML = time + "second ";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
text.addEventListener("input", (e) => {
  const insetedText = e.target.value;
  if (insetedText === randomWord) {
    addWordToDOM();
    updateScore();
    e.target.value = "";
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "average") {
      time += 3;
    } else {
      time += 4;
    }
    updateTime();
  }
});
settingBtn.addEventListener("click", () => settings.classList.toggle("hidden"));
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
