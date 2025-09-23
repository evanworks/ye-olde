let deck = [];
let fullDeck;
let shuffledDeck;

let hand = ["-", "-", "-", "-", "-", "-"];
let selectedCards = ["-", "-", "-", "-", "-", "-"];

let turn = true;
let idonthaveagoodnameforthis = 0;
let collectedLoot = false;
let enteredShop = false;

let maxHealth = 50;
let health = maxHealth;
let healthOverflow = true;

let maxActions = 1;
let actions = maxActions;

let battle = true;
let currentMonster;
let enemyHealth;

let xp = 0;
let money = 0;
let maxShopAttackSlots = 3;
let maxShopMagicSlots = 2;
let maxShopFoodSlots = 1;

let debug = true;
let a;
let b;

let colors = getAllCSSVariables();

const animationQueue = new AnimationQueue();

function start() {
  if (!debug) {
    deck.push(rustySword, rustySword, rustySword);
  } else {
    deck.push(rustySword, rustySword, rustySword, slimeball, slimeball);
  }
  if (deck.length > 6 && !debug) {
    deck = [rustySword, rustySword, rustySword, rustySword, rustySword, rustySword]
  }
  fullDeck = deck;
  setTimeout(() => {
    enterBattle();
    document.getElementById("title").style.display = "none";
    document.getElementById("battle").style.display = "block";
    document.getElementById("player").style.display = "block";
  }, 300)

  a = window.getComputedStyle(document.getElementById("monster-health-bar"))
  a = a.getPropertyValue("width");
  b = window.getComputedStyle(document.getElementById("player-health-bar"))
  b = b.getPropertyValue("width");

  if (debug) { document.getElementById("debug").style.display = "block"; }
}