function solve(s){
    //..
  
  
  let count = 0
  for (let i of s) {
    if (i === i.toUpperCase()) { count ++}
  }
  if (count > s.length/2) {return s.toUpperCase()}
  else {return s.toLowerCase()}
  }