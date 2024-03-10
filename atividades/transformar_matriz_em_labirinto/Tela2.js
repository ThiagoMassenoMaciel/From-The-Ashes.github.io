class Tela2 extends Phaser.Scene{
  constructor(){
    super("playGameEasy")
  }

  create(){

    this.add.text(0,0, "jogo", { font: "60px Arial"})
    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")

    const matriz = [
      [0 , 1 , 1 , 0 , 1],
      [0 , 1 , 0 , 0 , 0],
      [0 , 0 , 0 , 1 , 0],
      [0 , 1 , 0 , 0 , 1],
      [0 , 1 , 1 , 0 , 0]
    ]
  
    for (let linha = 0; linha < matriz.length; linha++) {
    
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
      console.log("----------------")
          
    }
  
  
    setTimeout( ()=>{this.scene.start("playGameMedium")}, 4000)
  }
    
}


