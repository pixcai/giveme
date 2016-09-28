import assign from '../util/assign'

/**
 * time
 * @param  {Object} options
 * options = {
 *   format: 'HH:MM:SS'
 * }
 * @return {String}
 */
export default function time(options) {
  let hour = 24, minute = 60, second = 60
  let hflag = true, mflag = true, sflag = true
  const { format } = assign(options, { format: 'HH:MM:SS' })
  const result = format.match(/\w+/g)
  const seperator = format.match(/[^\w]/g)

  if (result) {
    result.forEach(matched => {
      switch (matched) {
        case 'h':
          hflag = false
          hour = 12
          break
        case 'hh':
          hour = 12
          break
        case 'H':
          hflag = false
          break
        case 'm':
          mflag = false
          break
        case 's':
          sflag = false
          break
      }
    })
  }
  hour = Math.floor(Math.random() * hour)
  minute = Math.floor(Math.random() * minute)
  second = Math.floor(Math.random() * second)
  if (hflag) {
    hour = (hour > 9) ? `${hour}` : `0${hour}`
  }
  if (mflag) {
    minute = (minute > 9) ? `${minute}` : `0${minute}`
  }
  if (sflag) {
    second = (second > 9) ? `${second}` : `0${second}`
  }
  if (seperator && seperator.length === 1) {
    return `${hour + seperator[0] + minute}`
  } else if (seperator && seperator.length > 1) {
    return `${hour + seperator[0] + minute + seperator[1] + second}`
  }
  return `${hour}:${minute}:${second}`
}
