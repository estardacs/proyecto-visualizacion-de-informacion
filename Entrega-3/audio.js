
// ==========================================
// MOTOR DE AUDIO CON TONE.JS (VERSIÓN CON ARCHIVOS DE AUDIO)
// ==========================================

const AudioEngine = {
    isStarted: false,
    players: {}, // Usaremos Players en lugar de Synths
    reverb: null,
    activeSounds: new Map(), // Para rastrear sonidos activos por color

    // Iniciar el contexto de audio y cargar los archivos
    async start() {
        if (this.isStarted) return;
        try {
            await Tone.start();
            this.isStarted = true;
            console.log("AudioContext iniciado correctamente.");
            await this.loadPlayers();
        } catch (error) {
            console.error("Error al iniciar AudioContext:", error);
            this.isStarted = false;
        }
    },

    // Cargar los archivos de audio en objetos Tone.Player
    async loadPlayers() {
        try {
            log('🔊 Cargando archivos de audio...', 'info');
            this.reverb = new Tone.Reverb({ decay: 2.5, wet: 0.3 }).toDestination();

            const loadPromises = Object.entries(COLORES_CONFIG).map(([color, config]) => {
                return new Promise((resolve, reject) => {
                    const player = new Tone.Player({
                        url: config.soundFile,
                        loop: true, // Los sonidos se repetirán en bucle
                        fadeIn: 0.5,
                        fadeOut: 0.5,
                        onload: resolve,
                        onerror: reject,
                    }).connect(this.reverb);
                    this.players[color] = player;
                });
            });

            await Promise.all(loadPromises);
            log('✅ Archivos de audio cargados.', 'success');
        } catch (error) {
            log('❌ Error al cargar los archivos de audio: ' + error, 'error');
            console.error("Error en loadPlayers:", error);
        }
    },

    // Reproducir sonido para un evento
    play(evento) {
        if (!this.isStarted || !evento || !this.players[evento.color]) return;

        const { color, tamaño } = evento;
        const player = this.players[color];

        if (!player.loaded || this.activeSounds.has(color)) return;

        let playbackRate = 1.0;
        let volume = -6; // Volumen base en dB

        // Ajustar parámetros según la gravedad (tamaño)
        switch (tamaño) {
            case 15: // Grave
                playbackRate = 1.1;
                volume = -2; // Más volumen
                break;
            case 10: // Moderado
                playbackRate = 1.0;
                volume = -6;
                break;
            case 5: // Menor
                playbackRate = 0.9;
                volume = -10; // Menos volumen
                break;
        }

        player.playbackRate = playbackRate;
        player.volume.value = volume;
        
        player.start();
        this.activeSounds.set(color, player);
        
        console.log(`🔊 Play: ${color} (Tamaño: ${tamaño}cm, Rate: ${playbackRate})`);
    },

    // Detener el sonido de una categoría de color
    stop(color) {
        if (!this.isStarted || !this.activeSounds.has(color)) return;

        const player = this.activeSounds.get(color);
        
        if (player && player.state === "started") {
            player.stop();
        }

        this.activeSounds.delete(color);
        console.log(`🔇 Stop: ${color}`);
    },

    // Detener todos los sonidos
    stopAll() {
        if (!this.isStarted) return;
        for (const color of this.activeSounds.keys()) {
            this.stop(color);
        }
        console.log("🔇 Todos los sonidos detenidos.");
    }
};

