let backgroundImg;
let personagem;

function preload() {}

function setup() {
    createCanvas(windowWidth, windowHeight);
    backgroundImg = new Fundo("assets/imagens/cenario/floresta.png", 30);
    personagem = new Personagem("assets/imagens/personagem/correndo.png", 880, 1080, 4, 4, 880 / 5, 1080 / 5);
    frameRate(10);
}

function draw() {
    backgroundImg.drawFundo();
    personagem.animate();
}