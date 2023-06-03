
export const getRandomPokemon = (data) => {
	const array_pokemons = data.results.map(element => element.name)
	const index_ran = Math.floor(Math.random() *(array_pokemons.length + 1))
	return array_pokemons[index_ran]
}

