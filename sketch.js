let backgroundImages = [];
let protagonista = {};

function preload() {
    backgroundImages[0] = new Fundo("assets/imagens/cenario/Sky.png", 0);
    backgroundImages[1] = new Fundo("assets/imagens/cenario/BG_Decor.png", 2);
    backgroundImages[2] = new Fundo("assets/imagens/cenario/Middle_Decor.png", 5);
    backgroundImages[3] = new Fundo("assets/imagens/cenario/Foreground.png", 10);
    backgroundImages[4] = new Fundo("assets/imagens/cenario/Ground.png", 18);

    protagonista = new Personagem(
        new Sprite("assets/imagens/personagem/correndo.png", 880, 1080, 4, 4),
        new Screen(880 / 5, 1080 / 5, .07 * windowWidth, windowHeight - 1.05 * 1080 / 5)
    );
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
}

function draw() {
    backgroundImages.forEach(element => element.drawFundo());
    protagonista.animate();
}