class Tela41 extends Phaser.Scene{
  constructor(){
    super("41")
  }

  create(){ 

    this.add.text(5,5, "tela hard_1", {font: "50px Arial" , fill: 'white'})

    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)

    const matrizes = []
    // Ponto inicial : linha[17] coluna[18]
   // Ponto final : linha[0] coluna[0]
    const hard_1 = [
      [ 0, 0,, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [ 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
      [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [ 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [ 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [ 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
      [ 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [ 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [ 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [ 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [ 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [ 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ]

    matrizes.push(hard_1)

    const matriz_hard = matrizes[0]

    this.todos_blocos_parede = this.physics.add.staticGroup();

    for (let linha = 0; linha < matriz_hard.length; linha++) {
    
      for (let coluna = 0; coluna < matriz_hard[linha].length; coluna++) {

        if(matriz_hard[linha][coluna] === 1){
 
          this.todos_blocos_parede.create( coluna * 30 + (config.width/3) - 80 ,  linha * 30 ,"pareide").setOrigin(0,0).setScale(0.75).refreshBody();

        }else{

          this.chao = this.add.image(coluna * 30  + (config.width/3) - 80 ,   linha * 30, "chao").setOrigin(0,0).setScale(0.75)

        }
    
      }
          
    }

    this.todos_blocos_parede.create((config.width/3) - 80 - 10           ,  0         , "borda_left").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( ( 20 * 30 ) + (config.width/3) - 80 ,  0         , "borda_right").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( (config.width/3) - 80               , (20 * 30 ) , "borda_bottom").setOrigin(0,0).refreshBody();

    const linhaI = 17
    const colunaI = 18

    const linhaF = 0
    const colunaF = 0

    this.saida = this.physics.add.sprite( colunaF * 30 + (config.width/3) - 80  , ( linhaF * 30 ) ,"saidaa").setOrigin(0,0).setScale(0.050).refreshBody();

    this.anims.create( {

      key: "saidaa_anims",
      
      frames: this.anims.generateFrameNumbers("saidaa"),
      
      frameRate: 4,
      
      repeat: -1
      
    })
    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add.sprite(colunaI * 30 + (config.width/3) - 80  ,  (linhaI * 30 ) ,"jogador").setOrigin(0,0).setScale(0.050).refreshBody();
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

    setTimeout( ()=>{ this.scene.start("42")}, 20000)
  }

  update(){
    if (this.cursors.left.isDown) {
        this.jogadorr.setVelocityX(-150);

    }else if (this.cursors.right.isDown) {
        this.jogadorr.setVelocityX(150);

    }else{
      this.jogadorr.setVelocityX(0)
    }
    
    if (this.cursors.up.isDown) {
      this.jogadorr.setVelocityY(-150);

    }else  if( this.cursors.down.isDown){
      this.jogadorr.setVelocityY(150)

    }else{
      this.jogadorr.setVelocityY(0)

    }
  }
    
}


