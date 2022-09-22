import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper"

const mainBg = document.querySelector('.main__bg')
const dbName = mainBg?.dataset?.db

if (dbName) {
	const sliderWrapper = mainBg.querySelector('.swiper-wrapper')

	fetch(`./assets/data/mainScreen/${dbName}`)
		.then(res => res.json())
		.then(data => {
			return data.map(img => {
				return `
					<div class="swiper-slide main__bg-slide">
						<img src="${img}" alt="" />
					</div>
				`.trim()
			}).join('')
		})
		.then(slides => {
			sliderWrapper.innerHTML = slides
		})
		.then(() => {
			initSwiper()
		})
}

let resizeObserver = true

window.addEventListener('resize', e => {

	if (resizeObserver) {
		resizeObserver = false

		setTimeout(() => {
			initSwiper()
			resizeObserver = true
		}, 500)
	}
})

function initSwiper() {
	const mainBgSlider = new Swiper('[data-swiper=main-bg]', {
		modules: [Autoplay, EffectFade],

		loop: true,
		allowTouchMove: false,
		slidesPerView: 1,

		autoplay: {
			delay: 4000,
		},
		speed: 3000,

		effect: 'fade',
	})
}
