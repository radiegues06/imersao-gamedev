class Protagonista extends Personagem {
    constructor(sprite, screen) {
        super(sprite, screen);
        this.velocidade = 0;
        this.velocidadeDoPulo = -30;
    }

    pular() {
        this.velocidade = this.velocidadeDoPulo;
        // somDoPulo.play();
    }

    aplicarGravidade() {
        this.screen.y += this.velocidade;
        this.velocidade += GRAVIDADE;
        if (this.screen.y > this.screen.yInitial) {
            this.screen.y = this.screen.yInitial;
        }
    }

    checarColisao(inimigo) {
        return collideRectRect(this.screen.x, this.screen.y, this.screen.width, this.screen.height,
            inimigo.screen.x, inimigo.screen.y, inimigo.screen.width, inimigo.screen.height);
    }
}