class Tela2 extends Phaser.Scene {

  constructor() {
    super("GameEasy")
  }
  
  create() {

    this.acabou = false

    this.scale_passado_labirinto = 0

    this.add.text(0, 0, "jogo", { font: "60px Arial" })

    this.timer = this.add.image(config.width - 150, 100, "tempo")
    this.timer.setScale(0.6)

    this.button = this.add.image(config.width / 2, config.height - 80, "botao")
    this.button.setScale(0.6)

    console.log("----------------------")

    const niveis = new Array(3)

    console.log(niveis)
     
    const matrizes = []

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
      ,
      largura_bloco : 120 + (config.width / 3) - 80
      ,
      altura_bloco  :  120
      ,
      escala_bloco: 3
      ,
      posicao_saida_w : 4 * 120 + (config.width / 3) - 79.5
      ,
      posicao_saida_h:  (4 * 120) + 0.5

      ,
      scale_saida_e_jogador: 0.2
      ,
      posicao_jogadorr_w : 0 * 120 + (config.width / 3) - 79.5
      ,
      posicao_jogadorr_h: ( 1 * 120) + 0.5

      ,
      scale_passado_labirinto: 2

    }

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
      ,
      largura_bloco : 120 + (config.width / 3) - 80
      ,
      altura_bloco  :  120
      ,
      escala_bloco: 3
      ,
      posicao_saida_w : 0 * 120 + (config.width / 3) - 79.5
      ,
      posicao_saida_h: ( 0 * 120) + 0.5

      ,
      scale_saida_e_jogador: 0.2
      ,
      posicao_jogadorr_w : 4 * 120 + (config.width / 3) - 79.5
      ,
      posicao_jogadorr_h: ( 4 * 120) + 0.5

