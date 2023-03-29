const grid = document.querySelector('.grid');
const blockWidth = 100;
const blockHeight = 20;
let gridwidth = 560;

// create block`

class block {
    // The constructor method is called automatically when a new object is created.
    // If you do not define a constructor method, JavaScript will add an empty constructor method.
    constructor(xAxis, yAxis) {
        this.bottomleft = [xAxis, yAxis]; // [10,270]
        this.bottomright = [xAxis + blockWidth, yAxis]; // [110,270]
        this.topleft = [xAxis, yAxis + blockHeight]; // [10,290]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]; //[110,290]
    }
}


const blocks = [
    new block(10, 270),
    new block(120, 270),
    new block(230, 270),
    new block(340, 270),
    new block(450, 270),
    new block(10, 240),
    new block(120, 240),
    new block(230, 240),
    new block(340, 240),
    new block(450, 240),
    new block(10, 210),
    new block(120, 210),
    new block(230, 210),
    new block(340, 210),
    new block(450, 210)
]


const startUser = [230, 10]
let currentPosition = startUser;

const startball = [270, 40]
let ballcurrentPosition = startball;



function addblock() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block'); // classList.add: add a class to the element

        console.log(block.style);
        console.log(block.style.left);
        // block.style.left = '100px';
        block.style.left = blocks[i].bottomleft[0] + 'px';
        // block.style.bottom = '50px';
        block.style.bottom = blocks[i].bottomleft[1] + 'px';
        grid.appendChild(block);
    }
}

addblock();

// Add user
const user = document.createElement('div');
user.classList.add('user');
drawuser();
grid.appendChild(user);

// Draw user
function drawuser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

//Add a ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawball();
grid.appendChild(ball);

// Draw a ball
function drawball() {
    ball.style.left = ballcurrentPosition[0] + 'px';
    ball.style.bottom = ballcurrentPosition[1] + 'px';
}


// Add mover
function moveuser(u) {
    switch (u.key) {

        case 'Arrowleft':
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10;
                drawuser();
            }
            break;

        case 'Arrowright':
            if (currentPosition[0] < 0) {
                currentPosition[0] += 10;
                drawuser();
            }
            break;
    }

}

// document.addEventListener('keydown', moveuser)

// move ball
function moveball() {
    ballcurrentPosition[0] += 2;
    ballcurrentPosition[1] += 2;
    drawball();
}
setInterval(moveball, 30);