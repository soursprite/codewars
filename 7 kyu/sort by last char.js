function last(x){
  
  
    let sortHelp = function(a, b) {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      
      return 0;
    }
    
    
    let y = x.split(' ').map(x => x.split('').reverse().join(''))
    y.sort((a,b) => sortHelp(a,b))
    let z = y.map(x => x.split('').reverse().join(''))
    return z
  }