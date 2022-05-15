// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    let pyr = 0
    let value = 0
    console.log(bonus, price)
    if ((price * 1) > bonus) {
      return 0
    } else {
      do {
        pyr++
        value += pyr*pyr*price
  
      } while (bonus > value)
    }
    if (bonus < value) {
      return pyr - 1
    }
    return pyr
  }