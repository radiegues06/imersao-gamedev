class AchouVarinha {
    constructor() {}

    draw() {
        fill(255, 255, 255);
        rect(0, 0, windowWidth, windowHeight);

        textAlign(CENTER, CENTER);
        fill(0, 0, 0);
        textSize(60);
        textFont('Helvetica');
        text('Parabéns, você encontrou a varinha da', windowWidth / 2, windowHeight * 0.2);
        textFont(fonteJogo);
        textSize(100);
        text('Hypsta', windowWidth / 2, windowHeight * 0.4);

        textFont('Helvetica');
        textSize(40);
        text('Aperte ENTER para ir para a próxima fase', windowWidth / 2, windowHeight * 0.6);

        protagonista.animacoes["achou-varinha"].animate();
    }

    key(keyCode) {
        if (keyCode === 13) {
            SCENE = "fase2";
        }
    }
}