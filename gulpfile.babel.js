import browserSync from 'browser-sync';
import named from 'vinyl-named';
import webpack from 'webpack-stream';
import del from 'del';
import imagemin from 'gulp-imagemin';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
// import { src, dest, watch, series, parallel } from 'gulp';
import pkg from 'gulp';
const { src, dest, watch, series, parallel } = pkg;
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import webp from 'gulp-webp';

const PRODUCTION = yargs.argv;

export const styles = () => {
	return src(['src/scss/bundle.scss'])
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulpif(PRODUCTION, postcss([autoprefixer])))
		.pipe(gulpif(PRODUCTION, cleanCss({ compatibility: 'ie8' })))
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(dest('dist/css'))
		.pipe(server.stream());
};

export const images = () => {
	return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
		.pipe(gulpif(PRODUCTION, imagemin()))
		.pipe(dest('dist/images'));
};

export const webpimg = () => {
	return src('src/images/**/*.{jpg,jpeg,png,gif}')
		.pipe(webp())
		.pipe(dest('dist/images/webp'));
};

export const watchForChanges = () => {
	watch('src/scss/**/*.scss', styles);
	watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', series(images, reload));
	watch(
		['src/**/*', '!src/{images,js,scss}', '!src/{images,js,scss}/**/*'],
		series(copy, reload)
	);
	watch('src/js/**/*.js', series(scripts, reload));
	watch('**/*.php', reload);
};

export const copy = () => {
	return src([
		'src/**/*',
		'!src/{images,js,scss}',
		'!src/{images,js,scss}/**/*',
	]).pipe(dest('dist'));
};

export const clean = () => {
	return del(['dist']);
};

export const scripts = () => {
	return src([
		'src/js/app.js',
		'src/js/script.js',
		'src/js/modernizr-webp.js',
		'src/js/bootstrap.bundle.js',
	])
		.pipe(named())
		.pipe(
			webpack({
				module: {
					rules: [
						{
							test: /\.js$/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: ['@babel/preset-env'],
								},
							},
						},
					],
				},
				mode: PRODUCTION ? 'production' : 'development',
				devtool: !PRODUCTION ? 'inline-source-map' : false,
				output: {
					filename: '[name].js',
				},
			})
		)
		.pipe(dest('dist/js'));
};

const server = browserSync.create();
export const serve = done => {
	server.init({
		proxy: 'http://riseuptown.local', // put your local website link here
	});
	done();
};
export const reload = done => {
	server.reload();
	done();
};

export const dev = series(
	clean,
	parallel(styles, images, webpimg, copy, scripts),
	serve,
	watchForChanges
);
export const build = series(
	clean,
	parallel(styles, images, webpimg, copy, scripts)
);
export default dev;
