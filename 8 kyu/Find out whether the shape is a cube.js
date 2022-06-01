var cubeChecker = function(volume, side){
    if (side <= 0 || volume <= 0) { return false}
    return side * side * side === volume
  };