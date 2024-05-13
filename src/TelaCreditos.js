class TelaCreditos extends Phaser.Scene{
  constructor(){
    super("TelaCreditos")
  }

  create(){
    console.log("entrei na cena tela creditos-------------------")

    this.background = this.add.image(0,0,"back")
    this.background.setOrigin(0,0)
    this.background.setScale(1)

    this.titleGame = this.add.image( config.width/2 ,50, "title")
    this.titleGame.setScale(0.2)

    this.voltar = this.add.image( config.width /2 , config.height - 100 , "Botao_Fase_voltar")
    this.voltar.setInteractive().on('pointerdown', () =>
    {
        console.log('voltar para tela menu');
        setTimeout( ()=>{this.scene.start("menu")}, 200)
    });
    
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 5000)

  }
}