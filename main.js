// Palabras para adivinar
const palabras = [
  "elefante",
  "coderhouse",
  "clases",
  "javascript",
  "biblioteca",
  "ventana",
];

// Variables del juego
let palabraSeleccionada = "";
let palabraAdivinada = "";
let intentos = 5;

// Función para seleccionar una palabra al azar
function elegirUnaPalabra() {
  const indice = Math.floor(Math.random() * palabras.length);
  palabraSeleccionada = palabras[indice];
  palabraAdivinada = "_".repeat(palabraSeleccionada.length);
}

// Función para adivinar una letra de la palabra
function adivinarLetra(letra) {
  let letraAdivinada = false;
  let nuevaPalabraAdivinada = "";

  for (let i = 0; i < palabraSeleccionada.length; i++) {
    if (palabraSeleccionada[i] === letra) {
      nuevaPalabraAdivinada += letra;
      letraAdivinada = true;
    } else {
      nuevaPalabraAdivinada += palabraAdivinada[i];
    }
  }

  if (!letraAdivinada) {
    intentos--;
  }

  palabraAdivinada = nuevaPalabraAdivinada;
}

// Función para mostrar el estado actual del juego
function mostrarEstadoJuego() {
  console.log("Palabra: " + palabraAdivinada);
  console.log("Te quedan " + intentos + " intentos");
}

// Función para verificar si el jugador ha ganado o perdido
function verificarEstadoJuego() {
  if (palabraAdivinada === palabraSeleccionada) {
    console.log("adivinaste " + palabraSeleccionada + "!");
    return true;
  }

  if (intentos === 0) {
    console.log(
      "Ya te terminaste todos los intentos!, la palabra correcta era: " +
        palabraSeleccionada
    );
    return true;
  }

  return false;
}

// Función principal que ejecuta el juego
function jugar() {
  elegirUnaPalabra();
  mostrarEstadoJuego();

  while (!verificarEstadoJuego()) {
    const letraIngresada = prompt("Ingresa una letra:").toLowerCase();

    if (letraIngresada.length !== 1 || !letraIngresada.match(/[a-z]/i)) {
      console.log("ingresa una letra");
      continue;
    }

    if (palabraAdivinada.includes(letraIngresada)) {
      console.log(
        "Ya esta usada esta letra, tenes que poner una que no hayas usado"
      );
      continue;
    }

    adivinarLetra(letraIngresada);
    mostrarEstadoJuego();
  }
}

// Iniciar el juego
jugar();
