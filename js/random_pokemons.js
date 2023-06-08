//? La funcion revisira un array de 20 elemntos de estos 20 elementos quiero que salga aleatoriamente sin repetirse , babara un evento que me permita elejir otro  pokemon pero sin repeticion despues de salir los 20 se regresara a la API por otros 20 pokemones.AHora con cadap okemons elejido se le psara por una funcion  que nos mostrara todos la info del pokemon.
import { infoPokemon } from './info_pokemon.js'

export const getRandomPokemon = (data) => {
	
	const index_ran = Math.floor(Math.random() *(data.length + 1))
	infoPokemon(data[index_ran])
}

