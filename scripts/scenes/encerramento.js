class Encerramento {
    constructor() {
        this.image = loadImage("assets/imagens/assets/encerramento.png");
    }

    draw() {

        const padding = 15;
        image(this.image, 0, 0, windowWidth, windowHeight);

        textAlign(CENTER, CENTER);
        fill(255, 255, 255);
        textSize(60);
        textFont(fonteJogo);
        text('As aventuras de', windowWidth / 2, windowHeight * 0.25);
        textSize(100);
        text('Hypsta', windowWidth / 2, windowHeight * 0.4);

        textSize(40);
        text('Fim!', windowWidth / 2, windowHeight * .8);

        fill(200, 200, 200);
        textAlign(RIGHT, BOTTOM);
        textSize(15);
        text("Desenvolvido por Rafael Amancio Diegues", windowWidth - padding, windowHeight - padding)


        protagonista.screen.x = windowWidth * 0.42;
        protagonista.screen.y = windowHeight * 0.5;
        protagonista.animacoes["achou-varinha"].animate();


    }

    key(keyCode) {}
}