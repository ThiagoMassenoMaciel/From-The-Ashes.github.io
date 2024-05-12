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

   // Botao_Fase_verPlacar
    //Botao_Fase_proximo
    //passou_fase_
    // este é o aviso quando a pessoa passar de fase
    this.load.image("passou_a_fase_", "../assents/passou_fase_.png")
    this.load.image("Botao_Fase_voltar_", "../assents/Botao_Fase_voltar_.png")
    this.load.image("Botao_Fase_verPlacar", "../assents/Botao_Fase_verPlacar.png")
    this.load.image("Botao_Fase_proximo", "../assents/Botao_Fase_proximo.png")

    //este é o aviso quando a pessoa nao passar de fase
    this.load.image("Botao_Fase_fundo_transparente", "../assents/Botao_Fase_fundo_transparente.png")
    this.load.image("nao_passou_a_fase", "../assents/nao_passou_a_fase.png")
    this.load.image("Botao_Fase_voltar", "../assents/Botao_Fase_voltar.png")
    this.load.image("Botao_Fase_repetir", "../assents/Botao_Fase_repetir.png")

    this.load.image("borda_left", "../../assents/borda_l.png")
    this.load.image("borda_right", "../../assents/borda_r.png")
    this.load.image("borda_bottom", "../../assents/borda_b.png")

    this.load.spritesheet("saidaa", "../../assents/teste.png", { frameWidth: 398, frameHeight: 398 }); // escolhi este 
    this.load.spritesheet("jogador", "../../assents/jogador.png", { frameWidth: 398, frameHeight: 398 });
    this.load.spritesheet("frame1", "../../assents/Frame1.png", { frameWidth: 40, frameHeight: 40 });
    
    this.load.spritesheet("saiuDoLabirinto", "../../assents/saiuDoLabirinto.png", { frameWidth: 40, frameHeight: 40 })

  }

  create(){

    this.add.text(500,500, "carregando jogo ... ", {font: "50px Arial" , fill: 'white'})

    this.paredes = this.physics.add.group()

    setTimeout( ()=>{this.scene.start("GameEasy")}, 20) 
  }

}