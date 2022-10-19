function isPangram(string){
    cheese = true
    let alpha = "abcdefghijklmnopqrstuvwxyz".split('')
  
    let strAlpha = string.toLowerCase().match(/[a-z]/g).join('')
    if(strAlpha.length < 26) {return false}
    //console.log(strAlpha.includes('b'))
    alpha.forEach(x => {
      console.log(x,strAlpha.includes(x))
      if (!strAlpha.includes(x)) {
        cheese = false
      }
    })
    return cheese
  }