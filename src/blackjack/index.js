
import _ from 'underscore';
import {
	crearDeck,
	pedirCarta,
	valorCarta,
	turnoComputadora,
	crearCartaHTML,
} from './usecases';

// BLACKJACK


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
	puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

// Crea el deck
deck = crearDeck(tipos, especiales);

// Desactiva el boton detener al inicio
btnDetener.disabled = true;

// Eventos
btnPedir.addEventListener('click', () => {
	
	// Habilita el boton detener despues de jugar la primer carta
	btnDetener.disabled = false;

	const carta = pedirCarta(deck);

	puntosJugador = puntosJugador + valorCarta(carta);
	puntosHTML[0].innerText = puntosJugador;

	const imgCarta = crearCartaHTML( carta );
	divCartasJugador.append(imgCarta);
	
	if (puntosJugador > 21) {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
	} else if (puntosJugador === 21) {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
	}
});

btnDetener.addEventListener('click', () => {
	btnPedir.disabled = true;
	btnDetener.disabled = true;
	turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
	console.clear();

	deck = [];
	deck = crearDeck(tipos, especiales);

	puntosJugador = 0;
	puntosComputadora = 0;

	puntosHTML[0].innerText = 0;
	puntosHTML[1].innerText = 0;

	divCartasComputadora.innerHTML = '';
	divCartasJugador.innerHTML = '';

	btnPedir.disabled = false;
	btnDetener.disabled = true; // Desactiva de nuevo el boton detener
});

