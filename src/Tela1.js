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

    this.load.image("Placar_das_fases", "../assents/Placar_das_fases.png")
    this.load.image("Tela_Fases", "../assents/Tela_Fases.png")
    this.load.image("mudar_nome", "../assents/mudar_nome.png")

    this.load.image("TelaFaseBotaoF1", "../assents/TelaFaseBotaoF1_passado.png")
    this.load.image("TelaFaseBotaoF2", "../assents/TelaFaseBotaoF2_passado.png")
    this.load.image("TelaFaseBotaoF3", "../assents/TelaFaseBotaoF3_passado.png")

    this.load.image("fase_3_clicou_botao_proximo", "../assents/fase_3_clicou_botao_proximo.png")
    this.load.image("Depois_clicado_botao_proximo_Fase3", "../assents/Depois_clicado_botao_proximo_Fase3.png")
    this.load.image("Depois_clicado_botao_proximo_Fase2", "../assents/Depois_clicado_botao_proximo_Fase2.png")

    this.load.image("background_preto", "../assents/background_preto.png")
    this.load.image("TelaNome", "../assents/TelaNome.png")
    this.load.image("TelaNome_Botao_jogar", "../assents/TelaNome_Botao_jogar.png")
    this.load.image("TelaNome_Botao_manter", "../assents/TelaNome_Botao_manter.png")
    this.load.image("TelaNome_Botao_jogar_clicado", "../assents/TelaNome_Botao_jogar_clicado.png")
    this.load.image("TelaNome_escrevendo", "../assents/TelaNome_escrevendo.png")
    this.load.image("TelaNome_nome_repetido", "../assents/TelaNome_nome_repetido.png")

    this.load.image("TelaCreditos", "../assents/TelaCreditos.png")

    this.load.image("TelaTutorial", "../assents/TelaTutorial.png")
    this.load.image("TelaTutorialVoltar", "../assents/TelaTutorialVoltar.png")
    
  }

  create(){

    this.add.text(500,500, "carregando jogo ... ", {font: "50px Arial" , fill: 'white'})

    this.paredes = this.physics.add.group()

    setTimeout( ()=>{this.scene.start("menu")}, 20) 
  }

}