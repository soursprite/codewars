function longestConsec(strarr, k) {
    // your code
  if (k > strarr.length || k <= 0) {return ''}
  let strLen = strarr.map(x => x.length)
  console.log(strLen)
  
  let spread = k
  let max = 0 //current highest length
  let compare = 0 //length to compare
  let count = 0 //starting index of largest word
  let final = '' //final output str
  if (spread === 1) {
    return strarr[strLen.indexOf(Math.max(...strLen))]
  }
  
  for (let i = 0; i < k; i++) {
    max += strarr[i].length
  }
  compare = max
  for (let j = spread; j < strarr.length; j++) {
    compare += strarr[j].length
    compare -= strarr[j-k].length
    
    if (compare > max) {
      max = compare
      console.log(max)
      count = j-spread + 1
    }
    
  }
  
  for (let i = 0; i < spread; i++) {
    final += strarr[i + count]
  }
  
  return final
}