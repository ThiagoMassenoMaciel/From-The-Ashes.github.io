class Tela23 extends Phaser.Scene{
  constructor(){
    super("23")
  }

  create(){

    this.add.text(0,0, "jogo", { font: "60px Arial"})
    this.timer = this.add.image(config.width - 150 ,  100 ,"tempo")
    this.timer.setScale(0.6)
    this.button = this.add.image(config.width/2 , config.height - 80 ,"botao")
    this.button.setScale(0.6)

    const matrizes = []


    //ponto inicial linha[0] coluna[1]
    //ponto final   linha[2] coluna[2]   

    const easy_3 = [
      [ 0, 0, 0, 0, 0],
      [ 0, 1, 1, 1, 0],
      [ 0, 1, 0, 1, 0],
      [ 0, 1, 0, 0, 0],
      [ 0, 0, 1, 0, 0],
    ]

    matrizes.push(easy_3)

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
  
  
    setTimeout( ()=>{this.scene.start("24")}, 2000)
  }
    
}


