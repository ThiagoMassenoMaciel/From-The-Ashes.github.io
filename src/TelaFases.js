class TelaFases extends Phaser.Scene{
  constructor(){
    super("TelaFases")
  }

  create(){
    console.log("entrei na cena TelaFases-------------------")

    this.mudar_nome = this.add.image( config.width /2 , 100, "mudar_nome").setDepth(2)
    this.mudar_nome.setInteractive().on('pointerdown', () => // quando clicado no botao trocar nome vai aparecer cena para novo input e vai bloquear as antigas fases passadas pelo jogador antes
    {
        console.log("\n\n\n----trocar de nome para novo jogador----\n\n\n");
        flagNovoJogador = false 
        // tenho que zerar as fases liberadas pelo jogador anterior
        for( let i = 0 ; i < 3 ; i++){
          arrayPassou[i] = false
        }

        this.perguntarNome() // vai executar toda vez que o botao [mudar_nome] for clicado
    });

    this.perguntarNome() // vai executar a primeira vez 

/*--------------------------------- quando so executava PerguntarNome uma vez-------------------------
    if(flagNovoJogador){ // se o valor da flag for true é porque ja foi perguntado nome
      
    }else{ // se o valor da flag = false isso quer dizer que ainda n foi perguntado 
      setTimeout(()=>{ this.scene.start("PerguntarNome") }, 500)
    }
*/



  //  /"\n\n\n----trocar de nome para novo jogador----\n\n\n"= this.add.image( config.width /2 , config.height/2, "Tela_Fases")
 // flagNovoJogador = false 
    // this.Botao_Fase_voltar = this.add.image( config.width /2 , config.height - 100, "Botao_Fase_voltar")
    // this.Botao_Fase_voltar.setInteractive().on('pointerdown', () =>
    // {
    //     console.log('voltar para tela menu');
        
    // });

    this.TelaFaseBotaoF1 = this.add.image( (config.width /3) - 180, config.height/2, "TelaFaseBotaoF1").setDepth(1)

    this.TelaFaseBotaoF1.setInteractive().on('pointerdown', () =>
    {
      console.log('==========entrou para fase 1=========');
      //fase = 0
      // tenho que zerar toda vez que ele joga uma nova fase a variavel global `quantidade_labirintos_passado`
      fase = 1 

      this.scene.start("GameEasy")      
    });

    this.TelaFaseBotaoF2 = this.add.image( (config.width /3) *1.5 , config.height/2, "TelaFaseBotaoF2").setScale(0.6).setDepth(1)

    if(arrayPassou[0]){ // se o primeiro elemento da array for true isso que quizer que a fase 1 foi concluida e o batao da fase 2 deve esta com tamanho normal e clicavel
   
      this.TelaFaseBotaoF2.setScale(1)
      this.TelaFaseBotaoF2.setInteractive().on('pointerdown', () =>
      {
        console.log('==========entrou para fase 2=========');
        // fase = 0 
        fase = 2
        this.scene.start("GameEasy")      
      });

    }

    this.TelaFaseBotaoF3 = this.add.image( config.width - 290 , config.height/2, "TelaFaseBotaoF3").setScale(0.6).setDepth(1)

    if(arrayPassou[1]){

      this.TelaFaseBotaoF3.setScale(1)
      this.TelaFaseBotaoF3.setInteractive().on('pointerdown', () =>
      {
        console.log('==========entrou para fase 3=========');
        //fase = 0 
        fase = 3
        
        this.scene.start("GameEasy")      
      }); 

    }

    this.Botao_Fase_voltar = this.add.image( config.width /2 , config.height - 100, "Botao_Fase_voltar").setDepth(2)
    this.Botao_Fase_voltar.setInteractive().on('pointerdown', () =>
    {
        console.log('voltar para tela menu');
        this.scene.start("menu")
    });
    
    //setTimeout( ()=>{this.scene.start("GameEasy")}, 4000)
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 5000)

  }

  perguntarNome(){
    if(flagNovoJogador){ // se o valor da flag for true é porque ja foi perguntado nome
    

    }else{ // se o valor da flag = false isso quer dizer que ainda n foi perguntado 
      setTimeout(()=>{ this.scene.start("PerguntarNome") }, 500)
    }
  }

}