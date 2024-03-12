class Tela31 extends Phaser.Scene{
  constructor(){
    super("31")
  }

  create(){
    this.add.text(5,5, "tela 31", {font: "50px Arial" , fill: 'white'})

    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)


//    Ponto de partida: Linha [6], Coluna [1]
//    Ponto final: Linha [1], Coluna [8]
    let matrizes = []
    const medium_1 = 
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
    ]

    matrizes.push(medium_1)

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
      console.log("----------------")
          
    }
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n===========tela 31=========")
    setTimeout( ()=>{this.scene.start("32")}, 2000)

  
  }
    
}
