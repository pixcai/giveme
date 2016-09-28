import is from './is'

export default function assign(target, src) {
	if (is.Undefined(target)) {
		return src
	}
	if (is.Array(src) && is.Array(target)) {
		for (let i = 0, length = src.length; i < length; i++) {
			if (target.indexOf(src[i]) < 0) {
				target.push(src[i])
			}
		}
	}
	else if (is.Object(src) && is.Object(target)) {
		const hasOwnProperty = Object.prototype.hasOwnProperty
		for (let key in src) {
			if (hasOwnProperty.call(src, key)) {
				if (is.Undefined(target[key])) {
					target[key] = src[key]
				}
			}
		}
	}
	return target
}
