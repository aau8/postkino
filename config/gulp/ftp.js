import vinylFTP from 'vinyl-ftp'

export default function ftp() {
	const ftpConnect = vinylFTP.create({
		host: "37.140.192.24", // Адрес FTP сервера
		user: "u1326657_postkin", // Имя пользователя
		password: "lP7aX4sG8f", // Пароль
		parallel: 5 // Кол-во одновременных потоков
	});

	return app.gulp.src(`${app.path.prodFolder}/**/*.*`, {})
		.pipe(ftpConnect.dest(`/${app.path.ftp}`));
}
