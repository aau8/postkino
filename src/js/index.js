import FixHeader from "../dismal_modules/FixHeader/index.js"
import ZoomInImg from "../dismal_modules/ZoomInImg/index.js"
import Modals from "../dismal_modules/Modals/index.js"

import './MainBg.js'
import './Reels.js'
import './Commerce.js'
import './Movies.js'
import './MainMovies.js'
import './Loader.js'
import '../dismal_modules/Menu.js'
import '../dismal_modules/Signa/index.js'
import "./Scroll.js"
import "./sliders.js"
import "./CardHover.js"
import "./ArrowDown.js"

FixHeader()
ZoomInImg()

const modals = new Modals()
const modalVideo = modals.get('video')

if (modalVideo) {
	const modalVideoBlock = modalVideo.querySelector('.modal__window')

	modalVideo.addEventListener('modal-open', e => {
		const openBtn = e.data.openBtn

		if (!modalVideoBlock.classList.contains('is-playing')) {
			const src = openBtn.dataset.videoSrc
			if (src.match(/http(s)?:/)) {
				const iframe = document.createElement('iframe')
				iframe.src = src + '?autoplay=true'
				iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')
				iframe.setAttribute('allowfullscreen', '')

				modalVideoBlock.append(iframe)
			}
			else {
				const video = document.createElement('video')
				video.src = src
				video.setAttribute('autoplay', '')
				video.setAttribute('controls', '')

				modalVideoBlock.append(video)
			}

			modalVideoBlock.classList.add('is-playing')
		}
	})

	modalVideo.addEventListener('modal-close', e => {
		modalVideoBlock.innerHTML = ''
		modalVideoBlock.classList.remove('is-playing')
	})
}
