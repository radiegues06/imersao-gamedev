class Personagem {
    constructor(imagePath, spriteWidth, spriteHeight, nRowSprite, nColumnSprite, screenWidth, screenHeight) {
        this.image = loadImage(imagePath);

        this.frame = 0;

        this.screen = {
            x: .07 * windowWidth,
            y: windowHeight - 1.05 * screenHeight,
            width: screenWidth,
            height: screenHeight
        }

        this.sprite = {
            row: 0,
            column: 0,
            nRow: nRowSprite,
            nColumn: nColumnSprite,
            totalFrames: nRowSprite * nColumnSprite,
            width: spriteWidth,
            height: spriteHeight,
            cell: {
                width: spriteWidth / nColumnSprite,
                height: spriteHeight / nRowSprite
            }
        }
    }

    animate() {
        image(this.image, this.screen.x, this.screen.y, this.screen.width, this.screen.height,
            this.sprite.column * this.sprite.cell.width, this.sprite.row * this.sprite.cell.height,
            this.sprite.cell.width, this.sprite.cell.height);
        this.nextFrame();
    }

    nextFrame() {
        this.frame = (this.frame + 1) % this.sprite.totalFrames;
        this.sprite.row = floor((this.frame) / this.sprite.nColumn);
        this.sprite.column = this.frame % this.sprite.nRow;
    }
}