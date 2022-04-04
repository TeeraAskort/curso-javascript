const miModulo = (() => {
  "use strict";

  let deck = [];
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];

  // Referencias al HTML
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");
  // const smallJugador = document.querySelector("small");

  const divCartas = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");

  const inicializarJuego = (numJugadores = 1) => {
    deck = crearDeck();

    puntosJugadores = [];
    for (let i = 0; i < numJugadores + 1; i++) {
      puntosJugadores.push(0);
    }

    puntosHTML.forEach((punto) => (punto.innerHTML = "0"));

    divCartas.forEach((div) => (div.innerHTML = ""));

    btnDetener.disabled = false;
    btnPedir.disabled = false;
  };

  // Esta funcion crea una nueva baraja
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (let especial of especiales) {
      for (let tipo of tipos) {
        deck.push(especial + tipo);
      }
    }
    return _.shuffle(deck);
  };

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en la baraja";
    }
    return deck.pop();
  };

  // pedirCarta();

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    // Ejercicio
    if (!isNaN(valor)) {
      return valor * 1;
    } else {
      return valor === "A" ? 11 : 10;
    }
  };

  // const valor = valorCarta(pedirCarta());

  const recuentoPuntos = () => {
    const [puntosJugador, puntosOrdenador] = puntosJugadores;

    if (puntosJugador > 21) {
      alert("Perdiste");
    } else if (puntosJugador === 21) {
      if (puntosOrdenador === 21) {
        alert("Empate");
      } else {
        alert("Ganaste");
      }
    } else {
      if (puntosOrdenador > 21) {
        alert("Ganaste");
      } else if (puntosJugador < puntosOrdenador) {
        alert("Perdiste");
      }
    }
  };

  // Turno: 0 = primer jugador y último del ordenador
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };

  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartas[turno].append(imgCarta);
  };

  // Turno del ordenador

  const turnoComputadora = (puntosMinimos) => {
    let puntosOrdenador = 0;
    do {
      const carta = pedirCarta();
      puntosOrdenador = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosOrdenador < puntosMinimos && puntosMinimos <= 21);

    recuentoPuntos();
  };

  // Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();

    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      console.warn("Perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, Genial");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugadores[0]);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });

  return {
    nuevoJuego: inicializarJuego,
  };
})();
