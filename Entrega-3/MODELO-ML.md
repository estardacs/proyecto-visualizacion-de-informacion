# 🤖 Modelo de Machine Learning - Pizza Detector

## 📊 Información del Modelo

**Tipo:** Teachable Machine (Image Classification)
**Framework:** TensorFlow.js v1.7.4
**Clases:** 2 (Class 1, Class 2)
**Tamaño de entrada:** 224x224 píxeles
**Formato:** model.json + weights.bin

---

## 🎯 ¿Qué detecta?

El modelo está entrenado para clasificar entre **2 clases**:
- **Class 1** - Probablemente triángulos rojos
- **Class 2** - Probablemente triángulos azules

*(Puedes renombrar las clases editando `metadata.json`)*

---

## 🚀 Cómo funciona

### 1. **Carga automática**
El modelo se carga automáticamente al abrir `index.html`. Verás el mensaje:
```
🤖 Cargando modelo de TensorFlow...
✅ Modelo ML cargado correctamente!
```

### 2. **Predicciones en tiempo real**
- El modelo hace predicciones cada **10 frames** (para optimizar rendimiento)
- Analiza el frame completo de 224x224 píxeles
- Devuelve probabilidades para cada clase

### 3. **Visualización**
Las predicciones se muestran con:
- **Barras de progreso** indicando la confianza
- **Porcentaje** de probabilidad
- **Destacado** de la predicción con mayor confianza

---

## 📁 Archivos del Modelo

```
Entrega-3/
├── model.json          # Arquitectura del modelo
├── weights.bin         # Pesos entrenados (2.1 MB)
└── metadata.json       # Metadatos (clases, tamaño de imagen)
```

---

## 🔧 Configuración

### Umbral de confianza
El modelo actualiza el mensaje de detección cuando la confianza es **> 70%**:

```javascript
if (topPrediction.probability > 0.7) {
    detectionEl.textContent = `🤖 ML detectó: ${topPrediction.className}`;
}
```

Puedes ajustar este valor en `index.html:253`

### Frecuencia de predicción
Actualmente predice cada 10 frames:

```javascript
if (frameCount % 10 === 0) {
    predecirConModelo();
}
```

Puedes cambiar `10` a otro valor en `index.html:457`:
- **Menor = más frecuente** (más CPU, más preciso)
- **Mayor = menos frecuente** (menos CPU, menos preciso)

---

## 🎨 Renombrar clases

Edita `metadata.json`:

```json
{
  "labels": ["Triángulo Rojo", "Triángulo Azul"],
  ...
}
```

---

## 🧪 Re-entrenar el modelo

Si quieres entrenar un nuevo modelo:

1. Ve a [Teachable Machine](https://teachablemachine.withgoogle.com/)
2. Crea un proyecto de clasificación de imágenes
3. Sube fotos de tus pizzas triangulares
4. Entrena el modelo
5. Exporta como "TensorFlow.js"
6. Reemplaza los archivos `model.json`, `weights.bin`, y `metadata.json`

---

## 📊 Rendimiento

- **Tamaño del modelo:** ~2.1 MB
- **Velocidad:** ~100ms por predicción (depende del hardware)
- **Precisión:** Depende de la calidad del entrenamiento

---

## 🐛 Solución de problemas

### El modelo no carga
**Problema:** "❌ Error cargando modelo"

**Solución:**
1. Verifica que los archivos `model.json`, `weights.bin` y `metadata.json` existan
2. Usa un servidor HTTP (no `file://`)
3. Verifica la consola del navegador para ver errores específicos

### Predicciones incorrectas
**Problema:** El modelo clasifica mal

**Solución:**
1. Re-entrena el modelo con más imágenes variadas
2. Asegúrate de que las condiciones de iluminación sean similares al entrenamiento
3. Usa un fondo blanco simple como en el entrenamiento

### Lentitud
**Problema:** La aplicación va lenta

**Solución:**
1. Aumenta el intervalo de predicción (ej: cada 20 frames en lugar de 10)
2. Reduce la resolución de la cámara
3. Usa un navegador más moderno (Chrome/Firefox)

---

## 🔗 Recursos

- [TensorFlow.js](https://www.tensorflow.org/js)
- [Teachable Machine](https://teachablemachine.withgoogle.com/)
- [Documentación TM Image](https://github.com/googlecreativelab/teachablemachine-community)

---

## 📝 Notas

- El modelo funciona **100% en el navegador** (no requiere servidor)
- Compatible con **Chrome, Firefox, Edge, Safari**
- Requiere **HTTPS** en producción para acceso a cámara
- Funciona en **GitHub Pages** sin configuración adicional
