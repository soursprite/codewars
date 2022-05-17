function padIt(str,n){
    //coding here
    let i = true
    do {
      if (i) {str = '*' +str}
      else {str += '*'}
        i= !i
    n--
    } while(n > 0)
      return str
  }