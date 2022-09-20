import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Grid } from "swiper";
import { animate } from "../dismal_modules/Utilities.js";
// import 'swiper/css'

/**
 * Базовые методы и свойства библиотеки Swiper
 * @param {SwiperModule[]} modules - используемые модули в слайдере
 * @param {Boolean} loop - сделать слайдер бесконечным
 *
 * @param {Object} navigation (module Navigation) - стрелки навигации {@link https://swiperjs.com/swiper-api#navigation}
 * @param {Object} pagination (module Pagination) - пагинация {@link https://swiperjs.com/swiper-api#pagination}
 * @param {Boolean|Object} scrollbar (module Scrollbar) - скролбар {@link https://swiperjs.com/swiper-api#scrollbar}
 */

const mainBgSlider = new Swiper('[data-swiper=main-bg]', {
	modules: [Autoplay, EffectFade],

	loop: true,
	allowTouchMove: false,
	slidesPerView: 1,

	autoplay: {
		delay: 4000,
	},

	effect: 'fade',
})

const mainSwiper = new Swiper("[data-swiper=main]", {
	modules: [Navigation, Pagination],

	loop: true,
	centeredSlides: true,
	allowTouchMove: false,

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
			spaceBetween: 20,
		},
		350: {
			slidesPerView: 3,
			spaceBetween: 16,
		},
		0: {
			slidesPerView: 2.4,
			spaceBetween: 16,
		},
	},

	navigation: {
		nextEl: '.main__arrow.is-next',
		prevEl: '.main__arrow.is-prev',
	},

	on: {
		// init: setOpacity,
		// slideChange: setOpacity,
	}
});

if (mainSwiper) {
	mainSwiper?.navigation?.nextEl?.addEventListener('click', e => {
		setOpacity(mainSwiper)
	})

	mainSwiper?.navigation?.prevEl?.addEventListener('click', e => {
		setOpacity(mainSwiper)
	})
}


// Array.from(mainSwiper.slides).map(slide => slide.style.opacity = 0)


function setOpacity(swiper) {
	const START_OPACITY_SLIDE = 3
	const slideArr = Array.from(swiper.slides)
	const activeSlideIndex = slideArr.findIndex((slide, index) => slide.classList.contains('swiper-slide-active'))

	let index = 1

	// slideArr.map(slide => slide.style.transition = 0)
	slideArr.map(slide => slide.style.opacity = 1)

	console.log('ok')


	// animate({
	// 	duration: 300,
	// 	draw: progress => {
	// 		const slide = slideArr[activeSlideIndex]
	// 		const slideOpacity = slide.style.opacity

	// 		slide.style.opacity = slideOpacity + (1 - slideOpacity) * progress
	// 	},
	// })

	// animate({
	// 	duration: 300,
	// 	draw: progress => {
	// 		slideArr[activeSlideIndex + 1].style.opacity = .8 * progress
	// 	},
	// })

	// animate({
	// 	duration: 300,
	// 	draw: progress => {
	// 		slideArr[activeSlideIndex - 1].style.opacity = .8 * progress
	// 	},
	// })

	while (index <= activeSlideIndex) {
		const OPACITY = 1 - (1 / 6 * index)
		const slidePrev = slideArr[activeSlideIndex - index]
		const slideNext = slideArr[activeSlideIndex + index]

		if (slidePrev) {
			const slidePrevOpacity = slidePrev.style.opacity

			animate({
				duration: 300,
				draw: progress => {
					slidePrev.style.opacity = OPACITY < 0 ? slidePrevOpacity - slidePrevOpacity * progress : slidePrevOpacity * progress
				},
			})
			// slidePrev.style.opacity = OPACITY < 0 ? 0 : OPACITY
		}

		if (slideNext) {
			const slideNextOpacity = slideNext.style.opacity

			animate({
				duration: 300,
				draw: progress => {
					slideNext.style.opacity = OPACITY < 0 ? slideNextOpacity - slideNextOpacity * progress : slideNextOpacity * progress
				},
			})
			// slideNext.style.opacity = OPACITY < 0 ? 0 : OPACITY
		}

		index++
	}
}



const servicesSwiper = new Swiper("[data-swiper=services]", {
	modules: [Navigation, Pagination],

	// loop: true,
	// centeredSlides: true,
	allowTouchMove: false,

	breakpoints: {
		1000: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
		700: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		450: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		0: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},

	navigation: {
		nextEl: '.services__arrow.is-next',
		prevEl: '.services__arrow.is-prev',
	},
});

