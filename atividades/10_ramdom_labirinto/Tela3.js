class Tela3 extends Phaser.Scene{
  constructor(){
    super("playGameMedium")
  }

  
  create(){

    this.add.text(5,5, "tela 3", {font: "50px Arial" , fill: 'white'})

    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)

    let matrizes = []

    const medium_0 = {

      Full_matriz: 
      [ 
        [0, 1, 0, 1, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 1, 1, 0, 0, 0]
      ],

      linhaI: 6
      ,
      colunaI: 1
      ,
      linhaF: 1
      ,
      colunaF: 8
  
    } 

    const medium_1 = {

      Full_matriz: 
      [ 
        [0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 1 , 1],
        [0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1],
        [0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1],
        [0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 0],
        [0 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 1],
        [1 , 1 , 0 , 0 , 1 , 0 , 0 , 0 , 0 , 1],
        [0 , 0 , 1 , 1 , 1 , 1 , 1 , 0 , 0 , 0],
        [1 , 0 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 0],
        [1 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 1 , 0],
        [1 , 0 , 0 , 0 , 1 , 1 , 1 , 0 , 0 , 0],
      ],

      linhaI: 0
      ,
      colunaI: 1
      ,
      linhaF: 6
      ,
      colunaF: 1
  
    }
    
  
    const medium_2 = {
      Full_matriz: 
      [ 
        [0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0]
      ],

      linhaI: 2
      ,
      colunaI: 2
      ,
      linhaF: 3
      ,
      colunaF: 0

    }


    const medium_3 = {
      Full_matriz: 
      [ 
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      
      linhaI: 5
      ,
      colunaI: 2
      ,
      linhaF: 6
      ,
      colunaF: 9
      
    }
      
    const medium_4 = {
      Full_matriz: 
      [ 
        [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [ 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [ 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [ 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [ 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [ 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [ 1, 0, 0, 0, 1, 1, 1, 0, 1, 1]
      ],
      
      linhaI: 9
      ,
      colunaI: 7
      ,
      linhaF: 0
      ,
      colunaF: 1
      
    }


//    # Ponto de partida: linha 2, coluna 8
//    # Ponto final: linha 9, coluna 1
    const medium_6 = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]


//    # Ponto de partida: linha 5, coluna 1
//    # Ponto final: linha 9, coluna 8
    const medium_7 = [
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    ]
    


    matrizes.push(medium_0)
    matrizes.push(medium_1)
    matrizes.push(medium_2)
    matrizes.push(medium_3)
    matrizes.push(medium_4)

    let random_number = Math.floor(Math.random() * matrizes.length );

    const matriz_medium = matrizes[random_number]

    this.todos_blocos_parede = this.physics.add.staticGroup();

    for (let linha = 0; linha < matriz_medium.Full_matriz.length; linha++) {
    
      for (let coluna = 0; coluna < matriz_medium.Full_matriz[linha].length; coluna++) {

        if(matriz_medium.Full_matriz[linha][coluna] === 1){

          this.todos_blocos_parede.create(coluna * 60 + (config.width/4) + 35,  linha * 60 ,"pareide").setOrigin(0,0).setScale(1.5).refreshBody();

        }else{

          this.chao = this.add.image(coluna * 60  + (config.width/4) + 35 ,   linha * 60, "chao").setOrigin(0,0).setScale(1.5)

        }
      }
    }
    
    this.todos_blocos_parede.create((config.width/3) - 80 - 9            ,0           , "borda_left").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( ( 10 * 60 ) + (config.width/3) - 79 ,  0         , "borda_right").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( (config.width/3) - 80               , (10 * 60 ) , "borda_bottom").setOrigin(0,0).refreshBody();


    this.saida = this.physics.add.sprite( matriz_medium.colunaF * 60 + (config.width/3) - 78.5  , ( matriz_medium.linhaF * 60 ) + 0.5,"saidaa").setOrigin(0,0).setScale(0.1).refreshBody();

    this.anims.create( {

      key: "saidaa_anims",
      
      frames: this.anims.generateFrameNumbers("saidaa"),
      
      frameRate: 4,
      
      repeat: -1
      
    })
    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add.sprite( matriz_medium.colunaI * 60 + (config.width/3) - 78.5  ,  ( matriz_medium.linhaI * 60 ) + 0.5,"jogador").setOrigin(0,0).setScale(0.1).refreshBody();
    this.jogadorr.setCollideWorldBounds(true);

    this.anims.create( {

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 25,
      repeat: -1
      
    })
    this.jogadorr.anims.play("jogador_anims", true);

    this.physics.add.collider(this.jogadorr, this.todos_blocos_parede);

    this.physics.add.overlap(this.jogadorr, this.saida, this.saiuDoLabirinto, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    setTimeout( ()=>{this.scene.start("playGameMedium")}, 10000)
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

    let positionX = saida.x 
    let positionY = saida.y

    console.log(positionX)
    console.log(positionY)

    this.jogadorr.disableBody(true, true);
    this.saida.disableBody(true, true);

    //this.saiu_do_labirinto = this.physics.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saiuDoLabirinto").setOrigin(0,0).setScale(0.2).refreshBody(); 
    this.saiu_do_labirinto = this.physics.add.sprite(positionX , positionY ,"saiuDoLabirinto").setOrigin(0,0).setScale(1).refreshBody(); 

    this.anims.create( {

      key: "saiuDoLabirinto_anims",
      frames: this.anims.generateFrameNumbers("saiuDoLabirinto"),
      frameRate: 15,
      repeat: -1
      
    })

    this.saiu_do_labirinto.anims.play("saiuDoLabirinto_anims", true);
    
  }

}


