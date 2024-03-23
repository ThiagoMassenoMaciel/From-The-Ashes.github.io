class Tela extends Phaser.Scene{

  constructor(){
    super("Tela")
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
    const easy_0 = [
      [1 , 0 , 1 , 0 , 1],
      [0 , 1 , 0 , 0 , 0],
      [0 , 0 , 0 , 1 , 0],
      [0 , 1 , 0 , 0 , 1],
      [1 , 0 , 1 , 0 , 0]
    ]
    
    matrizes.push(easy_0)

    const matriz = matrizes[0]

    var todos_blocos_parede = this.physics.add.staticGroup();


    for (let linha = 0; linha < matriz.length; linha++) {

      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            
        console.log(` linha ${linha} coluna ${coluna}`)

        if(matriz[linha][coluna] === 1){

          todos_blocos_parede.create( coluna * 120 + (config.width/3) - 80  , linha * 120 ,"pareide" ).setOrigin(0,0).setScale(3).refreshBody();
          //platforms.create(400, 550 , 'ground').setScale(2).refreshBody();

        }else{
          todos_blocos_parede.create( coluna * 120 + (config.width/3) - 80  , linha * 120 ,"chao").setOrigin(0,0).setScale(3).refreshBody();

        }
    
      }
          
    }

    todos_blocos_parede.create((config.width/3) - 80 - 10           ,  0              , "borda_left").setOrigin(0,0).refreshBody();
    todos_blocos_parede.create( ( 5 * 120 ) + (config.width/3) - 80 ,  0              , "borda_right").setOrigin(0,0).refreshBody();
    todos_blocos_parede.create( (config.width/3) - 80               , (5 * 120 ) + 10 , "borda_bottom").setOrigin(0,0).setAngle(-90).refreshBody(); // 
  
    const linhaI = 1
    const colunaI = 0

    const linhaF = 4
    const colunaF = 4

    this.saida = this.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saidaa")
    this.saida.setOrigin(0,0)
    this.saida.setScale(0.3)

    //animando o sprite saida
    this.anims.create( {
    
      key: "saidaa_anims",
      
      frames: this.anims.generateFrameNumbers("saidaa"),
      
      frameRate: 4,
      
      repeat: -1
      
    })
      //executando animação
    this.saida.play("saidaa_anims")

    this.jogador = this.add.sprite(colunaI * 120 + (config.width/3) - 79.5  ,  (linhaI * 120 ) + 0.5,"jogador")
    this.jogador.setOrigin(0,0)
    this.jogador.setScale(0.3)

    console.log("até aqui funcionou ?")
    //animando o sprite teste = jogador
    this.anims.create( {

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 15,
      repeat: -1
      
    })

    //executando animação
    this.jogador.play("jogador_anims")

    //setTimeout( ()=>{this.scene.start("21")}, 5000)
  }
    
}


