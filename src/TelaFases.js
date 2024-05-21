class TelaFases extends Phaser.Scene{
  constructor(){
    super("TelaFases")
  }

  create(){
    console.log("entrei na cena TelaFases-------------------")

    this.TelaFases = this.add.image( config.width /2 , config.height/2, "Tela_Fases")
    this.TelaFaseUm = 

    this.Botao_Fase_voltar = this.add.image( config.width /2 , config.height - 100, "Botao_Fase_voltar")
    this.Botao_Fase_voltar.setInteractive().on('pointerdown', () =>
    {
        console.log('voltar para tela menu');
        
    });

    this.TelaFaseBotaoF1 = this.add.image( (config.width /3) - 180, config.height/2, "TelaFaseBotaoF1")

    this.TelaFaseBotaoF1.setInteractive().on('pointerdown', () =>
    {
      console.log('==========entrou para fase 1=========');
      this.scene.start("GameEasy")      
    });
    
    //setTimeout( ()=>{this.scene.start("GameEasy")}, 4000)
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 5000)

  }
}