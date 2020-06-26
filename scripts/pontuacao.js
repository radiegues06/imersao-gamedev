class Pontuacao {
    constructor() {
        this.pontos = 0;
        this.bonus = floor(300 / FRAME_RATE);
        this.bonusAtual = 0;
        this.showBonusCounter = 0;
    }

    atualizaPontuacao() {
        this.pontos += this.getPontuacaoPorTempo() + this.bonusAtual;
        this.showPontuacao();
    }

    getPontuacaoPorTempo() {
        return 1 / FRAME_RATE;
    }

    addBonus() {
        this.bonusAtual = this.bonus;
        this.showBonusCounter = 12;
    }

    showPontuacao() {
        let padding = 15;
        textSize(70);
        textAlign(RIGHT, TOP);
        textFont(fonteJogo);
        fill(255, 255, 255);
        text(parseInt(this.pontos), padding, padding, 100, 100);
        pontuacao.showBonus();
    }

    showBonus() {
        this.showBonusCounter--;
        if (this.showBonusCounter > 0) {
            this.bonusAtual = 0;
            textSize(60);
            textAlign(RIGHT, CENTER);
            textFont(fonteJogo);
            fill(255, 255, 25);
            text(`+${this.bonus}`, protagonista.screen.x, 0.2 * windowHeight + this.showBonusCounter * 2, 100, 100);
        }

    }

}