class Fundo {
    constructor(imagePath, speed) {
        this.img = loadImage(imagePath);
        this.speed = speed;
        this.setOriginalImagePositions();
    }

    setOriginalImagePositions() {
        this.pos1 = 0;
        this.pos2 = windowWidth;
    }

    drawFundo() {
        image(this.img, this.pos1, 0, windowWidth, windowHeight);
        image(this.img, this.pos2, 0, windowWidth, windowHeight);
        // fill("rgba(0,0,0,0.5)")
        //rect(0, 0, windowWidth, windowHeight);
        this.moveImage();
    }

    moveImage() {
        this.pos1 -= this.speed;
        this.pos2 -= this.speed;

        if (this.pos2 < 0) {
            this.setOriginalImagePositions();
        }
    }
}