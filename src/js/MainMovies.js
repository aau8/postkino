import Swiper, { Navigation, Pagination, Grid } from "swiper"
import { isMobile } from "../dismal_modules/Utilities.js"

const mainMovies = document.querySelector('[data-swiper=main]')

if (mainMovies) {
	const sliderWrapper = mainMovies.querySelector('.swiper-wrapper')
	let slidesCount = 0
	let REPEAT_VALUE = 3

	fetch('./assets/data/movies.json')
		.then(res => res.json())
		.then(data => {
			let arr = []

			console.log(data)
			for (let i = 0; i < REPEAT_VALUE; i++) {
				slidesCount += data.flat().length

				// arr.push(data.map(src => {
				// 	return `
				// 		<div class="swiper-slide main-slide">
				// 			<img src="${src}" alt="" />
				// 		</div>
				// 	`.trim()
				// }).join(''))


				arr.push(data.map(block => {
					return block.map(movie => {
						if (movie.year) {
							return ''
						}
						if (movie.video) {
							return `
								<div class="swiper-slide main-slide" data-modal-open="video" data-video-src="${movie.video}" style="cursor:pointer;">
									<img src="${movie.img}" alt="" />
								</div>
							`.trim()
						}
						else {
							return `
								<div class="swiper-slide main-slide">
									<img src="${movie.img}" alt="" />
								</div>
							`.trim()
						}
					}).join('')
				}).join(''))
			}

			return arr.join('')
		})
		.then(slides => {
			sliderWrapper.innerHTML = slides
		})
		.then(() => {
			const mainSwiper = new Swiper("[data-swiper=main]", {
				modules: [Navigation, Pagination],

				loop: true,
				centeredSlides: true,
				allowTouchMove: false,
				// watchSlidesProgress: true,
				// loopedSlidesLimit: false,

				breakpoints: {
					900: {
						slidesPerView: 6,
						spaceBetween: 40,
					},
					700: {
						slidesPerView: 5,
						spaceBetween: 30,
					},
					500: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					450: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					350: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					0: {
						slidesPerView: 2.4,
						spaceBetween: 20,
					},
				},

				navigation: {
					nextEl: '.main__arrow.is-next',
					prevEl: '.main__arrow.is-prev',
				},
			})

			console.log('slidesCount', slidesCount)

			// mainSwiper.slideTo((slidesCount / 5) * 3 - 4)
			mainSwiper.slideTo(slidesCount / REPEAT_VALUE * (parseInt(REPEAT_VALUE / 2) + REPEAT_VALUE % 2) - (REPEAT_VALUE - 1))

			setOpacity(mainSwiper)

			if (mainSwiper) {
				mainSwiper?.navigation?.nextEl?.addEventListener('click', e => {
					setOpacity(mainSwiper)
				})

				mainSwiper?.navigation?.prevEl?.addEventListener('click', e => {
					setOpacity(mainSwiper)
				})
			}
		})
}

function setOpacity(swiper) {
	const slideArr = Array.from(swiper.slides)

	// console.log(slideArr)

	if (isMobile.any()) {
		slideArr.forEach(slide => {
			slide.style.opacity = 1
		})
		return
	}

	const activeSlideIndex = slideArr.findIndex((slide, index) => slide.classList.contains('swiper-slide-active'))

	console.log(slideArr)
	console.log(activeSlideIndex)

	let index = 1
	let slidesCount = 4

	// if (window.innerWidth < 1920) {
	// 	slidesCount = 5
	// }

	// if (window.innerWidth < 1500) {
	// 	slidesCount = 4
	// }

	// if (window.innerWidth < 1200) {
	// 	slidesCount = 3
	// }

	while (index <= activeSlideIndex) {
		const OPACITY = 1 - (1 / slidesCount * index)
		const slidePrev = slideArr[activeSlideIndex - index]
		const slideNext = slideArr[activeSlideIndex + index]

		console.log('ok')

		if (slidePrev) {
			console.log('prev')
			slidePrev.style.opacity = OPACITY < 0 ? 0 : OPACITY
			slidePrev.style.pointerEvents = OPACITY < 0 || OPACITY === 0 ? 'none' : 'fill'
		}

		if (slideNext) {
			console.log('next')
			slideNext.style.opacity = OPACITY < 0 ? 0 : OPACITY
			slideNext.style.pointerEvents = OPACITY < 0 || OPACITY === 0 ? 'none' : 'fill'
		}

		index++
	}
}
