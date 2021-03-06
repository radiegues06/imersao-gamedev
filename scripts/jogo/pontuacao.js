class Pontuacao {
    constructor() {
        this.pontos = 0;
        this.bonusAtual = 0;
        this.showBonusCounter = 0;
        this.maximaPontuacao = 0;
    }

    atualizaPontuacao() {
        this.bonus = floor(FRAME_RATE * 10 / FRAME_RATE_INICIAL);
        this.pontos += this.getPontuacaoPorTempo() + this.bonusAtual;
        this.showPontuacao();
    }

    atualizaMaximaPontuacao() {
        this.maximaPontuacao = max(this.maximaPontuacao, this.pontos);
    }

    getPontuacaoPorTempo() {
        return FRAME_RATE / FRAME_RATE_INICIAL / 30;
    }

    addBonus() {
        this.bonusAtual = this.bonus;
        this.showBonusCounter = 12;
    }

    showPontuacao() {
        let padding = 25;
        textSize(70);
        textAlign(RIGHT, TOP);
        textFont(fonteJogo);
        // Sombra
        fill("rgba(0,0,0, 0.7)");
        text(parseInt(this.pontos), windowWidth - padding + SHADOW, padding + SHADOW);
        // Texto
        fill(255, 255, 255);
        text(parseInt(this.pontos), windowWidth - padding, padding);
        this.showBonus();
        this.showMaximaPontuacao();
    }

    showMaximaPontuacao() {
        if (this.maximaPontuacao > 0) {
            let padding = 25;
            textSize(40);
            textAlign(RIGHT, TOP);
            textFont(fonteJogo);
            fill("rgba(0,0,0, 0.7)");
            text(`MAX   ${parseInt(this.maximaPontuacao)}`, windowWidth - padding + SHADOW, padding + 100 + SHADOW);
            fill(39, 139, 34);
            text(`MAX   ${parseInt(this.maximaPontuacao)}`, windowWidth - padding, padding + 100);
        }
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

    reset() {
        this.atualizaMaximaPontuacao();
        this.pontos = 0;
        this.showBonusCounter = 0;
    }
}