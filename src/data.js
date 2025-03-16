// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// ACTION CARDS
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

const rustySword = {
  file: "rustySword",
  name: "Rusty Sword",
  type: "attack",
  damage: 5,
  actions: 1,
  price: 3,
  action: '',
  img: "rustySword.png"
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
  action: 'Play with a single attack card to use it <span style="color:#a884f3">twice</span>!',
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
  action: 'Repeat least expensive card <span style="color:#a884f3">twice</span> and earn its <span style="color:#f9c22b;">sell value</span>',
  img: 'rustySword.png',
}
const bone = {
  file: "bone",
  name: "Bone",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 12,
  action: '<span style="color:salmon;">2x damage</span> on all played metal cards.',
  img: "bone.png"
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
  action: 'Get <span style="color: #f4d29c">twice</span> as much loot when you kill the enemy.',
  img: "luckPotion.png"
}


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// MONSTERS
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

const slime = {
  name: "Slime",
  description: "It's like jell-o - but don't eat it!",
  img: "res/img/placeholder-portrait.png",
  health: 15,
  damage: 5,
  loot: [slimeball],
}

const skeleton = {
  name: "Skeleton",
  description: "Its bones rattle ominously, and it has spooky glowing eyes!",
  img: "res/img/placeholder-portrait.png",
  health: 25,
  damage: 10,
  loot: [slimeball],
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// SHOPS
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

const firstMarketStall = {
  name: "Market Stall",
  description: "A bright but lonely stall. You wonder how it got here - you're in a dungeon, after all.",
  lootAttack: [rustySword, sword],
  lootMagic: [slimeball, bone],
  lootFood: []
}

const marketStall = {
  name: "Market Stall",
  description: "A bright but lonely stall. You wonder how it got here - you're in a dungeon, after all.",
  lootAttack: [rustySword, sword, longbow],
  lootMagic: [slimeball, bone, greenToad],
  lootFood: []
}







const testWeapon = {
  file: "testWeapon",
  name: "Test Weapon",
  type: "attack",
  damage: 25,
  actions: 1,
  price: 1,
  action: '',
  img: "nothing.png"
}
const testMonster = {
  name: "Test Monster",
  description: "Testing, testing, oops I beat it",
  img: "is this necessary",
  health: 1000,
  damage: 0,
  loot: [],
}