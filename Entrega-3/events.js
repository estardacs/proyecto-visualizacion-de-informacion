// ==========================================
// DATOS DE LOS EVENTOS DEL PIZZA INDEX
// Basado en los eventos más relevantes de Entrega-2
// ==========================================

const EVENTOS = [
    // ========== INVASIONES TERRESTRES (ROJO) ==========
    {
        id: 1,
        nombre: "Invasión de Irak",
        fecha: "19 de marzo de 2003",
        color: "ROJO",
        tamaño: 15,
        categoria: "Invasiones Terrestres",
        pizzasCriticas: 135,
        pizzasNormales: 45,
        incremento: 200,
        descripcion: "Fuerzas de la coalición invaden Irak para derrocar a Saddam Hussein.",
        emoji: "🇮🇶"
    },
    {
        id: 2,
        nombre: "Invasión de Ucrania",
        fecha: "24 de febrero de 2022",
        color: "ROJO",
        tamaño: 10,
        categoria: "Invasiones Terrestres",
        pizzasCriticas: 130,
        pizzasNormales: 48,
        incremento: 171,
        descripcion: "Rusia lanza una invasión a gran escala de Ucrania.",
        emoji: "🇺🇦"
    },
    {
        id: 3,
        nombre: "Invasión de Panamá",
        fecha: "20 de diciembre de 1989",
        color: "ROJO",
        tamaño: 5,
        categoria: "Invasiones Terrestres",
        pizzasCriticas: 125,
        pizzasNormales: 35,
        incremento: 257,
        descripcion: "Operación Causa Justa para deponer a Manuel Noriega.",
        emoji: "🇵🇦"
    },

    // ========== BOMBARDEOS Y ATAQUES AÉREOS (NARANJA) ==========
    {
        id: 4,
        nombre: "Bombardeos Sudán/Afganistán",
        fecha: "20 de agosto de 1998",
        color: "NARANJA",
        tamaño: 15,
        categoria: "Bombardeos y Ataques Aéreos",
        pizzasCriticas: 200,
        pizzasNormales: 40,
        incremento: 400,
        descripcion: "Ataques con misiles de crucero en respuesta a los atentados a embajadas de EE.UU.",
        emoji: "🚀"
    },
    {
        id: 5,
        nombre: "Bombardeo de Irak (Desert Fox)",
        fecha: "16 de diciembre de 1998",
        color: "NARANJA",
        tamaño: 10,
        categoria: "Bombardeos y Ataques Aéreos",
        pizzasCriticas: 175,
        pizzasNormales: 40,
        incremento: 338,
        descripcion: "Campaña de bombardeo de cuatro días sobre objetivos iraquíes.",
        emoji: "💣"
    },
    {
        id: 6,
        nombre: "Bombardeos Siria (Multi)",
        fecha: "13 de abril de 2018",
        color: "NARANJA",
        tamaño: 5,
        categoria: "Bombardeos y Ataques Aéreos",
        pizzasCriticas: 160,
        pizzasNormales: 45,
        incremento: 256,
        descripcion: "Ataques aéreos coordinados por EE.UU., Reino Unido y Francia en Siria.",
        emoji: "🇸🇾"
    },

    // ========== CRISIS POLÍTICAS (AMARILLO) ==========
    {
        id: 7,
        nombre: "Intervención en Libia",
        fecha: "19 de marzo de 2011",
        color: "AMARILLO",
        tamaño: 15,
        categoria: "Crisis Políticas",
        pizzasCriticas: 170,
        pizzasNormales: 42,
        incremento: 305,
        descripcion: "Coalición internacional impone zona de exclusión aérea sobre Libia.",
        emoji: "🏛️"
    },
    {
        id: 8,
        nombre: "Intento de Golpe de Estado en la URSS",
        fecha: "19 de agosto de 1991",
        color: "AMARILLO",
        tamaño: 10,
        categoria: "Crisis Políticas",
        pizzasCriticas: 157,
        pizzasNormales: 38,
        incremento: 313,
        descripcion: "Intento de golpe de estado por parte de la línea dura del Partido Comunista contra Gorbachov.",
        emoji: "🇷🇺"
    },
    {
        id: 9,
        nombre: "Escándalo Lewinsky",
        fecha: "17 de noviembre de 1995",
        color: "AMARILLO",
        tamaño: 5,
        categoria: "Crisis Políticas",
        pizzasCriticas: 110,
        pizzasNormales: 38,
        incremento: 189,
        descripcion: "Revelaciones sobre la relación del presidente Bill Clinton con Monica Lewinsky.",
        emoji: "🏛️"
    },

    // ========== ATENTADOS TERRORISTAS (AZUL) ==========
    {
        id: 10,
        nombre: "11 de Septiembre",
        fecha: "11 de septiembre de 2001",
        color: "AZUL",
        tamaño: 15,
        categoria: "Atentados Terroristas",
        pizzasCriticas: 220,
        pizzasNormales: 45,
        incremento: 389,
        descripcion: "Ataques terroristas de Al-Qaeda contra el World Trade Center y el Pentágono.",
        emoji: "💥"
    },
    {
        id: 11,
        nombre: "Atentado del Aeropuerto de Kabul",
        fecha: "26 de agosto de 2021",
        color: "AZUL",
        tamaño: 10,
        categoria: "Atentados Terroristas",
        pizzasCriticas: 115,
        pizzasNormales: 48,
        incremento: 140,
        descripcion: "Ataque suicida en el Aeropuerto Hamid Karzai durante la evacuación de Afganistán.",
        emoji: "💥"
    },

    // ========== OPERACIONES ESPECIALES (VERDE) ==========
    {
        id: 12,
        nombre: "Asesinato de Qasem Soleimani",
        fecha: "3 de enero de 2020",
        color: "VERDE",
        tamaño: 15,
        categoria: "Operaciones Especiales",
        pizzasCriticas: 135,
        pizzasNormales: 48,
        incremento: 181,
        descripcion: "Ataque con drones de EE.UU. que asesinó al general iraní Qasem Soleimani.",
        emoji: "🎯"
    },
    {
        id: 13,
        nombre: "Operación Lanza de Neptuno (Bin Laden)",
        fecha: "2 de mayo de 2011",
        color: "VERDE",
        tamaño: 10,
        categoria: "Operaciones Especiales",
        pizzasCriticas: 115,
        pizzasNormales: 42,
        incremento: 174,
        descripcion: "Operación de los Navy SEALs de EE.UU. que resultó en la muerte de Osama bin Laden.",
        emoji: "🎯"
    },
    {
        id: 14,
        nombre: "Raid contra Abu Bakr al-Baghdadi",
        fecha: "26 de octubre de 2019",
        color: "VERDE",
        tamaño: 5,
        categoria: "Operaciones Especiales",
        pizzasCriticas: 95,
        pizzasNormales: 45,
        incremento: 111,
        descripcion: "Operación de las Fuerzas Especiales de EE.UU. que llevó a la muerte del líder de ISIS.",
        emoji: "🎯"
    }
];

