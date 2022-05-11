function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9 
    const grid = [1,2,3,4,5,6,7,8,9] //possible values
    function colCheck(col) { //identify non claimed values in column
      let colVal = []
      for (let i = 0; i < 9; i++) {
        colVal.push(puzzle[i][col])
      }
      //console.log(colVal)
      return grid.filter(x => (!colVal.includes(x)) )
    }
    
    function rowCheck(row) { //identify non claimed values in row
      let rowVal = []
      for (let i = 0; i < 9; i++) {
        rowVal.push(puzzle[row][i])
      }
      //console.log(rowVal)
      return grid.filter(x => (!rowVal.includes(x)) )
    }
    
    function sqCheck(row,col) { //identify non claimed values in square
      let sqVal = []
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
          sqVal.push(puzzle[i][j])
        }
      }
      //console.log(sqVal)
      
      return grid.filter(x => (!sqVal.includes(x)) )
      
      
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
  
    if (!isSolved()) { //run if there is at least one 0 value, else return finished puzzle
    
      for (let k = 0; k < 9;k++) {
        for (let l = 0; l < 9; l++) {
          if (puzzle[k][l] === 0) { //if cell is 0, check unused values

            let colPossible = colCheck(l)
            let rowPossible = rowCheck(k)
            let sqPossible = sqCheck(k,l)
  
            let allPossible = [...colPossible,...rowPossible,...sqPossible].sort((a,b) => a-b)

            let singles = []
  
            for (let q = 0; q < allPossible.length; q++) { //check for possible values that occur across all axii
              // if there is only one option, fill in puzzle grid
              if (!singles.includes(allPossible[q]) && allPossible[q] === allPossible[q-1] && allPossible[q] === allPossible[q-2] ) {
                  singles.push(allPossible[q])
              }
            }
  
            if (singles.length === 1) { //once singly possible value is found, enter into puzzle grid and rerun recursively

              let newPuzz = puzzle
              newPuzz[k][l] = singles[0]

              return sudoku(newPuzz)
            }
  
          }
        }
      }
      
    } else {return puzzle}

}