class Tela2 extends Phaser.Scene {

  constructor() {
    super("GameEasy")
  }


  fase
  niveis
  todos_blocos_parede
  todos_blocos_chao_espaco
  
  saida
  jogadorr
  cursors

  flag; // para armazenar o valor do nivel escolhido para baixar a velocidade quando for labirinto dificil e para setOrigin() da animação achouSaidaLabirinto
  acabou  // para n deixar jogador movimentar esprite jogadorr assim no momento que ele achar a saida 

  scale_passado_labirinto // quando muda o nivel de labirinto muda escala da animacao quando jogador acha a saida
  saiu_do_labirinto // vai armazenar o sprite da animacao quando o jogador encontra o buraco saida

  clockSize = 50;
  timerEvent;
  graphics;


  quantidade_labirintos_passado

  create() {
    this.quantidade_labirintos_passado = 0
    console.log("|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|")
    console.log(this.quantidade_labirintos_passado)
/*
    //https://labs.phaser.io/edit.html?src=src/game%20objects\dom%20element\blend%20mode.js
// para fazer ficar fundo transparente eu  tenho que fazer esta ganbiarra do link 

    const element = this.add.dom(400, 100, 'div', 
    'background: linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(30,87,153,0.8) 15%,rgba(30,87,153,1) 19%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 81%,rgba(30,87,153,0.8) 85%,rgba(30,87,153,0) 100%); width: 100vw; height: 100px; font: 48px Arial; font-weight: bold; color: white', 'Phaser 3');
    element.setBlendMode('HUE');

    const element2 = this.add.dom(500, 200, 'div', 'background: linear-gradient(to bottom, rgba(30,87,153,0) 0%,rgba(30,87,153,0.8) 15%,rgba(30,87,153,1) 19%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 81%,rgba(30,87,153,0.8) 85%,rgba(30,87,153,0) 100%); width: 220px; height: 100px; font: 48px Arial; font-weight: bold; color: white', 'Phaser 3');
    element2.setBlendMode('HUE');

    this.tweens.add({
        targets: [ element, element2 ],
        y: 500,
        duration: 3000,
        ease: 'Sine.easeInOut',
        loop: -1,
        yoyo: true
    });
*/

    this.fase = 1
    this.timerEvent = this.time.addEvent({ delay: fases[0].tempo_limite});

    this.text = this.add.text(1170, 100);
    
    this.graphics = this.add.graphics({ x: 0, y: 0 });

    //this.acabou = false

    //this.scale_passado_labirinto = 0

    this.flag

    console.log("----------------------")
    this.niveis = matris

    console.log(this.niveis)

    this.montar_Um_Labirinto_Aleatorio()

    //setTimeout(() => { this.scene.start("GameEasy") }, 10000)
  }

