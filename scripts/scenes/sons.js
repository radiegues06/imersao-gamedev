class Sons {
    constructor() {
        this.intro = loadSound("assets/sons/intro.wav")

        this.trilha = loadSound("assets/sons/trilha_jogo.mp3");
        this.andandoFloresta = loadSound("assets/sons/andando-floresta.wav");
        this.gameOver = loadSound("assets/sons/game-over.wav");

        this.pulo = loadSound("assets/sons/somPulo.mp3");
        this.bonus = loadSound("assets/sons/bonus.wav");

        this.mudaVolumes();
    }

    mudaVolumes() {
        this.intro.setVolume(0.8);
        this.trilha.setVolume(0.8);
        this.andandoFloresta.setVolume(0.5);
    }

    playScene() {
        if (SCENE === "telaInicial") {
            tryToPlay(this.intro);
        }
        if (SCENE === "fase1") {
            tryToPlay(this.trilha);
            tryToPlay(this.andandoFloresta);
        }
        if (SCENE === "gameOver") {
            tryToPlay(this.gameOver);
        }
    }

    mudaScene() {
        Object.keys(this).forEach(key => {
            if (this[key].isPlaying()) {
                this[key].stop();
            }
        });
    }

    playPulo() {
        if (!MUTE) {
            this.pulo.play();
        }
    }

    playBonus() {
        if (!MUTE) {
            this.bonus.play();
        }
    }
}

function tryToPlay(song) {
    if ((!song.isPlaying()) && (!MUTE)) {
        song.play();
    }
}