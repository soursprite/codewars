var uniqueInOrder=function(iterable){
    let arr = [...iterable]
    return arr.filter((e,i,a) => e != a[i-1])
  }