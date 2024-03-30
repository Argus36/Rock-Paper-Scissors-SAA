let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lose: 0
}

updateScoreElement();
 
function PlayGame(playerMove) {
  let result = ''
  const computerMove = randomScore();

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie!';
    }else if (computerMove === 'Paper') {
      result = 'You Lose!';
    }else if (computerMove === 'Scissors') {
      result = 'You Win!';
    }
  }
  if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You Win!';
    }else if (computerMove === 'Paper') {
      result = 'Tie!';
    }else if (computerMove === 'Scissors') {
      result = 'You Lose!';
    }
  }
  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You Lose!';
    }else if (computerMove === 'Paper') {
      result = 'You Win!';
    }else if (computerMove === 'Scissors') {
      result = 'Tie!';
    }
  }

  if (result === 'You Win!') {
    score.wins ++;
  }else if (result === 'You Lose!') {
    score.lose ++;
  }

  document.querySelector('.js-hand-human').src = `Images/${playerMove}-human.jpg`;
  document.querySelector('.js-hand-computer').src = `Images/${computerMove}-computer.jpg`;
  document.querySelector('.js-faces-human').src = `Images/${result}-human-face.jpg`;
  document.querySelector('.js-faces-computer').src = `Images/${result}-computer-face.jpg`;

  document.querySelector('.js-result').
  innerHTML = `${result}`;

  updateScoreElement();

  localStorage.setItem('score', JSON.stringify(score));

}

function updateScoreElement() {
  document.querySelector('.js-score').
  innerHTML = `${score.wins} : ${score.lose}`;
}

function randomScore() {
  let computerMove = '';
  const randomNumber = Math.random();
  
  if (randomNumber <= 1/3) {
    computerMove = 'Rock';
  }else if (randomNumber <= 2/3) {
    computerMove = 'Paper';
  }else if (randomNumber <= 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}

let backgroundModalWindow = document.querySelector('.background-modal-window');
function openModalWindow() {
  backgroundModalWindow.style.display = 'initial';
  document.body.style.overflow = 'hidden';
}
function closeModalWindow() {
  backgroundModalWindow.style.display = 'none';
  document.body.style.overflow = 'auto';
}