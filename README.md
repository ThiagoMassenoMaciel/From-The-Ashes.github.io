![](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/blob/versionONE/logo%20jogo.png)

* Link do jogo: [https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io.git]() 

# Motivação

É aplicar os conceitos que venho aprendendo durante minha jornada acadêmica desenvolvendo um jogo como trabalho da disciplina ESTÁGIO SUPERVISIONADO I.

# Objetivo

O score é adquirido quando consegue passar de fase e o objetivo do jogo é passar a maior quantidade de níveis em menor tempo.

# Valor Agregado

Aprender a como transformar a minha ideia em uma abstração expressada em um jogo. O diferencial é a quebra de padrão em relação aos níveis onde a lógica das fases passadas pelo jogador
não tem o modo de dificuldade do jogo crescente , pois aleatoriamente qualquer fase pode ter um modo fácil , médio ou difícil deixando a depender qual modo da fase o jogo escolheu 
aleatóriamente .

# Fases
Serão 3 fases . No decorrer que a pessoa for passando não vai aumentar o nível de dificuldade pois o próprio jogo escolhe o modo da fase: fácil , médio ou difícil aleatoriamente.
Inicialmente o jogador escolhe em qual sessão deseja jogar.Cada sessão corresponde a um tempo cronometrado com limite para passar nas 3 fases .

# tipos de sessão 
## #Noob
Esta sessão o jogador deve concluir as 3 fases com o tempo limite de 3 minutos

## #Pro
Esta sessão o jogador deve concluir as 3 fases com o tempo limite de 1 minutos

## #Online
Esta sessão so vai ser da versao 2 do jogo .Aqui o jogador fica jogando até o tempo que ele quiser sem limite de fases predefinido e o tempo demorado vai aparecer num hanking comparando com outras pessoas . diferentes jogadores com diferentes tempo vai  ser hankeado . Ordem 1º é aquele que tiver o menor tempo e mais fases passadas

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
| Fácil        | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. As paredes do labirinto vai seguir uma lógica de 5 colunas e 5 linhas .|
![facil](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/803502c6-e5d7-4459-82e0-d335bdf2a9f3)
| Médio        |Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 10 segundos. As paredes do labirinto vai seguir uma lógica de 10 colunas e 10 linhas . |
![medio](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/726132a6-8473-431b-98d3-c838e02649c1)
| Difícil      | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 5 segundos . A cada 30 segundos a bolinha que é o buraco para sair do labirinto vai mudar de lugar. As paredes do laberinto vai seguir uma lógica de 20 colunas e 20 linhas .  |
![dificil](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/1e689988-16ae-4b78-bcd6-496075e51608)

## Esquema de Pontuação
O score vai ser de acordo com a quantidade de fases passadas pelo jogador por minuto

## versão 1.0
| Precisão | Score |
| ----- | ----------- |
| Passar 1 fase em no máximo 1 minuto | 1 pts |
| Passar 2 fases em no máximo 1 minuto | 5 pts |
| Passar 3 fases em no máximo 1 minuto | 10 pts |

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

# Game over
#### Sessão noob
                        se a pessoa não conseguir passar em alguma fase no tempo de 3 minutos vai dar game over para o jogador.
#### Sessão pro
                        se a pessoa não conseguir passar em alguma fase no tempo de 1 minutos vai dar game over para o jogador.
#### Online
                        aqui não tem game over pois é o jogador que decide o tempo
                        
# #######Placares########
vai ter um diferente para cada sessão

## Requisitos

### Épicos/Funcionalidades

1. `Home inicial`
   Tutorial;
   Começar;
   Placares;
   Créditos
2. `Seleção de Sessão`
   Sessão 1: Pro;
   Sessão 2: Noob;
3. `Placares`
   Pro
   TOP 3 jogagores com maior score: Nome do jogador (10 letras - Tempo concluido as 3 fases);
4. `Créditos`
   Créditos;
5. `Fases`
   Cenário de cada modo de jogo padronizado;
   Sons de toque e de trilha sonora diferente de acordo com a fase
   Quantidade de vezes clicado no botão enter ;
6. `Som`
   editar as musicas pelo app [tirando vocal e deixando so a trilha sonora]{https://youtu.be/Hj5f2JnbPgQ?si=QOxwRU_ks5ajmBzE}
   minha ideia é fazer misturado DEIXAR A MAIORIA DA MUSICA SO O INSTRUMENTAL e alguns trechos de instrumental mais o vocal
   Músicas ["[Rise from the ashes](https://youtu.be/rvYn45PfdcY?si=gKt0P_zg8uU7RtOp)", "[Of the abyses (pro)](https://youtu.be/IhoKdEx2pjI?si=A9ZgfJrEF-vyPXXl)", "[Unswered](https://youtu.be/G9DGjGot5do?si=5gFXOVx9kAx29XsX)",  outras[terror](https://youtu.be/gV3uMuGwQF0?si=-Fb5e0R28ZLaPr0j), [terror](https://youtu.be/zVqBpsTuPLc?si=d-9eseNop9b4d4La) [pro](https://youtu.be/lugARKhBtX4?si=BR-6e_S6aZuw8d8W)"]
   ;

### Personas

1. **`<Jogador#1>`** - `<o mesmo>

## Protótipos de Tela

![Diagrama](Diagrama.drawio.png)

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


27 fev - editando readme  - 70'
28 fev - editando readme e escolhendo as musicas - 50'
