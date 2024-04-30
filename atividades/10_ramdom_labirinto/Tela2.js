class Tela2 extends Phaser.Scene {

  constructor() {
    super("GameEasy")
  }



  create() {

    this.acabou = false

    this.add.text(0, 0, "jogo", { font: "60px Arial" })

    this.timer = this.add.image(config.width - 150, 100, "tempo")
    this.timer.setScale(0.6)

    this.button = this.add.image(config.width / 2, config.height - 80, "botao")
    this.button.setScale(0.6)

    console.log("----------------------")

    const niveis = new Array(3)

    console.log(niveis)
     
    const matrizes = []
    niveis[0] = matrizes
    //ponto inicial linha[1] coluna[0]
    //ponto final   linha[4] coluna[4]

  

    const easy_0 = {
      Full_matriz:
        [
          [1, 0, 1, 0, 1],
          [0, 1, 0, 0, 0],
          [0, 0, 0, 1, 0],
          [0, 1, 0, 0, 1],
          [1, 0, 1, 0, 0]
        ],

      linhaI: 1
      ,
      colunaI: 0
      ,
      linhaF: 4
      ,
      colunaF: 4

    }
    //---------------------------------------------
    //ponto inicial linha[4] coluna[4]
    //ponto final   linha[0] coluna[0]
    const easy_1 = {
      Full_matriz:
        [
          [0, 0, 0, 0, 0],
          [1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 1],
          [0, 0, 0, 0, 0]
        ],

      linhaI: 4
      ,
      colunaI: 4
      ,
      linhaF: 0
      ,
      colunaF: 0

    }


    //---------------------------------------------
    //ponto inicial linha[2] coluna[2]
    //ponto final   linha[0] coluna[1]    
    const easy_2 = {
      Full_matriz:
        [
          [1, 0, 1, 0, 1],
          [0, 0, 1, 1, 1],
          [0, 1, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0]
        ],

      linhaI: 2
      ,
      colunaI: 2
      ,
      linhaF: 0
      ,
      colunaF: 1

    }
    //---------------------------------------------
    //ponto inicial linha[0] coluna[1]
    //ponto final   linha[2] coluna[2]  
    const easy_3 = {
      Full_matriz:
        [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 1, 0, 1, 0],
          [0, 1, 0, 0, 0],
          [0, 0, 1, 0, 0],
        ],

      linhaI: 0
      ,
      colunaI: 1
      ,
      linhaF: 2
      ,
      colunaF: 2

    }
    //---------------------------------------------
    //ponto inicial linha[3] coluna[3]
    //ponto final   linha[0] coluna[1]

    const easy_4 = {
      Full_matriz:
        [
          [1, 0, 1, 0, 1],
          [0, 0, 0, 1, 0],
          [1, 0, 1, 0, 1],
          [0, 0, 0, 0, 0],
          [1, 0, 1, 0, 1]
        ],

      linhaI: 3
      ,
      colunaI: 3
      ,
      linhaF: 0
      ,
      colunaF: 1
      //quando for esolhido o laboritno eu coloco true em cada um do objeto escolhido LEATORIAMENTE 
    }
    //---------------------------------------------
    niveis[0].push(easy_0)
    niveis[0].push(easy_1)
    niveis[0].push(easy_2)
    niveis[0].push(easy_3)
    niveis[0].push(easy_4)


    console.log("até aqui ok ?")

    const medium_0 = {

      Full_matriz: 
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
      ],

      linhaI: 6
      ,
      colunaI: 1
      ,
      linhaF: 1
      ,
      colunaF: 8
  
    } 

    const medium_1 = {

      Full_matriz: 
      [ 
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
      ],

      linhaI: 0
      ,
      colunaI: 1
      ,
      linhaF: 6
      ,
      colunaF: 1
  
    }
    
  
    const medium_2 = {
      Full_matriz: 
      [ 
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
      ],

      linhaI: 2
      ,
      colunaI: 2
      ,
      linhaF: 3
      ,
      colunaF: 0

    }


    const medium_3 = {
      Full_matriz: 
      [ 
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
      ],
      
      linhaI: 5
      ,
      colunaI: 2
      ,
      linhaF: 6
      ,
      colunaF: 9
      
    }
      
    const medium_4 = {
      Full_matriz: 
      [ 
        [ 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [ 0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [ 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [ 0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        [ 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [ 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [ 1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [ 1, 0, 0, 0, 1, 1, 1, 0, 1, 1]
      ],
      
      linhaI: 9
      ,
      colunaI: 7
      ,
      linhaF: 0
      ,
      colunaF: 1
      
    }

    console.log("até aqui ok ?")
    niveis[1].push(medium_0)
    niveis[1].push(medium_1)
    niveis[1].push(medium_2)
    niveis[1].push(medium_3)
    niveis[1].push(medium_4)

    const hard_0 =  {
      Full_matriz: 
      [ 
        [0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
        [0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 0 , 1 ],
        [0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 0 ],
        [1 , 1 , 0 , 1 , 1 , 0 , 1 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 1 , 1 ], 
        [0 , 1 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 0 ],
        [0 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 0 , 1 ],
        [0 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 ],
        [0 , 1 , 1 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 0 , 0 ],
        [0 , 0 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 ],
        [1 , 1 , 1 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0 , 1 ],
        [0 , 0 , 0 , 0 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 1 ],
        [0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 0 , 1 ],
        [0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 0 ],
        [0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 1 , 0 ],
        [0 , 0 , 0 , 1 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 0 ],
        [1 , 1 , 0 , 1 , 0 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 ],
        [0 , 0 , 0 , 1 , 0 , 0 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 1 , 0 , 1 , 0 , 1 ],
        [0 , 1 , 1 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 1 , 0 , 1 , 0 , 1 ],
        [0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 , 0 , 1 , 0 , 0 ],
        [0 , 0 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 0 , 0 , 1 , 1 , 1 , 0 , 1 , 1 , 1 , 0 , 0 ]
      ],
      
      linhaI: 0
      ,
      colunaI: 0
      ,
      linhaF: 19
      ,
      colunaF: 0
      
    }

      
    const hard_1 = {
      Full_matriz: 
      [ 
        [ 0, 0,, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [ 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [ 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [ 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [ 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [ 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        [ 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [ 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [ 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [ 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [ 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        [ 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
      ],

      linhaI: 17
      ,
      colunaI: 18
      ,
      linhaF: 0
      ,
      colunaF: 0
      
    }

    const hard_2 = {
      Full_matriz: 
      [ 
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1]
      ],
          // Ponto inicial : linha[19] coluna[18]
    // Ponto final : linha[0] coluna[0]
      linhaI: 19
      ,
      colunaI: 18
      ,
      linhaF: 0
      ,
      colunaF: 0
      
    }



    const hard_3 = {
      Full_matriz: 
      [ 
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1], 
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
      [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
    // Ponto inicial : linha[19] coluna[10]
    // Ponto final : linha[0] coluna[19]
      linhaI: 19
      ,
      colunaI: 10
      ,
      linhaF: 0
      ,
      colunaF: 19
      
    }


    const hard_4 = {
      Full_matriz: 
      [ 

      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1]
      ],
    // Ponto inicial : linha[19] coluna[1]
    // Ponto finall : linha[0] coluna[19]      
      linhaI: 19
      ,
      colunaI: 1
      ,
      linhaF: 0
      ,
      colunaF: 19
      
    }

    niveis[2].push(hard_0)
    niveis[2].push(hard_1)
    niveis[2].push(hard_2)
    niveis[2].push(hard_3)
    niveis[2].push(hard_4)


    console.log(`nivel facil${niveis[0]} `)
    console.log(`nivel medio${niveis[1]} `)
    console.log(`nivel dificil${niveis[2]} `)

    let random_nivel = Math.floor(Math.random() * arrayNiveis.length); //  random
    let nivel_escolhido = arrayNiveis[random_nivel] 
    let random_labirinto

    let elemento_escolhido
//    dependendo de qual nivel foi escolhido eu tenho que acessar o elemento de diferentes arrays
    if(nivel_escolhido === 0){
      // se o nivel escolhido foi Easy eu tenho que escolher um elemento do arrayEasy que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayEasy.length); // 4
      elemento_escolhido = arrayEasy[random_labirinto]

      arrayEasy.splice(random_labirinto, 1)
      console.log(`apagado ->  ${arrayEasy[random_labirinto]}`)

      console.log(`arrayEasy ${arrayEasy}`)

    }else if(nivel_escolhido === 1){
      // se o nivel escolhido foi Medium eu tenho que escolher um elemento do arrayMedium que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayMedium.length); //3
      elemento_escolhido = arrayMedium[random_labirinto]

      arrayEasy.splice(random_labirinto, 1)
      console.log(`apagado ->  ${arrayMedium[random_labirinto]}`)
      
      console.log(`arrayMedium ${arrayEasy}`)

    }else{
      // se o nivel escolhido foi Hard eu tenho que escolher um elemento do arrayHard que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayHard.length); // 2
      elemento_escolhido = arrayHard[random_labirinto]

      arrayEasy.splice(random_labirinto, 1)
      console.log(`apagado ->  ${arrayHard[random_labirinto]}`)
      
      console.log(`arrayHard ${arrayHard}`)
    }

    

    let indice_escolhido = elemento_escolhido

    const matriz = niveis[nivel_escolhido][indice_escolhido]


    this.todos_blocos_parede = this.physics.add.staticGroup();

    for (let linha = 0; linha < matriz.Full_matriz.length; linha++) {
      // quando eu for transformar este pedaço de código em uma função na hora de mudar a cor 
      //é so eu trocar o objeto de colisão e mudar ordem que passarei os parametros (pareide, espaço) (espaço , pareide) chamando a mesma função
      // e para o jogador não ultrapassar o limete do labirinto eu pego a posição eixo(x,y) da primeira e ultima coluna , da primeira e ultima linha e arrodeio de blocos pareide
      for (let coluna = 0; coluna < matriz.Full_matriz[linha].length; coluna++) {

        //console.log(` linha ${linha} coluna ${coluna}`)

        if (matriz.Full_matriz[linha][coluna] === 1) {
          //tamanho de cada bloco + metade da tela horizontalmente 
          this.todos_blocos_parede.create(coluna * 120 + (config.width / 3) - 80, linha * 120, "pareide").setOrigin(0, 0).setScale(3).refreshBody();

        } else {

          this.chao = this.add.image(coluna * 120 + (config.width / 3) - 80, linha * 120, "chao") // se  colocar 80 vai ficar sem as linhas 
          this.chao.setOrigin(0, 0)
          this.chao.setScale(3)

        }

      }

    }
    this.todos_blocos_parede.create((config.width / 3) - 80 - 10, 0, "borda_left").setOrigin(0, 0).refreshBody();
    this.todos_blocos_parede.create((5 * 120) + (config.width / 3) - 80, 0, "borda_right").setOrigin(0, 0).refreshBody();
    this.todos_blocos_parede.create((config.width / 3) - 80, (5 * 120), "borda_bottom").setOrigin(0, 0).refreshBody();

    /*
        const linhaI = 1
        const colunaI = 0
    
        const linhaF = 4
        const colunaF = 4
    */
    this.saida = this.physics.add.sprite(matriz.colunaF * 120 + (config.width / 3) - 79.5, (matriz.linhaF * 120) + 0.5, "saidaa").setOrigin(0, 0).setScale(0.2).refreshBody();

    this.anims.create({

      key: "saidaa_anims",

      frames: this.anims.generateFrameNumbers("saidaa"),

      frameRate: 4,

      repeat: -1

    })

    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add.sprite(matriz.colunaI * 120 + (config.width / 3) - 79.5, (matriz.linhaI * 120) + 0.5, "jogador").setOrigin(0, 0).setScale(0.2).refreshBody();
    this.jogadorr.setCollideWorldBounds(true);

    this.anims.create({

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 15,
      repeat: -1

    })


    this.jogadorr.anims.play("jogador_anims", true);

    this.physics.add.collider(this.jogadorr, this.todos_blocos_parede);

    this.physics.add.overlap(this.jogadorr, this.saida, this.saiuDoLabirinto, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    setTimeout(() => { this.scene.start("GameEasy") }, 5000)
  }

  update() {

    if (!this.acabou) {


      if (this.cursors.left.isDown) {
        this.jogadorr.setVelocityX(-700);
      } else if (this.cursors.right.isDown) {
        this.jogadorr.setVelocityX(700);
      } else {
        this.jogadorr.setVelocityX(0)
      }

      if (this.cursors.up.isDown) {
        this.jogadorr.setVelocityY(-700);
      } else if (this.cursors.down.isDown) {
        this.jogadorr.setVelocityY(700)
      } else {
        this.jogadorr.setVelocityY(0)
      }

      if (arrayEasy.length === 0) {
        arrayEasy = [0, 1, 2, 3, 4]
      }


    }


  }

  saiuDoLabirinto(jogadorr, saida) {

    this.jogadorr.disableBody(true, true);
    this.saida.disableBody(true, true);

    //this.saiu_do_labirinto = this.physics.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saiuDoLabirinto").setOrigin(0,0).setScale(0.2).refreshBody(); 
    this.saiu_do_labirinto = this.physics.add.sprite(saida.x, saida.y, "saiuDoLabirinto").setOrigin(0, 0).setScale(2).refreshBody();

    this.anims.create({

      key: "saiuDoLabirinto_anims",
      frames: this.anims.generateFrameNumbers("saiuDoLabirinto"),
      frameRate: 15,
      repeat: -1

    })

    this.saiu_do_labirinto.anims.play("saiuDoLabirinto_anims", true);
    // executar a funcao que mostra que a pessoa passou de fase 
    this.acabou = true
  }


}


