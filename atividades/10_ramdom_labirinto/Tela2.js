class Tela2 extends Phaser.Scene{

  constructor(){
    super("GameEasy")
  }



  create(){

    this.add.text(0,0, "jogo", { font: "60px Arial"})

    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)

    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)
    
    const matrizes = []
    //ponto inicial linha[1] coluna[0]
    //ponto final   linha[4] coluna[4]

    const easy_0 = {
      Full_matriz: 
      [ 
        [1 , 0 , 1 , 0 , 1],
        [0 , 1 , 0 , 0 , 0],
        [0 , 0 , 0 , 1 , 0],
        [0 , 1 , 0 , 0 , 1],
        [1 , 0 , 1 , 0 , 0]
      ],

      linhaI: 1
      ,
      colunaI: 0
      ,
      linhaF: 4
      ,
      colunaF: 4
  
    } 
//---------------------------------------------
    //ponto inicial linha[4] coluna[4]
    //ponto final   linha[0] coluna[0]
    const easy_1 = {
      Full_matriz: 
      [ 
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0]
      ],

      linhaI: 4
      ,
      colunaI: 4
      ,
      linhaF: 0
      ,
      colunaF: 0
  
    } 
    
    
//---------------------------------------------
    //ponto inicial linha[2] coluna[2]
    //ponto final   linha[0] coluna[1]    
    const easy_2 = {
      Full_matriz: 
      [ 
        [ 1, 0, 1, 0, 1],
        [ 0, 0, 1, 1, 1],
        [ 0, 1, 0, 0, 0],
        [ 0, 1, 1, 1, 0],
        [ 0, 0, 0, 0, 0]
      ],

      linhaI: 2
      ,
      colunaI: 2
      ,
      linhaF: 0
      ,
      colunaF: 1
  
    } 
//---------------------------------------------
    //ponto inicial linha[0] coluna[1]
    //ponto final   linha[2] coluna[2]  
    const easy_3 = {
      Full_matriz: 
      [ 
        [ 0, 0, 0, 0, 0],
        [ 0, 1, 1, 1, 0],
        [ 0, 1, 0, 1, 0],
        [ 0, 1, 0, 0, 0],
        [ 0, 0, 1, 0, 0],
      ],

      linhaI: 0
      ,
      colunaI: 1
      ,
      linhaF: 2
      ,
      colunaF: 2
  
    } 
//---------------------------------------------
    //ponto inicial linha[3] coluna[3]
    //ponto final   linha[0] coluna[1]

    const easy_4 = {
      Full_matriz: 
      [ 
        [1, 0, 1, 0, 1],
        [0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1]
      ],

      linhaI: 3
      ,
      colunaI: 3
      ,
      linhaF: 0
      ,
      colunaF: 1
  
    } 
//---------------------------------------------
    matrizes.push(easy_0)
    matrizes.push(easy_1)
    matrizes.push(easy_2)
    matrizes.push(easy_3)
    matrizes.push(easy_4)

    let random_number = Math.floor(Math.random() * matrizes.length );
    
    //console.log(random_number)

    const matriz = matrizes[random_number]

    this.todos_blocos_parede = this.physics.add.staticGroup();

    for (let linha = 0; linha < matriz.Full_matriz.length; linha++) {
    // quando eu for transformar este pedaço de código em uma função na hora de mudar a cor 
    //é so eu trocar o objeto de colisão e mudar ordem que passarei os parametros (pareide, espaço) (espaço , pareide) chamando a mesma função
    // e para o jogador não ultrapassar o limete do labirinto eu pego a posição eixo(x,y) da primeira e ultima coluna , da primeira e ultima linha e arrodeio de blocos pareide
      for (let coluna = 0; coluna < matriz.Full_matriz[linha].length; coluna++) {
            
        console.log(` linha ${linha} coluna ${coluna}`)

        if(matriz.Full_matriz[linha][coluna] === 1){
                          //tamanho de cada bloco + metade da tela horizontalmente 
          this.todos_blocos_parede.create( coluna * 120 + (config.width/3) - 80 ,  linha * 120 ,"pareide").setOrigin(0,0).setScale(3).refreshBody(); 

        }else{

          this.chao = this.add.image(coluna * 120  + (config.width/3) - 80 ,   linha * 120, "chao") // se  colocar 80 vai ficar sem as linhas 
          this.chao.setOrigin(0,0)
          this.chao.setScale(3)

        }
    
      }
          
    }
    this.todos_blocos_parede.create((config.width/3) - 80 - 10           ,  0              , "borda_left").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( ( 5 * 120 ) + (config.width/3) - 80 ,  0              , "borda_right").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( (config.width/3) - 80               , (5 * 120 )      , "borda_bottom").setOrigin(0,0).refreshBody(); 

/*
    const linhaI = 1
    const colunaI = 0

    const linhaF = 4
    const colunaF = 4
*/
    this.saida = this.physics.add.sprite( matriz.colunaF * 120 + (config.width/3) - 79.5  , ( matriz.linhaF * 120 ) + 0.5,"saidaa").setOrigin(0,0).setScale(0.2).refreshBody();

    this.anims.create( {
    
      key: "saidaa_anims",
      
      frames: this.anims.generateFrameNumbers("saidaa"),
      
      frameRate: 4,
      
      repeat: -1
      
    })

    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add.sprite( matriz.colunaI * 120 + (config.width/3) - 79.5  ,  ( matriz.linhaI * 120 ) + 0.5,"jogador").setOrigin(0,0).setScale(0.2).refreshBody(); 
    this.jogadorr.setCollideWorldBounds(true);

    this.anims.create( {

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 15,
      repeat: -1
      
    })

    
    this.jogadorr.anims.play("jogador_anims", true);

    this.physics.add.collider(this.jogadorr, this.todos_blocos_parede);

    this.physics.add.overlap(this.jogadorr, this.saida, this.saiuDoLabirinto, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    //setTimeout( ()=>{this.scene.start("playGameMedium")}, 10000)
  }

  update(){
    if (this.cursors.left.isDown) {
      this.jogadorr.setVelocityX(-300);
   }else if (this.cursors.right.isDown) {
      this.jogadorr.setVelocityX(300);
   }else{
     this.jogadorr.setVelocityX(0)
   }
   
   if (this.cursors.up.isDown) {
     this.jogadorr.setVelocityY(-300);
   }else  if( this.cursors.down.isDown){
     this.jogadorr.setVelocityY(300)
   }else{
     this.jogadorr.setVelocityY(0)
   }

  }

  saiuDoLabirinto( jogadorr, saida ){

    this.jogadorr.disableBody(true, true);
    this.saida.disableBody(true, true);

    //this.saiu_do_labirinto = this.physics.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saiuDoLabirinto").setOrigin(0,0).setScale(0.2).refreshBody(); 
    this.saiu_do_labirinto = this.physics.add.sprite(saida.x , saida.y ,"saiuDoLabirinto").setOrigin(0,0).setScale(2).refreshBody(); 

    this.anims.create( {

      key: "saiuDoLabirinto_anims",
      frames: this.anims.generateFrameNumbers("saiuDoLabirinto"),
      frameRate: 15,
      repeat: -1
      
    })

    this.saiu_do_labirinto.anims.play("saiuDoLabirinto_anims", true);
    
  }
  
    
}


