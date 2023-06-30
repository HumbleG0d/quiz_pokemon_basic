import { getData } from './fetch_api.js'
import { getRandomPokemon } from './random_pokemons.js'

const usingData = () => {
	getData()
		.then(data => {
			getRandomPokemon(data)
		} )
		.catch( error => console.error(error))
}

usingData()
