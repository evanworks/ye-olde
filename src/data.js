// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// ACTION CARDS
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

const rustySword = {
  file: "rustySword", // camelCase name
  name: "Rusty Sword", // in-game name
  type: "attack", // attack, magic, food, special
  damage: 5, // damage
  actions: 1, // if it gives any extra actions (number of selected cards)
  price: 3, // price in shop
  action: '', // describes special quality
  img: "rustySword.png" // img file (res/img/...)
}
// battle axe
// club
const mace = {
  file: "mace",
  name: "Mace",
  type: "attack",
  damage: 10,
  actions: 0,
  price: 8,
  action: '',
  img: "mace.png"
}
const claymore = {
  file: "claymore",
  name: "Claymore",
  type: "attack",
  damage: 9,
  actions: 0,
  price: 9,
  action: '',
  img: "claymore.png"
}
// dagger
// katana
const sword = {
  file: "sword",
  name: "Sword",
  type: "attack",
  damage: 8,
  actions: 1,
  price: 9,
  action: '',
  img: "sword.png"
}
const scimitar = {
  file: "scimitar",
  name: "Scimitar",
  type: "attack",
  damage: 11,
  actions: 1,
  price: 10,
  action: '',
  img: "scimitar.png"
}
// longsword
// rapier
// spear
const longbow = {
  file: "longbow",
  name: "Longbow",
  type: "attack",
  damage: 18,
  actions: 1,
  price: 15,
  action: '',
  img: "longbow.png"
}
// crossbow
// flamethrower
// cannon
// slingshot
// battering ram
// siege tower
// squid ink
// iron fist punch
const headbutt = {
  file: "headbutt",
  name: "Headbutt",
  type: "attack",
  damage: 1,
  actions: 2,
  price: 5,
  action: "It's something.",
  img: "placeholder.png"
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// MAGIC //
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

const slimeball = {
  file: "slimeball",
  name: "Slimeball",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 6,
  action: 'Triggers first played attack card <span style="color:var(--magic);">twice</span>',
  img: "slimeball.png"
}
const redSlimeball = {
  file: "redSlimeball",
  name: "Red Slimeball",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 20,
  action: 'Play every other card three times',
  img: "redSlimeball.png"
}
const greenToad = {
  file: "greenToad",
  name: "Green Toad",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 0,
  action: 'Repeat least expensive card <span style="color:var(--magic);">twice</span> and earn its <span style="var(--money)">sell value</span>',
  img: 'placeholder.png',
}
const bone = {
  file: "bone",
  name: "Bone",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 12,
  action: '<span style="padding-left:4px;padding-right:4px;background:var(--healthFull);">2x</span> damage on all played attack cards below <span style="color:var(--healthFull)">10</span> damage',
  img: "bone.png"
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// FOOD
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

const juice = {
  file: "juice",
  name: "Juice",
  type: "food",
  damage: 0,
  actions: 1,
  health: 10, // how much health it heals (in percentage)
  price: 3,
  action: 'Heals <span style="color:var(--healthFull);">10%</span> of total Health',
  img: "juice.png"
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// SPECIAL
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

const luckPotion = {
  file: "luckPotion",
  name: "Luck Potion",
  type: "special",
  damage: 0,
  actions: 1,
  price: 30,
  action: 'Get <span style="color:var(--money)">twice</span> as much loot when you kill the enemy.',
  img: "luckPotion.png"
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// MONSTERS
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

slimeLevel = 0;
const slime = {
  file: "slime",
  name: "Slime",
  description: "It's like jell-o - but don't eat it!",
  img: "res/img/placeholder-portrait.png",
  health: 15,
  scaling: 5,
  damage: 5,
  money: 5,
  loot: [slimeball, juice],
}

skeletonLevel = 0;
const skeleton = {
  file: "skeleton",
  name: "Skeleton",
  description: "Its bones rattle ominously, and it has spooky glowing eyes!",
  img: "res/img/placeholder-portrait.png",
  health: 25,
  scaling: 10,
  damage: 10,
  money: 10,
  loot: [slimeball],
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// SHOPS
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

// works the same as marketStall but has less good loot
const firstMarketStall = {
  name: "Market Stall",
  description: "A bright but lonely stall. You wonder how it got here - you're in a dungeon, after all.",
  lootAttack: [rustySword, sword],
  lootMagic: [slimeball, slimeball, bone], // slight weight on slimeball
  lootFood: [juice]
}

const marketStall = {
  name: "Market Stall",
  description: "A bright but lonely stall. You wonder how it got here - you're in a dungeon, after all.",
  lootAttack: [rustySword, sword, longbow],
  lootMagic: [slimeball, bone, greenToad],
  lootFood: []
}