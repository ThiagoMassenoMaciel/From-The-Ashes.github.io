class Tela2 extends Phaser.Scene {

  constructor() {
    super("GameEasy")
  }

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

  create() {

    this.timerEvent = this.time.addEvent({ delay: 15000});
    this.graphics = this.add.graphics({ x: 0, y: 0 });

    this.acabou = false

    //this.scale_passado_labirinto = 0

    this.flag

    this.timer = this.add.image(config.width - 150, 100, "tempo")
    this.timer.setScale(0.6)

    this.button = this.add.image(config.width / 2, config.height - 80, "botao")
    this.button.setScale(0.6)

    console.log("----------------------")
    this.niveis = matris
    
    console.log(this.niveis)
    let random_nivel = Math.floor(Math.random() * arrayNiveis.length); //  random

    let nivel_escolhido = arrayNiveis[random_nivel] 

    this.flag = nivel_escolhido

    console.log("nivel escolhido")
    console.log(nivel_escolhido)

    arrayNiveis.splice(random_nivel,1)
    console.log(arrayNiveis)

    let random_labirinto

    let elemento_escolhido
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
      //setTimeout( ()=>{ this.trocarChaoParede(this.chao , this.todos_blocos_parede)} , 5000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 6000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 9000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 12000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 15000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 18000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 21000)
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 24000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 27000)
      setTimeout( ()=>{ this.destrocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 30000)
    }else{                    // de 1 em 1 segundos é mudado a cor das paredes de preto para branco
      setTimeout( ()=>{ this.trocarChaoParede(this.todos_blocos_parede, this.todos_blocos_chao_espaco)} , 1000)
      //setTimeout( ()=>{ this.trocarChaoParede(this.chao , this.todos_blocos_parede)} , 5000)
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

    
    //setTimeout(() => { this.scene.start("GameEasy") }, 10000)
  }

  update() {

    this.graphics.clear();
    this.drawClock(100, 100, this.timerEvent);
    
    console.log("entendendo o erro Tela2.js:120 Uncaught TypeError Cannot read properties of undefined reading 1 at  ")
    console.log(this.cursors)
    if (!this.acabou) { // feito evitar que o jogador consiga se movimentar depois que acontecer o overlap  

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

    console.log("entrou")
  }

  destrocarChaoParede(grupo_parede, grupo_espaco){
    grupo_parede.getChildren().forEach(elemento => {
      elemento.setTintFill(0x000000)
    });
  
    grupo_espaco.getChildren().forEach(elemento => {
      elemento.setTintFill(0xffffff)
    });

  }

  saiuDoLabirinto(jogadorr, saida) {

    let x = saida.x 
    let y = saida.y 

    this.jogadorr.destroy();
    this.saida.destroy();

    //this.saiu_do_labirinto = this.physics.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saiuDoLabirinto").setOrigin(0,0).setScale(0.2).refreshBody(); 
    
    if(this.flag === 2){
      // quando for adicionar este sprite no labirinto dificil ele vai encaixar dentro do bloco espaço
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

    setTimeout(() => { this.scene.start("GameEasy") }, 1500) // aqui em vez de restartar toda esta cena eu apenas chamo de novo a função que vai montar outro labirinto
    
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

}