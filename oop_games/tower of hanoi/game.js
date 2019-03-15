class Game {
 constructor(){
   this.towers = [[1,2,3], [], []]
 }

 run(reader, againLoop) {
    this.promptMove(reader, (start, end)=>{
      if (!this.move(start, end)) {
        console.log("invalid move")
      }

      if (this.isOver()){
        this.print()
        console.log("Win")
        againLoop()
      } else {
        this.run(reader, againLoop)
      }
    })

 }
 
 promptMove(reader, callback){
   this.print()
   reader.question("where to move from? :", res=>{
     let fromI = parseInt(res) - 1
     reader.question("where to go?: ", res=>{
       let toI = parseInt(res) - 1
       callback(fromI, toI)
      })     
    })
  }
  
  move(fromI, toI){
    if (!this.isValidMove(fromI, toI)) {
      return false
    } else {
      let val = this.towers[fromI].pop()
      this.towers[toI].push(val)
      return true
    }
  }
  
  isValidMove(fromI, toI){
    if (this.towers[fromI].length === 0) {
      return false
    }
    if (this.towers[toI].length === 0) {
      return true
    } else {
      let val = this.towers[fromI][this.towers[fromI].length-1];
      let peekVal = this.towers[toI][this.towers[toI].length-1];
      return val < peekVal
    }
  }

 print(){
   let [first, second, third, all] = [[],[],[],[]]
   let icon = ["", "-", "---", "-----"]
   for (let i=0; i<3;i++) {
    first.push(icon[this.towers[i][0]] || "     ")
    second.push(icon[this.towers[i][1]] || "     ")
    third.push(icon[this.towers[i][2]] || "     ")
   }

   first.join(",|")
   second.join(",|")
   third.join(",|")
   all.push(third)
   all.push(second)
   all.push(first)

   console.log(all.join("\n"))

 }

 isOver(){
   return this.towers[2].length == 3
 }

}

module.exports = Game