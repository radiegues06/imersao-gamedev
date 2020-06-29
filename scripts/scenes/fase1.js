class Fase1 {
    constructor() {
        this.backgroundImages = [];
        this.backgroundImages[0] = new Fundo("assets/imagens/cenario/Sky.png", 0);
        this.backgroundImages[1] = new Fundo("assets/imagens/cenario/BG_Decor.png", 2);
        this.backgroundImages[2] = new Fundo("assets/imagens/cenario/Middle_Decor.png", 5);
        this.backgroundImages[3] = new Fundo("assets/imagens/cenario/Foreground.png", 10);
        this.backgroundImages[4] = new Fundo("assets/imagens/cenario/Ground.png", 18);
    }

    draw() {

        this.backgroundImages.forEach(element => element.drawFundo());

        protagonista.aplicarGravidade();
        protagonista.animate();

        inimigos.forEach(inimigo => {
            inimigo.animate();
            inimigo.andar();

            if (protagonista.checarColisao(inimigo)) {
                SCENE = "gameOver";
                sons.mudaScene();
            }

            if (inimigo.checkPassouProtagonista() & inimigo.jaDeuBonus === false) {
                inimigo.jaDeuBonus = true;
                pontuacao.addBonus();
                sons.playBonus();
            }
        })

        pontuacao.atualizaPontuacao();

    }

    key(keyCode) {
        if (keyCode === 32 || keyCode == 38) {
            protagonista.pular();
        }

    }

}