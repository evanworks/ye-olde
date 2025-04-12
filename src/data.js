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
  damage: 25,
  actions: 0,
  price: 19,
  action: '',
  img: "mace.png"
}
const claymore = {
  file: "claymore",
  name: "Claymore",
  type: "attack",
  damage: 19,
  actions: 0,
  price: 13,
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
  price: 12,
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
// =MAGIC //
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
  price: 6,
  action: 'Repeat least expensive <span style="color: var(--attack)">Attack</span> card <span style="color:var(--magic);">twice</span> and earn half its <span style="var(--money)">sell value</span>',
  img: 'greenToad.png',
}
const bone = {
  file: "bone",
  name: "Bone",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 8,
  action: '<span style="padding-left:4px;padding-right:4px;background:var(--healthFull);">2x</span> damage on all played attack cards below <span style="color:var(--healthFull)">10</span> damage',
  img: "bone.png"
}
const skull = {
  file: "skull",
  name: "Skull",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 22,
  action: '<span style="padding-left:4px;padding-right:4px;background:var(--healthFull);">3x</span> damage on all played attack cards below <span style="color:var(--healthFull)">20</span> damage',
  img: "skull.png"
}
const eyeball = {
  file: "eyeball",
  name: "Eyeball",
  type: "attack", // is actually magic
  damage: "???", // damage changes
  actions: 0,
  price: 15,
  action: 'Mimics enemy\'s attack',
  img: "eyeball.png"
}

let forgePower = 0;
const forge = {
  file: "forge",
  name: "Forge",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 18,
  action: 'All played attack cards will meld into a single one with the combined power of all of them. Destroys after use.',
  loc_var: 'forgePower',
  loc_name: 'power',
  img: 'forge.png'
}

const bag = {
  file: "bag",
  name: "Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 12,
  action: '<span style="color:var(--magic);">+1</span> of each card slot avaiable in <span style="color:var(--money);">Shop</span>',
  img: "bag.png"
}
const bigBag = {
  file: "bigBag",
  name: "Big Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 0,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--special);">All</span> slots available in <span style="color:var(--money);">Shop</span> <span style="color:grey;">(Destroys all other bags)</span>',
  img: "bigBag.png"
}
const greenBag = {
  file: "greenBag",
  name: "Green Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--food);">Food</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "greenBag.png"
}
const violetBag = {
  file: "violetBag",
  name: "Violet Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--magic);">Magic</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "violetBag.png"
}
const crimsonBag = {
  file: "crimsonBag",
  name: "Crimson Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--attack);">Attack</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "crimsonBag.png"
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
  overflow: false, // whether it can overflow health bar
  price: 3,
  action: '<span style="color: grey">Fresh and energizing.</span><br/> Heals <span style="color:var(--healthFull);">10%</span> of total Health',
  img: "juice.png"
}
const tea = {
  file: "tea",
  name: "Tea",
  type: "food",
  damage: 0,
  actions: 0,
  health: 40,
  overflow: false,
  price: 12,
  action: '<span style="color: grey">Warms the heart, strengthens the soul.</span><br/> Heals <span style="color:var(--healthFull);">40%</span> of total Health',
  img: "tea.png"
}
const potato = {
  file: "potato",
  name: "Potato",
  type: "food",
  damage: 0,
  actions: 0,
  health: 100,
  overflow: false,
  price: 30,
  action: '<span style="color: grey">Down to earth.</span><br/> Heals <span style="color:var(--healthFull);">100%</span> of total Health',
  img: "potato.png"
}
const carrot = {
  file: "carrot",
  name: "Carrot",
  type: "food",
  damage: 0,
  actions: 0,
  health: 30,
  overflow: true,
  price: 17,
  action: '<span style="color: grey">Bright and juicy.</span><br/> Heals <span style="color:var(--healthFull);">30%</span> of total Health <span style="color:var(--special);">(can overflow)</span>',
  img: "carrot.png"
}
const tomato = {
  file: "tomato",
  name: "Tomato",
  type: "food",
  damage: 0,
  actions: 0,
  health: 60,
  overflow: true,
  price: 23,
  action: '<span style="color: grey">Smooth and velvety.</span><br/> Heals <span style="color:var(--healthFull);">60%</span> of total Health <span style="color:var(--special);">(can overflow)</span>',
  img: "tomato.png"
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
  img: "flint.png"
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
  img: "gem.png"
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// =SPECIAL
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
  loot: [bone, potato],
}
spiderLevel = 0;
const spider = {
  file: "spider",
  name: "Spider",
  description: "It's almost as tall as you, with 9 red eyes and a vague smile on its face.",
  img: "res/img/placeholder-portrait.png",
  health: 30,
  scaling: 10,
  damage: 15,
  money: 15,
  loot: [tea, eyeball],
}
minispidersLevel = 0;
const minispiders = {
  file: "minispiders",
  name: "Mini-Spiders",
  description: "There are so many!!!!!",
  img: "res/img/placeholder-portrait.png",
  health: 50,
  scaling: 15,
  damage: 20,
  money: 20,
  loot: [eyeball, eyeball],
}
golemLevel = 0;
const golem = {
  file: "golem",
  name: "Golem",
  description: "Big and strong. Its face is stony.",
  img: "res/img/placeholder-portrait.png",
  health: 100,
  scaling: 15,
  damage: 5,
  money: 20,
  loot: [flint, flint, gem],
}
dragonLevel = 0;
const dragon = {
  file: "dragon",
  name: "Dragon",
  description: "Scaly as well as scary, as well as scarry and scabby, hates scenery, you know what I mean.",
  img: "res/img/placeholder-portrait.png",
  health: 30,
  scaling: 5,
  damage: 30,
  money: 20,
  loot: [tomato, gem, eyeball, skull],
}

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //
// =SHOPS
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ //

// works the same as marketStall but has less good loot so you can actually buy stuff early
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
  lootFood: [juice, tea]
}
const tavern = {
  name: "Old Tavern",
  description: "A lively yet strangely quiet tavern. The air smells musty and tired.",
  lootAttack: [claymore, sword, longbow, mace, mace], // maces are popular here due to the strange number of orcs
  lootMagic: [greenToad, bag],
  lootFood: [juice, tea, potato]
}
const blacksmith = {
  name: "Black smith", // naming
  description: "The air is thick with soot and powerful tools gleam on the walls.",
  lootAttack: [claymore, sword, longbow, mace, scimitar],
  lootMagic: [bone, forge],
  lootFood: [potato, potato, carrot]
}
const farmersmarket = {
  name: "Farmer's Market",
  description: "It's a lively, friendly space, mostly full of 25-year-old couples selling various vegetables.",
  lootAttack: [rustySword, flint],
  lootMagic: [greenBag, slimeball, bone],
  lootFood: [potato, tomato, carrot]
}
const bagStore = {
  name: "Bag Store",
  description: "'All we sell is bags. Nothing else. Just bags.'",
  lootAttack: [bag, crimsonBag, crimsonBag, crimsonBag],
  lootMagic: [bag, violetBag, violetBag, violetBag],
  lootFood: [bag, greenBag, greenBag, greenBag]
}
const apothecary = {
  name: "Apothecary",
  description: "A dark and gloomy magic shop. Scary things gleam on the walls.",
  lootAttack: [eyeball, longbow, gem],
  lootMagic: [eyeball, redSlimeball, skull],
  lootFood: [carrot, tomato]
}
/*Chimæra, and Basilisk!*/