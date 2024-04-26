console.log("so um teste")
var config ={
  width : 1364,
  height: 764,
  backgroundColor: 0xffffff,
  scene: [  Tela1, Tela ,TelaMenu, Tela2, Tela3, Tela4],
  physics : {  
    default: "arcade", 
    arcade: {  
      debug: true 
    }  
  }
}
var game = new Phaser.Game(config)
console.log(config.backgroundColor)
let arrayEasy =[ 0,1,2,3,4]