  update() {

    this.graphics.clear();
    this.drawClock( 1170, 100, this.timerEvent);

    this.text.setText(this.timerEvent.getElapsedSeconds().toString().substr(0, 2)); //

    if(this.fase === 1){

      if(this.quantidade_labirintos_passado < fases[0].quantos_labirintos & this.timerEvent.elapsed/1000 === (fases[0].tempo_limite/1000)){
        // tem que passar em 2 labirintos antes de 30 segundos fase 1
        this.acabou = true
        //setTimeout( ()=>{this.nao_passou_a_fase() }, 1000)
        this.nao_passou_a_fase()
        // para executar um metodo dentro desta clase tem que fazer referencia ao objeto com o this. pois é para executar este metodo para este objeto desta clase 
      }else if( this.quantidade_labirintos_passado === fases[0].quantos_labirintos){
        this.acabou = true
        //setTimeout( ()=>{this.passou_a_fase() }, 1000)
        this.passou_a_fase()
      }

    }else if( this.fase === 2){
      if(this.quantidade_labirintos_passado < fases[1].quantos_labirintos & this.timerEvent.elapsed/1000 === (fases[1].tempo_limite/1000)){ 
        // tem que passar em 3 labirintos antes de 45 segundos fase 2
        this.acabou = true
        //setTimeout( ()=>{this.nao_passou_a_fase() }, 1000)
        this.nao_passou_a_fase() 

      }else if( this.quantidade_labirintos_passado === fases[1].quantos_labirintos){
        this.acabou = true
        //setTimeout( ()=>{ this.passou_a_fase() }, 1000)
        this.passou_a_fase()
      }

    }else if( this.fase === 3){
      if(this.quantidade_labirintos_passado < fases[2].quantos_labirintos & this.timerEvent.elapsed/1000 === (fases[2].tempo_limite/1000)){ 
        // tem que passar em 4 labirintos antes de 60 segundos fase 3
        this.acabou = true
        //setTimeout( ()=>{this.nao_passou_a_fase() }, 1000)
        this.nao_passou_a_fase() 

      }else if( this.quantidade_labirintos_passado === fases[2].quantos_labirintos){
        this.acabou = true
        //setTimeout( ()=>{ this.passou_a_fase() }, 1000)
        this.passou_a_fase()
      }

    }

    if(!this.acabou) { // feito evitar que o jogador consiga se movimentar depois que acontecer o overlap  

      if(this.flag === 2){
        if (this.cursors.left.isDown) {
          this.jogadorr.setVelocityX(-195);
        } else if (this.cursors.right.isDown) {
          this.jogadorr.setVelocityX(195);
        } else {
          this.jogadorr.setVelocityX(0)
        }
  
        if (this.cursors.up.isDown) {
          this.jogadorr.setVelocityY(-195);
        } else if (this.cursors.down.isDown) {
          this.jogadorr.setVelocityY(195)
        } else {
          this.jogadorr.setVelocityY(0)
        }
      }else{

        if (this.cursors.left.isDown) {
          this.jogadorr.setVelocityX(-700);
        } else if (this.cursors.right.isDown) {
          this.jogadorr.setVelocityX(700);
        } else {
          this.jogadorr.setVelocityX(0)
        }
  
        if (this.cursors.up.isDown) {
          this.jogadorr.setVelocityY(-700);
        } else if (this.cursors.down.isDown) {
          this.jogadorr.setVelocityY(700)
        } else {
          this.jogadorr.setVelocityY(0)
        }
      }
/*
      if (arrayEasy.length === 0) {
        arrayEasy = [0, 1, 2, 3, 4]
      }
*/
      if(arrayNiveis.length === 0){
        arrayNiveis = [ 1, 2]
        console.log("---------------------------- deixando so niveis médios e dificeis")
      }


    }
    

  }

  trocarChaoParede( grupo_parede, grupo_espaco){

    grupo_parede.getChildren().forEach(elemento => {
      elemento.setTintFill(0xffffff)
/*
      setTimeout( ()=>{
        elemento.setTintFill(0xffffff)
        elemento = elemento
        console.log(elemento)
        console.log(elemento.tint)
        console.log(elemento.isTinted)
          }
        , 3000)
*/
    });
    
    grupo_espaco.getChildren().forEach(elemento => {
      elemento.setTintFill(0x000000)
    });

    console.log("trocou de cor")
  }

  destrocarChaoParede(grupo_parede, grupo_espaco){
    grupo_parede.getChildren().forEach(elemento => {
      elemento.setTintFill(0x000000)
    });
  
    grupo_espaco.getChildren().forEach(elemento => {
      elemento.setTintFill(0xffffff)
    });
    console.log("trocou de cor -----")
  }

