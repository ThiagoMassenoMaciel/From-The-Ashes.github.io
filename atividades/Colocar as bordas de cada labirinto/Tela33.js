class Tela33 extends Phaser.Scene{
  constructor(){
    super("33")
  }

  create(){

    this.add.text(5,5, "tela 33", {font: "50px Arial" , fill: 'white'})

    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)

    let matrizes = []
   
//    Ponto de partida: Linha [5], Coluna [2]
//    Ponto final: Linha [6], Coluna [9]
    const medium_3 = [
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
    ]


    matrizes.push(medium_3)

    let matriz_medium = matrizes[0]

    for (let linha = 0; linha < matriz_medium.length; linha++) {
    
      for (let coluna = 0; coluna < matriz_medium[linha].length; coluna++) {
            
        console.log(` linha ${linha} coluna ${coluna}`)

        if(matriz_medium[linha][coluna] === 1){
                          //tamanho de cada bloco + metade da tela horizontalmente 
          this.chao = this.add.image( coluna * 60 + (config.width/4) + 35,  linha * 60 ,"pareide")
          this.chao.setOrigin(0,0)
          this.chao.setScale(1.5)  // 3 vezes o tamanho da imagem =  3 x 40px = 120px

        }else{

          this.chao = this.add.image(coluna * 60  + (config.width/4) + 35 ,   linha * 60, "chao") // se  colocar 80 vai ficar sem as linhas 
          this.chao.setOrigin(0,0)
          this.chao.setScale(1.5)

        }
    
      }
          
    }

    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n===========tela 33=========")
    setTimeout( ()=>{this.scene.start("34")}, 2000)
    
    // colocar a borda -10px no exixo X igual é colocado a posição da primeira coluna da matriz
    // tamanho da largura do canvas / 3 , volto para esquerda 80 pixel , e volto para esquerda o tamanho da largura da borda para ela ficar delimitando fora do labirinto
    this.borda_left = this.add.image((config.width/3) - 80 - 9   ,0, "borda_left")
    this.borda_left.setOrigin(0,0)
    // colocar a borda -10px no exixo X igual é colocado a posição da ultima coluna da matriz
    this.borda_right = this.add.image( ( 10 * 60 ) + (config.width/3) - 80 ,  0  , "borda_right")
    this.borda_right.setOrigin(0,0)
    // o pixel que devo colocar para largura é igual o colocado na largura dos blocos que estão na primeira coluna
    // o pixel para altura é igual o tamanho vertical do labirinto + tamanho da borda , considero o tamanho da borta para não ficar por cima do bloco dentro do labirinto
    this.borda_bottom = this.add.image( (config.width/3) - 80  , (10 * 60 ) + 10, "borda_bottom")
    this.borda_bottom.setOrigin(0,0)
    this.borda_bottom.rotation = - Math.PI / 2; // aqui é para deitar o pixel
    
  }
    
}


