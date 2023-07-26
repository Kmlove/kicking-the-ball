const ball = document.getElementById("ball");
ball.style.left = "190px";
ball.style.top = "270px";

function moveLeft() {
    let left = ball.style.left.replace("px", "");
    let leftNumber = Number(left);

    if (left > 12) {
        ball.style.left = `${leftNumber - 1}px`;
    } else {
        alert("You are about to go out of bounds! Move right!");
    }
};

function moveRight() {
    let left = ball.style.left.replace("px", "");
    let leftNumber = Number(left);

    if (left < 371) {
        ball.style.left = `${leftNumber + 1}px`;
    } else {
        alert("You are about to go out of bounds! Move left!");
    }
}

function moveUp() {
    let top = ball.style.top.replace("px", "");
    let topNumber = Number(top);

    if (topNumber > 14) {
        ball.style.top = `${topNumber - 1}px`;
    } else {
        alert("You are about to go out of bounds! Move down field!");
    }
}

function moveDown() {
    let top = ball.style.top.replace("px", "");
    let topNumber = Number(top);

    if (topNumber < 525) {
        ball.style.top = `${topNumber + 1}px`;
    } else {
        alert("You are about to go out of bounds! Move up field!");
    }
}

function moveBall(event) {

    switch (event.key) {
        case "ArrowLeft":
            moveLeft();
            break;

        case "ArrowRight":
            moveRight();
            break;

        case "ArrowUp":
            moveUp();
            break;

        case "ArrowDown":
            moveDown();
            break;

        default:
            break;
    }
}

document.addEventListener("keydown", moveBall);

