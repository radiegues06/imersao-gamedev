class Inimigo extends Personagem {
    constructor(sprite, screen, velocidade) {
        super(sprite, screen);
        this.velocidade = velocidade;
        this.jaDeuBonus = false;
    }

    andar() {
        this.screen.x -= this.velocidade;
        if (this.screen.x < -this.screen.width) {
            this.screen.x = this.screen.xInitial;
            this.jaDeuBonus = false;
        }
    }

    checkPassouProtagonista() {
        return this.screen.x + this.screen.width < protagonista.screen.x;
    }
}