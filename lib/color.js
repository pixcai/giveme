import assign from '../util/assign'

/**
 * hex color
 * @param  {Object} options
 * options = {
 * 	 min: 0x000000,
 * 	 max: 0xffffff
 * }
 * @return {String} color(e.g. '#910abc')
 */
export default function color(options) {
	const {
		min, 
		max
	} = assign(options, {
		min: 0x000000,
		max: 0xffffff
	})
	let value = Math.floor(Math.random() * (max - min) + min).toString(16)
	if (value.length < 6) {
		for (let i = 6 - value.length; i > 0; i--) {
			value = '0' + value
		}
	}
	return `#${value}`
}
