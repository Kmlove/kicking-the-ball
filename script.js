const ball = document.getElementById("ball");
ball.style.left = "190px";

function moveLeft() {
    let left = ball.style.left.replace("px", "");
    let leftNumber = Number(left);

    if(left > 12){
        ball.style.left = `${leftNumber-1}px`;
    } else{
        alert("You are about to go out of bounds! Move right!");
    }
};

function moveRight() {
    let left = ball.style.left.replace("px", "");
    let leftNumber = Number(left);

    if(left < 371){
        ball.style.left = `${leftNumber+1}px`;
    } else{
        alert("You are about to go out of bounds! Move left!");
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveLeft();
    } else if (event.key === "ArrowRight") {
        moveRight();
    }
})

