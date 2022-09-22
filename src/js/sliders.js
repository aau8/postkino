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

// const mainSwiper = new Swiper("[data-swiper=main]", {
// 	modules: [Navigation, Pagination],

// 	loop: true,
// 	centeredSlides: true,
// 	allowTouchMove: false,
// 	watchSlidesProgress: true,
// 	// loopAdditionalSlides: 6,
// 	// loopedSlides: 4,
// 	// loopFillGroupWithBlank: true,
// 	loopedSlidesLimit: false,

// 	breakpoints: {
// 		900: {
// 			slidesPerView: 6,
// 			spaceBetween: 40,
// 		},
// 		700: {
// 			slidesPerView: 5,
// 			spaceBetween: 30,
// 		},
// 		500: {
// 			slidesPerView: 4,
// 			spaceBetween: 20,
// 		},
// 		350: {
// 			slidesPerView: 3,
// 			spaceBetween: 16,
// 		},
// 		0: {
// 			slidesPerView: 2.4,
// 			spaceBetween: 16,
// 		},
// 	},

// 	navigation: {
// 		nextEl: '.main__arrow.is-next',
// 		prevEl: '.main__arrow.is-prev',
// 	},

// 	on: {
// 		// init: setOpacity,
// 		// slideChange: setOpacity,
// 	}
// });

// if (mainSwiper) {
// 	mainSwiper?.navigation?.nextEl?.addEventListener('click', e => {
// 		setOpacity(mainSwiper)
// 	})

// 	mainSwiper?.navigation?.prevEl?.addEventListener('click', e => {
// 		setOpacity(mainSwiper)
// 	})
// }


// function setOpacity(swiper) {
// 	// const START_OPACITY_SLIDE = 3
// 	const slideArr = Array.from(swiper.slides)
// 	const activeSlideIndex = slideArr.findIndex((slide, index) => slide.classList.contains('swiper-slide-active'))

// 	let index = 1

// 	while (index <= activeSlideIndex) {
// 		const OPACITY = 1 - (1 / 6 * index)
// 		const slidePrev = slideArr[activeSlideIndex - index]
// 		const slideNext = slideArr[activeSlideIndex + index]

// 		if (slidePrev) {
// 			const slidePrevOpacity = slidePrev.style.opacity

// 			slidePrev.style.opacity = OPACITY < 0 ? 0 : OPACITY
// 		}

// 		if (slideNext) {
// 			const slideNextOpacity = slideNext.style.opacity

// 			slideNext.style.opacity = OPACITY < 0 ? 0 : OPACITY
// 		}

// 		index++
// 	}
// }



const servicesSwiper = new Swiper("[data-swiper=services]", {
	modules: [Navigation, Pagination],

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

	if (arrowsBlock) arrowsBlock.classList.add('is-lock')
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

	if (arrowsBlock) arrowsBlock.classList.add('is-lock')
}
