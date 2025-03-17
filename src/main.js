let deck = [];
let maxHealth = 50
let health = maxHealth;
let maxActions = 1;
let maxHands = 2;
let actions = maxActions;
let hands = maxHands

let battle = true;
let currentMonster;
let squad = [];
let selectedCards = [];
let turn = true;
let idonthaveagoodnameforthis = 0;
let xp = 0;

let money = 0;
let maxShopAttackSlots = 3;
let maxShopMagicSlots = 2;
let maxShopFoodSlots = 1;


function start() {
  deck.push(rustySword, rustySword, rustySword, rustySword);
  fullDeck = deck;
  setTimeout(() => {
    enterBattle();
    document.getElementById("title").style.display = "none";
    document.getElementById("battle").style.display = "block";
  }, 500)
}