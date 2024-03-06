const matriz = [
  [0 , 1 , 1 , 0 , 1],
  [0 , 1 , 0 , 0 , 0],
  [0 , 0 , 0 , 1 , 0],
  [0 , 1 , 0 , 0 , 1],
  [0 , 1 , 1 , 0 , 0]
]

function exibirMatriz() {
  const branco = 'bloco-espaço'
  const preto  = 'bloco-pareide'

  for (let linha = 0; linha < matriz.length; linha++) {

      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
          //document.write(matriz[linha][coluna] + " ");

        if(matriz[linha][coluna] === 1){
          preencherBlocoNoCanvas( linha , coluna , preto)
        }else{
          preencherBlocoNoCanvas( linha , coluna , branco)
        }

      }
      document.write("<br>");
  }
}

// Chame a função para exibir a matriz
exibirMatriz();

function preencherBlocoNoCanvas( linha , coluna , id_bloco){
  //this.load.image('red', 'assets/particles/red.png');  a imagem ja tem que estar preload 
  this.add.image(coluna , linha, id_bloco);
}