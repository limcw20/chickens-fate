//grab list of card divs
const cardslist = document.querySelectorAll(".cards");

//Root card flip variables
let cardIsFlipped = false;
let card1 = undefined;
let card2 = undefined;

//Add event listener to each card divs
//flip 2 cards to match data attribute from div
//if statement to prevent clicking on same exact card to match
function flipCard() {
  if (this === card1) {
    return;
  }
  this.classList.add("flip");
  if (cardIsFlipped !== true) {
    cardIsFlipped = true;
    card1 = this;
    return;
  } else {
    cardIsFlipped = false;
    card2 = this;
    console.log(card1.dataset.image, card2.dataset.image);
    //function to check if cards match
    matchCards();
  }
}
cardslist.forEach((card) => card.addEventListener("click", flipCard));

//cards matched cannot be selected again with if statement
//if wrong, 1sec delay to view cards
function matchCards() {
  if (card1.dataset.image === card2.dataset.image) {
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
  } else {
    setTimeout(() => {
      card1.classList.remove("flip");
      card2.classList.remove("flip");
    }, 500);
  }
}

//shuffle cards and immediately invoke
(function shuffleCards() {
  cardslist.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();
