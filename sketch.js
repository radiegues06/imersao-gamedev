function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(FRAME_RATE);
}

function draw() {
    cenas[SCENE].draw()
    sons.playScene();
}


function keyPressed() {
    cenas[SCENE].key(keyCode);
}