function dashatize(num) {
    if (isNaN(num)) {return 'NaN'}
    let numStr = Math.abs(num).toString().split('')
    let dashed = numStr.map(x=> {
      if (Number(x)%2 > 0) {
        return '-'+x+'-'
      } else {return x}
    }).join('').split('').filter((x, i, a) => ((x === '-')&&(a[i-1] != '-'))||(x != '-'))
    
    if(dashed[0] == '-') { dashed.shift() }
    if(dashed.reverse()[0] == '-') { dashed.shift() }
    
    return dashed.reverse().join('')
    
    
  }