class Tela1 extends Phaser.Scene{
  constructor(){
    super("bootGame")
  }

  preload(){
    this.load.image("chao", "../../assents/bloco-espaco-40px.png")
    this.load.image("pareide", "../../assents/bloco-pareide-40px.png")
    this.load.image("tempo", "../../assents/cronometro.png")
    this.load.image("botao", "../../assents/voltar.png")

    this.load.image("back", "../../assents/background_1440px-1024px.png")
    this.load.image("title", "../../assents/logo_preta_1.png")
    this.load.image("tutorial", "../../assents/Tutorial.png")
    this.load.image("iniciar", "../../assents/Iniciar.png")
    this.load.image("placares", "../../assents/Placares.png")
    this.load.image("creditos", "../../assents/creditos.png")
  }

  create(){

    this.add.text(500,500, "carregando jogo ... ", {font: "50px Arial" , fill: 'white'})
    setTimeout( ()=>{this.scene.start("menu")}, 2000)
    
  }
}