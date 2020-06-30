class Personagem {
    constructor(sprite, screen) {
        this.sprite = sprite;
        this.screen = screen;
        this.screen.width = this.screen.heightFinal / this.sprite.crop.height * this.sprite.crop.width;
        this.screen.height = this.screen.heightFinal;
        this.screen.xInitial = this.screen.xRef + this.screen.width;
        this.screen.yInitial = windowHeight - (this.screen.height + this.screen.yRef);
        this.screen.x = this.screen.xInitial;
        this.screen.y = this.screen.yInitial;
    }

    animate() {
        image(this.sprite.image,
            this.screen.x, this.screen.y, this.screen.width, this.screen.height,
            this.sprite.column * this.sprite.cell.width + this.sprite.horizontalCrop,
            this.sprite.row * this.sprite.cell.height + this.sprite.verticalCrop,
            this.sprite.crop.width,
            this.sprite.crop.height);
        this.nextFrame();
    }

    nextFrame() {
        this.screen.frame = (this.screen.frame + 1) % this.sprite.totalFrames;
        this.sprite.row = floor((this.screen.frame) / this.sprite.nColumn);

        if (this.sprite.direcao === "esquerda") {
            this.sprite.column = this.screen.frame % this.sprite.nColumn;
        } else { // Direita
            this.sprite.column = this.sprite.nColumn - this.screen.frame % this.sprite.nColumn - 1;
        }
    }

    reset() {
        this.screen.x = this.screen.xInitial;
        this.screen.y = this.screen.yInitial;
    }
}