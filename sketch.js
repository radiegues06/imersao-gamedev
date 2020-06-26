function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(FRAME_RATE);
}

function draw() {
    if (SCENE == 0) {
        telaInicial();
    }
    if (SCENE == 1) {
        gameOn();
    }
    if (SCENE == 2) {
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

}

function keyPressed() {

    if (SCENE === 0) {
        if (keyCode === 13) {
            SCENE = 1;
        }
    }

    if (SCENE === 1) {
        if (keyCode === 32 || keyCode == 38) {
            protagonista.pular();
        }
    }

}

function inimigosFactory(i = floor(Math.random() * 3)) {
    if (i === 0) {
        return new Inimigo(
            new Sprite("assets/imagens/inimigos/gotinha.png", 416, 728, 7, 4),
            new Screen(0.5, ESQUERDA, CHAO),
            10);
    }
    if (i === 1) {
        return new Inimigo(
            new Sprite("assets/imagens/inimigos/troll.png", 2000, 2400, 6, 5, 28, 12, 57),
            new Screen(0.85, ESQUERDA, CHAO),
            7);
    }
    if (i === 2) {
        return new Inimigo(
            new Sprite("assets/imagens/inimigos/gotinha-voadora.png", 600, 900, 6, 3, 16, 0, 15),
            new Screen(0.5, ESQUERDA, CEU),
            12);
    }
}