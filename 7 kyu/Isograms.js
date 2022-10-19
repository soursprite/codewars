function isIsogram(str){
    console.log(str)
    str = str.toLowerCase().split('')
    for (let i = 0; i < str.length; i++) {
      if (i != str.indexOf(str[i])) {
        return false
      }
    }
    return true
  }