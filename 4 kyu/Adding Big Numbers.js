function add(a, b) {
    let x = a.split('')
    let y = b.split('')
    let add = 0
    let final = ''
    let one = false
    while (x.length > 0 || y.length> 0 || one) {
      console.log(final)
      if (x.length > 0 && y.length > 0) {
        add = Number( x.pop()) + Number(y.pop())
        }
      else if (x.length > 0 && !y.length > 0) {
        add = Number( x.pop())
      }
      else if (y.length > 0 && !x.length > 0) {
        add = Number( y.pop())
      }
      
      if (one) {
        add = add+1
        }
      
      if (add === 10) {
        final += '0'
        one = true
      } else if (add < 10) {
        final += add
        one = false
      } else if (add > 10) {
        final += (add - 10)
        one = true
      }
      
      
      if (!x.length > 0 && !y.length > 0 && one) {
        final += '1'
        one = false
      }
     }
    //console.log(final.split('').reverse().join(''))
    return final.split('').reverse().join('')
    
  
  
    //return (BigInt(a) + BigInt(b)).toString(); // Fix me!
  }