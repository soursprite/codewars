function nearestSq(n){
    // your code
  let count = 0
  while (true) {
    if (Math.sqrt(n + count) ===  Math.floor(Math.sqrt(n + count))) {
      return n + count
    } else if (Math.sqrt(n - count) ===  Math.floor(Math.sqrt(n -count))) {
      return n-count
      }
    count++
    }
  
}