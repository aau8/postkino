// const loader = document.getElementById('loader')

// loader.classList.add('is-hide')


import imagesLoaded from "imagesloaded";
import { bodyLock, bodyUnlock } from "../dismal_modules/Utilities.js";

const loader = document.getElementById('loader')
const loaderProgress = loader.querySelector('.loader__progress')

bodyLock()

setTimeout(() => {
	loader.classList.add('is-load')

	// window.scrollBy(0, -window.pageYOffset)

	setTimeout(() => {
		const imgLoad = imagesLoaded('.main, .gallery')
		const imgCount = imgLoad.images.length
		let loadedImagesCount = 0

		imgLoad.on('progress', function (instance, image) {
			loadedImagesCount++

			const progress = 100 / imgCount * loadedImagesCount

			loaderProgress.style.setProperty('--progress', progress + '%')

			if (imgCount === loadedImagesCount) {
				setTimeout(() => {
					loader.classList.remove('is-load')
					loader.classList.add('is-hide')
					bodyUnlock(380)
				}, 800)
			}
		});
	}, 1000)
}, 300)


