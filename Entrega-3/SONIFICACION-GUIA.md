# 🔊 Guía de Sonificación - Pizza Index

## 🎹 Motor de Audio Implementado con Tone.js

Se ha integrado un sistema de audio dinámico (`Tone.js`) que responde en tiempo real a las pizzas detectadas en pantalla.

### 🎧 Características Principales

1.  **Sonido por Categoría:** Cada categoría de evento tiene una identidad sonora única para ser fácilmente reconocible.
2.  **Modulación por Gravedad:** El tamaño de la pizza (5, 10, o 15cm) ajusta el volumen y el tono del sonido, indicando la gravedad del evento.
3.  **Modo Acumulativo (Polifonía):** Si se detectan múltiples pizzas de diferentes categorías simultáneamente, sus paisajes sonoros se superpondrán, creando un "acorde de crisis" que refleja la tensión acumulada.
4.  **Audio Dinámico:** Los sonidos comienzan cuando una pizza es detectada y se detienen suavemente cuando es retirada.

### 🎶 Paisajes Sonoros por Categoría

| Color       | Categoría             | Archivo de Sonido                               | Descripción Sonora                                     |
| :---------- | :-------------------- | :---------------------------------------------- | :----------------------------------------------------- |
| **🔴 ROJO** | Invasiones Terrestres | `marcha.mp3`                                    | Una marcha militar que evoca el movimiento de tropas.  |
| **🟠 NARANJA**| Bombardeos Aéreos     | `explosion.mp3`                                 | El sonido impactante y caótico de una explosión.       |
| **🟡 AMARILLO**| Crisis Políticas      | `conversacion.mp3`                              | Murmullos y conversaciones, simulando negociaciones.   |
| **🔵 AZUL** | Atentados Terroristas | `sirena.mp3`                                    | Sirenas de emergencia, indicando una alerta máxima.    |
| **🟢 VERDE** | Operaciones Especiales| `radio.mp3`                                     | Comunicaciones por radio con estática, como en una misión. |

### 🎛️ Controles de Audio

-   **🔊 Iniciar Audio:** Debes hacer clic en este botón primero para activar el motor de audio (requerido por los navegadores).
-   **🔇 Silenciar Todo:** Detiene todos los sonidos que se estén reproduciendo.

---

## 🧪 Cómo Probar

1.  **Inicia la aplicación** y abre la cámara.
2.  **Haz clic en "🔊 Iniciar Audio"**.
3.  **Coloca una pizza de color** frente a la cámara. Escucharás el sonido base de su categoría.
4.  **Prueba con diferentes tamaños** de la misma pizza de color para notar los cambios en volumen y tono.
5.  **Agrega una segunda pizza de un color diferente**. Escucharás cómo su sonido se superpone con el primero.
6.  **Retira las pizzas** una por una para escuchar cómo los sonidos se desvanecen.

---

## 🎯 Próximos Pasos

La sonificación está lista. ¿Cuál de estas funcionalidades te gustaría implementar ahora?

1.  **📈 Timeline:** Una línea de tiempo visual para ubicar los eventos detectados.
2.  **📊 Gráficos Comparativos:** Visualizaciones que comparen las pizzas pedidas en diferentes eventos.
3.  **🎛️ Calibración Visual:** Una herramienta para ajustar fácilmente la relación `píxeles -> cm` de la cámara.
4.  **✨ Mejoras Visuales:** Pulir las animaciones y la interfaz.