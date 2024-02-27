![](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/blob/versionONE/logo%20jogo.png)

* Link do jogo: [https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io.git]() 

# Motivação

É aplicar os conceitos que venho aprendendo durante minha jornada acadêmica desenvolvendo um jogo como trabalho da disciplina ESTÁGIO SUPERVISIONADO I.

# Objetivo

O score é adquirido quando consegue passar de fase e o objetivo do jogo é passar a maior quantidade de níveis em menor tempo.

# Valor Agregado

Aprender a como transformar a minha ideia em uma abstração expressada em um jogo. O diferencial é a quebra de padrão em relação aos níveis onde a lógica das fases passadas pelo jogador
não tem o modo de dificuldade do jogo crescente , pois aleatoriamente qualquer fase pode ter um modo fácil , médio ou difícil deixando a depender qual modo da fase1 o jogo escolheu 
aleatóriamente 

# Fases
Serão 3 fases . No decorrer que a pessoa for passando não vai aumentar o nível de dificuldade pois o próprio jogo escolhe o modo da fase: fácil , médio ou difícil aleatoriamente
inicialmente o jogador escolhe em qual sessão deseja jogar 
cada sessão corresponde a um tempo cronometrado com limite para passar nas 3 fases 

# tipos de sessão 
## #Noob
Esta sessão o jogador deve concluir as 3 fases com o tempo limite de 3 minutos

## #Pro
Esta sessão o jogador deve concluir as 3 fases com o tempo limite de 1 minutos

## #Online
Esta sessão so vai ser da versao 2 do jogo .Aqui o jogador começa a jogar e quando passar as 3 fases o tempo demorado vai aparecer num hanking . diferentes jogadores com diferentes tempo vai  ser hankeado . Ordem 1º é aquele que tiver o menor tempo e maior fase passada

# Esquema de fases

#### Som
| Descriçao 1   | Descrição 2 |
| ------------- | ----------- |
| fundo musical | a musica de fundo vai ser diferente em cada fase |
| teclado       | Cada passo que o jogador faz : < , ^ , >, v corresponde a uma nota de um instrumento e em cada fase diferente vai ser um instrumento diferente |
            --

| Fases | Descrição |
| ----- | ----------- |
| 1     | A musica de fundo vai ser da banda Crypta - rise from the ashes e o instrumento vai ser o som de uma guitarra|
| 2     |A musica de fundo vai ser da banda Lorna Shore - from the abyses e o instrumento vai ser o som de um baixo|
| 3     | A musica de fundo vai ser da banda Suicid Silence - Unswered e o instrumento vai ser o som de bateria |


#### Modo de jogo
| Modo de fase | Descrição |
| ------------ | ----------- |
| Fácil        | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. As paredes do laberinto vai seguir uma lógica de 5 colunas e 5 linhas .|
| Médio        |Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 10 segundos. As paredes do laberinto vai seguir uma lógica de 10 colunas e 10 linhas . |
| Difícil      | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 5 segundos . A cada 30 segundos a bolinha que é o buraco para sair do labirinto vai mudar de lugar. As paredes do laberinto vai seguir uma lógica de 20 colunas e 20 linhas .  |

## Esquema de Pontuação

Em cada fase o jogador receberá um score à medida que acertar uma maior quantidade de comandos com a melhor precisão. No entanto, se errar uma quantidade de comandos considerável, será eliminado da fase.

## versão 1.0
| Precisão | Score |
| ----- | ----------- |
| Passar 1 fases em 1 minuto | 1 pts |
| Passar 2 fases em 1 minuto | 5 pts |
| Passar 3 fases em 1 minuto | 10 pts |

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

Para ser eliminado, o jogador deve errar 50% dos elementos.
Chega-se ao fim da fase quando acabar a música. O score será contabilizado então.

## Requisitos

### Épicos/Funcionalidades

1. `Menu Inicial`
   Tutorial;
   Iniciar;
   Placar geral;
   Créditos
2. `Seleção de Personagem`
   Personagem 1: Sandy;
   Personagem 2: Junior;
3. `Seleção da fase`
   Fase Primavera;
   Fase Verão;
   Fase Outono;
   Fase Inverno;
4. `Placar geral`
   TOP 10 jogagores com maior score: Nome do jogador (3 letras - Fase jogada);
5. `Créditos`
   Créditos;
6. `Fases`
   Cenário de cada fase;
   Elementos de comando;
   Músicas ["As quatro estações", "Não dá pra não pensar", "Quando você passa", "Vâmo pulá"];
   Personagem tocando;

### Personas

1. **`<Jogador#1>`** - `<Irá selecionar o personagem Sandy e jogar o jogo.>`.
2. **`<Jogador#2>`** - `<Irá selecionar o personagem Junior e jogar o jogo.>`.

## Protótipos de Tela

![Diagrama](Diagrama.drawio.png)

## Instalação

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


27 fev - editando readme  - 40'
