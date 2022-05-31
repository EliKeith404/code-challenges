/* 
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
*/

function validSolution(board){

  let threeByThree = [];
  
  for (let j=0; j<board.length; j++){
    
    // Check Rows
    if ((new Set(board[j])).size !== board[j].length) return false;
    // Check if board contains 0
    if (board[j].includes(0)) return false;
    
    let column = [];
    
    for (let i=0; i<board.length; i++){
      
      // Fill array with column values
      column.push(board[i][j]);
      
      // Fill array with 3x3 (Kinda rough but I couldn't get my other thoughts working)
      if ((i===0 && (j===0 || j===3 || j===6)) 
        ||(i===3 && (j===0 || j===3 || j===6))
        ||(i===6 && (j===0 || j===3 || j===6))
      ){
        threeByThree.push(board[i][j]);
        threeByThree.push(board[i][j+1]);
        threeByThree.push(board[i][j+2]);
        threeByThree.push(board[i+1][j]);
        threeByThree.push(board[i+1][j+1]);
        threeByThree.push(board[i+1][j+2]);
        threeByThree.push(board[i+2][j]);
        threeByThree.push(board[i+2][j+1]);
        threeByThree.push(board[i+2][j+2]);
      }
      
      // Check 3x3
      if (threeByThree.length === 9){
        if (new Set(threeByThree).size !== threeByThree.length){
          return false;
        }
        threeByThree = [];
      }
      
    }
    
    // Check Columns
    if ((new Set(column)).size !== column.length) {
      return false;
    }
  }
  
  // If the loops don't catch invalid boards, return true
  return true;
}