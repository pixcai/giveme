import gulp from 'gulp'
import webpack from 'webpack-stream'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import del from 'del'

gulp.task('build', () => {
	const module = {
		loaders: [{
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}]
	}

	gulp.src('./index.js')
		.pipe(webpack({
			output: {
				filename: 'giveme.js',
				libraryTarget: 'commonjs2'
			},
			module,
			target: 'node'
		}))
		.pipe(gulp.dest('./dist'))

	gulp.src('./index.js')
		.pipe(webpack({
			output: {
				filename: 'giveme.js'
			},
			module: module
		}))
		.pipe(uglify())
		.pipe(rename('giveme.min.js'))
		.pipe(gulp.dest('./dist'))
})

gulp.task('clean', () => del('dist'))
