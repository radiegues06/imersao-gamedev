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
        const toleranciaColisao = 0.25;

        // noFill();
        // rect(this.screen.x + toleranciaColisao * this.screen.width / 2, this.screen.y + toleranciaColisao * this.screen.height / 2,
        //     (1 - toleranciaColisao) * this.screen.width, (1 - toleranciaColisao) * this.screen.height);
        // rect(inimigo.screen.x + toleranciaColisao * inimigo.screen.width / 2, inimigo.screen.y + toleranciaColisao * inimigo.screen.height / 2,
        //     (1 - toleranciaColisao) * inimigo.screen.width, (1 - toleranciaColisao) * inimigo.screen.height);

        return collideRectRect(this.screen.x + toleranciaColisao * this.screen.width / 2, this.screen.y + toleranciaColisao * this.screen.height / 2,
            (1 - toleranciaColisao) * this.screen.width, (1 - toleranciaColisao) * this.screen.height,
            inimigo.screen.x + toleranciaColisao * inimigo.screen.width / 2, inimigo.screen.y + toleranciaColisao * inimigo.screen.height / 2,
            (1 - toleranciaColisao) * inimigo.screen.width, (1 - toleranciaColisao) * inimigo.screen.height);
    }
}