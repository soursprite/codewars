function monkeyCount(n) {
    // your code here
      let arr = [...Array(n+1).keys()]
      arr.shift()
      return arr
    }