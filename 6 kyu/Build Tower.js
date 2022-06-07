function towerBuilder(nFloors) {
    // build here
    let stars = []
    let out = ''
    
    
    for (let i = 1; i <= nFloors; i++) {
      out = ' '.repeat(nFloors-i)+'*'.repeat(i+ i - 1)+' '.repeat(nFloors-i)
      stars.push(out)
    }
    
    return stars
  }