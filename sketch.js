function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(FRAME_RATE);
}

function draw() {
    if (SCENE === 0) {
        telaInicial();
    }
    if (SCENE === 1) {
        gameOn();
    }
    if (SCENE === 2) {
        gameOver();
    }
}

function gameOn() {
    backgroundImages.forEach(element => element.drawFundo());

    protagonista.aplicarGravidade();
    protagonista.animate();

    inimigos.forEach(inimigo => {
        inimigo.animate();
        inimigo.andar();

        if (protagonista.checarColisao(inimigo)) {
            SCENE = 2;
        }

        if (inimigo.checkPassouProtagonista() & inimigo.jaDeuBonus === false) {
            inimigo.jaDeuBonus = true;
            // somBonus.play();
            pontuacao.addBonus();
        }
    })

    pontuacao.atualizaPontuacao();

}

function gameOver() {
    image(gameOverImage, windowWidth / 2 - 412, windowHeight / 3, 412 * 2, 78 * 2);
    noLoop();
}

function telaInicial() {
    const padding = 15;

    image(telaInicialImage, 0, 0, windowWidth, windowHeight);

    textAlign(CENTER, CENTER);
    fill(0, 0, 0);
    textSize(60);
    textFont(fonteJogo);
    text('As aventuras de', windowWidth / 2, windowHeight * 0.3);
    textSize(100);
    text('Hypsta', windowWidth / 2, windowHeight * 0.45);

    textFont('Helvetica');
    textSize(40);
    text('Aperte ENTER ou ESPAÇO para iniciar o jogo', windowWidth / 2, windowHeight * 0.7);

    fill(200, 200, 200);
    textAlign(RIGHT, BOTTOM);
    textSize(15);
    text("Desenvolvido por Rafael Amancio Diegues", windowWidth - padding, windowHeight - padding)
}

function keyPressed() {

    if (SCENE === 0) {
        if (keyCode === 13 || keyCode === 32) {
            SCENE = 1;
        }
    } else if (SCENE === 1) {
        if (keyCode === 32 || keyCode == 38) {
            protagonista.pular();
        }
    } else if (SCENE == 2) {
        if (keyCode === 13 || keyCode === 32) {
            resetGame();
            SCENE = 1;
            loop();
        }
    }

}