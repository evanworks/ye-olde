// yells at a card to rotate
function juice_up(card) {
  animationQueue.add(new Animation(1, "juice-up", {card: card}));
}

// coolaj68 on Stack Overflow...

function shuffle(array) {
  let shuffledArray = [...array];
  let currentIndex = shuffledArray.length;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

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

function howMany(array, value) {
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      n++
    }
  }
  return n;
}
// thank you chatgpt sir
function getAllCSSVariables() {
  const computed = getComputedStyle(document.documentElement);
  const vars = {};
  for (let i = 0; i < computed.length; i++) {
    const name = computed[i];
    if (name.startsWith("--")) {
      vars[name.replace("--", "")] = computed.getPropertyValue(name).trim();
    }
  }
  return vars;
}