import { getData } from './fetch_api.js'

const usingData = () => {
	getData()
		.then(data => {
			console.log(data)
		} )
		.catch( error => console.error(error))
}

usingData()
