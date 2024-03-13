# Para executar o pedaço feito, entre nestas pastas deste repositorio e execute o index.html
![diretório](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/f0f7a9cb-481e-451a-988c-33a23c6c1760)
# ou clique neste [link](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/tree/versionONE/atividades/transformar_matriz_em_labirinto)
<br/><br/><br/><br/><br/><br/>
# Biblioteca com exemplos do [phaser](https://labs.phaser.io/)

## preparar ambiente para ir aprendendo o phaser 
instalei o phaser pelo jeito npm<br/>
  `npm install phaser@v3.80.1`<br/>
<br/>
  `npm install node`<br/>
<br/>
  `npm install --global http-server`  isto n fez abrir automaticamente um site<br/>
<br/>
  //apertei no botão live server <br/>
<br/>
// usar este comando toda vez que quizer executar o servidor web https://www.npmjs.com/package/http-server<br/>
 ` npx http-server`<br/>
<br/>
<br/>
Set up webroot - o local para onde o servidor web esta olhando e poe isso no localhost no meu caso é o link  http://192.168.0.117:8080<br/>
<br/>
  add file index.html and copy from DOCUMENTACION  https://phaser.io/tutorials/getting-started-phaser3/part5 <br/>e execute `npx http-server`<br/>
  
<br/>
<br/>
<br/>
<br/>

![logo preta](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/77fae5f2-489c-41b6-8e6a-15b5b23d021f)
###### html<br/>
                        <a href="https://www.fontspace.com/category/deathmetal"><img src="https://see.fontimg.com/api/renderfont4/0W9qo/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RnJvbSAgdGhlICBhc2hlUw/yenisack-demo.png" alt="Death Metal fonts"></a><br/>
