//AvisoEpilepsia
class AvisoEpilepsia extends Phaser.Scene{
  constructor(){
    super("AvisoEpilepsia")
  }

  create(){
    console.log("Entrei para tela Aviso Epilepsia")

    this.Aviso_epilepsia = this.add.image(  config.width/2  , config.height/2 , "Aviso_epilepsia")

    this.Botao_continuar = this.add.image(  config.width/2 , config.height - 90 , "Aviso_epilepsia_continuar")
    this.Botao_continuar .setInteractive().on('pointerdown', () =>
    {
        console.log('ir para tela menu');
        const music = this.sound.add("click");
        music.play()
        this.scene.start("menu")
    });
  }

}