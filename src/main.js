let deck = [];
let selectedCards = ["-", "-", "-", "-", "-", "-"];
let squad = []; // not sure yet if this is gonna be used at all
let turn = true;
let idonthaveagoodnameforthis = 0;
let animationList = [];

let maxHealth = 50;
let health = maxHealth;
let healthOverflow = true;

let maxActions = 1;
let actions = maxActions;
let maxHands = 2;
let hands = maxHands;

let battle = true;
let currentMonster;

let xp = 0;
let money = 0;
let maxShopAttackSlots = 3;
let maxShopMagicSlots = 2;
let maxShopFoodSlots = 1;

let debug = false;

function start() {
  if(!debug) {deck.push(rustySword, rustySword, rustySword);} else { deck.push(longbow,longbow,longbow,longbow,longbow,longbow,longbow,longbow,longbow,longbow,longbow,longbow,longbow,longbow,longbow) }
  fullDeck = deck;
  setTimeout(() => {
    enterBattle();
    document.getElementById("title").style.display = "none";
    document.getElementById("battle").style.display = "block";
    document.getElementById("player").style.display = "block";
  }, 300)
}