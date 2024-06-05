### Para executar o pedaço feito, entre nestas pastas deste repositorio e execute o index.html
![image](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/5bcac41c-36ee-4e00-b9c3-59dd2092e25d)
                
# Motivação

É aplicar os conceitos que venho aprendendo durante minha jornada acadêmica desenvolvendo um jogo como trabalho da disciplina ESTÁGIO SUPERVISIONADO I. Eu tive a ideia do jogo aleatoriamente e gostaria de descobir como ela vai ser aplicada.

# Objetivo

É criar um jogo de labirinto , onde o jogador deve conseguir sair do labirinto achando a porta de saída. Objetivo do jogador é conseguir sair de varios labirintos em menos tempo.

# Valor Agregado

Aprender a como transformar a minha ideia em um jogo. O diferencial é a quebra de padrão em relação aos níveis onde a lógica das fases passadas pelo jogador
não tem o modo de dificuldade do jogo crescente , pois aleatoriamente qualquer fase pode ter um modo fácil , médio ou dificil .

# Estilo 
O jogador inicia o jogo pela fase 1

## #Fases
Vai ter 3 fases para jogar. E cada fase vai ter uma quantidade de labirintos para ser passado com o tempo limitado.

# Fases

## 1 
Será 2 labirintos .Cada labirintos vai ter o modo de jogo escolhido aleatoriamente: fácil , médio ou dificil e o jogador deve concluir os labirintos com o tempo limite menor que 35 segundos

## 2 
Serão 3 labirintos . E cada labirinto vai ter com o modo de jogo escolhido aleatoriamente e o jogador deve concluir os 3 labirintos com o tempo limite menor que  50 segundos

## 3 
Serão 4 labirintos com o modo de jogo escolhido aleatoriamente .O jogador deve concluir as 4 labirintos com o tempo limite menor que 65 segundos


# Esquema de fases

#### Som
| Descriçao 1   | Descrição 2 |
| ------------- | ----------- |
| fundo musical | a musica de fundo vai ser diferente em cada fase |
| teclado       | Cada passo que o jogador faz : < , ^ , >, v corresponde a uma nota de um instrumento e em cada fase diferente vai ser um instrumento diferente |

| Fases | Descrição |
| ----- | ----------- |
| 1     | A musica de fundo vai ser da banda Crypta - rise from the ashes e o instrumento vai ser o som de uma guitarra|
| 2     |A musica de fundo vai ser da banda Lorna Shore - from the abyses e o instrumento vai ser o som de um baixo|
| 3     | A musica de fundo vai ser da banda Suicid Silence - Unswered e o instrumento vai ser o som de bateria |


#### Modo de jogo
| Modo de fase | Descrição |
| ------------ | ----------- |
| Fácil        | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Tem o detalhe da cor das paredes e do chão vai ficar trocando a cada 5 segundos. As paredes do labirinto vai seguir uma lógica de 5 colunas e 5 linhas . Talvez eu mude para 10 linhas e colunas|
![facil](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/803502c6-e5d7-4459-82e0-d335bdf2a9f3)
| Médio        |Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Tem o detalhe da cor das paredes e do chão vai ficar trocando a cada 3 segundos. As paredes do labirinto vai seguir uma lógica de 10 colunas e 10 linhas .  Talvez eu mude para 15 linhas e colunas|
![medio](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/726132a6-8473-431b-98d3-c838e02649c1)
| Difícil      | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 1 segundos . so fazer isso se der tempo A cada 30 segundos a bolinha que é o buraco para sair do labirinto vai mudar de lugar. As paredes do laberinto vai seguir uma lógica de 20 colunas e 20 linhas .  |
![dificil](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/1e689988-16ae-4b78-bcd6-496075e51608)

## Esquema de Pontuação
O score vai ser de acordo com o tempo que demorou passar o labirinto, quanto mais rápido mais score.

## versão 1.0
###### passar de labirinto fácil ------ valor > n && valor <= m 
| Precisão | Score |
| ----- | ----------- |
| entre um tempo de 0   e  5 segundos  | 20 pts|
| entre um tempo de 5   e  10 segundos | 10 pts|
| entre um tempo de 10  e  20 segundos | 5 pts|
| entre um tempo de 20  e  30 segundos | 3 pts|
| entre um tempo > 30 segundos | 1 pts |

###### passar de labirinto médio  ------ valor > n && valor <= m 
| Precisão | Score |
| ----- | ----------- |
| entre um tempo de 0   e  10 segundos | 20 pts|
| entre um tempo de 10  e  20 segundos | 10 pts|
| entre um tempo de 20  e  30 segundos | 5 pts|
| entre um tempo de 30  e  40 segundos | 3 pts|
| entre um tempo > 40 segundos | 1 pts |

