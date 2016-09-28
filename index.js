import color from './lib/color'
import image from './lib/image'
import word from './lib/word'
import rgba from './lib/rgba'
import rgb from './lib/rgb'
import time from './lib/time'

const types = {
	color,
	image,
	word,
	rgba,
	rgb,
	time
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
