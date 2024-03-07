# Desafio 1
### 4 marc - professor definiu começar com a matriz de elementos 0 e 1 onde 1 representa a pareide e 0 representa espaço para o jogador se mover
### 5 mar  - fiz isso
#### 1 - montar matriz com zeros e ums 
#### 2 -transformar matriz em labirinto
![image](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/97b78101-0721-4a35-b2ce-9cf5c97acd0d)
#### 1.1 `Armazenar uma matriz com estes elementos em uma variavel`
#### 1.2 `Percorrer cada elemento da matriz e fazer o teste`
##### --Se o elemento for 1 isso significa que no labirinto vou adicionar um bloco-pareide que corresponde a linha e coluna deste elemento
##### ---chamar a função que coloca a imagem(bloco pereide) no canvas do jogador passando por parametro a linha e coluna deste elemento da matriz
##### --SE o elemento for 0 isso significa que no labirinto vou adicionar um bloco-espaço que corresponde a linha e coluna deste elemento
##### ---chamar a função que coloca a imagem(bloco espaço) no canvas do jogador passando por parametro a linha e coluna deste elemento da matriz

# Desafio 2  14h23-14h55   15h-15h21 
### 6 mar lógica para os movimentos do personagem dentro do labirinto
no videio parei no segundo<br/>
fiz 1 click + esperei 2 segundos e num teve nada , então a minha ação é mover o personagem para cima<br/>
fiz 1 click + antes de acabar os 2 segundos teve outro click<br/>
<br/>
fiz 1 click + esperei 1.5 segundos  mais um click, então a minha ação é mover o personagem para direita<br/>
<br/>
fiz 1 click + antes de acabar os 2 segundos teve outros dois click , ação é mover o personagem para esquerda<br/>
fiz 1 click + 1s mais um click + 0.5s mais outro click , a ação é mover o personagem para esquerda<br/>
<br/>
mas para saber quantos clicks, tenho que esperar passar os 2 segundos<br/>
<br/>
1º <br/>
saber quanto tempo demora para clicar 4 vezes o botão enter<br/>

2º<br/>
esperar ser clicado - e que este esperar n impesa o resto do código de continuar executando pois no proximo clique a função precisa ser executada de novo e o contador contabilizar novo click
<br/>
3º<br/>
depois vou fazer o teste de quantas vezes foi clicado<br/>
<br/>
4º <br/>
acontecer a ação<br/>
<br/>
5º<br/>
depois que aconteceu a ação tem que zerar o contador<br/>
