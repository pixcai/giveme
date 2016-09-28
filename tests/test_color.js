const giveme = require('..')

module.exports = function test_color() {
	console.log('give a color with default options:')
	console.log(giveme('color'))

	console.log('give a color that in range #aaa to #fff:')
	console.log(giveme('color', {
		min: 0xaaaaaa,
		max: 0xffffff
	}))
}
