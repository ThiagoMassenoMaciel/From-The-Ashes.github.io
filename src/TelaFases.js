class TelaFases extends Phaser.Scene{
  constructor(){
    super("TelaFases")
  }

  create(){
    console.log("entrei na cena TelaFases-------------------")

    this.TelaFases = this.add.image( config.width /2 , config.height/2, "Tela_Fases")

    this.Botao_Fase_voltar = this.add.image( config.width /2 , config.height - 100, "Botao_Fase_voltar")
    this.Botao_Fase_voltar.setInteractive().on('pointerdown', () =>
    {
        console.log('voltar para tela menu');
        
    });
    
    setTimeout( ()=>{this.scene.start("GameEasy")}, 4000)
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 5000)

  }
}