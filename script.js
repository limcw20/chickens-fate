//grab list of card divs
const cardslist = document.querySelectorAll(".cards");

//Root card flip variables
let cardIsFlipped = false;
let card1 = undefined;
let card2 = undefined;

//Add event listener to each card divs

function flipCard() {
  this.classList.add("flip");
  if (cardIsFlipped !== true) {
    cardIsFlipped = true;
    card1 = this;
    console.log(cardIsFlipped, card1);
  } else {
    cardIsFlipped = false;
    card2 = this;
    console.log(card1, card2);
  }
}
cardslist.forEach((card) => card.addEventListener("click", flipCard));
