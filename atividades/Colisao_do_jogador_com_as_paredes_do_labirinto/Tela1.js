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

    this.load.image("borda_left", "../../assents/borda_l.png")
    this.load.image("borda_right", "../../assents/borda_r.png")
    this.load.image("borda_bottom", "../../assents/borda_b.png")

    this.load.spritesheet("saidaa", "../../assents/teste.png", { frameWidth: 398, frameHeight: 398 }); // escolhi este 
    this.load.spritesheet("jogador", "../../assents/jogador.png", { frameWidth: 398, frameHeight: 398 });
    
    this.load.spritesheet("achou_saida", "../../assents/AchadoSaida-16px-16px-5-frames.png", { frameWidth: 16, frameHeight: 16 });

  }

  create(){

    this.add.text(500,500, "carregando jogo ... ", {font: "50px Arial" , fill: 'white'})

    this.paredes = this.physics.add.group()

    setTimeout( ()=>{this.scene.start("playGameEasy")}, 200) 
  }
}