var isSquare = function(n){
    if ( n > 3 ) {
      for ( let i = 2; i <= n/2; i++) {
        if (i === n/i) {return true}
      }
    } else if (n === 0 || n=== 1) {return true}
    return false
  }

  //small adj