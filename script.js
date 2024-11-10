let score = 0;
let timer;
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    gameArea.innerHTML = ""; // Clear game area
    spawnCircle();
}

function spawnCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    // Set random position
    circle.style.top = Math.random() * 270 + "px";
    circle.style.left = Math.random() * 270 + "px";

    // Add hover event
    circle.addEventListener("mouseenter", () => {
        score++;
        scoreDisplay.textContent = score;
        gameArea.removeChild(circle);
        spawnCircle();
    });

    gameArea.appendChild(circle);

    // Set timer to remove the circle if it’s not hovered in time
    clearTimeout(timer);
    timer = setTimeout(() => {
        if (gameArea.contains(circle)) {
            gameArea.removeChild(circle);
            score--;
            scoreDisplay.textContent = score;
            spawnCircle();
        }
    }, 1500);
}
