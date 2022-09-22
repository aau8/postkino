import Swiper, { Navigation, Pagination, Grid } from "swiper"
import setDarkHover from "./CardHover.js"

const movies = document.querySelector('.movies')

if (movies) {
	const sliderWrapper = movies.querySelector('.swiper-wrapper')

	fetch('./assets/data/movies.json')
		.then(res => res.json())
		.then(data => {
			return data.map(block => {
				const content = block.map(movie => {
					if (movie.year) {
						return `
							<div class="c-movie is-year">
								<span class="title-3 c-movie__year">${movie.year}</span>
							</div>
						`.trim()
					}
					if (movie.video) {
						return `
							<div class="c-movie" data-modal-open="video" data-card-dark data-video-src="${movie.video}" style="cursor:pointer;">
								<div class="c-movie__thumb">
									<img class="c-movie__img is-main" src="${movie.img}" alt="">
									<img class="c-movie__img is-second" src="${movie.img}" alt="">
								</div>
							</div>
						`.trim()
					}
					else {
						return `
							<div class="c-movie" data-card-dark>
								<div class="c-movie__thumb">
									<img class="c-movie__img is-main" src="${movie.img}" alt="">
									<img class="c-movie__img is-second" src="${movie.img}" alt="">
								</div>
							</div>
						`.trim()
					}
				}).join('')

				return `
					<div class="swiper-slide movies-slide">${content}</div>
				`
			}).join('')
		})
		.then(slides => {
			sliderWrapper.innerHTML = slides
		})
		.then(() => {
			const movieFirstSwiper = new Swiper("[data-swiper=movies]", {
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

			setDarkHover('[data-swiper=movies] [data-card-dark-container]')
		})
}





// "./assets/img/movies/2.jpg",
// "./assets/img/movies/3.jpg",
// "2021",
// "./assets/img/movies/4.jpg",
// "./assets/img/movies/5.jpg"
