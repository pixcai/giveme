import assign from '../util/assign'

/**
 * rgba color
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
 *   },
 *   a: {
 *     min: 0
 *     max: 1
 *   }
 * }
 * @return {String}
 */
export default function rgba(options) {
  let {
    r,
    g,
    b,
    a
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
    },
    a: {
      min: 0,
      max: 1
    } 
  })
  r = Math.floor(Math.random() * (r.max - r.min) + r.min)
  g = Math.floor(Math.random() * (g.max - g.min) + g.min)
  b = Math.floor(Math.random() * (b.max - b.min) + b.min)
  a = Math.random() * (a.max - a.min) + a.min

  return `rgba(${r}, ${g}, ${b}, ${a.toFixed(6)})`
}
