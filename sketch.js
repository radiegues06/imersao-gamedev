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

    inimigoPequeno = new Personagem(
        new Sprite("assets/imagens/inimigos/gotinha.png", 416, 728, 7, 4),
        new Screen(416 / 5, 728 / 5, windowWidth - 100, windowHeight - 1.05 * 728 / 5)
    );

    inimigoGrande = new Personagem(
        new Sprite("assets/imagens/inimigos/troll.png", 2000, 2400, 6, 5, 28),
        new Screen(2000 / 5, 2400 / 5, windowWidth - 500, windowHeight - 1.05 * 2400 / 5)
    );

    inimigoVoador = new Personagem(
        new Sprite("assets/imagens/inimigos/gotinha-voadora.png", 600, 900, 6, 3, 16),
        new Screen(600 / 5, 900 / 5, windowWidth - 100, 0.3 * windowHeight)
    );
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
}

function draw() {
    backgroundImages.forEach(element => element.drawFundo());
    protagonista.animate();
    inimigoPequeno.animate();
    inimigoGrande.animate();
    inimigoVoador.animate();
}