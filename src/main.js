let deck = [];
let health = 50;
let maxActions = 1
let actions = maxActions;

let battle = true;
let currentMonster;
let squad = []
let selectedCards = [];
let turn = true;
let idonthaveagoodnameforthis = 0;


function start() {
  deck.push(bone, luckPotion, mace, redSlimeball, rustySword, scimitar, slimeball, sword);
  fullDeck = deck;
  enterBattle(slime);
}