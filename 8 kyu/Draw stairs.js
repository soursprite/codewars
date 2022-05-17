function drawStairs(n) {
    // your code here
    let count = 1
    let text = 'I'
    while (count < n) {
      text += '\n'+' '.repeat(count)+'I'
      count++
    }
    return text
  }