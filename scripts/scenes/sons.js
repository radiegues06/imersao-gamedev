class Sons {
    constructor() {
        this.intro = loadSound("assets/sons/intro.wav")

        this.fase1 = loadSound("assets/sons/fase1-soundtrack.mp3");
        //this.fase2 = loadSound("assets/sons/fase2-soundtrack.flac");
        this.fase2 = this.fase1;

        this.andandoFloresta = loadSound("assets/sons/andando-floresta.wav");

        this.faseConcluida = loadSound("assets/sons/fase-concluida.wav");

        this.winGame = loadSound("assets/sons/winGame.wav");
        this.encerramento = loadSound("assets/sons/encerramento.wav");

        this.gameOver = loadSound("assets/sons/game-over.wav");

        this.pulo = loadSound("assets/sons/somPulo.mp3");
        this.bonus = loadSound("assets/sons/bonus.wav");

        this.mudaVolumes();
    }

    mudaVolumes() {
        this.intro.setVolume(0.8);
        this.fase1.setVolume(0.8);
        this.andandoFloresta.setVolume(0.5);
        this.encerramento.setVolume(0.5);
    }

    playScene() {
        if (SCENE === "telaInicial") {
            tryToPlay(this.intro);
        }
        if (SCENE === "fase1") {
            tryToPlay(this.fase1);
            tryToPlay(this.andandoFloresta);
        }
        if (SCENE === "fase2") {
            tryToPlay(this.fase2);
            tryToPlay(this.andandoFloresta);
        }
        if (SCENE === "gameOver") {
            tryToPlay(this.gameOver);
        }
        if (SCENE === "encerramento") {
            tryToPlay(this.encerramento);
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