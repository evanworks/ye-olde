let deck = [];
let health = 50;
let maxActions = 1;
let maxHands = 2;
let actions = maxActions;
let hands = maxHands

let battle = true;
let currentMonster;
let squad = []
let selectedCards = [];
let turn = true;
let idonthaveagoodnameforthis = 0;
let level = 0;

let money = 5;
let maxShopAttackSlots = 3;
let maxShopMagicSlots = 2;
let maxShopFoodSlots = 0;


function start() {
  deck.push(rustySword, rustySword, rustySword);
  fullDeck = deck;
  setTimeout(() => {
    enterBattle(testMonster);
    document.getElementById("title").style.display = "none";
    document.getElementById("battle").style.display = "block";
  }, 500)
}