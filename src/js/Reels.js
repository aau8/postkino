import Swiper, { Navigation, Pagination } from "swiper"

const reels = document.querySelector('.reels')

if (reels) {
	const sliderWrapper = reels.querySelector('.swiper-wrapper')

	fetch('./assets/data/reels.json')
		.then(res => res.json())
		.then(data => {
			return data.map(reel => {
				const title = reel.title
				const thumb = reel.thumb
				const video = reel.video

				return `
					<a href="javascript:void(0)" class="swiper-slide reels-slide" data-modal-open="video" data-video-src="${video}">
						<div class="reels-slide__content">
							<span class="title-3 reels-slide__title">${title}</span>
						</div>
						<div class="reels-slide__img"><img src="${thumb}" alt="" /></div>
					</a>
				`.trim()
			})
		})
		.then(slides => {
			// console.log(slides)
			// sliderWrapper.innerHTML = slides
			slides.forEach(slide => {
				sliderWrapper.insertAdjacentHTML('beforeend', slide)
			})
			// console.log(slides)
		})
		.then(() => {
			const reelsSwiperElem = document.querySelector('[data-swiper=reels]')
			const reelsSwiper = new Swiper(reelsSwiperElem, {
				modules: [Navigation, Pagination],

				// loop: true,
				centeredSlides: true,
				allowTouchMove: false,
				slideToClickedSlide: true,
				// watchSlidesProgress: true,

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
					renderBullet: (index, className) => {
						// console.log(reelsSwiperElem)
						return `<button class="${className} title-3 reels-pagin__item">${reelsSwiperElem.querySelectorAll('.reels-slide')[index].querySelector('.reels-slide__title').textContent}</button>`
					},
				}
			});

			reelsSwiper.slideTo(3)

			if (reelsSwiper.isLocked) {
				const arrowsBlock = document.querySelector('.reels__arrows')

				if (arrowsBlock) arrowsBlock.classList.add('is-lock')
			}
		})
}
