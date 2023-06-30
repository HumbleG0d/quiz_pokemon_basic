export const play = (name_pokemon) => {
	return new Promise((resolve) => {
		const div_pokemon_name = document.getElementById('pokemon__name')

		while(div_pokemon_name.firstChild){
			div_pokemon_name.firstChild.remove()
		}

		for(let i = 0 ; i < name_pokemon.length ; i++){
			const input = document.createElement('input')
			input.className = 'input_name'
			div_pokemon_name.appendChild(input)
		}
		
		const inputs = document.querySelectorAll('input')
		let name_poke = ''
  
		inputs.forEach((element) => {
			element.addEventListener('keyup' , ()=>{
				name_poke = name_poke + element.value.toLowerCase()
				if(name_poke === name_pokemon){
					console.log(name_poke)
					resolve(true)
				}
			})
		})
	})
}