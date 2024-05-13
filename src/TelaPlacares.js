class TelaPlacares extends Phaser.Scene{
  constructor(){
    super("TelaPlacares")
  }

  create(){
    console.log("entrei na cena tela placares-------------------")

    this.background = this.add.image(0,0,"back")
    this.background.setOrigin(0,0)
    this.background.setScale(1)

    this.titleGame = this.add.image( config.width/2 ,50, "title")
    this.titleGame.setScale(0.2)

    this.Botao_Fase_voltar = this.add.image( config.width /2 , config.height - 100, "Botao_Fase_voltar")
    this.Botao_Fase_voltar.setInteractive().on('pointerdown', () =>
    {
        console.log('voltar para tela menu');
        setTimeout( ()=>{this.scene.start("menu")}, 200)
    });

    this.Placar_das_fases = this.add.image( config.width /2 , config.height/2 , "Placar_das_fases")
    
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 5000)

  }
}