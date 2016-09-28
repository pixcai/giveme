import assign from '../util/assign'
import getlang from '../util/getlang'

/**
 * word
 * @param  {Object} options
 * options = {
 *   lang: 'en_US',
 *   length: 1
 * }
 * @return {String}
 */
export default function word(options) {
	const {
		lang,
		length
	} = assign(options, {
		lang: 'en_US',
		length: 1
	})
	let result = ''
	const peek = getlang(lang)

	if (peek && length > 0) {
		result += peek(length)
	}
	return result
}
