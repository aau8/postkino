import SmoothScroll from "smoothscroll-for-websites";

// console.log('smooth2')
// SmoothScroll({
// 	stepSize: window.innerHeight,
// })

// console.log(SmoothScroll)

SmoothScroll({
	// Время скролла 400 = 0.4 секунды
	animationTime: 800,
	// Размер шага в пикселях
	// stepSize: window.innerHeight,
	stepSize: 100,

	// Дополнительные настройки:

	// Ускорение
	accelerationDelta: 30,
	// Максимальное ускорение
	accelerationMax: 2,

	// Поддержка клавиатуры
	keyboardSupport: true,
	// Шаг скролла стрелками на клавиатуре в пикселях
	arrowScroll: 50,

	// Pulse (less tweakable)
	// ratio of "tail" to "acceleration"
	pulseAlgorithm: true,
	pulseScale: 4,
	pulseNormalize: 1,

	// Поддержка тачпада
	touchpadSupport: true,
})
