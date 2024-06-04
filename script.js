const mole = document.getElementById('mole');
const scoreContainer = document.getElementById('score');
const scoreValue = document.getElementById('score-value');
let score = 0;
let moleInterval;

function getRandomPosition() {
    const gameContainer = document.getElementById('game-container');
    const maxX = gameContainer.clientWidth - mole.clientWidth;
    const maxY = gameContainer.clientHeight - mole.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}

function moveMole() {
    const newPosition = getRandomPosition();
    mole.style.left = `${newPosition.x}px`;
    mole.style.top = `${newPosition.y}px`;
}

function incrementScore() {
    score++;
    scoreValue.textContent = score;
    if (score === 100) {
        document.body.style.backgroundImage = "url('img/background_2.png')";
        stopGame();
        scoreContainer.style.display = 'none';
    }
}

function startGame() {
    mole.style.display = 'block';
    moleInterval = setInterval(moveMole, 1000);
}

function stopGame() {
    mole.style.display = 'none';
    clearInterval(moleInterval);
}

mole.addEventListener('click', () => {
    incrementScore();
    moveMole();
});

startGame();