  saiuDoLabirinto(jogadorr, saida) {

  
    this.timerEvent.paused = !this.timerEvent.paused
    console.log("Foi pausado ? ")
    console.log(this.timerEvent.paused)
    console.log("\n")
    this.quantidade_labirintos_passado += 1
    console.log("|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:| quantos labirintos passou ?|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|:|")
    console.log(this.quantidade_labirintos_passado)

    let x = saida.x 
    let y = saida.y 

    

    this.jogadorr.destroy();
    this.saida.destroy();

    //this.saiu_do_labirinto = this.physics.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saiuDoLabirinto").setOrigin(0,0).setScale(0.2).refreshBody(); 
    
    if(this.flag === 2){
      // quando for adicionar este sprite no labirinto dificil ele vai encaixar dentro do bloco espaço eu tirei o setOrigin
      this.saiu_do_labirinto = this.physics.add.sprite(x,y, "saiuDoLabirinto").setScale( this.scale_passado_labirinto).refreshBody();
    }else{
      // quando for adicionar este sprite no labirinto facil e medio vai encaixar dentro do bloco espaço
      this.saiu_do_labirinto = this.physics.add.sprite(x,y, "saiuDoLabirinto").setOrigin(0,0).setScale( this.scale_passado_labirinto).refreshBody();
    }
    
    this.physics.add.collider(this.saiu_do_labirinto, this.todos_blocos_parede);

    this.anims.create({

      key: "saiuDoLabirinto_anims",
      frames: this.anims.generateFrameNumbers("saiuDoLabirinto"),
      frameRate: 15,
      repeat: -1

    })

    this.saiu_do_labirinto.anims.play("saiuDoLabirinto_anims", true);

    // executar a funcao que mostra que a pessoa passou de fase 
    this.acabou = true

    //setTimeout(() => { this.scene.start("GameEasy") }, 1500) // aqui em vez de restartar toda esta cena eu apenas chamo de novo a função que vai montar outro labirinto
    //setTimeout(() => { , 1000})

    // o valor dentro da variavel this.fase É 1 , e o primeiro elemento da array  fases que tem as informacoes do nivel 1 é o indice zero
    if(this.quantidade_labirintos_passado !== fases[this.fase - 1].quantos_labirintos){
      setTimeout(()=>{
        this.montar_Um_Labirinto_Aleatorio()
        this.timerEvent.paused = !this.timerEvent.paused; // trocando valor boleano para continuar o relogio
      }, 2000)
    }
  }

