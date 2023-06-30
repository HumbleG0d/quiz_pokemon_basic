//? La funcion revisira un array de 20 elemntos de estos 20 elementos quiero que salga aleatoriamente sin repetirse , babara un evento que me permita elejir otro  pokemon pero sin repeticion despues de salir los 20 se regresara a la API por otros 20 pokemones.AHora con cadap okemons elejido se le psara por una funcion  que nos mostrara todos la info del pokemon.
import { infoPokemon } from './info_pokemon.js'
import { play } from './playing.js'

export const getRandomPokemon = async (data) => {
	let valid = true
	while(valid){
		const index_ran = Math.floor(Math.random() *(data.length + 1))
		infoPokemon(data[index_ran])
		valid = await play(data[index_ran].name)
		data.splice(index_ran,1) 
	}
}

