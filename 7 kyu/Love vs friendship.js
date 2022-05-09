function wordsToMarks(string){
    //your code here
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return string.split('').map(x => alpha.indexOf(x)+1).reduce((a,c) => a+c,0)
  }