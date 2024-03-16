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

# Desafio 2 
### 6 mar lógica para os movimentos do personagem dentro do labirinto<br/>
<br/>
<br/>
registrar em algum lugar que ouve um click tipo contador 

<br/>
toda vez que a função que capta o click for executada eu incremento no contador
<br/>
o tempo começa a contar depois do primeiroa click
<br/>
se depois do tempo num teve algum click , vai ser a ação que tiver no contador
<br/>
passou o tempo e não teve outro click - é uma ação
<br/>
passou o tempo e teve outro click - é outra ação
<br/>
passou o tempo e teve 2 clicks - é outra ação
<br/>
A VARIAVEL CONTADOR não pode ser uma variavel alocada dentro da função que captura o event , ela deve ser global e a função que é chamada varias vezes incrementando ela , e dentro da função eu mexo na variavel global
<br/>
quando a ação for feita tenho que zerar o contador
<br/>
Passou o tempo de 2 segundos , pronto ja deu os clicks que tinha que dar, agora zera o contaor você começa denovo
<br/>
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
`demora mais ou menos 1 segundo = 1000 milisegundos`
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


# Desafio 3<br/> 
<br/>
fazer os frames do jogador e saida encaixar perfeitamente dentro do labirinto
<br/>