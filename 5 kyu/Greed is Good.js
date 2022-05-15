function score( dice ) {
    // Fill me in!
    let sorted = dice.sort((a,b) => a-b)
    let points = 0
    if (sorted[0] === sorted[2] || sorted[4] === sorted[2] || sorted[1] === sorted[3] ) {
      if (sorted[2] === 1) {
        points += 1000
      } else { points += sorted[2] * 100}
      let trip = sorted[2]
      sorted.splice(sorted.indexOf(trip),1)
      sorted.splice(sorted.indexOf(trip),1)
      sorted.splice(sorted.indexOf(trip),1)
    }
    sorted.forEach(x => {
      if (x === 1) {
        points += 100
      } else if (x === 5) {
        points += 50
      }
    })
    return points
  }