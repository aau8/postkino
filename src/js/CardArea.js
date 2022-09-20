import { animate } from "../dismal_modules/Utilities.js"

const cardElems = Array.from(document.querySelectorAll('.c-area'))
// const TRANSITION = 1000

cardElems.forEach(card => {
	// card.style.transform = 'scale(1)'

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
