// Видео с отложенной загрузкой
export function lazyVideo() {
	const videoBlockElems = document.querySelectorAll('[data-video]')

	for (let i = 0; i < videoBlockElems.length; i++) {
		const videoBlock = videoBlockElems[i];
		const thumbSrc = videoBlock.dataset.videoThumb

		if (thumbSrc != '') {
			const img = document.createElement('img')
			img.classList.add('video__thumb')
			img.src = thumbSrc

			videoBlock.append(img)
		}

		videoBlock.addEventListener('click', e => {

			if (!videoBlock.classList.contains('is-playing')) {
				const src = videoBlock.dataset.videoSrc
				if (src.match(/http(s)?:/)) {
					const iframe = document.createElement('iframe')
					iframe.src = src
					iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
					iframe.setAttribute('allowfullscreen', '')

					videoBlock.append(iframe)
				}
				else {
					const video = document.createElement('video')
					video.src = src
					video.setAttribute('autoplay', '')
					video.setAttribute('controls', '')

					videoBlock.append(video)
				}

				videoBlock.classList.add('is-playing')
			}
		})
	}
}
