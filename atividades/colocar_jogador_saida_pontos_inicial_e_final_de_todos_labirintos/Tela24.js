class Tela24 extends Phaser.Scene{
  constructor(){
    super("24")
  }

  create(){

    this.add.text(0,0, "jogo", { font: "60px Arial"})
    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)

    const matrizes = []

    //ponto inicial linha[3] coluna[4]
    //ponto final   linha[0] coluna[1]

    const easy_4 = [    
      [1, 0, 1, 0, 1],
      [0, 0, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1]
    ]

    matrizes.push(easy_4)

    const matriz = matrizes[0]
  
    for (let linha = 0; linha < matriz.length; linha++) {
    // quando eu for transformar este pedaço de código em uma função na hora de mudar a cor 
    //é so eu trocar o objeto de colisão e mudar ordem que passarei os parametros (pareide, espaço) (espaço , pareide) chamando a mesma função
    // e para o jogador não ultrapassar o limete do labirinto eu pego a posição eixo(x,y) da primeira e ultima coluna , da primeira e ultima linha e arrodeio de blocos pareide
      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            
        console.log(` linha ${linha} coluna ${coluna}`)

        if(matriz[linha][coluna] === 1){
                          //tamanho de cada bloco + metade da tela horizontalmente 
          this.chao = this.add.image( coluna * 120 + (config.width/3) - 80 ,  linha * 120 ,"pareide")
          this.chao.setOrigin(0,0)
          this.chao.setScale(3)  // 3 vezes o tamanho da imagem =  3 x 40px = 120px

        }else{

          this.chao = this.add.image(coluna * 120  + (config.width/3) - 80 ,   linha * 120, "chao") // se  colocar 80 vai ficar sem as linhas 
          this.chao.setOrigin(0,0)
          this.chao.setScale(3)

        }
    
      }
          
    }
  
  
    setTimeout( ()=>{this.scene.start("playGameMedium")}, 2000)

        // colocar a borda -10px no exixo X igual é colocado a posição da primeira coluna da matriz
    // tamanho da largura do canvas / 3 , volto para esquerda 80 pixel , e volto para esquerda o tamanho da largura da borda para ela ficar delimitando fora do labirinto
    this.borda_left = this.add.image((config.width/3) - 80 - 10   ,0, "borda_left")
    this.borda_left.setOrigin(0,0)
    // colocar a borda -10px no exixo X igual é colocado a posição da ultima coluna da matriz
    this.borda_right = this.add.image( ( 5 * 120 ) + (config.width/3) - 80 ,  0  , "borda_right")
    this.borda_right.setOrigin(0,0)
    // o pixel que devo colocar para largura é igual o colocado na largura dos blocos que estão na primeira coluna
    // o pixel para altura é igual o tamanho vertical do labirinto + tamanho da borda , considero o tamanho da borta para não ficar por cima do bloco dentro do labirinto
    this.borda_bottom = this.add.image( (config.width/3) - 80  , (5 * 120 ) + 10, "borda_bottom")
    this.borda_bottom.setOrigin(0,0)
    this.borda_bottom.rotation = - Math.PI / 2; // aqui é para deitar o pixel
  }
    
}


