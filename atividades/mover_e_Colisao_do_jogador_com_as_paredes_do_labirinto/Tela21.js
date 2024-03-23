class Tela21 extends Phaser.Scene{
  constructor(){
    super("21")
  }

  create(){

    this.add.text(0,0, "jogo", { font: "60px Arial"})
    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)

    const matrizes = []

    //-------------------
    //ponto inicial linha[4] coluna[4]
    //ponto final   linha[0] coluna[0]
    const easy_1 = [ 
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0]
    ]

    matrizes.push(easy_1)

    const matriz = matrizes[0]

    this.todos_blocos_parede = this.physics.add.staticGroup();
  
    for (let linha = 0; linha < matriz.length; linha++) {

      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            
        console.log(` linha ${linha} coluna ${coluna}`)

        if(matriz[linha][coluna] === 1){

          this.todos_blocos_parede.create( coluna * 120 + (config.width/3) - 80 ,  linha * 120 ,"pareide").setOrigin(0,0).setScale(3).refreshBody();  
        }else{

          this.chao = this.add.image(coluna * 120  + (config.width/3) - 80 ,   linha * 120, "chao") 
          this.chao.setOrigin(0,0)
          this.chao.setScale(3)

        }
    
      }
          
    }

    this.todos_blocos_parede.create((config.width/3) - 80 - 10           ,  0              , "borda_left").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( ( 5 * 120 ) + (config.width/3) - 80 ,  0              , "borda_right").setOrigin(0,0).refreshBody();
    this.todos_blocos_parede.create( (config.width/3) - 80               , (5 * 120 )      , "borda_bottom").setOrigin(0,0).refreshBody(); 

    const linhaI = 4
    const colunaI = 4

    const linhaF = 0
    const colunaF = 0

    this.saida = this.physics.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saidaa").setOrigin(0,0).setScale(0.3)

    //animando o sprite saida
    this.anims.create( {

      key: "saidaa_anims",
      frames: this.anims.generateFrameNumbers("saidaa"),
      frameRate: 4,
      repeat: -1
      
    })
    //executando animação
    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add.sprite(colunaI * 120 + (config.width/3) - 79.5  ,  (linhaI * 120 ) + 0.5,"jogador").setOrigin(0,0).setScale(0.3);
    this.jogadorr.setCollideWorldBounds(true);

    console.log("até aqui funcionou ?")
    //animando o sprite teste = jogador

    this.anims.create( {

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 15,
      repeat: -1
      
    })
      //executando animação
    this.jogadorr.anims.play("jogador_anims", true);

    this.physics.add.collider(this.jogadorr, this.todos_blocos_parede);

    this.cursors = this.input.keyboard.createCursorKeys();

    //setTimeout( ()=>{this.scene.start("22")}, 5000)
  }
    
  update(){
    if (this.cursors.left.isDown) {
      this.jogadorr.setVelocityX(-700);
   }else if (this.cursors.right.isDown) {
      this.jogadorr.setVelocityX(700);
   }else{
     this.jogadorr.setVelocityX(0)
   }
   
   if (this.cursors.up.isDown) {
     this.jogadorr.setVelocityY(-700);
   }else  if( this.cursors.down.isDown){
     this.jogadorr.setVelocityY(700)
   }else{
     this.jogadorr.setVelocityY(0)
   }

  }
}


