
Algoritmos para Geração de Labirintos Aleatórios
1. Algoritmo de Kruskal:

Este algoritmo é um método clássico para gerar labirintos aleatórios. Ele funciona da seguinte maneira:

Comece com uma grade de células, cada uma com uma parede em cada lado.
Embaralhe todas as paredes.
Para cada parede, faça o seguinte:
Se a parede separa duas células que não estão conectadas, remova a parede.
Se a parede separa duas células que já estão conectadas, ignore a parede.
Repita as etapas 2 e 3 até que não existam mais paredes.
O algoritmo de Kruskal garante que o labirinto gerado tenha um único caminho entre a entrada e a saída.

2. Algoritmo de Wilson:

Este algoritmo é outro método popular para gerar labirintos aleatórios. Ele funciona da seguinte maneira:

Comece com uma única célula.
Escolha aleatoriamente uma célula adjacente à célula atual.
Remova a parede entre as duas células.
Repita as etapas 2 e 3 até que todas as células estejam conectadas.
O algoritmo de Wilson pode gerar labirintos com vários caminhos entre a entrada e a saída.

Vantagens e Desvantagens:

Algoritmo de Kruskal:

Vantagens:
Garante um único caminho entre a entrada e a saída.
Gera labirintos com menos becos sem saída.
Desvantagens:
Pode ser mais lento que o algoritmo de Wilson.
Algoritmo de Wilson:

Vantagens:
É mais rápido que o algoritmo de Kruskal.
Gera labirintos com vários caminhos entre a entrada e a saída.
Desvantagens:
Pode gerar labirintos com mais becos sem saída.
Outros Algoritmos:

Algoritmo de Prim: Similar ao algoritmo de Kruskal, mas usa uma estratégia diferente para escolher as paredes a serem removidas.
Algoritmo de Aldous-Broder: Um algoritmo simples que gera labirintos com um único caminho entre a entrada e a saída.
Algoritmo de Recursive Division: Divide a grade em sub-grades e gera labirintos recursivamente em cada sub-grade.
Recursos Adicionais:

Geração de Labirintos: http://maizalamonato.blogspot.com/2014/09/geradores-de-labirintos.html
Algoritmo de Kruskal: https://es.wikipedia.org/wiki/Algoritmo_de_Kruskal
Algoritmo de Wilson: https://www.angel24.es/es/blog/i/modelo-wilson-logistica