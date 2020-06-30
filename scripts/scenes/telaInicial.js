class telaInicial {
    constructor() {
        this.image = loadImage("assets/imagens/assets/telaInicial.png");
    }

    draw() {

        const padding = 15;
        image(this.image, 0, 0, windowWidth, windowHeight);

        textAlign(CENTER, CENTER);
        fill(0, 0, 0);
        textSize(60);
        textFont(fonteJogo);
        text('As aventuras de', windowWidth / 2, windowHeight * 0.25);
        textSize(100);
        text('Hypsta', windowWidth / 2, windowHeight * 0.4);

        textSize(30);
        text(`Ajude a bruxinha a encontrar sua varinha perdida na floresta e voltar para casa. \n Some ${pontosFinal.fase1} pontos para encontrar a varinha.`, windowWidth / 2, windowHeight * 0.6);

        textFont('Helvetica');
        textSize(40);
        text('Use a seta para cima ou a barra de espaço para pular.', windowWidth / 2, windowHeight * 0.8);
        textSize(30);
        text('Aperte ENTER ou ESPAÇO para iniciar o jogo', windowWidth / 2, windowHeight * 0.9);

        fill(200, 200, 200);
        textAlign(RIGHT, BOTTOM);
        textSize(15);
        text("Desenvolvido por Rafael Amancio Diegues", windowWidth - padding, windowHeight - padding)

        noLoop();
    }

    key(keyCode) {
        if (keyCode === 13 || keyCode === 32) {
            SCENE = "fase1";
            sons.mudaScene();
            loop();
        }

    }
}