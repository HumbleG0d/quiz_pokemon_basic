import { ERRORS_MESSAGES } from './error_messages.js'

export const getData = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon/'
	try {
		const response = await fetch(url)

		if(!response.ok){
			throw new Error(getError(response))
		}

		const data = await response.json()

		let info_pokemos = []

		for(let index of data.results){
			const response1 = await fetch(index.url)

			if(!response1.ok){
				throw new Error(getError(response1))
			}

			const data1 = await response1.json()
			info_pokemos.push(data1)
		}

		return info_pokemos
		
	} catch (error) {
		console.log(error.name + ': ' + error.message)
	}
}


function getError(response){
	const error_message = ERRORS_MESSAGES[response.status] || ERRORS_MESSAGES[response.status]
	return error_message
}