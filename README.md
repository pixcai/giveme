# giveme
A random data generator

## Install
```shell
npm install --save-dev giveme
```

## Usage
Browser:
```html
<script src="node_modules/giveme/dist/giveme.min.js"></script>
```
Node.js:
```js
var giveme = require('giveme')
```

## Types
### color
Get a random hex color.
Options: `min`, `max`.

```js
console.log(giveme('color'))
console.log(giveme('color', {
	min: 0x222222,
	max: 0xcccccc
}))
```

### image
Get a random placeholder image.
Options: `width`, `height`, `background`, `foreground`, `format`, `text`.

```js
console.log(giveme('image'))
console.log(giveme('image', {
	width: 200,
	height: 400,
	format: '.jpg',
	text: 'hello'
}))
```
### word
Get a word.
Options: `lang`, `length`.

```js
console.log(giveme('word'))
console.log(giveme('word', {
	lang: 'zh_CN',
	length: 5
}))
```

### rgb
Get a rgb color.
Options: `r`, `g`, `b`.

```js
console.log(giveme('rgb'))
console.log(giveme('rgb', {
	r: {
		min: 0
		max: 214
	},
	b: {
		min: 112,
		max: 140
	}
}))
```

### rgba
Get a rgba color.
Options: `r`, `g`, `b`, `a`.

```js
console.log(giveme('rgba'))
console.log(giveme('rgba', {
	r: {
		min: 0,
		max: 214
	},
	a: {
		min: 0.5,
		max: 1
	}
}))
```

### time
Get a random time.
Options: `format`.

`H`: 24-hour system
`h`: 12-hour system
`HH`, `hh`, `MM`, `mm`, `SS`, `ss`: with prefix 0. e.g. `07:23:01`
`h`, `H`, `M`, `m`, `S`, `s`: widthout prefix 0. e.g. `7:23:1`
```js
console.log(giveme('time'))
console.log(giveme('time', {
	format: 'hh:mm:ss'
}))
```

## License
MIT