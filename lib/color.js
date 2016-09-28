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
	const value = Math.floor(Math.random() * (max - min)) + min
	
	return `#${value.toString(16)}`
}
