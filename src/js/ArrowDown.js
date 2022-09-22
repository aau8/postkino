const arrow = document.querySelector('.main-arrow')

if (arrow) {
	const main = document.querySelector('.main')

	arrow.addEventListener('click', e => {
		console.log(window.scrollY, main.getBoundingClientRect().height)
		window.scrollBy(0, main.getBoundingClientRect().height - window.scrollY + 10)
	})
}
