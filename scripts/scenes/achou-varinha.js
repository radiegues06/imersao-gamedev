class AchouVarinha {
    constructor() {}

    draw() {
        fill(255, 255, 255);
        rect(0, 0, windowWidth, windowHeight);

        textAlign(CENTER, CENTER);
        fill(0, 0, 0);
        textSize(50);
        textFont('Helvetica');
        text('Parabéns, você encontrou a varinha da', windowWidth / 2, windowHeight * 0.25);
        textFont(fonteJogo);
        textSize(100);
        text('Hypsta', windowWidth / 2, windowHeight * 0.4);

        textSize(40);
        text(`Some ${pontosFinal["fase2"]} pontos para ganhar o jogo.`, windowWidth / 2, windowHeight * 0.58);

        textFont('Helvetica');
        textSize(30);
        text('Aperte ENTER para ir para a próxima fase', windowWidth / 2, windowHeight * 0.7);

        protagonista.screen.x = protagonista.screen.xInitial;
        protagonista.screen.y = protagonista.screen.yInitial;
        protagonista.animacoes["poder"].animate();
    }

    key(keyCode) {
        if (keyCode === 13) {
            SCENE = "fase2";
            resetFrameRate();
        }
    }
}