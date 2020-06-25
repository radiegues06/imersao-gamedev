class Protagonista extends Personagem {
    constructor(sprite, screen) {
        super(sprite, screen);
        this.velocidade = 0;
        this.velocidadeDoPulo = -30;
        this.pulos = 0;
    }

    pular() {
        if (this.pulos < 2) {
            this.velocidade = this.velocidadeDoPulo;
            this.pulos++;
            // somDoPulo.play();
        }

    }

    aplicarGravidade() {
        this.screen.y += this.velocidade;
        this.velocidade += GRAVIDADE;
        if (this.screen.y > this.screen.yInitial) {
            this.screen.y = this.screen.yInitial;
            this.pulos = 0;
        }
    }

    checarColisao(inimigo) {
        // noFill();
        // rect(this.screen.x, this.screen.y, this.screen.width, this.screen.height);
        // TODO melhorar hit box
        return collideRectRect(this.screen.x, this.screen.y, this.screen.width, this.screen.height,
            inimigo.screen.x, inimigo.screen.y, inimigo.screen.width, inimigo.screen.height);
    }
}