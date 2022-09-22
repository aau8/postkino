// import { animate } from "../dismal_modules/Utilities.js"

// const cardContainerElems = Array.from(document.querySelectorAll('[data-card-dark-container]'))

// cardContainerElems.forEach(container => {
// })

export default function setDarkHover(selector) {
	const container = document.querySelector(selector)
	const cardElems = Array.from(container.querySelectorAll('[data-card-dark]'))

	cardElems.forEach(card => {

		card.addEventListener('mouseenter', () => {
			setTimeout(() => {
				cardElems.filter(elem => elem != card).forEach(elem => {
					elem.classList.add('is-darkened')
				})
			}, 100)
		})

		card.addEventListener('mouseleave', () => {
			setTimeout(() => {
				cardElems.filter(elem => elem != card).forEach(elem => {
					elem.classList.remove('is-darkened')
				})
			}, 100)
		})
	})
}
