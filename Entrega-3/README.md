# Pizza Index - Entrega 3

Detector de pizzas triangulares en tiempo real utilizando visión por computadora.

## 🎯 Características

- **Detección de 5 colores:** Rojo, Azul, Verde, Morado, Amarillo
- **Medición de tamaño:** Detecta y mide el largo aproximado de pizzas triangulares
- **Doble modo:**
  - 🎥 **Cámara Local:** Prueba con tu webcam
  - 📱 **Cámara Remota:** Conecta tu celular via QR con Protobject Framework
- **Análisis en tiempo real:** Estadísticas de colores y detecciones
- **Diseño optimizado:** Para papel blanco con contornos negros

## 🚀 Cómo usar

### Opción 1: Probar localmente con webcam

1. Abre `index.html` en GitHub Pages o servidor local
2. Haz clic en **"🎥 Usar Cámara Local"**
3. Acepta permisos de cámara
4. Coloca pizzas triangulares de colores frente a la cámara
5. Observa las detecciones en tiempo real

### Opción 2: Usar celular remoto

1. Abre `index.html` en tu computador
2. Haz clic en **"+ Connect"**
3. Escanea el QR con tu celular
4. El celular se conectará automáticamente
5. Apunta la cámara del celular a las pizzas

## 📋 Configuración ideal

- **Fondo:** Papel blanco
- **Contornos:** Negro (para mejor detección de formas)
- **Colores de pizzas:** Rojo, Azul, Verde, Morado, Amarillo
- **Forma:** Triangular
- **Iluminación:** Buena iluminación natural o artificial

## 🎨 Detección de colores

El sistema utiliza umbrales permisivos para detectar colores:

- **Rojo:** R > 100, R > G×1.5, R > B×1.5
- **Azul:** B > 100, B > R×1.5, B > G×1.2
- **Verde:** G > 100, G > R×1.3, G > B×1.3
- **Morado:** R > 80, B > 80, ambos > G×1.2
- **Amarillo:** R > 100, G > 100, ambos > B×1.5

Se considera detectado cuando el color supera el **3%** del total de píxeles.

## 📐 Detección de formas

El algoritmo:

1. Convierte la imagen a binario (blanco/negro)
2. Busca regiones conectadas usando flood-fill
3. Filtra regiones por tamaño (100 - 50,000 píxeles)
4. Calcula el color dominante de cada región
5. Estima el tamaño y largo del triángulo
6. Dibuja marcadores circulares en cada pizza detectada

## 📊 Estadísticas mostradas

- **Detección de Colores:** Porcentaje de cada color en la imagen
- **Pizzas Triangulares:** Lista con tamaño, largo y color de cada pizza
- **Estadísticas Generales:** Frames procesados, brillo promedio, total de pizzas

## 🛠️ Tecnologías

- **HTML5 Canvas** - Procesamiento de imágenes
- **Protobject Framework** - Comunicación entre dispositivos
- **JavaScript Vanilla** - Algoritmos de detección
- **CSS3** - Interfaz responsive

## 🔧 Desarrollo local

Para probar en localhost:

```bash
# Con Python
python3 -m http.server 8000

# Con Node.js
npx http-server -p 8000
```

Luego abre: `http://localhost:8000`

## 📱 GitHub Pages

La aplicación está optimizada para funcionar en GitHub Pages. Simplemente sube a tu repositorio y activa GitHub Pages.

URL de ejemplo: `https://tuusuario.github.io/proyecto/Entrega-3/`

## ⚠️ Notas importantes

- **HTTPS requerido** para acceso a cámara en producción
- **Misma red WiFi** necesaria para conexión local (sin ngrok)
- **Permisos de cámara** deben ser aceptados por el usuario
- Funciona mejor con **buena iluminación**
- Optimizado para **papel blanco** con contornos negros

## 🎓 Proyecto académico

**Curso:** IIC2026 - Visualización de Información 2025
**Universidad:** Pontificia Universidad Católica de Chile
