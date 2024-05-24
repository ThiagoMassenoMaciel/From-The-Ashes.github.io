class AvisoFase2 extends Phaser.Scene {

  constructor() {
    super("AvisoFase2")
  }

  create() {
    //this.quantidade_labirintos_passado = 0
    console.log("|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|")
    console.log("esta indo para jogar a fase 2")

    this.Depois_clicado_botao_proximo_Fase2_ = this.add.image( config.width/2, config.height/2 , "Depois_clicado_botao_proximo_Fase2")

    setTimeout( ()=>{ this.scene.start("GameEasy") }, 2000)

  }

  update() {

  }


}