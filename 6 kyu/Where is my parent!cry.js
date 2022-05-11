function findChildren(dancingBrigade) {
	let arr = dancingBrigade.toLowerCase().split('').sort()
  arr[0] = arr[0].toUpperCase()
  for (let i in arr) {
    if ( i > 0) {
      if (arr[i-1].toLowerCase() != arr[i]) {
        arr[i] = arr[i].toUpperCase()
      }
    }
  }
  return arr.join('')
}