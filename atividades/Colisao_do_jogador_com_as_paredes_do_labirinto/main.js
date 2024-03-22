
var config ={
  width : 1364,
  height: 764,
  backgroundColor: 0xffffff,
  scene: [ Tela1, TelaMenu, Tela2, Tela0, Tela3, Tela4, Tela31, Tela32, Tela33, Tela34, Tela41, Tela42, Tela43, Tela44, Tela21, Tela22, Tela23, Tela24],

  physics : {  
    default: "arcade", 
    arcade: {  
      debug: false 
    }  
  }
}
var game = new Phaser.Game(config)
console.log(config.backgroundColor)