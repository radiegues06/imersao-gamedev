class Personagem {
    constructor(sprite, screen) {

        this.screen = screen;
        this.sprite = sprite;
    }

    animate() {
        image(this.sprite.image, this.screen.x, this.screen.y,
            this.screen.factor * this.sprite.crop.width,
            this.screen.factor * this.sprite.crop.height,
            this.sprite.column * this.sprite.cell.width + this.sprite.horizontalCrop,
            this.sprite.row * this.sprite.cell.height + this.sprite.verticalCrop,
            this.sprite.crop.width,
            this.sprite.crop.height);
        noFill();
        rect(this.screen.x, this.screen.y, this.screen.factor * this.sprite.crop.width, this.screen.factor * this.sprite.crop.height);
        this.nextFrame();
    }

    nextFrame() {
        this.screen.frame = (this.screen.frame + 1) % this.sprite.totalFrames;
        this.sprite.row = floor((this.screen.frame) / this.sprite.nColumn);
        this.sprite.column = this.screen.frame % this.sprite.nColumn;
    }
}