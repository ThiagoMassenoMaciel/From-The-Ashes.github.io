let variavel_global_para;
const matrizz= 
[
  [
      {
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
      ,
      {
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
          
  ]
  ,
  [
      {

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
      ,
      {

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

  ]
  ,
  [
      {
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
      ,
      {
          Full_matriz: 
          [ 
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
  ]
      
]

console.log(matrizz)
console.log("matrizz[0]")
console.log(matrizz[0])
console.log("matrizz[0][0]")
console.log(matrizz[0][0])
console.log("matrizz[0][0].fullMatriz")
console.log(matrizz[0][0].Full_matriz)
console.log("matrizz[0][0].fullMatriz.lenght")
console.log(matrizz[0][0].Full_matriz.length)

console.log("convertendo para json")
const jsonData = JSON.stringify(matrizz)
console.log(jsonData)
console.log("convertendo json para objeto")
const jsonParaObj = JSON.parse(jsonData)
console.log(jsonParaObj)

console.log("consumindo dados do file json\n")
console.log(variavel_global_para)
fetch("../jsonData.json").then( (response) => {
	response.json().then( ( matriz_dos_labirintos) => {
		//aqui eu uso uma variavel global e coloco para dentro dela objeto usuarios
    console.log("\n\n\ndentro do fetch")
    console.log(matriz_dos_labirintos)
    console.log("acessando primeiro elemento[0] array")
    console.log(matriz_dos_labirintos[0])
    console.log("acessando primeiro elemento da matris[0][1]")
    console.log(matriz_dos_labirintos[0][1])

		variavel_global_para = matriz_dos_labirintos
	})

})
setTimeout(()=>{
  console.log("\nfora do fetch")
  console.log(variavel_global_para)
  console.log(variavel_global_para[0])
  console.log(variavel_global_para[0][1])
}, 5000)