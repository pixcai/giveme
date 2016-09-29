import color from './lib/color'
import image from './lib/image'
import word from './lib/word'
import rgba from './lib/rgba'
import rgb from './lib/rgb'
import time from './lib/time'
import boyFriend from './lib/boy-friend'
import girlFriend from './lib/girl-friend'

const types = {
	color,
	image,
	word,
	rgba,
	rgb,
	time,
	boyFriend,
	girlFriend
}

function giveme(type, options) {
	const matched = type.match(/\w+/g)

	if (matched) {
		type = matched.reduce((name, next) => {
			return name + next.charAt(0).toUpperCase() + next.slice(1).toLowerCase()
		})
	}
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
