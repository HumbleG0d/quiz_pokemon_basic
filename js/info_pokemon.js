export const infoPokemon = (pokemon) => {
	const img = document.getElementById('pokemon__img')
	img.style.backgroundImage = `url(${pokemon.sprites.other.dream_world.front_default})`

	const td_table = document.querySelectorAll('td')
	td_table.forEach((element , index) => {
		element.style = `--size: calc(${pokemon.stats[index].base_stat}/300)`
	})
	console.log(pokemon.name)
}