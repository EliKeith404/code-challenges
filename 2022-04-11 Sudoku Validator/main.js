function validSolution(board){
    // Check rows
    for (let e of board){
      if ((new Set(e)).size !== e.length) return false;
      if (e.includes(0)) return false;
    }
    
    // Check Columns
    for (let j=0; j<board.length; j++){
      let column = [];
      for (let i=0; i<board.length; i++){
        column.push(board[i][j]);
      }
      console.log(column);
      if ((new Set(column)).size !== column.length) {
        return false;
      }
    }
    return true;
}


console.log(validSolution[
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
]);