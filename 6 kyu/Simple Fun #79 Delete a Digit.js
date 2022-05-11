function deleteDigit(n) {
    //coding and coding..
    
    let nStr = ('' + n).split('')
    let max = 0
    
    for (let i = 0; i < nStr.length; i++) {
      let temp =  [...nStr]
      temp.splice(i,1)
      let num = Number(temp.join(''))
      if (num > max) {
          max = num
      }
    }
    return max
  }