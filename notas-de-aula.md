# Aula 1

## Funcionamento do p5
Usa o canvas para criar um *background*. É possível criar um canvas com o tamanho da tela do usuário: `createCanvas(windowWidth, windowHeight);` .

Plano cartesiano do canvas (Fluxo natural da Web):
* **Origem**: canto superior esquerdo.
* **Eixo-x**: crescente da esquerda para a direita.
* **Eixo-y**: crescente de cima para baixo.

![Eixos](https://usefulangle.com/img/posts/18-graph.jpg)

* Função **setup**: executada uma vez, inicialmente, antes do jogo iniciar.
* Função **draw**: chamada constantemente durante a execução do jogo.

## Funções
`loadImage`
`image` - posição na tela, tamanho na tela, posição na imagem, tamanho na imagem.

## Tarefas
- [x] Animar o plano de fundo
- [x] Animar personagem, mapeando sprite
- [ ] Inserir música de fundo
- [x] Criar classes e organizar arquivos

# Aula 2

*Nota sobre operadores:*
Se houver uma variável que deva ficar limitada a algum valor, em um loop, é possível utilizar a operação de *remainder*.
Exemplo: `x = (x + 1) % max;`. A variável `x` terá valores de 0 a `max`.

## Organização e arquitetura
* Criar classe de inimigo herdando da classe de personagem
* Essa classe de inimigo possui o método `mover()`, para deslocar o inimigo no eixo x.
* **Gravidade**: definir um valor base, valor para a gravidade (aceleração) e ir adicionando à velocidade do objeto
    * Chamar a função que aplica a gravidade dentro do gameLoop
    * Setar uma velocidade inicial para o pulo, seguindo a função da parábola
* Colisões (Funções da biblioteca [p5.collide2D](https://github.com/bmoren/p5.collide2D))
    * Verificar colisões com referência na personagem
    * Precisão do *hit box*
* `noLoop()`: encerrar o gameLoop


## Eventos
* `keyPressed`: função observable de eventos e entradas do teclado, obtendo um `keyCode` correspondente à tecla pressionada

## Tarefas
- [x] Inimigos
- [x] Gravidade
- [x] Colisões
- [x] Dois cenários diferentes com paralaxe, usando transparências
- [x] Limitar número máximo de pulos em 2
- [x] Som do pulo
- [ ] Elementos extras que passem e não colidam com o personagem
- [x] Mensagem de *Game over*

# Aula 3

## Pontuação
* Classe para armazenar a pontuação do usuário
* `Text()` do *p5*
* Ideia: colocar pontuação baseada no tempo e um bônus quando passa por um inimigo

## Game over
* Inserir imagem de *Game over*

## Controle de pulos
* Variável de pulo que é incrementada quando chama a função pulo

## Tarefas
- [x] Pontuação do jogo
- [x] Tela inicial do jogo
- [ ] Moedinha mágica

# Aula 4

* Controle do fluxo de inimigos na tela
* Ideia: ter uma distância base entre inimigos mais uma distância aleatória. Ex: dist = x + rand()
    * Esses valores de distância, rand e velocidade podem ir aumentando para dificultar o jogo
* Arquivo de variáveis e constantes globais
* Classe de jogo, com seus próprios métodos de `draw`, `setup`, etc.
    * *Sketch* atuando como gerenciador de estados do jogo
* Inserir elementos de HTML usando a biblioteca *p5.js*

## Tarefas
* É possível criar uma história usando as funções para adicionar HTML e CSS no Canvas

- [ ] Criar histórias
- [ ] Cenas intermediárias
- [x] Página de Game Over poder reiniciar o jogo
- [x] Guardar maior pontuação