class AvisoFase3 extends Phaser.Scene {

  constructor() {
    super("AvisoFase3")
  }

  create() {
    //this.quantidade_labirintos_passado = 0
    console.log("|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|")
    console.log("esta indo para jogar a fase 3")

    this.Botao_Fase_voltar_ = this.add.image( config.width/2, config.height/2 , "Depois_clicado_botao_proximo_Fase3" )

    setTimeout( ()=>{ this.scene.start("GameEasy") }, 2000)
    

  }

  update() {

  }


}