# Planejamento: Jogo Pedra, Papel e Tesoura

## Entender o Objetivo Geral

Desenvolver um jogo interativo de Pedra, Papel e Tesoura para navegador, onde o usuário joga contra o computador. A partida é decidida em uma melhor de 5 rodadas.

- Input (Entrada): Escolha do usuário entre as opções ('pedra', 'papel' ou 'tesoura').
- Output (Saída): Mensagem no console indicando quem venceu a rodada/partida.

---

## Divisão do Projeto

- [x] Fase 1: Gerar a escolha aleatória do computador
- [x] Fase 2: Determinar o vencedor de uma única rodada
- [x] Fase 3: Gerenciar a pontuação e o limite de rodada
- [X] Fase 4: Criar a interface visual(HTML/CSS) e conectar o botão ao JS

---

## Detalhamento por Fase

### Fase 1: Escolha do Computador

Objetivo: Criar uma função `getComputerChoice` que retorna aleatoriamente `'pedra'`, `'papel'` ou `'tesoura'`.

Plano:

1. Gerar um número aleatório entre 0 e 2.
2. Mapear esse número para uma das três opções:
    - Se for 0 -> 'pedra'
    - Se for 1 -> 'papel'
    - Se for 2 -> 'tesoura'
3. Retornar a string escolhida.

### Fase 2: Vencedor de uma única rodada

Objetivo: Criar uma função `getUserChoice` que recebe a escolha do usuário e a retorna.

Plano:

1. Pegar a escolha do usuário: Criar getUserChoice (usando prompt e convertendo para letras minúsculas).
2. Comparar e decidir o vencedor: Criar playRound(humanChoice, computerChoice) para fazer a lógica de quem ganha de quem.

### Fase 3: Gerenciar pontuação e limite de 5 Rodadas

Objetivo: Criar uma função `playGame` que executa 5 rodadas, controla os pontos de cada um e declara o vencedor final da partida.

Plano:

1. Criar a função `playGame`.
2. Declarar `userScore = 0` e `computerScore = 0` dentro dela.
3. Criar um loop que execute 5 vezes (de 1 até 5):
    - Pegar uma nova escolha do usuário (`getUserChoice`).
    - Pegar uma nova escolha do computador (`getComputerChoice`).
    - Chamar `playRound` com as escolhas da rodada.
    - Somar o ponto para quem venceu a rodada.
4. Após o término do loop, comparar `userScore` e `computerScore`.
5. Exibir no console o placar final e o vencedor da partida.


### Fase 4: Conexão e Execução no Navegador

Objetivo: Conectar o arquivo de scripts à estrutura básica de HTML para rodar a aplicação através do console do navegador.

Plano:
1. Criar a estrutura inicial no `index.html`.
2. Criar estilo do site através do `style.css`.
3. Importar o `script.js` utilizando a tag `<script src="...">`.
4. Executar o projeto no navegador e interagir via `prompt()` e `console.log()`.
5. Validar os resultados e publicar o repositório no GitHub.


## Pseudocódigo:

```
Função getComputerChoice()
  NumeroAleatorio = Gerar numero aleatorio entre 0 e 2

  SE NumeroAleatorio for 0 ENTÃO
    Retornar 'pedra'
  SENÃO SE NumeroAleatorio for 1 ENTÃO
    Retornar 'papel'
  SENÃO
    Retornar 'tesoura'
FimFunção


Função getUserChoice()
  Escolha = Pedir texto ao usuário
  Retornar Escolha em minúsculas
FimFunção

Função playRound(userChoice, computerChoice)
  SE userChoice for igual a computerChoice ENTÃO
    Retornar 'Empate!'
  SENÃO SE (userChoice == 'pedra' E computerChoice == 'tesoura') OU
           (userChoice == 'papel' E computerChoice == 'pedra') OU
           (userChoice == 'tesoura' E computerChoice == 'papel') ENTÃO
    Retornar 'Você venceu a rodada!'
  SENÃO
    Retornar 'O computador venceu a rodada!'
  FimSe
FimFunção

Função playGame()
  userScore = 0
  computerScore = 0

  PARA contador DE 1 ATÉ 5 FAÇA
    usuario = getUserChoice()
    computador = getComputerChoice()
    resultado = playRound(usuario, computador)

    SE resultado for 'Você venceu a rodada!' ENTÃO
      userScore = userScore + 1
    SENÃO SE resultado for 'O computador venceu a rodada!' ENTÃO
      computerScore = computerScore + 1
    FimSe

    Exibir "Placar atual: Você " + userScore + " X " + computerScore + " Computador"
  FimPara

  Exibir "--- FIM DO JOGO ---"
  SE userScore > computerScore ENTÃO
    Exibir "Parabéns! Você venceu a partida!"
  SENÃO SE computerScore > userScore ENTÃO
    Exibir "O computador venceu a partida!"
  SENÃO
    Exibir "A partida terminou em empate!"
  FimSe
FimFunção
```