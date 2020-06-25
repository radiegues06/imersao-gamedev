let backgroundImages = [];
let protagonista;
let somDoPulo;

const GRAVIDADE = 2;
const CEU = 0.5 * window.innerHeight;
const CHAO = 0.02 * window.innerHeight;

function preload() {
    somDoPulo = loadSound("assets/sons/somPulo.mp3");
    backgroundImages[0] = new Fundo("assets/imagens/cenario/Sky.png", 0);
    backgroundImages[1] = new Fundo("assets/imagens/cenario/BG_Decor.png", 2);
    backgroundImages[2] = new Fundo("assets/imagens/cenario/Middle_Decor.png", 5);
    backgroundImages[3] = new Fundo("assets/imagens/cenario/Foreground.png", 10);
    backgroundImages[4] = new Fundo("assets/imagens/cenario/Ground.png", 18);

    protagonista = new Protagonista(
        new Sprite("assets/imagens/personagem/correndo.png", 880, 1080, 4, 4),
        new Screen(0.5, .07 * windowWidth, CHAO)
    );

    inimigoPequeno = new Inimigo(
        new Sprite("assets/imagens/inimigos/gotinha.png", 416, 728, 7, 4),
        new Screen(0.5, windowWidth - 100, CHAO)
    );

    inimigoGrande = new Inimigo(
        new Sprite("assets/imagens/inimigos/troll.png", 2000, 2400, 6, 5, 28, 12, 57),
        new Screen(1, windowWidth - 500, CHAO)
    );

    inimigoVoador = new Inimigo(
        new Sprite("assets/imagens/inimigos/gotinha-voadora.png", 600, 900, 6, 3, 16, 0, 15),
        new Screen(0.5, windowWidth - 600, CEU)
    );
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
}

function keyPressed() {
    if (keyCode === 32 || keyCode == 38) {
        protagonista.pular();
    }
}

function draw() {
    backgroundImages.forEach(element => element.drawFundo());
    protagonista.aplicarGravidade();
    protagonista.animate();
    inimigoPequeno.animate();
    inimigoPequeno.andar();
    // inimigoGrande.animate();
    // inimigoVoador.animate();
}