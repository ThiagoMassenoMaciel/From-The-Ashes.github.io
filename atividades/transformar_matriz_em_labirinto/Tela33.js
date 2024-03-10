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


//    Ponto de partida: Linha 0, Coluna 1
//    Ponto final: Linha 9, Coluna 8
    let matrizes = []
    const medium_1 = 
    [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 1, 1, 1, 0, 0, 0]
    ]

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
//    Ponto de partida: Linha[2] , Coluna[2]
//     Ponto final: Linha [3], Coluna [0]
    const medium_2 = [
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
    ]
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

//    Ponto de partida: Linha [9], Coluna [7]
//    Ponto final: Linha [0], Coluna [1]
    const medium_4 =  [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 0, 1, 1]
    ]
    matrizes.push(medium_0)
    matrizes.push(medium_1)
    matrizes.push(medium_2)
    matrizes.push(medium_3)
    matrizes.push(medium_4)

    let matriz_medium = matrizes[3]

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
    
  }
    
}


