// works the same as marketStall but has less good loot so you can actually buy stuff early
const firstMarketStall = {
  name: "Market Stall",
  description: "A bright but lonely stall. You wonder how it got here - you're in a dungeon, after all.",
  lootAttack: [rustySword, rustyBow, sword],
  lootMagic: [slimeball, slimeball, bone], // slight weight on slimeball
  lootFood: [juice]
}
const marketStall = {
  name: "Market Stall",
  description: "A bright but lonely stall. You wonder how it got here - you're in a dungeon, after all.",
  lootAttack: [rustySword, rustyBow, sword, longbow, shield],
  lootMagic: [slimeball, bone, greenToad, poison],
  lootFood: [juice, tea]
}
const tavern = {
  name: "Old Tavern",
  description: "A lively yet strangely quiet tavern. The air smells musty and tired.",
  lootAttack: [claymore, rustyBow, sword, longbow, mace, mace, shield], // maces are popular here due to the strange number of orcs
  lootMagic: [greenToad, bag, poison, palePotion],
  lootFood: [juice, greenTea, potato]
}
const blacksmith = {
  name: "Black smith", // naming
  description: "The air is thick with soot and powerful tools gleam on the walls.",
  lootAttack: [claymore, sword, longbow, mace, scimitar, shield],
  lootMagic: [bone, forge, bomb],
  lootFood: [potato, potato, carrot]
}
const farmersmarket = {
  name: "Farmer's Market",
  description: "It's a lively, friendly space, mostly full of 25-year-old couples selling various vegetables.",
  lootAttack: [rustySword, rustyBow, flint],
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
  lootMagic: [eyeball, skull, talon, palePotion, poison],
  lootFood: [carrot, tomato]
}
const eatery = {
  name: "Eatery",
  description: "A lively restaurant.",
  lootAttack: [carrot, tomato, pizza, greenTea],
  lootMagic: [carrot, tomato, pizza, blackTea],
  lootFood: [carrot, tomato, pizza, whiteTea]
}
const hut = {
  name: "Hut",
  description: "A hut",
  lootAttack: [eyeball, gem],
  lootMagic: [skull, talon, violetBag, scrollI, poison, palePotion, bitterPoison],
  lootFood: [carrot, tomato, greenTea]
}
const metalsmith = {
  name: "Metalsmith",
  description: "An advanced weapon shop.",
  lootAttack: [rustySword, mace, claymore],
  lootMagic: [sword, scimitar, rustyBow],
  lootFood: [longbow, shield, flint, hylianShield]
}
const shady = {
  name: "Shady Corner",
  description: "Packed with traders of magic of all sorts.",
  lootAttack: [slimeball, redSlimeball, greenToad, palePotion],
  lootMagic: [bone, skull, eyeball, poison, bomb],
  lootFood: [scrollI, scrollII, talon, bitterPoison]
}
const theBelovedScrollShop = {
  name: "The Beloved Scroll Shop",
  description: "AAAAAAAAAAAAAA",
  lootAttack: [scrollI, scrollIV],
  lootMagic: [scrollII],
  lootFood: [scrollIII],
}
const potionShop = {
  name: "Potion Shop",
  description: "A mystic shop. Or so they say...",
  lootAttack: [poison],
  lootMagic: [palePotion],
  lootFood: [bitterPoison],
}

// chooses valid shops and returns a random one based on xp
function chooseShop() {
  if (xp < 2) {
    return getRandomItem([firstMarketStall])
  } else if (xp >= 2 && xp < 4) {
    return getRandomItem([marketStall])
  } else if (xp >= 4 && xp < 8) {
    return getRandomItem([marketStall, tavern, blacksmith])
  } else if (xp >= 8 && xp < 14) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket])
  } else if (xp >= 14 && xp < 20) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket, bagStore, apothecary])
  } else if (xp >= 20 && xp < 24) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket, bagStore, apothecary, hut, eatery])
  } else if (xp >= 24 && xp < 30) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket, bagStore, apothecary, hut, eatery, metalsmith, shady])
  } else {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket, bagStore, apothecary, hut, eatery, metalsmith, shady, theBelovedScrollShop, potionShop]) // all of them
  }
}