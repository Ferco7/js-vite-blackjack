
import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposCartas Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

// exportacion individual = export antes de la funcion
export const crearDeck = (tiposCartas, tiposEspeciales) => {

	if (!tiposCartas || tiposCartas.length === 0)
		throw new Error(
			'Tipos de carta es obligatorio como un arreglo de string'
		);
	
	if (!tiposEspeciales || tiposEspeciales.length === 0)
		throw new Error(
			'Tipos de carta especiales es obligatorio como un arreglo de string'
		);


	let deck = [];

	for (let i = 2; i <= 10; i++) {
		for (let tipo of tiposCartas) {
			deck.push(i + tipo);
		}
	}

	for (let tipo of tiposCartas) {
		for (let esp of tiposEspeciales) {
			deck.push(esp + tipo);
		}
	}

	deck = _.shuffle(deck);
	return deck;
};


// export default crearDeck; // exportacion por defecto