// ==========================================
// CONFIGURACIÓN DE COLORES
// ==========================================

const COLORES_CONFIG = {
    ROJO: {
        nombre: "Invasiones Terrestres",
        hex: "#DC2626",
        icono: "../Entrega-2/assets/icons/militar.svg",
        soundFile: "../Entrega-2/assets/sounds/marcha.mp3"
    },
    NARANJA: {
        nombre: "Bombardeos y Ataques Aéreos",
        hex: "#F59E0B",
        icono: "../Entrega-2/assets/icons/bombardeo.svg",
        soundFile: "../Entrega-2/assets/sounds/sirena.mp3"
    },
    AMARILLO: {
        nombre: "Crisis Políticas",
        hex: "#3B82F6",
        icono: "../Entrega-2/assets/icons/politica.svg",
        soundFile: "../Entrega-2/assets/sounds/conversacion.mp3"
    },
    AZUL: {
        nombre: "Atentados Terroristas",
        hex: "#8B5CF6",
        icono: "../Entrega-2/assets/icons/terrorista.svg",
        soundFile: "../Entrega-2/assets/sounds/explosion.mp3"
    },
    VERDE: {
        nombre: "Operaciones Especiales",
        hex: "#10B981",
        icono: "../Entrega-2/assets/icons/espia.svg",
        soundFile: "../Entrega-2/assets/sounds/radio.mp3"
    }
};

// ==========================================
// CONFIGURACIÓN DE TAMAÑOS
// ==========================================

const TAMAÑOS_CONFIG = {
    15: {
        nombre: "Grande",
        gravedad: "Alta",
        descripcion: ">150 pizzas críticas"
    },
    10: {
        nombre: "Mediano",
        gravedad: "Media",
        descripcion: "100-150 pizzas críticas"
    },
    5: {
        nombre: "Pequeño",
        gravedad: "Baja",
        descripcion: "<100 pizzas críticas"
    }
};

// ==========================================
// FUNCIONES AUXILIARES
// ==========================================

/**
 * Busca un evento basado en color y tamaño
 */
function buscarEvento(color, tamaño) {
    return EVENTOS.find(e => e.color === color && e.tamaño === tamaño);
}