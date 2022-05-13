function seven(m) {
    // your code
  if (m === 0) {
    return [0, 0]
  }
  
  let count = 1
  function smallify(num, count) { //recursive num smallify-er
    let x
    let y
    if (num > 10) {
      x = Math.floor(num/10)
      y = parseInt((num+'').split('').pop())

      let check = x - (2*y) //formula
      if (check > 99) { //runs until 2 digits
        count++
        return smallify(check, count)
      } else {
        console.log(check, count)
        return [check, count]
      }
    }
    
  }
  return smallify(m, count)

}