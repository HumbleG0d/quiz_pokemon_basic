import { ERRORS_MESSAGES } from './error_messages.js'
import { getRandomPokemon } from './random_pokemons.js'

export const getData = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
	try {
		const response = await fetch(url)
		if(!response.ok){
			throw new Error(getError(response))
		}

		const data = await response.json()
		let pokemon = getRandomPokemon(data)


		const url1 = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

		const response1 = await fetch(url1)

		if(!response1.ok){
			throw new Error(getError(response1))
		}

		const data1 = await response1.json()
		return data1
		
	} catch (error) {
		console.log(error.name + ': ' + error.message)
	}
}


function getError(response){
	const error_message = ERRORS_MESSAGES[response.status] || ERRORS_MESSAGES[response.status]
	return error_message
}