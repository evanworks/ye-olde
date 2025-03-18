// yells at a card to rotate
function juice_up(card) {
  card.classList.add("juicy");
  setTimeout(() => {
    card.classList.remove("juicy");
  }, 500)
}

// coolaj68 on Stack Overflow...

function shuffle(array) {
  shuffledArray = [...array];
  let currentIndex = shuffledArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex], shuffledArray[currentIndex]];
  }

  return shuffledArray
}

function removeItem(array, item) {
  const index = array.indexOf(item);
  if (index > -1) { // only splice array when item is found
    array.splice(index, 1); // 2nd parameter means remove one item only
  }
}
function removeAllOccurrences(array, itemToRemove) {
  return array.filter(item => item !== itemToRemove);
}
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function removeNumbers(str) {
  return str.replace(/[0-9]/g, ''); // oh i love this stuff
}