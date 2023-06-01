function loadGame () {
	window.addEventListener('load' , () => {
		const loader = document.getElementById('loader')
		const section = document.getElementById('pokemon__play')
		const time_load = 3000

		setTimeout(()=>{
			loader.style.display = 'none'
			section.style.display = 'flex'
		} , time_load)
	})
}

loadGame()