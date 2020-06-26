class Pontuacao {
    constructor() {
        this.pontos = 0;
        this.bonus = floor(300 / FRAME_RATE);
        this.bonusAtual = 0;
        this.showBonusCounter = 0;
    }

    atualizaPontuacao() {
        this.pontos += this.getPontuacaoPorTempo();
        this.showPontuacao();
    }

    getPontuacaoPorTempo() {
        return 1 / FRAME_RATE;
    }

    addBonus() {
        this.bonusAtual = this.bonus;
        this.showBonusCounter = 10;
    }

    showPontuacao() {
        textSize(60);
        textAlign(RIGHT, CENTER);
        fill(255, 255, 255);
        text(parseInt(this.pontos), windowWidth - 100, 30, 100, 100);
        pontuacao.showBonus();
    }

    showBonus() {
        this.showBonusCounter--;

        if (this.bonusAtual > 0 && this.showBonusCounter > 0) {
            textSize(60);
            textAlign(RIGHT, CENTER);

            fill(255, 255, 25);
            text(`+${this.bonus}`, 150, 0.25 * windowHeight, 100, 100);
        }

    }

}