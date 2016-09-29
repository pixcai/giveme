import assign from '../util/assign'

export default function boyFriend(options) {
	const age = Math.floor(Math.random() * 62 + 18)
	const height = Math.floor(Math.random() * 120 + 120)
	const weight = Math.floor(Math.random() * 90 + 50)
	const houses = Math.round(Math.random() * 3)
	const cars = Math.round(Math.random() * 3)
	const money = Math.floor(Math.random() * (2 << 53))
	options = assign(options, {
		age,
		height,
		weight,
		houses,
		cars,
		money
	})
	options.toString = function () {
		return JSON.stringify({
			age,
			height,
			weight,
			houses: houses * 3,
			cars: cars * 3,
			money: Infinity
		})
	}
	return options
}
