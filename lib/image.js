import assign from '../util/assign'
import color from './color'
import is from '../util/is'

/**
 * placeholder image
 * @param  {Object} options
 * options = {
 * 	 width: Math.floor(Math.random() * 1000),
 *   height: Math.floor(Math.random() * 1000),
 *   background: color(),
 *   foreground: color(),
 *   format: '',
 *   text: ''
 * }
 * @return {String} url(e.g. 'https://dummyimage.com/200x200/000/fff.png&text=hello')
 */
export default function image(options) {
	if (options && is.Undefined(options.height)) {
		options.height = options.width
	}

	let {
		width,
		height,
		background,
		foreground,
		format,
		text
	} = assign(options, {
		width: Math.floor(Math.random() * 1000),
		height: Math.floor(Math.random() * 1000),
		background: color(),
		foreground: color(),
		format: '',
		text: ''
	})
	const url = `${image.protocol}://${image.domain}/${width}x${height}/${background.slice(1)}/${foreground.slice(1)}${format}`

	return Boolean(text) ? `${url}&text=${text.replace(/\s/g, '+')}` : url
}

image.protocol = 'https'
image.domain = 'dummyimage.com'
