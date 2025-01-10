export function fmtBtc(value: number) {
  return (value / 10000000)
}

export function truncate(value: number | string, maxLength: number) {
  let res = ''
  if (typeof value === 'number') {
    res = value.toString()
  } else {
    res = value
  }

  if (res.length > maxLength) {
    return `${res.slice(0, maxLength)}...`
  } else {
    return res
  }
}
