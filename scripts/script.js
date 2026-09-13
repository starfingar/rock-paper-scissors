let userScore = 0;
let computerScore = 0;

const divResultado = document.querySelector('#resultado');
const divPlacar = document.querySelector('#placar');
const botoes = document.querySelectorAll('button');

function getComputerChoice() {
  const escolhas = ['pedra', 'papel', 'tesoura'];
  const indice = Math.floor(Math.random() * 3);
  return escolhas[indice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Empate! Ambos escolheram ${playerSelection}.`;
  }

  if (
    (playerSelection === 'pedra' && computerSelection === 'tesoura') ||
    (playerSelection === 'papel' && computerSelection === 'pedra') ||
    (playerSelection === 'tesoura' && computerSelection === 'papel')
  ) {
    userScore++;
    return `Você venceu a rodada! ${playerSelection} vence ${computerSelection}.`;
  } else {
    computerScore++;
    return `O computador venceu a rodada! ${computerSelection} vence ${playerSelection}.`;
  }
}

function checarFimDeJogo() {
  if (userScore === 5 || computerScore === 5) {
    if (userScore === 5) {
      divResultado.textContent = 'Você atingiu 5 pontos e venceu o jogo!';
    } else {
      divResultado.textContent = 'O computador atingiu 5 pontos e venceu.';
    }

    botoes.forEach(botao => botao.disabled = true);
  }
}

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const playerSelection = botao.id;
    const computerSelection = getComputerChoice();
    
    const textoRodada = playRound(playerSelection, computerSelection);
    
    divResultado.textContent = textoRodada;
    divPlacar.textContent = `Jogador: ${userScore} | Computador: ${computerScore}`;
    
    checarFimDeJogo();
  });
});