###### passar de labirinto dificil ------ valor > n && valor <= m 
| Precisão | Score |
| ----- | ----------- |
| entre um tempo de 0   e  23 segundos | 20 pts|
| entre um tempo de 23  e  33 segundos | 10 pts|
| entre um tempo de 33  e  43 segundos | 5 pts|
| entre um tempo de 43  e  53 segundos | 3 pts|
| entre um tempo > 53 segundos | 1 pts |


# #######Placares########
vai ter um placar diferente para cada fase e a ordem de hanking vai ser baseado em quem tiver maior score . 

# Detalhes de implementação do movimento
![image](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/6f3e98cb-b25e-4763-8065-a93e9c678d6d)
####  Tecla  ArrowUp    ^ move para cima 
####  Tecla  ArrouDown  v move para baixo
####  Tecla  ArrowLeft  < move para esquerda
####  Tecla  ArrowRight < move para direita

## Requisitos
- O jogador precisa cadastrar um nome para ser armazenado sua posição no hanking.
- Para aparecer no hanking a pessoa tem que estar entre os 3 jogadores com maior score.
- Para ganhar score o jogador tem que passar de labirinto o mais rápido possível.

### Épicos/Funcionalidades

1. `Home inicial`
   Tutorial;
   Começar;
   Placares;
   Créditos

2. `Criação de usuário`
  Aqui o jogador escolhe o nome dele

3. `Seleção de Fase`
   As fases vão ler liberadas no decorrer que a pessoa for passando .
   Os labirintos muda com o modo de jogo diferente : fácil , médio ou difícil;
   Sons de toque e de trilha sonora diferente de acordo com a fase e o movimento do jogador ;
   
5. `Seleção online`
   Todos os labirintos serão carregados para o jogador em ordem aleatória;

6. `Placares`
   Cada fase de jogo tera seu hanking das 3 melhores pontuações de score
   TOP 3 jogagores com maior score: Nome do jogador (8 letras - pontos em score);
   
7. `Créditos`
   Créditos;

