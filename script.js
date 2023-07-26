const ball = document.getElementById("ball");
ball.style.left = "190px";

function moveLeft() {
    let left = ball.style.left.replace("px", "");
    let leftNumber = Number(left);
    ball.style.left = `${leftNumber-1}px`;
};

function moveRight() {
    let left = ball.style.left.replace("px", "");
    let leftNumber = Number(left);
    ball.style.left = `${leftNumber+1}px`;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveLeft();
    } else if (event.key === "ArrowRight") {
        moveRight();
    }
})

