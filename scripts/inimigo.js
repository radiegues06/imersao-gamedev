class Inimigo extends Personagem {
    constructor(sprite, screen) {
        super(sprite, screen);
        this.velocidade = 10;
    }

    andar() {
        this.screen.x -= this.velocidade;
        if (this.screen.x < -this.screen.width)
            this.screen.x = windowWidth;
    }
}