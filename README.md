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

## License
MIT