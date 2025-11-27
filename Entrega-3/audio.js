
const AudioEngine = {
    isStarted: false,
    players: {}, // Usaremos Players en lugar de Synths
    reverb: null,
    activeSounds: new Map(), // Para rastrear sonidos activos por color
    volumeLevel: 50, // Nivel de volumen global (0-100)
    previousVolumeLevel: 50,
    isMuted: false,

    // Iniciar el contexto de audio y cargar los archivos
    async start() {
        if (this.isStarted) return;
        try {
            await Tone.start();
            this.isStarted = true;
            console.log("AudioContext iniciado correctamente.");
            this.setVolume(this.volumeLevel); // Aplicar volumen inicial
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
                        loop: false, // CAMBIO: El sonido no se repite
                        fadeIn: 0.1,
                        fadeOut: 0.5,
                        onload: resolve,
                        onerror: reject,
                    }).connect(this.reverb);

                    // Cuando el sonido termina de reproducirse, se elimina de los sonidos activos
                    player.onstop = () => {
                        if (this.activeSounds.has(color)) {
                            this.activeSounds.delete(color);
                            console.log(`✅ Sonido ${color} finalizado naturalmente.`);
                        }
                    };

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

    // Establecer el volumen maestro
    setVolume(level) {
        this.volumeLevel = parseInt(level);
        if (this.volumeLevel > 0) {
            this.isMuted = false;
        }

        if (Tone && Tone.Destination) {
            if (this.volumeLevel === 0) {
                Tone.Destination.volume.value = -Infinity;
                this.isMuted = true;
            } else {
                // Convertir 0-100 a un rango de dB (ej. -40 a 0)
                const db = (this.volumeLevel / 100) * 40 - 40;
                Tone.Destination.volume.value = db;
            }
        }
    },

    // Silenciar o activar el sonido
    toggleMute() {
        if (this.isMuted) {
            // Unmute: restore previous volume
            this.setVolume(this.previousVolumeLevel);
        } else {
            // Mute: save current volume and set to 0
            this.previousVolumeLevel = this.volumeLevel;
            this.setVolume(0);
        }
        return { isMuted: this.isMuted, volume: this.volumeLevel };
    },

    // Reproducir sonido para un evento
    play(evento) {
        if (!this.isStarted || !evento || !this.players[evento.color]) return;

        const { color, tamaño } = evento;
        const player = this.players[color];

        if (!player.loaded || this.activeSounds.has(color)) return;

        let playbackRate = 1.0;
        // El volumen del player individual se puede usar para ajustes relativos
        let relativeVolume = 0; // en dB

        // Ajustar parámetros según la gravedad (tamaño)
        switch (tamaño) {
            case 15: // Grave
                playbackRate = 1.1;
                relativeVolume = 0; // Sonido más fuerte
                break;
            case 10: // Moderado
                playbackRate = 1.0;
                relativeVolume = -6;
                break;
            case 5: // Menor
                playbackRate = 0.9;
                relativeVolume = -12; // Sonido más bajo
                break;
        }

        player.playbackRate = playbackRate;
        player.volume.value = relativeVolume;
        
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

