class Fundo {
    constructor(imagePath, speed) {
        this.img = loadImage(imagePath);
        this.speed = speed;
        this.setOriginalImagePositions();
        this.alpha = 0;
    }

    setOriginalImagePositions() {
        this.pos1 = 0;
        this.pos2 = windowWidth;
    }

    drawFundo() {
        image(this.img, this.pos1, 0, windowWidth, windowHeight);
        image(this.img, this.pos2, 0, windowWidth, windowHeight);

        this.nascerEPorDoSol();

        this.moveImage();
    }

    nascerEPorDoSol() {
        if (pontuacao.pontos % 250 < 125) {
            this.alpha -= 0.01;
        } else {
            this.alpha += 0.01;
        }
        if (this.alpha < 0) {
            this.alpha = 0;
        }
        if (this.alpha > 0.4) {
            this.alpha = 0.4;
        }

        fill("rgba(0,0,0," + this.alpha + ")");
        rect(0, 0, windowWidth, windowHeight);
    }

    moveImage() {
        this.pos1 -= this.speed;
        this.pos2 -= this.speed;

        if (this.pos2 < 0) {
            this.setOriginalImagePositions();
        }
    }
}