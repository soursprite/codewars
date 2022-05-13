function validSolution(puzzle){
    //TODO
      const grid = [1,2,3,4,5,6,7,8,9] //possible values
    function valCol(col) { //validate cols
      let colVals = [...grid]
      for (let i = 0; i < 9; i++) {
        if (colVals.includes(puzzle[i][col])) {
          colVals.splice(colVals.indexOf(puzzle[i][col]),1)
        } else {return false}
      }
      return true
    }
    
    function valRow(row) { //validate rows
      let rowVals = [...grid]
      for (let i = 0; i < 9; i++) {
        //console.log(puzzle[row][i])
        if (rowVals.includes(puzzle[row][i])) {
          rowVals.splice(rowVals.indexOf(puzzle[row][i]),1)
        } else {
          return false}
      }
      return true
    }
      
    function sqCheck(row,col) { //validate square vals
      let sqVals = [...grid]
      let sq 
      if (row < 3){ //identify square 0-8
        if (col < 3){
          sq = 0
        } else if (col < 6) {
          sq = 1
        } else {
          sq = 2
        }
  
      } else if (row < 6) {
        if (col < 3){
          sq = 3
        } else if (col < 6) {
          sq = 4
        } else {
          sq = 5
        }
  
      } else {
        if (col < 3){
          sq = 6
        } else if (col < 6) {
          sq = 7
        } else {
          sq = 8
        }
      }
      
      for (let i = Math.floor(sq/3) * 3; i < Math.floor(sq/3) * 3 + 3; i++) { //based on square, constrain cells to check
        for (let j = sq%3 * 3; j < sq%3 * 3 + 3; j++) {
          console.log(sqVals, puzzle[i][j])
          if (sqVals.includes(puzzle[i][j])) {
            sqVals.splice(sqVals.indexOf(puzzle[i][j]),1)
          } else {
            console.log(sqVals)
            console.log("sq")
            return false}
        }
      }
      //console.log(sqVal)
  
      return true
  
  
    }
      
      function isSolved() { //check for unsolved cells
        for (let i = 0; i < 9;i++) {
          for (let j = 0; j < 9; j++) {
            if (puzzle[i][j] === 0) { // 0 marks unsolved
              return false
            }
          }
        }
        return true
      }
    
      if (!isSolved()) { 
        return false
      }
      
      for (let k = 0; k < 9;k++) {
          if (!valRow(k)) {return false}
        for (let l = 0; l < 9; l++) {
          if (!valCol(l)) {return false}
          if (!sqCheck(k,l)) {return false}
  
          
  
  
  
        }
      }
       return true
        
  
  }