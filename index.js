import color from './lib/color'
import image from './lib/image'
import is from './util/is'

const types = {
	color,
	image
}

function giveme(type, options) {
	for (let key in types) {
		if (types.hasOwnProperty(type)) {
			return types[type](options)
		}
	}
	return ''
}

try {
	window.giveme = giveme
} catch(e) {
	module.exports = giveme
}