if (servicesSwiper.isLocked) {
	const arrowsBlock = document.querySelector('.services__arrows')

	if (arrowsBlock) arrowsBlock.style.display = 'none'
}


const portfolioSwiper = new Swiper("[data-swiper=portfolio]", {
	modules: [Navigation, Pagination],

	allowTouchMove: false,

	breakpoints: {
		1000: {
			slidesPerView: 3,
			spaceBetween: 70,
		},
		700: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		450: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		0: {
			slidesPerView: 3,
			spaceBetween: 22,
		},
	},

	navigation: {
		nextEl: '.portfolio__arrow.is-next',
		prevEl: '.portfolio__arrow.is-prev',
	},
});

if (portfolioSwiper.isLocked) {
	const arrowsBlock = document.querySelector('.portfolio__arrows')

	if (arrowsBlock) arrowsBlock.style.display = 'none'
}

const reelsSwiperElem = document.querySelector('[data-swiper=reels]')
const reelsSwiper = new Swiper(reelsSwiperElem, {
	modules: [Navigation, Pagination],

	// loop: true,
	centeredSlides: true,
	allowTouchMove: false,
	slideToClickedSlide: true,

	breakpoints: {
		1000: {
			// slidesPerView: 'auto',
			// spaceBetween: 40,
			slidesPerView: 2.1,
			spaceBetween: 190,
		},
		600: {
			slidesPerView: 1.8,
			spaceBetween: 140,
		},
		450: {
			slidesPerView: 2.1,
			spaceBetween: 80,
		},
		370: {
			slidesPerView: 2.25,
			spaceBetween: 40,
		},
		0: {
			slidesPerView: 1.8,
			spaceBetween: 40,
		},
	},

	navigation: {
		nextEl: '.reels__arrow.is-next',
		prevEl: '.reels__arrow.is-prev',
	},

	pagination: {
		el: '.reels-pagin',
		clickable: true,
		// type: 'custom',
		renderBullet: (index, className) => {
			// console.log(index, className)
			// console.log({ reelsSwiperElem })
			// console.log(reelsSwiperElem.swiper)
			// console.log(reelsSwiperElem.querySelectorAll('.reels-slide'))
			// console.log(reelsSwiperElem.querySelectorAll('.reels-slide')[index])

			return `<button class="${className} title-3 reels-pagin__item">${reelsSwiperElem.querySelectorAll('.reels-slide')[index].querySelector('.reels-slide__title').textContent}</button>`
		},
		// renderCustom: (swiper, current, total) => {
		// 	console.log(swiper, current, total)

		// 	return `<div>hello ${current}<div>`
		// }
	}
});

if (reelsSwiper.isLocked) {
	const arrowsBlock = document.querySelector('.reels__arrows')

	if (arrowsBlock) arrowsBlock.style.display = 'none'
}


const movieFirstSwiper = new Swiper("[data-swiper=movies-first]", {
	modules: [Navigation, Pagination, Grid],

	allowTouchMove: false,
	watchSlidesProgress: true,

	grid: {
		rows: 1,
		fill: 'column',
	},

	breakpoints: {
		1000: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 160,

			grid: {
				rows: 2,
			},
		},
		700: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 100,

			grid: {
				rows: 2,
			},
		},
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1,

		},
	},

	navigation: {
		nextEl: '.movies__arrow.is-next',
		prevEl: '.movies__arrow.is-prev',
	},
});


// if (window.innerWidth > 700) {
// 	const movieSecondSwiper = new Swiper("[data-swiper=movies-second]", {
// 		modules: [Navigation, Pagination],

// 		allowTouchMove: false,
// 		slidesPerView: 1,
// 		spaceBetween: 0,

// 		navigation: {
// 			nextEl: '.movies__arrow.is-next',
// 			prevEl: '.movies__arrow.is-prev',
// 		},
// 	});
// }

const movieSecondSwiper = new Swiper("[data-swiper=advert]", {
	modules: [Navigation, Pagination, Grid],

	// allowTouchMove: false,
	// watchSlidesProgress: true,

	// slidesPerView: 4,
	// slidesPerGroup: 4,
	// spaceBetween: 40,

	allowTouchMove: false,
	watchSlidesProgress: true,

	grid: {
		rows: 1,
		fill: 'row',
	},

	breakpoints: {
		900: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 40,

			grid: {
				rows: 2,
			}
		},
		410: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 20,

			grid: {
				rows: 2,
			}
		},
		0: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 20,

			grid: {
				rows: 2,
			}
		}
	},

	navigation: {
		nextEl: '.advert__arrow.is-next',
		prevEl: '.advert__arrow.is-prev',
	},
});
