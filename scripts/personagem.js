class Personagem {
    constructor(sprite, screen) {

        this.screen = screen;
        this.sprite = sprite;
    }

    animate() {
        image(this.sprite.image, this.screen.x, this.screen.y, this.screen.width, this.screen.height,
            this.sprite.column * this.sprite.cell.width, this.sprite.row * this.sprite.cell.height,
            this.sprite.cell.width, this.sprite.cell.height);
        this.nextFrame();
    }

    nextFrame() {
        this.screen.frame = (this.screen.frame + 1) % this.sprite.totalFrames;
        this.sprite.row = floor((this.screen.frame) / this.sprite.nColumn);
        this.sprite.column = this.screen.frame % this.sprite.nColumn;
    }
}