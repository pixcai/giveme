const giveme = require('..')

module.exports = function test_image() {
	console.log('give an image with default options:')
	console.log(giveme('image'))

	console.log('give an image that size is 300x400:')
	console.log(giveme('image', {
		width: 300,
		height: 400
	}))

	console.log('give an image that format is .jpg:')
	console.log(giveme('image', {
		format: '.jpg'
	}))

	console.log('give an image that bacground color is blue and foreground color is red:')
	console.log(giveme('image', {
		backgroundColor: '#0000ff',
		foregroundColor: '#ff0000'
	}))

	console.log('give an image that text is hello:')
	console.log(giveme('image', {
		text: 'hello'
	}))
}
