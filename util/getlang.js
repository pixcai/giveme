import langs from '../lang'
import is from './is'

export default function getlang(lang) {
	const clang = langs[lang]

	if (!is.Undefined(clang)) {
		const L = clang.length

		return function peek(length) {
			const charCodes = []
			let n = 0
			for (let i = 0; i < length; i++) {
				n = Math.floor(Math.random() * L)
				charCodes.push(Math.floor(Math.random() * (clang[n].max - clang[n].min)) + clang[n].min)
			}
			return String.fromCharCode.apply(null, charCodes)
		}
	}
	return null
}
