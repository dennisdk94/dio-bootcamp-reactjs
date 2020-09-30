const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

//função para virar a carta
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('card-flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;
  checkForMatch();
}

//função que verfica se as cartas são  iguais
function checkForMatch() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards();
    return;
  }

  unflipCards();
}

//função que desabilita as cartas
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

//função que  dsvira as cartas
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('card-flip');
    secondCard.classList.remove('card-flip');

    resetBoard();
  }, 1500);
}

//função que resta o  tabuleiro
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [fistCard, secondCard] = [null, null];
}

(function shuffer() {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  })
}
)()


//função que adiciona evento de cliqu na  carta
cards.forEach((card) => {
  card.addEventListener('click', flipCard);
})