  drawClock (x, y, timer)
  {
      //  Progress is between 0 and 1, where 0 = the hand pointing up and then rotating clockwise a full 360

      //  The frame
      this.graphics.lineStyle(6, 0xffffff, 1);
      this.graphics.strokeCircle(x, y, this.clockSize);

      let angle;
      let dest;
      let p1;
      let p2;
      let size;

      //  The current iteration hand
      size = this.clockSize * 0.95;

      angle = (360 * timer.getProgress()) - 90;
      dest = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle), size);

      this.graphics.lineStyle(2, 0xffffff, 1);

      this.graphics.beginPath();

      this.graphics.moveTo(x, y);

      p1 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle - 5), size * 0.7);

      this.graphics.lineTo(p1.x, p1.y);
      this.graphics.lineTo(dest.x, dest.y);

      this.graphics.moveTo(x, y);

      p2 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle + 5), size * 0.7);

      this.graphics.lineTo(p2.x, p2.y);
      this.graphics.lineTo(dest.x, dest.y);

      this.graphics.strokePath();
      this.graphics.closePath();
  }

  montar_Um_Labirinto_Aleatorio(){
    this.acabou = false // para habilitar novamente o movimento

    let random_nivel = Math.floor(Math.random() * arrayNiveis.length); //  random

    let nivel_escolhido = arrayNiveis[random_nivel] 

    this.flag = nivel_escolhido

    console.log("nivel escolhido")
    console.log(nivel_escolhido)

    arrayNiveis.splice(random_nivel,1)
    console.log(arrayNiveis)

// coloca eles para iniciar com zero e depois define 
    let random_labirinto = 0
    let elemento_escolhido = 0 

  //    dependendo de qual nivel foi escolhido eu tenho que acessar o elemento de diferentes arrays
    if(nivel_escolhido === 0){
      // se o nivel escolhido foi Easy eu tenho que escolher um elemento do arrayEasy que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayEasy.length); // 4
      elemento_escolhido = arrayEasy[random_labirinto]
      
      console.log(`apagado`)
      console.log(arrayEasy[random_labirinto])
      arrayEasy.splice(random_labirinto, 1)

      console.log(`arrayEasy`)
      console.log(arrayEasy)

    }else if(nivel_escolhido === 1){
      // se o nivel escolhido foi Medium eu tenho que escolher um elemento do arrayMedium que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayMedium.length); //3
      elemento_escolhido = arrayMedium[random_labirinto]

      console.log(`apagado ->`)
      console.log(arrayMedium[random_labirinto])
      arrayMedium.splice(random_labirinto, 1)

      console.log(`arrayMedium`)
      console.log(arrayMedium)

    }else{
      // se o nivel escolhido foi Hard eu tenho que escolher um elemento do arrayHard que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayHard.length); // 2
      elemento_escolhido = arrayHard[random_labirinto]

      
      console.log(`apagado ->`)
      console.log(arrayHard[random_labirinto])
      arrayHard.splice(random_labirinto, 1)

      console.log(`arrayHard`)
      console.log(arrayHard)

    }

    let indice_labirinto_escolhido = elemento_escolhido

    console.log("\n\n\nexibindo matriz objetos labirinto")
    console.log(this.niveis)
    console.log("exibindo objeto labirinto sorteado")

    const matriz = this.niveis[nivel_escolhido][indice_labirinto_escolhido]

    console.log(matriz)
    console.log("\n\n\n")
    this.scale_passado_labirinto = matriz.scale_passado_labirinto

    this.todos_blocos_parede = this.physics.add.staticGroup();
    this.todos_blocos_chao_espaco = this.physics.add.staticGroup();

    for (let linha = 0; linha < matriz.Full_matriz.length; linha++) {
      // quando eu for transformar este pedaço de código em uma função na hora de mudar a cor 
      //é so eu trocar o objeto de colisão e mudar ordem que passarei os parametros (pareide, espaço) (espaço , pareide) chamando a mesma função
      // e para o jogador não ultrapassar o limete do labirinto eu pego a posição eixo(x,y) da primeira e ultima coluna , da primeira e ultima linha e arrodeio de blocos pareide
      for (let coluna = 0; coluna < matriz.Full_matriz[linha].length; coluna++) {
        //console.log(` linha ${linha} coluna ${coluna}`)
        if (matriz.Full_matriz[linha][coluna] === 1) {
          //tamanho de cada bloco + metade da tela horizontalmente 

          

          if(nivel_escolhido=== 0){

            this.todos_blocos_parede.create(coluna *120+(config.width / 3) - 80 , linha * 120, "pareide").setOrigin(0, 0).setScale(3).refreshBody();

          }else if(nivel_escolhido===1){

            this.todos_blocos_parede.create(coluna * 60 + (config.width/4) + 35 , linha * 60, "pareide").setOrigin(0, 0).setScale(1.5).refreshBody();

          }else if(nivel_escolhido===2){

            this.todos_blocos_parede.create(coluna * 30 + (config.width/3) - 80 , linha * 30, "pareide").setOrigin(0, 0).setScale(0.75).refreshBody();

          }

        } else {

          if(nivel_escolhido=== 0){
            this.todos_blocos_chao_espaco.create(coluna * 120+(config.width / 3) - 80 , linha * 120, "chao").setOrigin(0, 0).setScale(3).refreshBody();

          }else if(nivel_escolhido===1){
            this.todos_blocos_chao_espaco.create(coluna * 60 + (config.width/4) + 35 , linha * 60, "chao").setOrigin(0, 0).setScale(1.5).refreshBody();

          }else if(nivel_escolhido===2){
            this.todos_blocos_chao_espaco.create(coluna * 30 + (config.width/3) - 80 , linha * 30, "chao").setOrigin(0, 0).setScale(0.75).refreshBody();

          }
  /*
          if(nivel_escolhido=== 0){
            this.chao = this.add.image(coluna * 120+(config.width / 3) - 80 , linha * 120, "chao") // se  colocar 80 vai ficar sem as linhas 
            this.chao.setOrigin(0, 0)
            this.chao.setScale(3)

          }else if(nivel_escolhido===1){
            this.chao = this.add.image(coluna * 60 + (config.width/4) + 35 , linha * 60, "chao") // se  colocar 80 vai ficar sem as linhas 
            this.chao.setOrigin(0, 0)
            this.chao.setScale(1.5)

          }else if(nivel_escolhido===2){
            this.chao = this.add.image(coluna * 30 + (config.width/3) - 80 , linha * 30, "chao") // se  colocar 80 vai ficar sem as linhas 
            this.chao.setOrigin(0, 0)
            this.chao.setScale(0.75)

          }
  */
        }

      }

    }
    this.todos_blocos_parede.create((config.width / 3) - 80 - 10, 0, "borda_left").setOrigin(0, 0).refreshBody();
    this.todos_blocos_parede.create((5 * 120) + (config.width / 3) - 80, 0, "borda_right").setOrigin(0, 0).refreshBody();
    this.todos_blocos_parede.create((config.width / 3) - 80, (5 * 120), "borda_bottom").setOrigin(0, 0).refreshBody();

    this.saida = this.physics.add.sprite(matriz.posicao_saida_w, matriz.posicao_saida_h, "saidaa").setOrigin(0, 0).setScale(matriz.scale_saida_e_jogador).refreshBody();

    this.anims.create({

      key: "saidaa_anims",

      frames: this.anims.generateFrameNumbers("saidaa"),

      frameRate: 4,

      repeat: -1

    })

    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add.sprite( matriz.posicao_jogadorr_w, matriz.posicao_jogadorr_h, "jogador").setOrigin(0, 0).setScale(matriz.scale_saida_e_jogador).refreshBody().setCollideWorldBounds(true);

    this.anims.create({

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 15,
      repeat: -1

    })


    this.jogadorr.anims.play("jogador_anims", true);

    this.physics.add.collider(this.jogadorr, this.todos_blocos_parede);

    this.physics.add.collider(this.saida, this.todos_blocos_parede);

    //this.physics.add.collider(this.saiu_do_labirinto, this.todos_blocos_parede);

    this.physics.add.overlap(this.jogadorr, this.saida, this.saiuDoLabirinto, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    if(this.quantidade_labirintos_passado !== fases[this.fase - 1].quantos_labirintos ){
      // so vai executar enquanto não passou em todos os labirintos da fase selecionada
      this.piscaPisca()
    }
  }

  piscaPisca(){
    if( this.flag === 0){ // de 5 em 5 segundos é mudado a cor das paredes de preto para branco
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 5000)
      //setTimeout( ()=>{ this.trocarChaoParede(this.chao , this.todos_blocos_parede)} , 5000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 10000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 15000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 20000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 25000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 30000)
    }else if(this.flag === 1){ // de 3 em 3 segundos é mudado a cor das paredes de preto para branco
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 3000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 6000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 9000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 12000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 15000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 18000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 21000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 24000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 27000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 30000)
    }else{                    // de 1 em 1 segundos é mudado a cor das paredes de preto para branco
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 1000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 2000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 3000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 4000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 5000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 6000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 7000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 8000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 9000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 10000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 11000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 12000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 13000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 14000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 15000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 16000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 17000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 18000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 19000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 20000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 21000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 22000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 23000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 24000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 25000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 26000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 27000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 28000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 29000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 30000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 31000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 32000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 33000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 34000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 35000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 36000)

    }
  }

  nao_passou_a_fase(){ // vai exibir o aviso

    this.Botao_Fase_fundo_transparente_ = this.add.image( config.width / 2 , config.height /2, "Botao_Fase_fundo_transparente").setAlpha(0.2, 0.2, 0.2, 0.2);
    //  top left, top right, bottom left, bottom right
    //  sea.setAlpha(0.5, 0.5, 0.5, 0.5);
    this.nao_passou_a_fase_ = this.add.image( config.width / 2 , config.height /2, "nao_passou_a_fase")
    this.Botao_Fase_voltar_ = this.add.image( (config.width/2) - 110 , (config.height/2) + 130, "Botao_Fase_voltar" ).setInteractive().on('pointerdown', () =>
      {
          console.log('tem que voltar para a tela menu');
          setTimeout( ()=>{this.scene.start("menu")}, 500)
  
      });
    this.Botao_Fase_repetir_ = this.add.image( (config.width/2) + 110 , (config.height/2) + 130, "Botao_Fase_repetir" ).setInteractive().on('pointerdown', () =>
      {
          console.log('tem repetir a fase 1');
          setTimeout( ()=>{this.scene.start("Tela2")}, 500)
  
      });

  }

  passou_a_fase(){// vai exibir o aviso

    this.Botao_Fase_fundo_transparente_ = this.add.image( config.width / 2 , config.height /2, "Botao_Fase_fundo_transparente").setAlpha(0.2, 0.2, 0.2, 0.2);  

    this.passou_a_fase_ = this.add.image( config.width / 2 , config.height /2, "passou_a_fase_")
    this.Botao_Fase_voltar_ = this.add.image( (config.width/2) - 229 , (config.height/2) + 130, "Botao_Fase_voltar_" ).setInteractive().on('pointerdown', () =>
      {
          console.log('voltar para cena Tela2');
          setTimeout( ()=>{this.scene.start("TelaFases")}, 500)
  
      });
    this.Botao_Fase_verPlacar_ = this.add.image( config.width/2 , (config.height/2) + 130, "Botao_Fase_verPlacar" )
    this.Botao_Fase_proximo_ = this.add.image( (config.width/2) + 229 , (config.height/2) + 130, "Botao_Fase_proximo" )

  }

}