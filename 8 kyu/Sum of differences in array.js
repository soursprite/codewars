function sumOfDifferences(arr) {
    let res = 0
    let sorted = arr.sort((a,b) => b-a)
    for (let i = 1; i< sorted.length; i++) {
      res += (sorted[i-1] - sorted[i])
    }
    return res
    
  }