import { animate } from "../dismal_modules/Utilities.js"

const cardElems = Array.from(document.querySelectorAll('[data-card-dark]'))


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
