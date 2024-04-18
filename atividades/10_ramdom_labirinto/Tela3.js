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

//    Ponto de partida: Linha[0], Coluna[1]
//    Ponto final: Linha[6], Coluna[1]
    const medium_0 = [
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
    ]

//    # Ponto de partida: linha 2, coluna 8
//    # Ponto final: linha 9, coluna 1
    const medium_5 = [
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
    const medium_6 = [
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

    let matriz_medium = matrizes[0]

    this.todos_blocos_parede = this.physics.add.staticGroup();

    for (let linha = 0; linha < matriz_medium.length; linha++) {
    
      for (let coluna = 0; coluna < matriz_medium[linha].length; coluna++) {

        if(matriz_medium[linha][coluna] === 1){

          this.todos_blocos_parede.create( coluna * 60 + (config.width/4) + 35,  linha * 60 ,"pareide").setOrigin(0,0).setScale(1.5).refreshBody();

        }else{

          this.chao = this.add.image(coluna * 60  + (config.width/4) + 35 ,   linha * 60, "chao").setOrigin(0,0).setScale(1.5)

        }
      }
    }
    
    this.todos_blocos_parede.create((config.width/3) - 80 - 9            ,0           , "borda_left").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( ( 10 * 60 ) + (config.width/3) - 79 ,  0         , "borda_right").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( (config.width/3) - 80               , (10 * 60 ) , "borda_bottom").setOrigin(0,0).refreshBody();

    const linhaI = 0
    const colunaI = 1

    const linhaF = 6
    const colunaF = 0

    this.saida = this.physics.add.sprite( colunaF * 60 + (config.width/3) - 78.5  , ( linhaF * 60 ) + 0.5,"saidaa").setOrigin(0,0).setScale(0.1).refreshBody();

    this.anims.create( {

      key: "saidaa_anims",
      
      frames: this.anims.generateFrameNumbers("saidaa"),
      
      frameRate: 4,
      
      repeat: -1
      
    })
    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add.sprite(colunaI * 60 + (config.width/3) - 78.5  ,  (linhaI * 60 ) + 0.5,"jogador").setOrigin(0,0).setScale(0.1).refreshBody();
    this.jogadorr.setCollideWorldBounds(true);

    this.anims.create( {

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 25,
      repeat: -1
      
    })
    this.jogadorr.anims.play("jogador_anims", true);

    this.physics.add.collider(this.jogadorr, this.todos_blocos_parede);

    this.cursors = this.input.keyboard.createCursorKeys();

    setTimeout( ()=>{this.scene.start("31")}, 10000)
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

}


