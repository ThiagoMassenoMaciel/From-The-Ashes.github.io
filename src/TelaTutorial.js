class TelaTutorial extends Phaser.Scene{
    constructor(){
      super("TelaTutorial")
    }
  
  
    create(){
        this.background = this.add.image(0,0,"back")
        this.background.setOrigin(0,0)
        this.background.setScale(1)
    
        this.titleGame = this.add.image( config.width/2 ,50, "title")
        this.titleGame.setScale(0.2)

        this.TextoTutorial = this.add.image( (config.width/2) , (config.height/2 ) + 551.5 , "TelaTutorial").setScale(0.8)

        this.Botao_Fase_voltar = this.add.image(  120 , config.height/2 , "Botao_Fase_voltar").setDepth(2)
        this.Botao_Fase_voltar.setInteractive().on('pointerdown', () =>
        {
            console.log('voltar para tela menu');
            this.scene.start("menu")
        });
    
    }
  
  }