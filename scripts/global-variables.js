let backgroundImages = [];
let gameOverImage;
let telaInicialImage;
let protagonista;
let somBonus;
let somDoPulo;

let FRAME_RATE = 30;
let SCENE = 0;

let inimigos = [];

const GRAVIDADE = 1.5;
const DIREITA = 0.02 * window.innerWidth;
const ESQUERDA = window.innerWidth;
const CEU = 0.5 * window.innerHeight;
const CHAO = 0.02 * window.innerHeight;

function preload() {
    somDoPulo = loadSound("assets/sons/somPulo.mp3");
    somBonus = loadSound("assets/sons/bonus.wav");
    backgroundImages[0] = new Fundo("assets/imagens/cenario/Sky.png", 0);
    backgroundImages[1] = new Fundo("assets/imagens/cenario/BG_Decor.png", 2);
    backgroundImages[2] = new Fundo("assets/imagens/cenario/Middle_Decor.png", 5);
    backgroundImages[3] = new Fundo("assets/imagens/cenario/Foreground.png", 10);
    backgroundImages[4] = new Fundo("assets/imagens/cenario/Ground.png", 18);

    telaInicialImage = loadImage("assets/imagens/assets/telaInicial.png");

    gameOverImage = loadImage("assets/imagens/assets/game-over.png");

    protagonista = new Protagonista(
        new Sprite("assets/imagens/personagem/correndo.png", 880, 1080, 4, 4),
        new Screen(0.5, DIREITA, CHAO)
    );

    pontuacao = new Pontuacao();

    inimigos.push(inimigosFactory());
    inimigos.push(inimigosFactory());
    inimigos.push(inimigosFactory());
    inimigos.push(inimigosFactory());
}