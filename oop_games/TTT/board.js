// 1. start a new game 
// 2. print board, ask where to put 
// 3. base on response print out board determine where winner or game over 
// 4. repeat 2
// 5. repeat 1

const MoveError = require("./moveError")
class Board {
  constructor(){
    this.grid = Board.makeGrid()
  }

  isEmptyPos(pos){
    let [x, y] = pos
    if (!this.isValidPos(pos)) {
      throw new MoveError('Is not valid position')
    } else {
      return (this.grid[x][y] === null)
    }
  }
  
  isOver(){
    if (this.winner() !== null) {
      return true 
    } 

    for (let rowIdx = 0; rowIdx < 3; rowIdx ++) {
      for (let colIdx = 0; colIdx < 3; colIdx ++) {
        if (this.grid[rowIdx][colIdx]=== null) {
          return false
        }
      }
    }
  
    return true
  }
  
  placeMark(pos, mark){
    if (!this.isEmptyPos(pos)) {
      throw new MoveError('Is not a empty position')
    } else {
      this.grid[pos[0]][pos[1]] = mark
    }
  }
  
  print(){
    const strs = [];
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      const marks = []
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        marks.push(
          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : " "
        )
      }
      strs.push(`${marks.join('|')}\n`)
    }

    console.log(strs.join('\n'));
  }

  winner(){
    const posSeqs = [
      // horizontals
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // verticals
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[2, 0], [1, 1], [0, 2]]
    ];

    for (let i = 0; i< posSeqs.length; i++) {
      const posSeq = posSeqs[i] 
      let [x1, y1] = posSeq[0]
      let [x2, y2] = posSeq[1]   
      let [x3, y3] = posSeq[2]   
      if (this.grid[x1][y1] === "x" && 
          this.grid[x2][y2] === "x" && 
          this.grid[x3][y3] == "x") 
          { return "x" } else 
      if (this.grid[x1][y1] === "o" &&
          this.grid[x2][y2] === "o" &&
          this.grid[x3][y3] == "o"
        ) { return "o";}
    }

    return null
  }

  isValidPos(pos) {
    let [x, y] = pos
    return (x>=0) && (x<=2) && (y>=0) && (y<=2)
  }

   static makeGrid(){
    const grid = [];

    for (let i = 0; i < 3; i++) {
      grid.push([])
      for (let j = 0; j < 3; j++) {
        grid[i].push(null);
      }
    }
    return grid;
  }


}

Board.marks = ["x", "o"]
module.exports = Board