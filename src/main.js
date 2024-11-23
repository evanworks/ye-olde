let deck = [];
let battle = true;
let currentMonster;
let health = 50;
let squad = []
let selectedCards = [];

// CARDS

const rustySword = {
  name: "Rusty Sword",
  type: "attack",
  damage: 5,
  price: 3,
  action: '',
  img: "rustySword.png"
}
const slimeball = {
  name: "Slimeball",
  type: "magic",
  damage: 0,
  price: 6,
  action: 'Play with an attack card to use it twice!',
  img: "slimeball.png"
}

// MONSTERS

const slime = {
  name: "Slime",
  description: "It's like jell-o - but don't eat it!",
  img: "res/img/placeholder-portrait.png",
  health: 15,
  deck: [5],
  loot: [slimeball]
}



function start() {
  deck.push(rustySword, slimeball);
  enterBattle(slime)
}

function deal() {
  shuffledDeck = shuffle(deck);
  for (let i = 0; i < 6; i++) { 
    if (shuffledDeck.length < 6) {
      for (let card in shuffledDeck) {
        displayCard(shuffledDeck.pop(), 'slot');
      }
    } else {
      displayCard(shuffledDeck.pop(), 'slot');
    }
  }
}

function displayCard(card, parent) {

  // img/tooltip prep
  const necessaryDiv = document.createElement("div");
  necessaryDiv.className = "tooltip";
  const img = document.createElement("img");
  img.src = "res/img/"+card.img;
  img.draggable = false;
  img.id = card.name;
  necessaryDiv.appendChild(img);
  sample = 0;
  while (true) {
    sample += 1;
    console.log(parent+sample)
    if (document.getElementById(parent + sample).innerHTML == "") {
      parent += sample;
      break;
    }
  }
  console.log(parent)
  const element = document.getElementById(parent);
  element.appendChild(necessaryDiv);

  // tooltip insides

  const tooltip = document.createElement("span");
  tooltip.className = "tooltiptext";
  
  tooltip.innerHTML = "<b>"+card.name+"</b><br/>";
  if (card.damage != 0) {
    tooltip.innerHTML += "<i>"+card.damage+" damage</i><br/>";
  }
  if (card.action != "") {
    tooltip.innerHTML += card.action;
  }

  necessaryDiv.appendChild(tooltip);

  document.getElementById(card.name).addEventListener("click", function() {
    select();
    selectedCards.push(card);
    attack(card.damage);
  }); 

}

function select() {
  element = event.target;
  elementH = element.parentElement;
  element.parentElement.style.position = "relative";
  element.parentElement.style.top = "-30px";
  /*elementH.parentElement.style.background = "transparent";*/
}

function enterBattle(monster) {
  deal()

  document.getElementById("monster-img").src = monster.img;
  document.getElementById("monster-name").innerHTML = monster.name;
  document.getElementById("monster-lvl").innerHTML = "Level " + 1;
  document.getElementById("monster-desc").innerHTML = monster.description;
  document.getElementById("monster-health-num").innerHTML = monster.health;
  enemyHealth = monster.health;
  currentMonster = monster;
}

function attack(damage) {
  info = document.getElementById("monster-health-bar").getBoundingClientRect();
  let percent = (damage * 100) / enemyHealth;
  let barWidth = ( info.width - ((info.width / 100) * percent) );

  enemyHealth -= damage;

  document.getElementById("monster-health-num").innerHTML = enemyHealth;
  document.getElementById("monster-health-bar").style.width = barWidth+"px";
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
let arr = [2, 11, 37, 42];
bean = shuffle(arr);
console.log(arr);
console.log(bean)