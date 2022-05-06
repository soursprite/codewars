function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
    //console.log(arguments)
    if (enteredCode !== correctCode) {
      //console.log('fail code')
      return false
    }
    //console.log('yo')
    let months = ['January','February','March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let cDate = currentDate.split(' ')
    let eDate = expirationDate.split(' ')
    
    //console.log(cDate[1].match(/\d/g).join(''), eDate[1].match(/\d/g).join(''))
    
    if (cDate[2] > eDate[2]) {
      //console.log('check year')
      return false}
    if (cDate[2] === eDate[2] && months.indexOf(cDate[0]) > months.indexOf(eDate[0])) {
      //console.log('check month')
      return false}
    if (cDate[2] === eDate[2] && months.indexOf(cDate[0]) === months.indexOf(eDate[0]) ) {
      if (parseInt(cDate[1].match(/\d/g).join('')) > parseInt(eDate[1].match(/\d/g).join(''))) {
        return false
      }
  
      }
    
    return true
  }