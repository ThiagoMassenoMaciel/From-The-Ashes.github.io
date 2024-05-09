console.log("so um teste")
var config ={
  width : 1364,
  height: 764,
  backgroundColor: 0x000000,
  scene: [  Tela1, Tela2],
  physics : {  
    default: "arcade", 
    arcade: {  
      debug: false //true 
    }  
  }
}
var game = new Phaser.Game(config)
console.log(config.backgroundColor)

let arrayNiveis = [0,1,2]
let arrayEasy =[ 0,1,2,3,4]
let arrayMedium =[ 0,1,2,3,4]
let arrayHard =[ 0,1,2,3,4]
