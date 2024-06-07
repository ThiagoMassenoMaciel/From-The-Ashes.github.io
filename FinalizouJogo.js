class FinalizouJogo extends Phaser.Scene{
  constructor(){
    super("FinalizouJogo")
  }

  create(){

    this.Aviso_fase_3_clicou_botao_proximo_ = this.add.image( config.width/2 , config.height/2 , "fase_3_clicou_botao_proximo" )
    this.Botao_Fase_voltar___ = this.add.image( config.width/2 , (config.height/2) + 130, "Botao_Fase_voltar_" ).setInteractive().on('pointerdown', () =>
      {
        const music = this.sound.add("click");
        music.play() 
        console.log('voltar para cena Tela2');
        this.scene.start("TelaFases")
        
      });

    console.log("\n\n\n\n\n\n\n\n\n\n\namostrado aviso jogo finalizado ")
  }
}