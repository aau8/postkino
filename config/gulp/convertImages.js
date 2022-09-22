// import newer from 'gulp-newer'
// import imagemin from 'gulp-imagemin';

// export function convertImages() {
// 	return app.gulp.src(app.path.src.images)
// 		.pipe(newer(app.path.build.convertImages))
// 		.pipe(
// 			imagemin({
// 				progressive: true,
// 				svgoPlugins: [{ removeViewBox: false }],
// 				interlaced: true,
// 				optimizationLevel: 3
// 			})
// 		)
// 		.pipe(app.gulp.dest(app.path.build.convertImages))
// 		// .pipe(app.plugins.if(
// 		// 	app.useWebp,
// 		// 	webp()
// 		// ))
// 		// .pipe(app.plugins.if(
// 		// 	app.useWebp,
// 		// 	app.gulp.dest(app.path.build.images)
// 		// ))

// 		.pipe(app.gulp.src(app.path.src.svg))
// 		.pipe(app.gulp.dest(app.path.build.convertImages))
// 		.pipe(browserSync.reload({ stream: true }));
// }
