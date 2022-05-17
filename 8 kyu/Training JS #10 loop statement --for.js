function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for (let i of arr) {
      if (i % 2 > 0) {
        odd.push(i)
      } else {
        even.push(i)
      }
    }
    
    return [odd,even];
  }