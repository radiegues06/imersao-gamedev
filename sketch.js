function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(FRAME_RATE);
}

function draw() {
    FRAME_RATE += 0.01;
    frameRate(FRAME_RATE);
    cenas[SCENE].draw()
    sons.playScene();
}


function keyPressed() {
    cenas[SCENE].key(keyCode);
}