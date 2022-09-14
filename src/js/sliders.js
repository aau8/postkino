import Swiper, { Navigation, Pagination } from "swiper";
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

const mainSwiper = new Swiper("[data-swiper=main]", {
	modules: [Navigation, Pagination],

	slidesPerView: 6,
	spaceBetween: 40,
	loop: true,
	// loopedSlides: 2,
	centeredSlides: true,
	allowTouchMove: false,

	navigation: {
		nextEl: '.main__arrow.is-next',
		prevEl: '.main__arrow.is-prev',
	},

	on: {
		slideChangeTransitionStart: setOpacity
	}
});

function setOpacity(swiper) {
	const START_OPACITY_SLIDE = 3
	const slideArr = Array.from(swiper.slides)
	const activeSlideIndex = slideArr.findIndex((slide, index) => slide.classList.contains('swiper-slide-active'))

	let index = 1

	// slideArr.map(slide => slide.style.transition = 0)
	slideArr.map(slide => slide.style.opacity = 1)

	// setTimeout(() => {
	// 	slideArr.map(slide => slide.style.transition = 'opacity .3s')

	// }, 100)


	while (index <= activeSlideIndex) {
		const OPACITY = 1 - (1 / 6 * index)

		if (slideArr[activeSlideIndex - index]) {
			slideArr[activeSlideIndex - index].style.opacity = OPACITY < 0 ? 0 : OPACITY
		}

		if (slideArr[activeSlideIndex + index]) {
			slideArr[activeSlideIndex + index].style.opacity = OPACITY < 0 ? 0 : OPACITY
		}

		index++
	}
}
