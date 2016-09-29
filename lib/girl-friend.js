import assign from '../util/assign'

export default function girlFriend(options) {
	const age = Math.floor(Math.random() * 16 + 14)
	const height = Math.floor(Math.random() * 50 + 150)
	const weight = Math.floor(Math.random() * 85 + 35)
	const bust = Math.round(height * 0.535)
	const waist = Math.round(height * 0.365)
	const hips = Math.round(height * 0.565)
	const money = 2 << Math.floor(Math.random() * 53)
	options = assign(options, {
		age,
		height,
		weight,
		bust,
		waist,
		hips,
		money
	})
	options.toString = function () {
		return JSON.stringify({
			age: 18,
			height,
			weight: 100,
			bust: '<secret>',
			waist: '<secret>',
			hips: '<secret>',
			money: '<secret>'
		})
	}
	return options
}
