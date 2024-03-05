const matriz = [
  [0 , 1 , 1 , 0 , 1],
  [0 , 1 , 0 , 0 , 0],
  [0 , 0 , 0 , 1 , 0],
  [0 , 1 , 0 , 0 , 1],
  [0 , 1 , 1 , 0 , 0]
]

function exibirMatriz() {
  for (let linha = 0; linha < matriz.length; linha++) {
      for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
          document.write(matriz[linha][coluna] + " ");
      }
      document.write("<br>");
  }
}

// Chame a função para exibir a matriz
exibirMatriz();