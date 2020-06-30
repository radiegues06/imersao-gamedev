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

function inimigosFactory(i = floor(Math.random() * 3)) {
    if (i === 0) {
        return new Inimigo(
            new Sprite("assets/imagens/inimigos/gotinha.png", 416, 728, 7, 4),
            new Screen(windowHeight * 0.12, ESQUERDA, CHAO),
            10);
    }
    if (i === 1) {
        return new Inimigo(
            new Sprite("assets/imagens/inimigos/troll.png", 2000, 2400, 6, 5, 28, 12, 57),
            new Screen(windowHeight * 0.45, ESQUERDA, CHAO),
            7);
    }
    if (i === 2) {
        return new Inimigo(
            new Sprite("assets/imagens/inimigos/gotinha-voadora.png", 600, 900, 6, 3, 16, 0, 15),
            new Screen(windowHeight * 0.12, ESQUERDA, CEU),
            12);
    }
}