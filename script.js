const ball = document.getElementById("ball");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");
let timerNum = document.getElementById("timer").querySelector('p');
const timerDiv = document.getElementById("timer");

ball.style.left = "190px";
ball.style.top = "270px";

let changingBackground;
let timerInterval;

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

function timerCountdown (){

    function countdown(){
        if(num === 1){
            timerNum.innerHTML = "Time's Up!"
            timerNum.style.fontWeight = "bold";
            stopTimer();
            changingBackground = setInterval(timerBackground, 500);
            removeMoveBall();
        } else{
            num --;
            stringNum = String(num);
            timerNum.innerHTML = stringNum;
        }
    }

    let num = Number(timerNum.innerHTML);
    timerInterval = setInterval(countdown, 1000);

}

function stopTimer (){
    clearInterval(timerInterval);
}

function timerBackground(){
    if (timerDiv.style.backgroundColor === "red"){
        timerDiv.style.backgroundColor = "white";
        timerNum.style.color = "black";
    } else {
        timerDiv.style.backgroundColor = "red";
        timerNum.style.color = "white";
    }
}

function removeMoveBall() {
    document.removeEventListener("keydown", moveBall);
}

function preventKeyBoardScroll(e){
    e.preventDefault();
}

function returnKeyBoardScroll(){
    document.removeEventListener("keydown", preventKeyBoardScroll);
}

startBtn.addEventListener("click", function () {
    document.addEventListener("keydown", moveBall);
    timerCountdown();
    document.addEventListener("keydown", preventKeyBoardScroll, false);
});

resetBtn.addEventListener("click", function () {
    ball.style.top = "270px";
    ball.style.left = "190px";
    timerNum.innerHTML = "60";
    timerDiv.style.backgroundColor = "white";
    timerNum.style.fontWeight = "normal";
    timerNum.style.color = "black";
    removeMoveBall();
    stopTimer();
    clearInterval(changingBackground);
    returnKeyBoardScroll();
});


