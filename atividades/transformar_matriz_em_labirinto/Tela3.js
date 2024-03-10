class Tela3 extends Phaser.Scene{
  constructor(){
    super("playGameMedium")
  }

  create(){

    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")


    const matriz_medium = [
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
    
    setTimeout( ()=>{this.scene.start("playGameHard")}, 4000)
  
  }
    
}


