let backgroundImages = [];
let telaInicialImage;
let gameOverImage;

let fonteJogo;

let protagonista;
let inimigos;
const NUMERO_INIMIGOS = 2;

let sons;
const MUTE = false;

let FRAME_RATE = 30;
let SCENE = 0;

const GRAVIDADE = 1.5;
const DIREITA = 0.04 * window.innerWidth;
const ESQUERDA = window.innerWidth;
const CEU = 0.5 * window.innerHeight;
const CHAO = 0.02 * window.innerHeight;

const SHADOW = 4;

function preload() {

    telaInicialImage = loadImage("assets/imagens/assets/telaInicial.png");
    fonteJogo = loadFont("assets/imagens/assets/fonteTelaInicial.otf");

    backgroundImages[0] = new Fundo("assets/imagens/cenario/Sky.png", 0);
    backgroundImages[1] = new Fundo("assets/imagens/cenario/BG_Decor.png", 2);
    backgroundImages[2] = new Fundo("assets/imagens/cenario/Middle_Decor.png", 5);
    backgroundImages[3] = new Fundo("assets/imagens/cenario/Foreground.png", 10);
    backgroundImages[4] = new Fundo("assets/imagens/cenario/Ground.png", 18);

    gameOverImage = loadImage("assets/imagens/assets/game-over.png");

    sons = new Sons();

    protagonista = new Protagonista(
        new Sprite("assets/imagens/personagem/correndo.png", 880, 1080, 4, 4),
        new Screen(0.5, DIREITA, CHAO)
    );

    pontuacao = new Pontuacao();

    inimigos = [];
    for (let i = 0; i < NUMERO_INIMIGOS; i++) {
        inimigos.push(inimigosFactory());
    }
}

function resetGame() {
    protagonista.reset();
    pontuacao.reset();
    inimigos.forEach(inimigo => {
        inimigo.reset();
    });
}