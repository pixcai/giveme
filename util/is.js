function isType(type, o) {
	return Object.prototype.toString.call(o) === `[object ${type}]`
}

export default [
	'Null', 
	'Undefined', 
	'Boolean',
	'Number',
	'String',
	'Array',
	'Object',
	'Date',
	'RegExp'
].reduce((is, type) => {
	is[type] = o => isType(type, o)
	return is
}, {})
