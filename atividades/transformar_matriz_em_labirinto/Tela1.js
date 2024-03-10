class Tela1 extends Phaser.Scene{
  constructor(){
    super("bootGame")
  }

  preload(){
    this.load.image("chao", "../../assents/bloco-espaco-40px.png")
    this.load.image("pareide", "../../assents/bloco-pareide-40px.png")
    this.load.image("tempo", "../../assents/cronometro.png")
    this.load.image("botao", "../../assents/voltar.png")
  }

  create(){

    this.add.text(500,500, "carregando jogo ... ", {font: "50px Arial" , fill: 'white'})
    setTimeout( ()=>{this.scene.start("playGameEasy")}, 2000)
    
  }
}