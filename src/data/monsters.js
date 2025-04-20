slimeLevel = 0; // no let please, it screws up the window thing
const slime = {
  file: "slime",
  name: "Slime",
  description: "It's like jell-o - but don't eat it!",
  img: "res/img/placeholder-portrait.png",
  bg: ["#313638", "#374e4a"],
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
  bg: ["#313638", "#3d4345f"],
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
  bg: ["#531a32", "#642b43"],
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
  bg: ["#531a32", "#642b43"],
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
  bg: ["#374e4a", "#3d4345f"],
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
  bg: ["#531a32", "#753c54"],
  health: 30,
  scaling: 5,
  damage: 30,
  money: 25,
  loot: [tomato, gem, skull, talon],
}
chimaeraLevel = 0;
const chimaera = {
  file: "chimaera",
  name: "Chimæra",
  description: "Either a terrifying fire-breathing hybrid of a lion, goat, and snake, or just a deep-sea fish",
  img: "res/img/placeholder-portrait.png",
  bg: ["#7a3045", "#9e4539"],
  health: 20,
  scaling: 10,
  damage: 40,
  money: 30,
  loot: [skull, gem, talon],
}
basiliskLevel = 0;
const basilisk = {
  file: "basilisk",
  name: "Basilisk",
  description: "Will you be a dunce like Colin?",
  img: "res/img/placeholder-portrait.png",
  bg: ["#313638", "#374e4a"],
  health: 100,
  scaling: 10,
  damage: 20,
  money: 30,
  loot: [skull, gem, talon],
}

function chooseMonster() {
  if (xp < 2) {
    return getRandomItem([slime])
  } else if (xp >= 2 && xp < 4) {
    return getRandomItem([slime, skeleton])
  } else if (xp >= 4 && xp < 6) {
    return getRandomItem([slime, skeleton, spider])
  } else if (xp >= 6 && xp < 8) {
    return getRandomItem([skeleton, spider])
  } else if (xp >= 8 && xp < 10) {
    return getRandomItem([skeleton, spider, minispiders])
  } else if (xp >= 10 && xp < 12) {
    return getRandomItem([minispiders, golem])
  } else if (xp >= 12 && xp < 16) {
    return getRandomItem([minispiders, golem, dragon])
  } else if (xp >= 16 && xp < 18) {
    return getRandomItem([golem, dragon, chimaera])
  } else if (xp >= 20 && xp < 24) {
    return getRandomItem([dragon, chimaera, basilisk])
  }
  else {
    return getRandomItem([dragon, chimaera, basilisk]) // fallback (toughest enemy)
  }
}