      ,
      scale_passado_labirinto: 2
    }

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
      ,
      largura_bloco : 120 + (config.width / 3) - 80
      ,
      altura_bloco  :  120
      ,
      escala_bloco: 3
      ,
      posicao_saida_w : 1 * 120 + (config.width / 3) - 79.5
      ,
      posicao_saida_h: ( 0 * 120) + 0.5  

      ,
      scale_saida_e_jogador: 0.2
      ,
      posicao_jogadorr_w : 2 * 120 + (config.width / 3) - 79.5
      ,
      posicao_jogadorr_h: ( 2 * 120) + 0.5

      ,
      scale_passado_labirinto: 2
    }

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
      ,
      largura_bloco : 120 + (config.width / 3) - 80
      ,
      altura_bloco  :  120
      ,
      escala_bloco: 3
      ,
      posicao_saida_w : 2 * 120 + (config.width / 3) - 79.5
      ,
      posicao_saida_h: (2 * 120) + 0.5

      ,
      scale_saida_e_jogador: 0.2
      ,
      posicao_jogadorr_w : 1 * 120 + (config.width / 3) - 79.5
      ,
      posicao_jogadorr_h: ( 0 * 120) + 0.5

      ,
      scale_passado_labirinto: 2

    }

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
      ,
      largura_bloco : 120 + (config.width / 3) - 80
      ,
      altura_bloco  :  120
      ,
      escala_bloco: 3
      ,
      posicao_saida_w : 1 * 120 + (config.width / 3) - 79.5
      ,
      posicao_saida_h: ( 0 * 120) + 0.5

      ,
      scale_saida_e_jogador: 0.2
      ,
      posicao_jogadorr_w : 3 * 120 + (config.width / 3) - 79.5
      ,
      posicao_jogadorr_h: ( 3 * 120) + 0.5

      ,
      scale_passado_labirinto: 2

    }

    niveis[0] = [easy_0, easy_1, easy_2, easy_3, easy_4]

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

      ,
      largura_bloco :  60 + (config.width/4) + 35
      ,
      altura_bloco  :   60
      ,
      escala_bloco: 1.5
      ,
      posicao_saida_w : 8 * 60 + (config.width/3) - 78.5
      ,
      posicao_saida_h: ( 1 * 60 ) + 0.5
  
      ,
      scale_saida_e_jogador: 0.1
      ,
      posicao_jogadorr_w : 1 * 60 + (config.width/3) - 78.5  
      ,
      posicao_jogadorr_h: ( 6 * 60 ) + 0.5

      ,
      scale_passado_labirinto: 1
  
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
      
      ,
      largura_bloco :  60 + (config.width/4) + 35
      ,
      altura_bloco  :   60
      ,
      escala_bloco: 1.5
      ,
      posicao_saida_w : 1 * 60 + (config.width/3) - 78.5
      ,
      posicao_saida_h: ( 6 * 60 ) + 0.5
  
      ,
      scale_saida_e_jogador: 0.1
      ,
      posicao_jogadorr_w : 1 * 60 + (config.width/3) - 78.5  
      ,
      posicao_jogadorr_h: ( 0 * 60 ) + 0.5

      ,
      scale_passado_labirinto: 1
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

      ,
      largura_bloco :  60 + (config.width/4) + 35
      ,
      altura_bloco  :   60
      ,
      escala_bloco: 1.5
      ,
      posicao_saida_w : 0 * 60 + (config.width/3) - 78.5
      ,
      posicao_saida_h: ( 3 * 60 ) + 0.5
  
      ,
      scale_saida_e_jogador: 0.1
      ,
      posicao_jogadorr_w : 2 * 60 + (config.width/3) - 78.5  
      ,
      posicao_jogadorr_h: ( 2 * 60 ) + 0.5

      ,
      scale_passado_labirinto: 1

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
      
      ,
      largura_bloco :  60 + (config.width/4) + 35
      ,
      altura_bloco  :   60
      ,
      escala_bloco: 1.5
      ,
      posicao_saida_w : 9 * 60 + (config.width/3) - 78.5
      ,
      posicao_saida_h: ( 6 * 60 ) + 0.5
  
      ,
      scale_saida_e_jogador: 0.1
      ,
      posicao_jogadorr_w : 2 * 60 + (config.width/3) - 78.5  
      ,
      posicao_jogadorr_h: ( 5 * 60 ) + 0.5

      ,
      scale_passado_labirinto: 1
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
      

      ,
      largura_bloco :  60 + (config.width/4) + 35
      ,
      altura_bloco  :   60
      ,
      escala_bloco: 1.5
      ,
      posicao_saida_w : 1 * 60 + (config.width/3) - 78.5
      ,
      posicao_saida_h: ( 0 * 60 ) + 0.5
  
      ,
      scale_saida_e_jogador: 0.1
      ,
      posicao_jogadorr_w : 7 * 60 + (config.width/3) - 78.5  
      ,
      posicao_jogadorr_h: ( 9 * 60 ) + 0.5

      ,
      scale_passado_labirinto: 1
    }

    niveis[1] = [medium_0, medium_1, medium_2, medium_3, medium_4]

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

      ,
      largura_bloco :  30 + (config.width/3) - 80
      ,
      altura_bloco  : 30
      ,
      escala_bloco: 0.75
      ,
      posicao_saida_w : 0 * 30 + (config.width/3) - 80 
      ,
      posicao_saida_h: 19 * 30 
  
      ,
      scale_saida_e_jogador: 0.050
      ,
      posicao_jogadorr_w : 0 * 30 + (config.width/3) - 80  
      ,
      posicao_jogadorr_h: 0 * 30 

      ,
      scale_passado_labirinto: 0.4
      
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

      ,
      largura_bloco :  30 + (config.width/3) - 80
      ,
      altura_bloco  : 30
      ,
      escala_bloco: 0.75
      ,
      posicao_saida_w : 0 * 30 + (config.width/3) - 80 
      ,
      posicao_saida_h: 0 * 30 
  
      ,
      scale_saida_e_jogador: 0.050
      ,
      posicao_jogadorr_w : 18 * 30 + (config.width/3) - 80  
      ,
      posicao_jogadorr_h: 17 * 30

      ,
      scale_passado_labirinto: 0.4
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

      linhaI: 19
      ,
      colunaI: 18
      ,
      linhaF: 0
      ,
      colunaF: 0

      ,
      largura_bloco :  30 + (config.width/3) - 80
      ,
      altura_bloco  : 30
      ,
      escala_bloco: 0.75
      ,
      posicao_saida_w : 0 * 30 + (config.width/3) - 80 
      ,
      posicao_saida_h: 0 * 30 
  
      ,
      scale_saida_e_jogador: 0.050
      ,
      posicao_jogadorr_w : 18 * 30 + (config.width/3) - 80  
      ,
      posicao_jogadorr_h: 19 * 30 

      ,
      scale_passado_labirinto: 0.4
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

      linhaI: 19
      ,
      colunaI: 10
      ,
      linhaF: 0
      ,
      colunaF: 19

      ,
      largura_bloco :  30 + (config.width/3) - 80
      ,
      altura_bloco  : 30
      ,
      escala_bloco: 0.75
      ,
      posicao_saida_w : 19 * 30 + (config.width/3) - 80 
      ,
      posicao_saida_h: 0 * 30 
  
      ,
      scale_saida_e_jogador: 0.050
      ,
      posicao_jogadorr_w : 10 * 30 + (config.width/3) - 80  
      ,
      posicao_jogadorr_h: 19 * 30

      ,
      scale_passado_labirinto: 0.4
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
     
      linhaI: 19
      ,
      colunaI: 1
      ,
      linhaF: 0
      ,
      colunaF: 19

      ,
      largura_bloco :  30 + (config.width/3) - 80
      ,
      altura_bloco  : 30
      ,
      escala_bloco: 0.75
      ,
      posicao_saida_w : 19 * 30 + (config.width/3) - 80 
      ,
      posicao_saida_h: 0 * 30 
  
      ,
      scale_saida_e_jogador: 0.050
      ,
      posicao_jogadorr_w : 1 * 30 + (config.width/3) - 80  
      ,
      posicao_jogadorr_h: 19 * 30

      ,
      scale_passado_labirinto: 0.4
    }

    niveis[2] = [ hard_0, hard_1, hard_2, hard_3, hard_4]

    let random_nivel = Math.floor(Math.random() * arrayNiveis.length); //  random
    let nivel_escolhido = arrayNiveis[random_nivel] 
    console.log("nivel escolhido")
    console.log(nivel_escolhido)

    arrayNiveis.splice(random_nivel,1)
    console.log(arrayNiveis)

    let random_labirinto

    let elemento_escolhido
