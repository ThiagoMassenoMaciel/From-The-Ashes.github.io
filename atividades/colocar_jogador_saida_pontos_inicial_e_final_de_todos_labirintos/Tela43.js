class Tela43 extends Phaser.Scene{
  constructor(){
    super("43")
  }

  create(){ //5h 24' até 6h25

    this.add.text(5,5, "tela hard_3", {font: "50px Arial" , fill: 'white'})

    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)


    const matrizes = []
    
    // Ponto inicial : linha[19] coluna[10]
    // Ponto final : linha[0] coluna[11]
    const hard_3 = [
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1], 
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
      [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ]

    matrizes.push(hard_3)

    const matriz_hard = matrizes[0]

    for (let linha = 0; linha < matriz_hard.length; linha++) {
    
      for (let coluna = 0; coluna < matriz_hard[linha].length; coluna++) {
            
        console.log(` linha ${linha} coluna ${coluna}`)

        if(matriz_hard[linha][coluna] === 1){
                          //tamanho de cada bloco + metade da tela horizontalmente 
          this.chao = this.add.image( coluna * 30 + (config.width/3) - 80 ,  linha * 30 ,"pareide")
          this.chao.setOrigin(0,0)
          this.chao.setScale(0.75)  // 3 vezes o tamanho da imagem =  3 x 40px = 120px

        }else{

          this.chao = this.add.image(coluna * 30  + (config.width/3) - 80 ,   linha * 30, "chao") // se  colocar 80 vai ficar sem as linhas 
          this.chao.setOrigin(0,0)
          this.chao.setScale(0.75)

        }
    
      }
      console.log("----------------")
          
    }

    setTimeout( ()=>{ this.scene.start("44")}, 5000)

    // colocar a borda -10px no exixo X igual é colocado a posição da primeira coluna da matriz
    // tamanho da largura do canvas / 3 , volto para esquerda 80 pixel , e volto para esquerda o tamanho da largura da borda para ela ficar delimitando fora do labirinto
    this.borda_left = this.add.image((config.width/3) - 80 - 10  ,0, "borda_left")
    this.borda_left.setOrigin(0,0)
    // colocar a borda -10px no exixo X igual é colocado a posição da ultima coluna da matriz
    this.borda_right = this.add.image( ( 20 * 30 ) + (config.width/3) - 80 ,  0  , "borda_right")
    this.borda_right.setOrigin(0,0)
    // o pixel que devo colocar para largura é igual o colocado na largura dos blocos que estão na primeira coluna
    // o pixel para altura é igual o tamanho vertical do labirinto + tamanho da borda , considero o tamanho da borta para não ficar por cima do bloco dentro do labirinto
    this.borda_bottom = this.add.image( (config.width/3) - 80  , (20 * 30 ) + 10 , "borda_bottom")
    this.borda_bottom.setOrigin(0,0)
    this.borda_bottom.rotation = - Math.PI / 2; // aqui é para deitar o pixel


    
    
    // ponto inicial e final
    // colunaI = coluna do ponto incial
    // linhaI  = linha do ponto inicial
    const linhaI = 19
    const colunaI = 19
    // ponto  final
    // colunaF = coluna do ponto incial
    // linhaF  = linha do ponto inicial
    const linhaF = 0
    const colunaF = 11

    this.saida = this.add.sprite( colunaF * 30 + (config.width/3) - 80  , ( linhaF * 30 ) ,"saidaa")
    this.saida.setOrigin(0,0)
    this.saida.setScale(0.075)

    //animando o sprite saida
    this.anims.create( {

      key: "saidaa_anims",
      
      frames: this.anims.generateFrameNumbers("saidaa"),
      
      frameRate: 4,
      
      repeat: -1
      
    })
      //executando animação
    this.saida.play("saidaa_anims")

    this.jogador = this.add.sprite(colunaI * 30 + (config.width/3) - 80  ,  (linhaI * 30 ) ,"jogador")
    this.jogador.setOrigin(0,0)
    this.jogador.setScale(0.075) // 29,85

    
    console.log("até aqui funcionou ?")
    //animando o sprite teste = jogador
    this.anims.create( {

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 25,
      repeat: -1
      
    })

      //executando animação
    this.jogador.play("jogador_anims")
  }
    
}


