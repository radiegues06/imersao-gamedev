class GameOver {
    constructor() {
        this.image = loadImage("assets/imagens/assets/game-over.png");
    }

    draw() {
        image(this.image, windowWidth / 2 - 412, windowHeight / 3, 412 * 2, 78 * 2);
        noLoop();
    }

    key(keyCode) {
        if (keyCode === 13 || keyCode === 32) {
            if (pontuacao.pontos > 500) {
                SCENE = "fase2";
            } else {
                SCENE = "fase1";
            }

            resetGame();
            sons.mudaScene();
            loop();
        }

    }
}