//    dependendo de qual nivel foi escolhido eu tenho que acessar o elemento de diferentes arrays
    if(nivel_escolhido === 0){
      // se o nivel escolhido foi Easy eu tenho que escolher um elemento do arrayEasy que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayEasy.length); // 4
      elemento_escolhido = arrayEasy[random_labirinto]
      
      console.log(`apagado`)
      console.log(arrayEasy[random_labirinto])
      arrayEasy.splice(random_labirinto, 1)

      console.log(`arrayEasy`)
      console.log(arrayEasy)

    }else if(nivel_escolhido === 1){
      // se o nivel escolhido foi Medium eu tenho que escolher um elemento do arrayMedium que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayMedium.length); //3
      elemento_escolhido = arrayMedium[random_labirinto]

      console.log(`apagado ->`)
      console.log(arrayMedium[random_labirinto])
      arrayMedium.splice(random_labirinto, 1)

      console.log(`arrayMedium`)
      console.log(arrayMedium)

    }else{
      // se o nivel escolhido foi Hard eu tenho que escolher um elemento do arrayHard que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * arrayHard.length); // 2
      elemento_escolhido = arrayHard[random_labirinto]

      
      console.log(`apagado ->`)
      console.log(arrayHard[random_labirinto])
      arrayHard.splice(random_labirinto, 1)

      console.log(`arrayHard`)
      console.log(arrayHard)

    }

    let indice_escolhido = elemento_escolhido

    const matriz = niveis[nivel_escolhido][indice_escolhido]

    this.scale_passado_labirinto = matriz.scale_passado_labirinto

    console.log(matriz)
    console.log( this.scale_passado_labirinto)
    this.todos_blocos_parede = this.physics.add.staticGroup();

    for (let linha = 0; linha < matriz.Full_matriz.length; linha++) {
      // quando eu for transformar este pedaço de código em uma função na hora de mudar a cor 
      //é so eu trocar o objeto de colisão e mudar ordem que passarei os parametros (pareide, espaço) (espaço , pareide) chamando a mesma função
      // e para o jogador não ultrapassar o limete do labirinto eu pego a posição eixo(x,y) da primeira e ultima coluna , da primeira e ultima linha e arrodeio de blocos pareide
      for (let coluna = 0; coluna < matriz.Full_matriz[linha].length; coluna++) {
        //console.log(` linha ${linha} coluna ${coluna}`)
        if (matriz.Full_matriz[linha][coluna] === 1) {
          //tamanho de cada bloco + metade da tela horizontalmente 

          this.todos_blocos_parede.create(coluna * matriz.largura_bloco , linha * matriz.altura_bloco, "pareide").setOrigin(0, 0).setScale(matriz.escala_bloco).refreshBody();

        } else {

          this.chao = this.add.image(coluna *matriz.largura_bloco , linha * matriz.altura_bloco, "chao") // se  colocar 80 vai ficar sem as linhas 
          this.chao.setOrigin(0, 0)
          this.chao.setScale(matriz.escala_bloco)

        }

      }

    }
    this.todos_blocos_parede.create((config.width / 3) - 80 - 10, 0, "borda_left").setOrigin(0, 0).refreshBody();
    this.todos_blocos_parede.create((5 * 120) + (config.width / 3) - 80, 0, "borda_right").setOrigin(0, 0).refreshBody();
    this.todos_blocos_parede.create((config.width / 3) - 80, (5 * 120), "borda_bottom").setOrigin(0, 0).refreshBody();

    this.saida = this.physics.add.sprite(matriz.posicao_saida_w, matriz.posicao_saida_h, "saidaa").setOrigin(0, 0).setScale(matriz.scale_saida_e_jogador).refreshBody();

    this.anims.create({

      key: "saidaa_anims",

      frames: this.anims.generateFrameNumbers("saidaa"),

      frameRate: 4,

      repeat: -1

    })

    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add.sprite( matriz.posicao_jogadorr_w, matriz.posicao_jogadorr_h, "jogador").setOrigin(0, 0).setScale(matriz.scale_saida_e_jogador).refreshBody().setCollideWorldBounds(true);

    this.anims.create({

      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 15,
      repeat: -1

    })


    this.jogadorr.anims.play("jogador_anims", true);

    this.physics.add.collider(this.jogadorr, this.todos_blocos_parede);

    this.physics.add.collider(this.saida, this.todos_blocos_parede);

    //this.physics.add.collider(this.saiu_do_labirinto, this.todos_blocos_parede);

    this.physics.add.overlap(this.jogadorr, this.saida, this.saiuDoLabirinto, null, this);

    this.cursors = this.input.keyboard.createCursorKeys();

    //setTimeout(() => { this.scene.start("GameEasy") }, 10000)
  }

  update() {

    if (!this.acabou) { // feito evitar que o jogador consiga se movimentar depois que acontecer o overlap  


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

      if(arrayNiveis.length === 0){
        arrayNiveis = [ 0, 1, 2]
      }


    }


  }

  saiuDoLabirinto(jogadorr, saida) {

    this.jogadorr.destroy();
    this.saida.destroy();

    //this.saiu_do_labirinto = this.physics.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saiuDoLabirinto").setOrigin(0,0).setScale(0.2).refreshBody(); 
    this.saiu_do_labirinto = this.physics.add.sprite(saida.x, saida.y, "saiuDoLabirinto").setOrigin(0, 0).setScale( this.scale_passado_labirinto).refreshBody();

    this.physics.add.collider(this.saiu_do_labirinto, this.todos_blocos_parede);

    this.anims.create({

      key: "saiuDoLabirinto_anims",
      frames: this.anims.generateFrameNumbers("saiuDoLabirinto"),
      frameRate: 15,
      repeat: -1

    })

    this.saiu_do_labirinto.anims.play("saiuDoLabirinto_anims", true);


    // executar a funcao que mostra que a pessoa passou de fase 
    this.acabou = true

    setTimeout(() => { this.scene.start("GameEasy") }, 4000)
    
  }

}