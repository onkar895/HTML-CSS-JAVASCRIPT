const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
let gridWidth = 560;


const startUser = [230, 10]
let currentPosition = startUser;

const startBall = [270, 40]
let ballCurrentPosition = startBall;
let ballDirection = [2, 2];

// create block
class Block {
    // The constructor method is called automatically when a new object is created.
    // If you do not define a constructor method, JavaScript will add an empty constructor method.
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]; // [10,270]
        this.bottomRight = [xAxis + blockWidth, yAxis]; // [110,270]
        this.topLeft = [xAxis, yAxis + blockHeight]; // [10,290]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]; //[110,290]
    }
}

// creates an array of block objects with specific positions on the screen.
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
];


function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block'); // classList.add: add a class to the element
        // console.log(block.style);
        // console.log(block.style.left);
        // block.style.left = '100px';
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        // block.style.bottom = '50px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}

addBlocks();

// Add user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);

// Draw user
function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

// Add mover
function moveUser(u) {
    switch (u.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10;
                console.log(currentPosition[0]);
                drawUser();
            }
            break;

        case 'ArrowRight':
            if (currentPosition[0] < gridWidth - blockWidth) {
                currentPosition[0] += 10;
                console.log(currentPosition[0]);
                drawUser();
            }
            break;
    }

}

//Add a ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

// Draw a ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

function moveBall() {
    // check for collisions with walls
    if (ballCurrentPosition[0] >= gridWidth - 20 || ballCurrentPosition[0] <= 0) {
        ballDirection[0] = -ballDirection[0];
    }
    if (ballCurrentPosition[1] >= 280 || ballCurrentPosition[1] <= 0) {
        ballDirection[1] = -ballDirection[1];
    }

    // check for collisions with blocks
    for (let i = 0; i < blocks.length; i++) {
        if (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
            ballCurrentPosition[1] + 20 > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]) {
            ballDirection[1] = -ballDirection[1];
            const block = document.querySelector(`.block:nth-child(${i+1})`);
            block.classList.remove('block');
            blocks.splice(i, 1);
        }
    }

    ballCurrentPosition[0] += ballDirection[0];
    ballCurrentPosition[1] += ballDirection[1];
    drawBall();
}

document.addEventListener('keydown', moveUser);
setInterval(moveBall, 0);