function sepStr(str) {
    
    let words = str.split(' ')
    let wordLen = words.map(x => x.length)
    let max = Math.max(...wordLen)
    let arr = []
    for (let i = 0; i< max; i++) {
      arr.push([])
    }
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (j < words[i].length) {
          arr[j].push( words[i][j])
        } else { arr[j].push('')}
      }
    }
    
    return arr
    
  }