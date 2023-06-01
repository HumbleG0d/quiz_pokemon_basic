function loadGame () {
	window.addEventListener('load' , () => {
		const loader = document.getElementById('loader')
		const time_load = 3000

		setTimeout(()=>{
			loader.style.display = 'none'
		} , time_load)
	})
}

loadGame()