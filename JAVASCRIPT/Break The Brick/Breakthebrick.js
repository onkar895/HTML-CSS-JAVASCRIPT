const userScore = document.querySelector(".score");
const grid = document.querySelector(".grid");
const userResult = document.getElementById("result")
const blockWidth = 100;
const blockHeight = 20;
const gridWidth = 560;
const gridHeight = 310;
let timerId;
let ballDiameter = 20;
let xDirection = 2;
let yDirection = 2;
let score = 0;

const startBall = [270, 40];
let ballCurrentPosition = startBall;

const startUser = [230, 10];
let currentPosition = startUser;


function userName() {
    const userName = document.querySelector(".name");
    let user = prompt("Enter your name");
    userName.textContent = user;

}

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const block = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 230),
    new Block(120, 230),
    new Block(230, 230),
    new Block(340, 230),
    new Block(450, 230),
    new Block(10, 190),
    new Block(120, 190),
    new Block(230, 190),
    new Block(340, 190),
    new Block(450, 190),
]


function addBlock() {
    for (let i = 0; i < block.length; i++) {
        const blocks = document.createElement("div");
        blocks.classList.add("block");
        blocks.style.left = block[i].bottomLeft[0] + 'px';
        blocks.style.bottom = block[i].bottomLeft[1] + 'px';
        grid.appendChild(blocks);
    }
}

addBlock();

const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);
document.addEventListener("keydown", moveUser);



function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

function moveUser(e) {
    switch (e.key) {
        case "ArrowLeft":
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10;
                drawUser();
            }
            break;

        case 'ArrowRight':
            if (currentPosition[0] < gridWidth - blockWidth) {
                currentPosition[0] += 10;
                drawUser()
            }
            break;
    }
}

function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);


// moveBall
function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkCollision()
}
timerId = setInterval(moveBall, 15)

function checkCollision() {
    for (i = 0; i < block.length; i++) {
        if (ballCurrentPosition[0] > block[i].bottomLeft[0] &&
            ballCurrentPosition[0] < block[i].bottomRight[0] &&
            ballCurrentPosition[1] + ballDiameter > block[i].bottomLeft[1] &&
            ballCurrentPosition[1] < block[i].topLeft[1]) {
            const allblocks = Array.from(document.querySelectorAll(".block"))
            allblocks[i].classList.remove("block");
            block.splice(i, 1);
            changeDirection();
            score++;
            userScore.textContent = score;
        }
    }
    if (ballCurrentPosition[0] >= (gridWidth - ballDiameter) ||
        ballCurrentPosition[0] <= 0 ||
        ballCurrentPosition[1] >= (gridHeight - ballDiameter)
    ) {
        changeDirection();
    }

    // user paddle 
    if (ballCurrentPosition[0] > currentPosition[0] &&
        ballCurrentPosition[0] < currentPosition[0] + blockWidth &&
        ballCurrentPosition[1] > currentPosition[1] &&
        ballCurrentPosition[1] < currentPosition[1] + blockHeight) {
        changeDirection();
    }
    // bottom grid collision 
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId);
        userResult.textContent = "Better Luck next Time!!";
        document.removeEventListener("keydown", moveBall);
        document.removeEventListener("keydown", moveUser);
    }
}

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2;
        return;
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return;
    }

    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
}