8. `Som`
   editar as musicas pelo app [tirando vocal e deixando so a trilha sonora]{https://youtu.be/Hj5f2JnbPgQ?si=QOxwRU_ks5ajmBzE};
   minha ideia é fazer misturado DEIXAR A MAIORIA DA MUSICA SO O INSTRUMENTAL e alguns trechos de instrumental mais o vocal;
   Músicas ["[Rise from the ashes](https://youtu.be/rvYn45PfdcY?si=gKt0P_zg8uU7RtOp)" essa musica no final dela onde aparece os agradecimentos tem uma trilha sonora que posso colocar no jogo enquanto o usuario fica nas telas ;
   "[Of the abyses (pro)](https://youtu.be/IhoKdEx2pjI?si=A9ZgfJrEF-vyPXXl)";
   "[Unswered](https://youtu.be/G9DGjGot5do?si=5gFXOVx9kAx29XsX)";
   outras[terror](https://youtu.be/gV3uMuGwQF0?si=-Fb5e0R28ZLaPr0j);
   [terror](https://youtu.be/zVqBpsTuPLc?si=d-9eseNop9b4d4La) ;
   [pro](https://youtu.be/lugARKhBtX4?si=BR-6e_S6aZuw8d8W)"];

### Personas

1. **`<Jogador#1>`** - `<o mesmo>

## Protótipos de Tela
![PROTOTIPOtelas drawio](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/7df5aa45-a900-40af-b370-a39c3962b6bf)

## Instalação
----------------pedaço a fazer 
Valide se tem [Node.js](https://nodejs.org) instalado.
Clone esse repositório e entre na pasta
```
npm i
```
### Rode o development server
```
npm start
```

Para visualizar localmente: http://localhost:8080/.

### Crie uma production build

```
npm run build
```

## Tecnologias e Ferramentas utilizadas
1. Phaser 3 - GameEngine;
2. JavaScript - Linguagem de programação fundamental;



### 27 fev - 70' editando readme 
### 28 fev - 50' editando readme e escolhendo as musicas
### 3 mar  - 4h30' entendendo o exemplo do [Ansiwiz](https://youtube.com/playlist?list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&si=BRRccQ-yDsZSClVp)
### 4 mar  - 2h35' entendnedo o resto do Ansiwiz
### 5 mar  - 1h    mudando regras do jogo no readme
### 5 mar  - 2h20' fazendo as telas no [figma](https://www.figma.com/file/aMpp40Pn8cx7nd4LXMELJt/Untitled?type=design&node-id=0%3A1&mode=design&t=VNGBI0FCcMe1pED6-1)
### 5 mar  - 31'   fazendo o protótipo das telas 
### 5 mar  - 30'   desafio1
### 6 mar  - 53'   desafio2
### 7 mar  - 1h    desafio2
### 9 mar  - 3h28' praticando o exemplo do [ansiwiz](https://youtube.com/playlist?list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&si=BRRccQ-yDsZSClVp) para resolver o desafio1 - até vid 3
### 10 mar - 1h  feito desafio1 com matriz fácil
### 10 mar - 2h30      desafio1 desenhando matriz média e dificil
### 10 mar - 1h46      desafio1 feito labirintos medium e dificil
### 10 mar - 1h50      feito 4 labirintos medium
### 10 mar - 40'        testando todos os labirintos
### 11 mar - 1h10'      feito 4 labirintos hard
### 11 mar - 30'        montado o readme das atividades
### 12 mar - 1h22       Atv 1 feito 4 labirintos facil e definido todos os pontos inicial e final de cada labirinto
### 13 mar - 1h45       Atv 2 feita - Colocar as bordas de cada labirinto
### 14 mar - 1h13       Atv 3 feita - colocar jogador mno labirinto + bug
### 15 mar - 40'        Atv 4 feita - animar o jogador e refiz os sprites
### 16 mar - 11'        Atv 5 e 6 feitas - adicionar e animar o buraco saida
### 16 mar - 1h40'      Atv 6.0    6.1    6.2  bug texture not found "jogador"
### 16 mar - 13'        Atv 6.2  bug ajeitado"
### 16 mar - 1h11'      Atv 6.2  pontos do modo facil e medium concluido"
### 18 mar - 56'        Atv 6.2  pontos do modo dificil concluido"
### 18 mar - 24'        Atv 7 começei
### 19 mar - 2h30       Vendo exemplos do [phaser](https://github.com/ThiagoMassenoMaciel/exemplo-simples-tutorial-do-phaser.github.io) e parei no ex7 
### 22 mar - 26'        Atv 7 continuação
### 22 mar - 1h15'      Atv 7 continuação -bug so move 1 px
### 23 mar - 40'        Atv 7 continuação -bug fixed e atividade concluida
### 23 mar - 30'        Atv 7 bug do eixo Y fixed
### 23 mar - 1h27'      Atv 7 feitos lab facil( 1 2 3)
### depois deste commit , tirei os comentarios
### 31 mar - 3h23'      Atv 7 feitos lab facil( 4 5 ) lab medium( 1 2 3 4 5 )  lab hard( 1 )
###  1 abr - 1h21'      Atv 7 feitos lab hard( 2 3 4 5 )
###  8 abr - 1h         Atv 7.4 feito
### 15 abr - 1h30'      Atv 8 começei e terminei so fiz de um labirinto
### 16 abr - 10'        Atv 8.1 fiz e percebi que n valia mt apena pois aparecia uma lista
### 17 abr - 40'        Atv 10 começei , fiz só easy
### 18 abr - 40'        Atv 10 mantive , easy 1bug + 1fixed
### 19 abr - 16'        Atv 10 terminei todos labirinto easy
### 20 abr - 44'        Atv 10 terminei todos labirinto medium e deixei clean root foulder
### 22 abr - 1h27'      Atv 10 terminei todos labirinto hard +bug not fixed
### 25 abr - 42'        Atv 10 travei no bug
### 30 abr - 1h         Atv 10 travei no bug que é a estrutura array com todos os objetos labirinto
### 2  mai - 2h         Atv 10 organizado toda estrutura [link exemplo](https://github.com/ThiagoMassenoMaciel/object) + bug da posição n atualizada
### 4  mai - 3h         Atv 10 organizado toda estrutura + centratilando algumas info + bug de n poder reutilizar valor de propriedade - fiz até medium_2
### 5  mai - 3h         Atv 10.2 feita e + bug n processa todos os blocos parede 
# para deixar a lógica de so aparecer o fácil unica vez é so dentro do update() atualizar a arrayNiveis quando zerar para ficar igual a [1,2]
### 5  mai - 1h30'      Atv 10 concluidíssima
### 6  mai - 24'        Atv 11 feito a função que muda de cor + bug
### 6  mai - 1h24'      10.1 adicionAR UM RELOGIO DE TEMPO NA TELA
### 7  mai - 40'        10.2 fixed O BUG DISABLE REMOVE 
### 7  mai - 2h'        Tudo acoplado no mesmo file
### 7  mai - 2h21'      11. feito completo trocar a cor do do chão pela parede.  
### 8  mai - 10'        Adicionar carde no canban para alerta de pessoas epleticas
### 8  mai - 2h45'      10.3 Transformar os objetos dentro de cada tela em um json - começei assisti [vid1](https://youtu.be/BWPUSXzSWA8?si=sWeBsv8Lsp4z-igo) [vid2](https://youtu.be/PmDtOBtZzhQ?si=F_kClUNGc2K-ArB0)
### 8  mai - 38'        10.3 Transformar os objetos dentro de cada tela em um json - continuei
### 9  mai - 1h40'      10.3 Transformar os objetos dentro de cada tela em um json - bug no fetch
### 9  mai - 1h2'       10.3.1 bug o fetch demora atribuir os dados que veio do json para dentro da variavel global niveis - tentativa 1 falhada
### 10 mai - 10'        tirando estrutura json e deixando a matriz de objetos no file `main.js`
### 10 mai - 1h15'      10.4 bug quando muda de labirinto não é para zerar o relogio
### 10 mai - 30'        10.5 fazer a primeira fase - definindo escopo desta atividade no canvas --
### 11 mai - 4h         10.5 fazer a primeira fase - concluido + bug 10.5.1 
### 12 mai - 40'        10.5.1 quando eu passo de nivel n aparece a tela de aviso quando eu passo de nivel e ultrapassa o limite de 2 labirintos - fixed 
### 12 mai - 52'        fazendo os testes da fase um em 3 cenários de caso de testes
### 12 mai - 2h10'      10.6 tornar imagens butoes clicaveis procurando nos exemplos phaser 
### 13 mai - 3h43'      10.6 tornar imagens butoes clicaveis - concluido + bug 10.6.1
### 14 mai - 1h30'      10.6.1 entendi o bug e propus 2 solucoes 
### 17 mai - 2h54'      10.6.1 entendi o bug e propus 2 solucoes n consegui resolver
### 17 mai - 44'        10.6.1 ajeitei o bug de gerar 3 labirintos na fase 1
### 21 mai - 40'        10.6 tornar as imagens butões clicáveís -  organizar a lógica para exibir certinho o tempo e quants labirintos de cada fase . 
### 23 mai - 2h20'      10.6.1 tornar as imagens clicáveis - faltou um bug no botao proximo quando esta na fase 3 
### 24 mai - 1h38'      10.6.1 tornar as imagens clicáveis - botao prox e repetir fase 3 ajeitado
### 25 mai - 50'        10.7 organizar a pontuaçao da fase 1
### 28 mai - 1h12'      11. lógica da proxima fase liberada quando passada anterior com botao tamanho diferente
### 29 mai - 2h40''     11.3 criar o input para usuario digitar o nome dele - comecei 
### 29 mai - 55'        11.3 criar o input para usuario digitar o nome dele - continuei
### 29 mai - 57'        11.3 criar o input para usuario digitar o nome dele - continuei
### 29 mai - 57'        11.3 criar o input para usuario digitar o nome dele - continuei
### 30 mai - 2h'        11.3.1 erro logica para n armazenar nome de novo jogador n funciona direito
### 30 mai - 1h'        11.3.1 erro logica para n armazenar nome de novo jogador n funciona direito - fixed
### 30 mai - 40'        11.4 montar toda logica da pontuação - definido tempo - score 
### 31 mai - 14'        11.4 montar toda logica da pontuação - criar o contador 
### 31 mai - 1h29'      11.4 montar toda logica da pontuação - +2 bugs  11.4.0 , 11.4.1 
### 31 mai - 1h20'      11.4 montar toda logica da pontuação - +2 bugs  11.4.0 , 11.4.1
### 31 mai - 50'        11.4 montar toda logica da pontuação - +2 bugs  11.4.0 , 11.4.1
### 1 jun  - 2h06'      11.4 montar toda logica da pontuação - +2 bugs  11.4.0 , 11.4.1
### 1 jun  - 1h'        11.4 montar toda logica da pontuação - bug 11.4.4 resolvido, mas o resto dos bugs continua
### 1 jun  - 4h03'      11.4 montar toda logica da pontuação - bug 11.4.3 resolvido, mas o resto dos outros bugs continua
### 2 jun  - 1h29'      11.5 Tela Placar - estrutura lógica de hanking para fase 1 
### 2 jun  - 6h50'      11.5 Tela Placar - hanking para fase 1 completa
### 3 jun  - 2h57'      11.5 Tela Placar - hanking para fase 2 completo - + bug 11.5.6 resolvido
### 3 jun  - 1h15'      11.5 Tela Placar - hanking para fase 3 completo + bug 11.5.7 
### 3 jun  - 40'        11.2 Tela Creditos
### 4 jun  - 3h'        Ajeitando outras coisas
### 5 jun  - 3h'        Adicionar musicas

