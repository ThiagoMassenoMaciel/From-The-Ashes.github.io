class TelaMenu extends Phaser.Scene{
  constructor(){
    super("menu")
  }

  create(){

    this.background = this.add.image(0,0,"back")
    this.background.setOrigin(0,0)
    this.background.setScale(1)

    this.titleGame = this.add.image(0,50, "title")
    this.titleGame.setOrigin(0,0)
    this.titleGame.setScale(0.98)

    this.titleGame = this.add.image( config.width / 3 + 60 , config.height /2 , "tutorial")
    this.titleGame.setOrigin(0,0)
    this.titleGame.setScale(0.6)
    
    this.titleGame = this.add.image( config.width / 3 + 60 , config.height /2 + 80, "iniciar")
    this.titleGame.setOrigin(0,0)
    this.titleGame.setScale(0.6)

    this.titleGame = this.add.image( config.width / 3 + 60 , config.height /2 + 160, "placares")
    this.titleGame.setOrigin(0,0)
    this.titleGame.setScale(0.6)
    
    this.titleGame = this.add.image( config.width / 3 + 60 , config.height /2 + 240, "creditos")
    this.titleGame.setOrigin(0,0)
    this.titleGame.setScale(0.6)
    
    setTimeout( ()=>{this.scene.start("playGameEasy")}, 5000)

  }
}