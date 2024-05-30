class PerguntarNome extends Phaser.Scene{

  constructor(){
    super("PerguntarNome")
  }

  create(){ 

    console.log("entrei na funcao perguntarNome()")
    this.background_preto = this.add.image( config.width /2 , config.height/2, "background_preto")
    this.TelaNome = this.add.image( config.width /2 , config.height/2 , "TelaNome")
    this.TelaNome_Botao_jogar = this.add.image( (config.width /2) + 400 , 458, "TelaNome_Botao_jogar").setInteractive().on('pointerdown', () =>
      {
          if(textEntry.text === "" | textEntry.text === " "){ // se dps clicado botao jogar o campo de nome do novo jogador tiver vazio ou com um espaco vai emitir aviso para jogador e digitar um nome , dps de 9 segundos vai desaparecer aviso 
            this.TelaNome_Botao_jogar_clicado = this.add.image( config.width/2, 100, "TelaNome_Botao_jogar_clicado")
            console.log("---------- a pessoa n colocou um nome valido -----------")
            setTimeout(()=>{this.TelaNome_Botao_jogar_clicado.destroy()}, 8000)

          }else{
            flagNovoJogador = true 
            // aqui eu devo colocar algum metodo para validar o que a pessoa digitou 
            console.log('voltar para tela menu');
            this.scene.start("TelaFases")

            if(this.nomeRepetido(textEntry.text)){ // se o valor retornado da funcao for verdadeiro isso quer dizer que o nome é repetido e devo avisar isso
              
              this.TelaNome_nome_repetido = this.add.image( config.width/2, 100, "TelaNome_nome_repetido").setOrigin(0,0)     //.setDepth(3);   console.log(this.TelaNome_nome_repetido)
              console.log("---------- a pessoa colocou um nome repetido -----------")
              setTimeout(()=>{this.TelaNome_nome_repetido.destroy()}, 8000)

            }else{ // se o valor que retornou da funcao for falso quer dizer que o nome n e repetido e pode adicionar na array dos jogadores

              let elemento = {
                nome: textEntry.text
                ,
                pontuacaoF1: null 
                ,
                pontuacaoF2: null 
                ,
                pontuacaoF3: null 
              }
          
              jogadores.push(elemento)
          
              console.log("\n\nadicionado um novo jogador:")
              console.log(jogadores)
              console.log("\n\n")
            }
  
          }

      });
/*
    this.TelaNome_Botao_manter = this.add.image( config.width /2 , (config.height/2) + 155, "TelaNome_Botao_manter").setDepth(0).setInteractive().on('pointerdown', () =>
    {       
        // aqui eu devo colocar algum metodo para validar o que a pessoa digitou 
        console.log('voltar para tela menu');
        this.scene.start("TelaFases")
    });
*/
     
    const textEntry = this.add.text((config.width /6) - 5  , 430, '', { font: '62px Courier', fill: '#000000' }).setOrigin(0,0).setDepth(1);

    this.input.keyboard.on('keydown', event =>
    {
        this.TelaNome = this.add.image( (config.width /6) - 20  , 430, "TelaNome_escrevendo").setOrigin(0,0).setScale(1.2)// para fazer desaparecer o nome" digite seu nome" dentro do campo de escrever 
        if (event.keyCode === 8 && textEntry.text.length > 0)
        {
            textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode <= 90) && textEntry.text.length < 10)// so vai exibir na tela se for menos de 10 caracteres o nome 
        {
            textEntry.text += event.key;
        }
    });


    //this.TelaNome_Botao_jogar_clicado = this.add.image( config.width /2 , config.height/2, "TelaNome_Botao_jogar_clicado")
  }

  nomeRepetido(NovoNome){

    if(jogadores.length > 0){  // se tiver jogador vou procurar se o novo nome digitado ja foi usado

      for( let i = 0 ; i < jogadores.length ; i++){
        if(jogadores[i].nome === NovoNome){
          return true
        }
      }
      // supondo que eu tiver fazendo esse forEach em uma array com 5 elementos e apenas o 3 elemento é igual - eu para a execussão para os próximos elementos ? 
      // se ele percorrer todo o for e n retornar true , ele vai retornar false

      return false
    }else{
      return false
    }

  }
}