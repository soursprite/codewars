function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let needTime = pontoonDistance / youSpeed
    console.log(needTime)
    //console.log((sharkDistance + pontoonDistance) /sharkSpeed < needTime )
    if (dolphin) {sharkSpeed = sharkSpeed / 2}
    console.log((sharkDistance + pontoonDistance) /sharkSpeed < needTime )
    if (sharkDistance /sharkSpeed < needTime || (sharkDistance === 0)){
      return "Shark Bait!"
    } else { return "Alive!"}
  }