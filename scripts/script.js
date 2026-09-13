function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'pedra';
  } else if (randomNumber === 1) {
    return 'papel';
  } else {
    return 'tesoura';
  }
}

function getUserChoice() {
  let userChoice = prompt('Escolha entre pedra, papel ou tesoura').toLowerCase();

  return userChoice;
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Empate';
  } else if (
    (userChoice === 'pedra' && computerChoice === 'tesoura') ||
    (userChoice === 'papel' && computerChoice === 'pedra') ||
    (userChoice === 'tesoura' && computerChoice === 'papel')
  ) {
    return 'Você venceu a rodada!';
  } else {
    return 'O computador venceu a rodada!';
  }
}

function playGame() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    let usuario = getUserChoice();
    let computador = getComputerChoice();
    let resultado = playRound(usuario, computador);

    console.log(`Rodada ${i}: Você escolheu ${usuario} e o computador escolheu ${computador}. Resultado: ${resultado}`);

    if (resultado === 'Você venceu a rodada!') {
      userScore += 1;
    } else if (resultado === 'O computador venceu a rodada!') {
      computerScore += 1;
    }
  }

  if (userScore > computerScore) {
    return 'Você venceu o jogo!';
  } else if (computerScore > userScore) {
    return 'O computador venceu o jogo!';
  } else {
    return 'A partida terminou em empate!';
  }
}