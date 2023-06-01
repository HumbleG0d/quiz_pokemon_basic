import { ERRORS_MESSAGES } from './error_messages.js'

export const getData = async (query) => {
	const url = `https://pokeapi.co/api/v2/${query}`
	try {
		const response = await fetch(url)
		if(response.ok){
			const data = response.json()
			return data
		}
		else{
			const error_message = ERRORS_MESSAGES[response.status] || ERRORS_MESSAGES[response.status]
			throw new Error(error_message)
		}
	} catch (error) {
		console.log(error.name + ': ' + error.message)
	}
}

