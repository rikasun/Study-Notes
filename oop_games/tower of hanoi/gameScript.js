const Game = require("./game.js")
const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let game = new Game()

game.run(reader, againLoop)

function againLoop(){
  reader.question("Do you wanna play agin:" , res=>{
    if (res === "y"){
      let game = new Game()
      game.run(reader, againLoop)
    } else {
      reader.close()
    }
  })
}