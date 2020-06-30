let protagonista;
let inimigos;
const NUMERO_INIMIGOS = 1;

let fonteJogo;
let sons;
const MUTE = false;

let FRAME_RATE = 30;
let cenas;
let SCENE = "telaInicial";

const GRAVIDADE = 1.5;
const DIREITA = 0.04 * window.innerWidth;
const ESQUERDA = window.innerWidth;
const CEU = 0.5 * window.innerHeight;
const CHAO = 0.02 * window.innerHeight;

let pontuacao;
const pontosFinal = {
    fase1: 300,
    fase2: 700
}

const SHADOW = 4;

function preload() {

    fonteJogo = loadFont("assets/imagens/assets/fonteTelaInicial.otf");


    cenas = {
        telaInicial: new telaInicial(),
        fase1: new Fase1(),
        "achou-varinha": new AchouVarinha(),
        fase2: new Fase2(),
        gameOver: new GameOver(),
        encerramento: new Encerramento()
    }
    sons = new Sons();

    protagonista = new Protagonista();

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