###### Markdown for reddit and other forums.<br/>
                        [![Death Metal fonts](https://see.fontimg.com/api/renderfont4/0W9qo/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RnJvbSAgdGhlICBhc2hlUw/yenisack-demo.png)](https://www.fontspace.com/category/deathmetal)<br/>
                        
* Link do jogo: [https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io.git]() 
# Motivação

É aplicar os conceitos que venho aprendendo durante minha jornada acadêmica desenvolvendo um jogo como trabalho da disciplina ESTÁGIO SUPERVISIONADO I. Eu tive a ideia do jogo aleatoriamente e gostaria de descobir como ela vai ser aplicada.

# Objetivo

É criar um jogo de labirinto , onde o jogador deve conseguir sair do labirinto achando a porta de saída. Objetivo do jogador é conseguir sair de varios labirintos em menos tempo.

# Valor Agregado

Aprender a como transformar a minha ideia em um jogo. O diferencial é a quebra de padrão em relação aos níveis onde a lógica das fases passadas pelo jogador
não tem o modo de dificuldade do jogo crescente , pois aleatoriamente qualquer fase pode ter um modo fácil , médio ou dificil .

# Estilo 
O jogador escolhe o estilo de jogo : concorrer com outros jogadores online ou concluindo as fases

## #Fases
Vai ter as fases para o jogador jogar . E cada fase vai ter uma quantidade de labirintos para ser passado e o tempo limite.

## #Online
Aqui o jogador deve passar em todos os labirintos em menos tempo e concorrerá com outros jogadores. Aquele jogador que completou todos os labirintos em menos tempo vai subir no sua posição no hanking.

# Fases

## 1 
Será 2 labirinto .Cada labirintos vai ter o modo de jogo escolhido aleatoriamente: fácil , médio ou dificil e o jogador deve concluir os labirintos com o tempo limite de 2 minutos

## 2 
Serão 3 labirintos . E cada labirinto vai ter com o modo de jogo escolhido aleatoriamente e o jogador deve concluir os 2 labirintos com o tempo limite de 2 minutos

## 3 
Serão 4 labirintos com o modo de jogo escolhido aleatoriamente .O jogador deve concluir as 4 labirintos com o tempo limite de 2 minutos


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
| Fácil        | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. As paredes do labirinto vai seguir uma lógica de 5 colunas e 5 linhas . Talvez eu mude para 10 linhas e colunas|
![facil](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/803502c6-e5d7-4459-82e0-d335bdf2a9f3)
| Médio        |Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 10 segundos. As paredes do labirinto vai seguir uma lógica de 10 colunas e 10 linhas .  Talvez eu mude para 15 linhas e colunas|
![medio](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/726132a6-8473-431b-98d3-c838e02649c1)
| Difícil      | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 5 segundos . A cada 30 segundos a bolinha que é o buraco para sair do labirinto vai mudar de lugar. As paredes do laberinto vai seguir uma lógica de 20 colunas e 20 linhas .  |
![dificil](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/1e689988-16ae-4b78-bcd6-496075e51608)

[![Death Metal fonts](https://see.fontimg.com/api/renderfont4/0W9qo/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RnJvbSAgdGhlICBhc2hlUw/yenisack-demo.png)](https://www.fontspace.com/category/deathmetal)

## Esquema de Pontuação
O score vai ser de acordo com a quantidade de labirintos passadas pelo jogador por minuto

## versão 1.0
| Precisão | Score |
| ----- | ----------- |
| Passar 1 labirinto no tempo <= 1 minuto | 1 pts |
| Passar 2 labirintos no tempo <= 1 minuto | 5 pts |
| Passar 3 labirintos no tempo <= 1 minuto | 10 pts |

## versão 2.0
| Precisão | Score |
| ----- | ----------- |
| Passar 1 fases em 1 minuto | 1 pts |
| Passar 2 fases em 1 minuto | 5 pts |
| Passar 3 fases em 1 minuto | 10 pts |
| Passar 4 fases em 1 minuto | 20 pts |
| Passar 5 fases em 1 minuto | 40 pts |
| Passar 6 fases em 1 minuto | 80 pts |
| Passar 6 fases em 1 minuto | 80 pts |

## versão 3.0
o jogador vai jogar em grupo de 3 jogadores juntos em tempo real, passando pelos mesmos labirintos e a pontuação do grupo vai ser a pontuação individual somada neste irei incluir outro tipo de pontuação que vai ser baseado no labirinto que foi passado facil = +1 ponto , medio = +2 pontos , dificil = +3 pontos

| Precisão | Score |
| ----- | ----------- |
| Passar 1 labirinto fácil | 1 pts |
| Passar 1 labirinto médio | 2 pts |
| Passar 1 labirinto dificil | 3 pts |
| ----- | ----------- |
| Passar 1 fases em 1 minuto | 1 pts |
| Passar 2 fases em 1 minuto | 5 pts |
| Passar 3 fases em 1 minuto | 10 pts |
| Passar 4 fases em 1 minuto | 20 pts |
| Passar 5 fases em 1 minuto | 40 pts |
| Passar 6 fases em 1 minuto | 80 pts |
| Passar 6 fases em 1 minuto | 80 pts |

# Game over
#### Fases 1 2 3
                        se a pessoa não conseguir passar em alguma labirinto no tempo de limite da fase vai dar game over para o jogador.

#### Online
                        aqui não tem game over 
                        
# #######Placares########
vai ter um diferente para cada fase e a ordem vai ser baseado em quem passou o labirinto mais rápido


# Detalhes de implementação do movimento
#### EMVEZ DE SER AS TECLAS 
####    ArrowUp    ^
####    ArrouDown  v
####    ArrowLeft  <
####    ArrowRight <
####    VAI SER QUANTIDADES DE VEZES APERTADO A TECLA ENTER
####    Apertado 1 vez    - o jogador vai se mover para cima
####    2 vezes           - vai se mover para esquerda
####    3 vezes           - vai se mover para direita
####    4 vezes           - vai se mover para baixo
    
####    exemplo se a pessoa apertou 2 vezes e deixou ocioso por 1 segundo , proxima tecla apertada fara parte de outro MOVIMENTO
    
## Requisitos
O jogador precisa cadastrar um nome para ser armazenado sua posição no hanking
Para aparecer no hanking a pessoa tem que estar entre os top 3 melhores
Para ganhar escore o jogador deve passar no mínimo em um labirinto em no máximo 1 minuto

### Épicos/Funcionalidades

1. `Home inicial`
   Tutorial;
   Começar;
   Placares;
   Créditos

2. `Criação de usuário`
  Aqui o jogador escolhe o nome dele
  
3. `Seleção do estilo do jogo `
   Fases;
   Online;
4. `Seleção de Fase`
   As fases vão ler liberadas no decorrer que a pessoa for passando .
   Os labirintos muda com o modo de jogo diferente : fácil , médio ou difícil;
   Sons de toque e de trilha sonora diferente de acordo com a fase e o movimento do jogador ;
5. `Seleção online`
   Todos os labirintos serão carregados para o jogador em ordem aleatória;

6. `Placares`
   Cada estilo de jogo tera seu hanking das 3 melhores  pontuações
   TOP 3 jogagores com maior score: Nome do jogador (10 letras - Tempo concluido os labirintos);
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

![image](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/f1fe526a-0165-48a6-be74-3a5fc7848cbb)


[![Death Metal fonts](https://see.fontimg.com/api/renderfont4/0W9qo/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RnJvbSAgdGhlICBhc2hlUw/yenisack-demo.png)](https://www.fontspace.com/category/deathmetal)

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
2. Webpack - Ferramenta de Empacotamento;
3. JavaScript - Linguagem de programação fundamental;
4. TypeScript - Linguagem de programação atuando como superset do JavaScript;
5. Firebase - Banco de Dados para armazenar o ranking;
6. Vercel - Plataforma de Hospedagem e Implantação.

*
| Atividade | prioridade |
| ----- | ----------- |
| `Transformar matriz em labirinto`     | não depende de outra atividade |
| `A lógica dos movimentos com o botão enter`     | não depende de outra ativiade |
| `cronometro das fases` | depende de outra atividade |
| `hanking das fases` | depende de outras atividades |
| `trocar cor do chão e parede do labirinto` | depende de outra atividade |
| `trocar o burado da saída do labirinto de lugar` | depende de outra atividade |
| `cronometro p/ troca de cor e de buraco da saída`|  depende de outra atividade |
*

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
### 12 mar - 1h22       feito 4 labirintos facil e definido todos os pontos inicial e final
### 13 mar - 1h45       Atv 1 feita - Colocar as bordas de cada labirinto


