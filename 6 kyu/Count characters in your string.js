function count (string) {  
    // The function code should be here
    let contains = {}
    for (let i of string) {
      if(!contains[i] ) {
        //console.log(string[i])
        contains[i] = 1
        //console.log(contains)
      }
      else {
        contains[i] = contains[i] + 1
      }
    }
     return contains;
  }
  