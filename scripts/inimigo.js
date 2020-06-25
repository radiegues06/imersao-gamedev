class Inimigo extends Personagem {
    constructor(sprite, screen, velocidade) {
        super(sprite, screen);
        this.velocidade = velocidade;
    }

    andar() {
        this.screen.x -= this.velocidade;
        if (this.screen.x < -this.screen.width)
            this.screen.x = this.screen.xInitial;
    }
}