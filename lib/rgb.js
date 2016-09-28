import assign from '../util/assign'

/**
 * rgb color
 * @param  {Object} options
 * options = {
 *   r: {
 *     min: 0,
 *     max: 255
 *   },
 *   g: {
 *     min: 0,
 *     max: 255
 *   },
 *   b: {
 *     min: 0,
 *     max: 255
 *   }
 * }
 * @return {String}
 */
export default function rgb(options) {
  let {
    r,
    g,
    b
  } = assign(options, {
    r: {
      min: 0,
      max: 255
    },
    g: {
      min: 0,
      max: 255
    },
    b: {
      min: 0,
      max: 255
    }
  })
  r = Math.floor(Math.random() * (r.max - r.min) + r.min)
  g = Math.floor(Math.random() * (g.max - g.min) + g.min)
  b = Math.floor(Math.random() * (b.max - b.min) + b.min)

  return `rgb(${r}, ${g}, ${b})`
}
