# 🍕 Guía de Eventos - Pizza Index

## 📊 14 Eventos Implementados

### 🔴 INVASIONES TERRESTRES (3 eventos)

| Tamaño | Evento | Fecha | Pizzas Críticas |
|--------|--------|-------|-----------------|
| **15cm** | Invasión de Irak | 20/03/2003 | 220 |
| **10cm** | Guerra del Golfo | 17/01/1991 | 116 |
| **5cm** | Invasión de Granada | 25/10/1983 | 100 |

---

### 🟠 BOMBARDEOS Y ATAQUES AÉREOS (3 eventos)

| Tamaño | Evento | Fecha | Pizzas Críticas |
|--------|--------|-------|-----------------|
| **15cm** | Bombardeo de Libia | 14/04/1986 | 180 |
| **10cm** | Ataques aéreos en Siria | 07/04/2017 | 145 |
| **5cm** | Bombardeo de Kosovo | 24/03/1999 | 92 |

---

### 🟡 CRISIS POLÍTICAS (2 eventos)

| Tamaño | Evento | Fecha | Pizzas Críticas |
|--------|--------|-------|-----------------|
| **15cm** | Crisis de los Misiles de Cuba | 16/10/1962 | 250 |
| **10cm** | Crisis de Rehenes en Irán | 04/11/1979 | 135 |

---

### 🔵 ATENTADOS TERRORISTAS (3 eventos)

| Tamaño | Evento | Fecha | Pizzas Críticas |
|--------|--------|-------|-----------------|
| **15cm** | 11 de Septiembre | 11/09/2001 | 300 |
| **10cm** | Atentado de Oklahoma City | 19/04/1995 | 128 |
| **5cm** | Atentado USS Cole | 12/10/2000 | 88 |

---

### 🟢 OPERACIONES ESPECIALES (3 eventos)

| Tamaño | Evento | Fecha | Pizzas Críticas |
|--------|--------|-------|-----------------|
| **15cm** | Operación Lanza de Neptuno | 02/05/2011 | 195 |
| **10cm** | Operación Garra del Águila | 24/04/1980 | 110 |
| **5cm** | Captura de Noriega | 20/12/1989 | 95 |

---

## 🎨 Sistema de Detección

### Colores

El sistema detecta 5 colores:

```javascript
ROJO     → r > 150 && r > g×1.8 && r > b×1.8
NARANJA  → r > 150 && g > 80 && b < 100
AMARILLO → r > 150 && g > 150 && b < 120
AZUL     → b > 150 && b > r×1.8 && b > g×1.8
VERDE    → g > 150 && g > r×1.5 && g > b×1.5
```

### Tamaños

Los tamaños se clasifican en 3 categorías:

```javascript
15cm → 12.5 - 17.5 cm (GRANDE - Alta gravedad)
10cm → 7.5 - 12.5 cm  (MEDIANO - Media gravedad)
5cm  → 2.5 - 7.5 cm   (PEQUEÑO - Baja gravedad)
```

### Calibración

El sistema usa una constante `pixelsPorCm` para convertir píxeles a centímetros:

```javascript
pixelsPorCm = 20 (por defecto)

// Para calibrar:
1. Coloca un objeto de referencia de 10cm
2. Mide cuántos píxeles mide en la imagen
3. Calcula: pixelsPorCm = píxeles / 10
```

---

## 🎯 Cómo Funciona

### 1. Detección de Forma
- Busca regiones conectadas oscuras sobre fondo blanco
- Filtra por tamaño (100 - 50,000 píxeles)

### 2. Clasificación de Color
- Extrae el color dominante de la región
- Lo clasifica en una de las 5 categorías

### 3. Medición de Tamaño
- Calcula el área de la región
- Estima el largo basado en √área × 1.5
- Convierte píxeles a cm

### 4. Mapeo a Evento
- Combina color + tamaño clasificado
- Busca evento en la base de datos
- Muestra información si existe

---

## 📱 Uso Paso a Paso

1. **Abre la aplicación** en el navegador
2. **Haz clic en "🎥 Usar Cámara Local"**
3. **Coloca una pizza triangular** frente a la cámara:
   - Fondo blanco
   - Contorno negro bien definido
   - Uno de los 5 colores
   - Tamaño 5cm, 10cm, o 15cm
4. **El sistema detecta automáticamente:**
   - El color de la pizza
   - El tamaño en cm
   - El evento correspondiente
5. **Se muestra el evento** con:
   - Nombre y fecha
   - Pizzas críticas
   - Incremento %
   - Descripción

---

## 🛠️ Ajustes y Mejoras

### Mejorar detección de color

Edita `events.js:145-163` para ajustar umbrales

### Ajustar clasificación de tamaño

Edita `events.js:169-173` para cambiar rangos

### Cambiar calibración

Modifica `pixelsPorCm` en `index.html:195`:
```javascript
let pixelsPorCm = 25; // Ajusta según tu setup
```

### Agregar más eventos

Edita `events.js` y agrega nuevos eventos:
```javascript
{
    id: 15,
    nombre: "Nuevo Evento",
    fecha: "DD/MM/AAAA",
    color: "ROJO", // ROJO, NARANJA, AMARILLO, AZUL, VERDE
    tamaño: 15,    // 5, 10, o 15
    categoria: "Categoría",
    pizzasCriticas: 200,
    pizzasNormales: 40,
    incremento: 400,
    descripcion: "Descripción del evento",
    emoji: "🔴"
}
```

---

## 📊 Estadísticas

```javascript
Total de eventos: 14
- Invasiones: 3
- Bombardeos: 3
- Crisis Políticas: 2
- Atentados: 3
- Operaciones: 3

Evento más grave: 11 de Septiembre (300 pizzas)
Total pizzas críticas: 2,114
```

---

## 🎓 Próximos Pasos

1. ✅ Detección básica de eventos implementada
2. ⏳ **SIGUIENTE:** Agregar sonificación por categoría
3. ⏳ Timeline de eventos
4. ⏳ Modo acumulativo (múltiples pizzas)
5. ⏳ Gráficos comparativos

---

## 📝 Notas Técnicas

- El sistema detecta **automáticamente** cuando colocas una pizza
- Muestra **solo el primer evento** detectado (evita duplicados)
- Puedes **cerrar el evento** con el botón ✕
- La detección se ejecuta **cada frame** para máxima precisión
- Compatible con **cámara local** y **cámara remota** (celular)
