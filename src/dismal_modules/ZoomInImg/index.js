import { bodyLock, bodyUnlock } from '../Utilities.js'

// Увеличение изображения при клике по нему. У изображения должен быть атрибут data-zoom
// Любое изображение у которого есть родитель с классом text будет открываться при клике
export default function ZoomInImg() {
	const TR = 300
	const zoomInImgElems = Array.from(document.querySelectorAll("[data-zoom], .text img"))

	for (let i = 0; i < zoomInImgElems.length; i++) {
		zoomInImgElems[i].style.cursor = "zoom-in"
	}

	window.addEventListener('click', e => {
		const target = e.target

		if (target.getAttribute('data-zoom') != null || target.closest('.text') && target.tagName === 'IMG') {
			const imgSrc = target.getAttribute("src")
			const bigImg = document.createElement("div")

			bigImg.classList.add("big-img")
			bigImg.style.setProperty('--zoom-img-transition', TR + 'ms')
			bigImg.innerHTML = `
				<div class="big-img__body"><img class="big-img__img is-current" src="${imgSrc}" alt="" data-zoom-out></div>
				<div class="big-img__arrows">
					<button class="big-img__arrow is-prev"></button>
					<button class="big-img__arrow is-next"></button>
				</div>
				<button class="big-img__close"><span></span><span></span></button>
			`

			document.querySelector(".wrapper").append(bigImg)

			setTimeout(() => {
				bigImg.classList.add("is-show")
			}, 1)

			bodyLock()
		}

		if (target.classList.contains('big-img__arrow')) {
			const arrow = target
			const container = arrow.closest('.big-img')
			const imgBody = container.querySelector('.big-img__body')
			const currentImg = container.querySelector('.big-img__body .big-img__img.is-current')
			const currentImgIndex = zoomInImgElems.findIndex(img => {
				return img.src === currentImg.src
			})

			const arrowNext = container.querySelector('.big-img__arrow.is-next')
			const arrowPrev = container.querySelector('.big-img__arrow.is-prev')

			arrowNext.style.pointerEvents = 'none'
			arrowPrev.style.pointerEvents = 'none'

			let imgIndex


			if (arrow.classList.contains('is-next')) {
				imgIndex = currentImgIndex + 1
			}
			else if (arrow.classList.contains('is-prev')) {
				imgIndex = currentImgIndex - 1
			}

			if (imgIndex >= zoomInImgElems.length) {
				imgIndex = 0
			}
			else if (imgIndex < 0) {
				imgIndex = zoomInImgElems.length - 1
			}

			const newImg = document.createElement('img')

			newImg.classList.add('big-img__img')
			newImg.src = zoomInImgElems[imgIndex].src
			newImg.setAttribute('data-zoom-out', '')

			imgBody.append(newImg)
			newImg.classList.add('is-new')

			setTimeout(() => {
				newImg.style.opacity = 1
				currentImg.style.opacity = 0

				setTimeout(() => {
					currentImg.remove()
					newImg.classList.remove('is-new')
					newImg.classList.add('is-current')

					arrowNext.style.pointerEvents = 'fill'
					arrowPrev.style.pointerEvents = 'fill'
				}, 500)
			}, 1)


			// console.log(currentImgIndex, imgIndex)
		}

		if (target.getAttribute('data-zoom-out') != null || (target.classList.contains('big-img__close') || target.closest('.big-img__close'))) {
			const bigImg = target.closest('.big-img')

			bigImg.classList.remove("is-show")
			bodyUnlock(250)

			setTimeout(() => {
				bigImg.remove()
			}, TR)
		}
	})
}
