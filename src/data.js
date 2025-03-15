// ACTION CARDS

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
const sword = {
  file: "sword",
  name: "Sword",
  type: "attack",
  damage: 8,
  actions: 1,
  price: 5,
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
const mace = {
  file: "mace",
  name: "Mace",
  type: "attack",
  damage: 10,
  actions: 1,
  price: 8,
  action: '',
  img: "mace.png"
}

// MAGIC
const slimeball = {
  file: "slimeball",
  name: "Slimeball",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 6,
  action: 'Play with an attack card to use it twice!',
  img: "slimeball.png"
}
const redSlimeball = {
  file: "redSlimeball",
  name: "Red Slimeball",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 20,
  action: 'Play every other card three times!',
  img: "redSlimeball.png"
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
// SPECIAL
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

// MONSTERS
const slime = {
  name: "Slime",
  description: "It's like jell-o - but don't eat it!",
  img: "res/img/placeholder-portrait.png",
  health: 15,
  damage: 5,
  loot: [slimeball]
}