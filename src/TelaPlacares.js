class TelaPlacares extends Phaser.Scene{
  constructor(){
    super("TelaPlacares")
  }

  procurar_jogadores_nao_estam_no_placar
  F1_1 // fase 1 posicao 1º lugar
  F1_2 // fase 1 posicao 2º lugar


  hankingF1 = [
    {  nome: "", pontuacao: 0 }
    ,  
    {  nome: "", pontuacao: 0 }
    ,
    {  nome: "", pontuacao: 0 }

  ]

  hankingF2 = [
    {  nome: "", pontuacao: 0 }
    ,  
    {  nome: "", pontuacao: 0 }
    ,
    {  nome: "", pontuacao: 0 }
    
  ]

  hankingF3 = [
    {  nome: "", pontuacao: 0 }
    ,  
    {  nome: "", pontuacao: 0 }
    ,
    {  nome: "", pontuacao: 0 }
    
  ]

  create(){
    console.log("entrei na cena tela placares-------------------")

    
    this.background = this.add.image(0,0,"back")
    this.background.setOrigin(0,0)
    this.background.setScale(1)

    this.titleGame = this.add.image( config.width/2 ,50, "title")
    this.titleGame.setScale(0.2)

    this.Botao_Fase_voltar = this.add.image( config.width /2 , config.height - 100, "Botao_Fase_voltar")
    this.Botao_Fase_voltar.setInteractive().on('pointerdown', () =>
    {
        console.log('voltar para tela menu');
        setTimeout( ()=>{this.scene.start("menu")}, 200)
    });

    this.Placar_das_fases = this.add.image( config.width /2 , config.height/2 , "Placar_das_fases")
    
    //setTimeout( ()=>{this.scene.start("playGameEasy")}, 5000)

// so vai exibir placar da fase 1 se algum jogador ja tiver jogado      alguem_jogou_fase1
    if(this.alguem_jogou_fase(jogadores, 1)){ // somente vou fazer os testes de placar posicao 1,2,3 se algum jogador se ja tiver jogado F1
      if(jogadores.length > 0){

        this.F1_1 = this.retornarObjetoMaiorPontuacao( jogadores, 1 )
        console.log("1º lugar hanking fase 1")
        console.log(jogadores)
        console.log(this.F1_1)
    
        this.exibirF1_1 = this.add.image( (config.width /3)  - 100 , (config.height /2) + 44  , "TelaNome_escrevendo").setScale(0.8).setTint(0x000000).scaleX = 0.7
        
        this.text1 = this.add.text( (config.width/3) - 230 , (config.height/2) + 35).setTint(0xffffff)
        this.text1.setText(`${this.F1_1.nome} - ${this.F1_1.pontuacaoF1}`).setFontSize(30)
  
        if(jogadores.length >= 2 ){ // é para executar isto quando tiver 2 jogadores e quando tiver 3 jogadores -------------jogadores.length === 2 | jogadores.length > 2
  
          this.procurar_jogadores_nao_estam_no_placar =  this.retornar_PROXIMOS_objetos(jogadores, this.F1_1) // aqui eu retorno uma array com todos objs MENOS this.F1_1
  
          this.F1_2 = this.retornarObjetoMaiorPontuacao( this.procurar_jogadores_nao_estam_no_placar, 1 ) // so vou percorrer os objetos que ainda n estao no placar
          console.log(" - 2º lugar hanking fase 1")
          console.log(jogadores)
          console.log(this.procurar_jogadores_nao_estam_no_placar)// vai exibir todos MENOS this.F1_1
          console.log(this.F1_2)    // vai exibir somente a 2º posicao do hanking 
      
          this.exibirF1_2 = this.add.image( (config.width /3)  - 100 , (config.height /2) + 90  , "TelaNome_escrevendo").setScale(0.8).setTint(0x000000).scaleX = 0.7
          
          this.text2 = this.add.text( (config.width/3) - 230 , (config.height/2) + 70).setTint(0xffffff)
          this.text2.setText(`${this.F1_2.nome} - ${this.F1_2.pontuacaoF1}`).setFontSize(30)
  
        }
  
        if(jogadores.length >= 3){
  //------------------------------------------------------------------------------------ tenho que pegar array n tem F1_1 para dela tirar F1_2
          this.procurar_jogadores_nao_estam_no_placar =  this.retornar_PROXIMOS_objetos(this.procurar_jogadores_nao_estam_no_placar, this.F1_2) // aqui eu retorno uma array com todos objs MENOS this.F1_1
  
          this.F1_3 = this.retornarObjetoMaiorPontuacao( this.procurar_jogadores_nao_estam_no_placar, 1 ) // so vou percorrer os objetos que ainda n estao no placar
          console.log(" - 3º lugar hanking fase 1")
          console.log(jogadores)
          console.log(this.procurar_jogadores_nao_estam_no_placar)// vai exibir todos MENOS this.F1_1
          console.log(this.F1_3)    // vai exibir somente a 3º posicao do hanking
      
          this.exibirF1_3 = this.add.image( (config.width /3)  - 100 , (config.height /2) + 136  , "TelaNome_escrevendo").setScale(0.8).setTint(0x000000).scaleX = 0.7
          
          this.text3 = this.add.text( (config.width/3) - 230 , (config.height/2) + 105).setTint(0xffffff)
          this.text3.setText(`${this.F1_3.nome} - ${this.F1_3.pontuacaoF1}`).setFontSize(30)
  
        }
  
  //-------------------------------------------------------------------HANKING DA FASE 2 ---------------------------------------------------------------------------------
        //this.exibirF2_1 = this.add.image( (config.width /2)  , (config.height /2) + 44  , "TelaNome_escrevendo").setScale(0.8).scaleX = 0.7
        //      (config.height /2) + 44 para cada posicao do hanking     [ proxima + 44 + 6]
        //this.exibirF2_2 = this.add.image( (config.width /2)  , (config.height /2) + 90  , "TelaNome_escrevendo").setScale(0.8).setTint(0x000000).scaleX = 0.7
  
  //-------------------------------------------------------------------HANKING DA FASE 3 ---------------------------------------------------------------------------------
          //  this.exibirF3_1 = this.add.image( ((config.width /3) * 2)  + 100 , (config.height /2) + 44  , "TelaNome_escrevendo").setScale(0.8).scaleX = 0.7
  
      }
    }

    if(this.alguem_jogou_fase(jogadores, 2)){ // somente vou fazer os testes de placar posicao 1,2,3 se algum jogador se ja tiver jogado F2
      if(jogadores.length > 0){

        this.F2_1 = this.retornarObjetoMaiorPontuacao( jogadores, 2 )
        console.log("1º lugar hanking fase 2")
        console.log(jogadores)
        console.log(this.F2_1)
    
        this.exibirF2_1 = this.add.image( (config.width /2) , (config.height /2) + 44  , "TelaNome_escrevendo").setScale(0.8).setTint(0x000000).scaleX = 0.7
        
        this.text4 = this.add.text( (config.width/2) - 130 , (config.height/2) + 35).setTint(0xffffff)
        this.text4.setText(`${this.F2_1.nome} - ${this.F2_1.pontuacaoF2}`).setFontSize(30)
  
        if(jogadores.length >= 2 ){ // é para executar isto quando tiver 2 jogadores e quando tiver 3 jogadores -------------jogadores.length === 2 | jogadores.length > 2
  
          this.procurar_jogadores_nao_estam_no_placar =  this.retornar_PROXIMOS_objetos(jogadores, this.F2_1) // aqui eu retorno uma array com todos objs MENOS this.F2_1
  
          this.F2_2 = this.retornarObjetoMaiorPontuacao( this.procurar_jogadores_nao_estam_no_placar, 2 ) // so vou percorrer os objetos que ainda n estao no placar F2
          console.log(" - 2º lugar hanking fase 2")
          console.log(jogadores)
          console.log(this.procurar_jogadores_nao_estam_no_placar)// vai exibir todos MENOS this.F2_1
          console.log(this.F2_2)    // vai exibir somente a 2º posicao do hanking 
      
          this.exibirF2_2 = this.add.image( (config.width /2) , (config.height /2) + 90  , "TelaNome_escrevendo").setScale(0.8).setTint(0x000000).scaleX = 0.7
          
          this.text5 = this.add.text( (config.width/2) - 130 , (config.height/2) + 70).setTint(0xffffff)
          this.text5.setText(`${this.F2_2.nome} - ${this.F2_2.pontuacaoF2}`).setFontSize(30)
  
        }
  
        if(jogadores.length >= 3){
  //------------------------------------------------------------------------------------ tenho que pegar array n tem F2_1 para dela tirar F2_2
          this.procurar_jogadores_nao_estam_no_placar =  this.retornar_PROXIMOS_objetos(this.procurar_jogadores_nao_estam_no_placar, this.F2_2) // aqui eu retorno uma array com todos objs MENOS this.F2_1
  
          this.F2_3 = this.retornarObjetoMaiorPontuacao( this.procurar_jogadores_nao_estam_no_placar, 2 ) // so vou percorrer os objetos que ainda n estao no placar
          console.log(" - 3º lugar hanking fase 2")
          console.log(jogadores)
          console.log(this.procurar_jogadores_nao_estam_no_placar)// vai exibir todos MENOS this.F2_1
          console.log(this.F2_3)    // vai exibir somente a 3º posicao do hanking
      
          this.exibirF2_3 = this.add.image( (config.width /2) , (config.height /2) + 136  , "TelaNome_escrevendo").setScale(0.8).setTint(0x000000).scaleX = 0.7
          
          this.text6 = this.add.text( (config.width/2) - 130 , (config.height/2) + 105).setTint(0xffffff)
          this.text6.setText(`${this.F2_3.nome} - ${this.F2_3.pontuacaoF2}`).setFontSize(30)
  
        }
  
  //-------------------------------------------------------------------HANKING DA FASE 2 ---------------------------------------------------------------------------------
        //this.exibirF2_1 = this.add.image( (config.width /2)  , (config.height /2) + 44  , "TelaNome_escrevendo").setScale(0.8).scaleX = 0.7
        //      (config.height /2) + 44 para cada posicao do hanking     [ proxima + 44 + 6]
        //this.exibirF2_2 = this.add.image( (config.width /2)  , (config.height /2) + 90  , "TelaNome_escrevendo").setScale(0.8).setTint(0x000000).scaleX = 0.7
  
  //-------------------------------------------------------------------HANKING DA FASE 3 ---------------------------------------------------------------------------------
          //  this.exibirF3_1 = this.add.image( ((config.width /3) * 2)  + 100 , (config.height /2) + 44  , "TelaNome_escrevendo").setScale(0.8).scaleX = 0.7
  
      }


    }
  }

  alguem_jogou_fase( array__jogadores, numero_fase){
    let flag = false 
    
    if(numero_fase === 1){
      array__jogadores.forEach(element => {
        // eu pergunto cado um dos elementos dentro da array dos jogadores e pergunto se algum tem pontuacao > 0 
        if(element.pontuacaoF1 > 0 ){
          flag = true 
        }
      
      });
  
    }else     if(numero_fase === 2){
      array__jogadores.forEach(element => {
        // eu pergunto cado um dos elementos dentro da array dos jogadores e pergunto se algum tem pontuacao > 0 
        if(element.pontuacaoF2 > 0 ){
          flag = true 
        }
      
      });
  
    }else     if(numero_fase === 3){
      array__jogadores.forEach(element => {
        // eu pergunto cado um dos elementos dentro da array dos jogadores e pergunto se algum tem pontuacao > 0 
        if(element.pontuacaoF3 > 0 ){
          flag = true 
        }
      
      });
  
    }

    return flag
  }

  retornarObjetoMaiorPontuacao( array, Fase ){
   if(Fase === 1){        // se quiser exibir placar da fase 1 executar isso
    console.log("entrei na f retornarObjetoMaiorPontuacao( FASE 1) ")
    let  GUARDADO = { pontuacaoF1: 0} // tem o objeto com o maior ponto
 
     if(array.length > 1){
       console.log("-array tem mais de 1 elemento")
       //percorrer cada jogador
       //-------------------- sub 1 pois o teste precisa somente comparar até o penultimo elemento
       for(let i = 0 ; i < (array.length - 1) ; i++){
         console.log("--percorrer cada elemento")
         console.log(i)
         let sucessorr = i+1
 //        console.log(array[sucessorr])
         if(array[i].pontuacaoF1 > array[sucessorr].pontuacaoF1){ // atual é maior que próximo ?
           if(array[i].pontuacaoF1 > GUARDADO.pontuacaoF1){ // atual tem pontos maior que score anterior ?
             GUARDADO = array[i]                            // atualizado novo score > anterior
 
             console.log("---achado obj com maior ponto")
             console.log(GUARDADO)
 //            console.log(array[i])
           }
         }else if( array[i].pontuacaoF1 < array[sucessorr].pontuacaoF1 ){ // atual é menor que próx ?
           if(array[sucessorr].pontuacaoF1 > GUARDADO.pontuacaoF1){ // prox tem pontos maior que score anterior ?
             GUARDADO = array[sucessorr]                            // atualizado novo score > anterior
 
             console.log("----achado obj com maior ponto")
             console.log(GUARDADO)
 //            console.log(array[sucessorr])
           }
         }else if( array[i].pontuacaoF1 === array[sucessorr].pontuacaoF1 ){
           // se os pontos do antecessor for igual do sucessor, considerar aquele com nome de ordem alfabetica maior
           if(  this.ordemAlfabetica( array[i] , array[sucessorr] )  ){
 
             GUARDADO = array[i]
       
           } else {
           
             GUARDADO = array[sucessorr]
           
           }
 
         }
       }
 
       console.log(`-----depois de percorrer dentro do for, encontro o jogador maior pontuacao `)
       console.log(GUARDADO)
 
       return GUARDADO
 
     }else if(array.length === 1){
 
       GUARDADO = array[0]
       console.log(`-----TelaPlacares unico jogador maior pontuacao`)
       console.log(GUARDADO)
 
       return GUARDADO
 
     }

   }else if(Fase === 2){  // se quiser exibir placar da fase 2 executar isso
    console.log("entrei na f retornarObjetoMaiorPontuacao( FASE 2) ")
    let  GUARDADO = { pontuacaoF2: 0} // tem o objeto com o maior ponto
 
     if(array.length > 1){
       console.log("-array tem mais de 1 elemento")
       //percorrer cada jogador
       //-------------------- sub 1 pois o teste precisa somente comparar até o penultimo elemento
       for(let i = 0 ; i < (array.length - 1) ; i++){
         console.log("--percorrer cada elemento")
         console.log(i)
         let sucessorr = i+1
 //        console.log(array[sucessorr])
         if(array[i].pontuacaoF2 > array[sucessorr].pontuacaoF2){ // atual é maior que próximo ?
           if(array[i].pontuacaoF2 > GUARDADO.pontuacaoF2){ // atual tem pontos maior que score anterior ?
             GUARDADO = array[i]                            // atualizado novo score > anterior
 
             console.log("---achado obj com maior ponto")
             console.log(GUARDADO)
 //            console.log(array[i])
           }
         }else if( array[i].pontuacaoF2 < array[sucessorr].pontuacaoF2 ){ // atual é menor que próx ?
           if(array[sucessorr].pontuacaoF2 > GUARDADO.pontuacaoF2){ // prox tem pontos maior que score anterior ?
             GUARDADO = array[sucessorr]                            // atualizado novo score > anterior
 
             console.log("----achado obj com maior ponto")
             console.log(GUARDADO)
 //            console.log(array[sucessorr])
           }
         }else if( array[i].pontuacaoF2 === array[sucessorr].pontuacaoF2 ){
           // se os pontos do antecessor for igual do sucessor, considerar aquele com nome de ordem alfabetica maior
           if(  this.ordemAlfabetica( array[i] , array[sucessorr] )  ){
 
             GUARDADO = array[i]
       
           } else {
           
             GUARDADO = array[sucessorr]
           
           }
 
         }
       }
 
       console.log(`-----depois de percorrer  todos loops do for, encontro o jogador maior pontuacao `)
       console.log(GUARDADO)
 
       return GUARDADO
 
     }else if(array.length === 1){
 
       GUARDADO = array[0]
       console.log(`-----TelaPlacares unico jogador maior pontuacao`)
       console.log(GUARDADO)
 
       return GUARDADO
 
     }

   }else if(Fase === 3){  // se quiser exibir placar da fase 3 executar isso
    console.log("entrei na f retornarObjetoMaiorPontuacao( fase 3) ") 
    let  GUARDADO = { pontuacaoF3: 0} // tem o objeto com o maior ponto
 
     if(array.length > 1){
       console.log("-array tem mais de 1 elemento")
       //percorrer cada jogador
       //-------------------- sub 1 pois o teste precisa somente comparar até o penultimo elemento
       for(let i = 0 ; i < (array.length - 1) ; i++){
         console.log("--percorrer cada elemento")
         console.log(i)
         let sucessorr = i+1
 //        console.log(array[sucessorr])
         if(array[i].pontuacaoF3 > array[sucessorr].pontuacaoF3){ // atual é maior que próximo ?
           if(array[i].pontuacaoF3 > GUARDADO.pontuacaoF3){ // atual tem pontos maior que score anterior ?
             GUARDADO = array[i]                            // atualizado novo score > anterior
 
             console.log("---achado obj com maior ponto")
             console.log(GUARDADO)
 //            console.log(array[i])
           }
         }else if( array[i].pontuacaoF3 < array[sucessorr].pontuacaoF3 ){ // atual é menor que próx ?
           if(array[sucessorr].pontuacaoF3 > GUARDADO.pontuacaoF3){ // prox tem pontos maior que score anterior ?
             GUARDADO = array[sucessorr]                            // atualizado novo score > anterior
 
             console.log("----achado obj com maior ponto")
             console.log(GUARDADO)
 //            console.log(array[sucessorr])
           }
         }else if( array[i].pontuacaoF3 === array[sucessorr].pontuacaoF3 ){
           // se os pontos do antecessor for igual do sucessor, considerar aquele com nome de ordem alfabetica maior
           if(  this.ordemAlfabetica( array[i] , array[sucessorr] )  ){
 
             GUARDADO = array[i]
       
           } else {
           
             GUARDADO = array[sucessorr]
           
           }
 
         }
       }
 
       console.log(`-----depois de percorrer todos loops do for, encontro o jogador maior pontuacao `)
       console.log(GUARDADO)
 
       return GUARDADO
 
     }else if(array.length === 1){
 
       GUARDADO = array[0]
       console.log(`-----TelaPlacares unico jogador maior pontuacao`)
       console.log(GUARDADO)
 
       return GUARDADO
 
     }
   }
  }

  ordemAlfabetica( objetoI, objetoII ){
    let string1 = objetoI.nome      
    let string2 = objetoII.nome

    let i = string1.split('')
    let ii = string2.split('')

    let indiceL = 0
    // enquanto ass letras comparadas forem iguais , incrementar indiceL até achar em qual indice as duas letras comparadas seram diferentes
    // a primeira letra da string1 é igual a primeira letra da string2 ? se for verdade entra dentro do loop e nao for verdade n entra no loop
    // a segunda letra da string1 é igual a segunda letra da string2 ?  
    while(i[indiceL] === ii[indiceL]){
      indiceL++
    }

    if(i[indiceL] < ii[indiceL]){

      return true 
    }else{

      return false 
    }

  }

  retornar_PROXIMOS_objetos( array_Jogadores, desconsiderar_este_objeto){
    //eu irei remover o objeto jogador de dentro da array que ja esta na posicao acima do placar , para eu procurar pelo proximo objeto para proxima posicao do placar
    return array_Jogadores.filter( (objeto_jogador) => objeto_jogador !== desconsiderar_este_objeto)
  }
}