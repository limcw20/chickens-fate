//grab list of card divs
const cardslist = document.querySelectorAll(".cards");

//Add event listener to each card divs
//function to check if target is being clicked
function flipCard() {
  console.log("clicked");
  console.log(this);
}
cardslist.forEach((card) => card.addEventListener("click", flipCard));
