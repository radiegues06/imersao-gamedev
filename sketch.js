let backgroundImg;

function preload() {}

function setup() {
    createCanvas(windowWidth, windowHeight);
    backgroundImg = new Fundo("assets/imagens/cenario/floresta.png", 3);
}

function draw() {
    backgroundImg.drawFundo();
}