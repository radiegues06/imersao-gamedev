class Protagonista {
    constructor() {

        this.resetScreen();

        this.animacoes = {
            "fase1": {
                "correndo": new Personagem(
                    new Sprite("assets/imagens/personagem/correndo2.png", 2400, 1920, 4, 5, 16, 100, 100, "direita"),
                    this.screen),
                "pulando": new Personagem(
                    new Sprite("assets/imagens/personagem/pulando.png", 2400, 2400, 5, 5, undefined, 120, 40, "direita"),
                    this.screen)
            },
            "fase2": {
                "correndo": new Personagem(
                    new Sprite("assets/imagens/personagem/correndo-com-varinha.png", 2400, 1920, 4, 5, 16, 50, 110, "direita"),
                    this.screen),
                "pulando": new Personagem(
                    new Sprite("assets/imagens/personagem/pulando.png", 2400, 2400, 5, 5, undefined, 40, 10, "direita"),
                    this.screen)
            },
            "achou-varinha": new Personagem(
                new Sprite("assets/imagens/personagem/achou-varinha.png", 2400, 1440, 3, 5, 14, 0, 0, "direita"),
                this.screen),
            "poder": new Personagem(
                new Sprite("assets/imagens/personagem/carregando-poder.png", 2400, 1440, 3, 5, 14, 0, 0, "direita"),
                this.screen)

        }

        this.velocidade = 0;
        this.velocidadeDoPulo = -30;
        this.pulos = 0;
    }

    resetScreen() {
        this.screen = new Screen(windowHeight * 0.3, DIREITA, CHAO);
    }

    pular() {
        if (this.pulos < 2) {
            this.velocidade = this.velocidadeDoPulo;
            this.pulos++;
            sons.playPulo();
        }

    }

    animate() {
        if (this.screen.y < this.screen.yInitial) {
            this.animacoes[SCENE]["correndo"].animate(); // this.animacoes[SCENE]["pulando"].animate();
        } else {
            this.animacoes[SCENE]["correndo"].animate();
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

    reset() {
        this.screen.x = this.screen.xInitial;
        this.screen.y = this.screen.yInitial;
        this.velocidade = 0;
    }
}