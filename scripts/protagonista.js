class Protagonista extends Personagem {
    constructor(sprite, screen) {
        super(sprite, screen);
        this.velocidade = 0;
        this.velocidadeDoPulo = -30;
    }

    pular() {
        this.velocidade = this.velocidadeDoPulo;
    }

    aplicarGravidade() {
        this.screen.y += this.velocidade;
        this.velocidade += GRAVIDADE;
        if (this.screen.y > this.screen.yInitial) {
            this.screen.y = this.screen.yInitial;
        }
    }
}