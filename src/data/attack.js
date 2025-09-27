const rustySword = {
  file: "rustySword", // camelCase name
  name: "Rusty Sword", // in-game name
  type: "attack", // attack, magic, food, special
  damage: 5, // damage
  actions: 1, // if it gives any extra actions (number of selected cards)
  price: 3, // price in shop
  action: '', // describes special quality
  img: "attack/rustySword.png" // img file (res/img/...)
}

// battle axe
// club
const mace = {
  file: "mace",
  name: "Mace",
  type: "attack",
  damage: 25,
  actions: 0,
  price: 19,
  action: '',
  img: "attack/mace.png"
}
const claymore = {
  file: "claymore",
  name: "Claymore",
  type: "attack",
  damage: 19,
  actions: 0,
  price: 13,
  action: '',
  img: "attack/claymore.png"
}
// dagger
// katana
const sword = {
  file: "sword",
  name: "Sword",
  type: "attack",
  damage: 8,
  actions: 1,
  price: 6,
  action: '',
  img: "attack/sword.png"
}
const scimitar = {
  file: "scimitar",
  name: "Scimitar",
  type: "attack",
  damage: 13,
  actions: 1,
  price: 15,
  action: '',
  img: "attack/scimitar.png"
}
// longsword
// rapier
// spear
const rustyBow = {
  file: "rustyBow",
  name: "Rusty Bow",
  type: "attack",
  damage: 11,
  actions: 1,
  price: 11,
  action: '',
  img: "attack/rustyBow.png"
}
const longbow = {
  file: "longbow",
  name: "Longbow",
  type: "attack",
  damage: 16,
  actions: 1,
  price: 14,
  action: '',
  img: "attack/longbow.png"
}
// crossbow
// flamethrower
// cannon
// slingshot
// battering ram
// siege tower
// squid ink
// iron fist punch
const shield = {
  file: "shield",
  name: "Shield",
  type: "magic",
  damage: 0,
  actions: 2,
  price: 14,
  action: '',
  img: "attack/shield.png"
}
const hylianShield = {
  file: "hylianShield",
  name: "Hylian Shield",
  type: "magic",
  damage: 0,
  actions: 3,
  price: 60,
  action: '',
  img: "attack/hylianShield.png"
}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// =MINERALS
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
let flintDamage = 1;
let flint = {
  file: "flint",
  name: "Flint",
  type: "attack",
  damage: flintDamage,
  actions: 1,
  price: 5,
  action: 'Gains <span style="color:var(--healthFull);">1 Damage</span> when played',
  img: "minerals/flint.png",
  context: {
    individual: (animatedCard, card, rect, cardNames) => {
      flintDamage += 1;
      flint.damage = flintDamage;
    }
  }
}
let gemDamage = 2;
let gem = {
  file: "gem",
  name: "Gem",
  type: "attack",
  damage: gemDamage,
  actions: 1,
  price: 10,
  action: 'Gains <span style="color:var(--healthFull);">2 Damage</span> when played',
  img: "minerals/gem.png",
  context: {
    individual: (animatedCard, card, rect, cardNames) => {
      gemDamage += 1;
      gem.damage = gemDamage;
    }
  }
}
