//..............................................................................................
//.........AAAAAAA.............................................................kkkkkk...........
//........AAAAAAAA.........ttttt.....ttttt.....................................kkkkkk...........
//........AAAAAAAA.........ttttt.....ttttt.....................................kkkkkk...........
//.......AAAAAAAAAA........ttttt.....ttttt.....................................kkkkkk...........
//.......AAAAAAAAAA........ttttt.....ttttt.....................................kkkkkk...........
//.......AAAAAAAAAA.....Atttttttttttttttttttt....aaaaaaaa.........cccccccc.....kkkkkk...kkkkkk..
//......AAAAAAAAAAAA....Atttttttttttttttttttt..aaaaaaaaaaaa......ccccccccccc...kkkkkk...kkkkkk..
//......AAAAAAAAAAAA....Atttttttttttttttttttt.aaaaaaaaaaaaaa...ccccccccccccc...kkkkkk..kkkkkkk..
//......AAAAAAAAAAAA....Atttttttttttttttttttt.aaaaaaaaaaaaaa...cccccccccccccc..kkkkkk.kkkkkkk...
//.....AAAAAA..AAAAAA...Atttttttttttttttttttt.aaaaaaaaaaaaaa..ccccccccccccccc..kkkkkkkkkkkkk....
//.....AAAAAA..AAAAAA......ttttt.....ttttt...aaaaaa....aaaaa..ccccccc..ccccccc.kkkkkkkkkkkk.....
//.....AAAAAA..AAAAAA......ttttt.....ttttt....aaaaa.aaaaaaaa..cccccc....cccccc.kkkkkkkkkkk......
//....AAAAAA...AAAAAAA.....ttttt.....ttttt......aaaaaaaaaaaa..cccccc...........kkkkkkkkkkk......
//....AAAAAAAAAAAAAAAA.....ttttt.....ttttt....aaaaaaaaaaaaaa..ccccc............kkkkkkkkkkkk.....
//....AAAAAAAAAAAAAAAA.....ttttt.....ttttt....aaaaaaaaaaaaaa..ccccc............kkkkkkkkkkkk.....
//...AAAAAAAAAAAAAAAAAA....ttttt.....ttttt...aaaaaaaaa.aaaaa..cccccc....ccccc..kkkkkkkkkkkkk....
//...AAAAAAAAAAAAAAAAAA....ttttt.....ttttt...aaaaaa....aaaaa..cccccc....cccccc.kkkkkkkkkkkkk....
//..AAAAAAAAAAAAAAAAAAAA...ttttt.....ttttt...aaaaaa...aaaaaa..ccccccc..cccccc..kkkkkk.kkkkkkk...
//..AAAAAA.......AAAAAAA...tttttttt..ttttttttaaaaaaaaaaaaaaa..ccccccccccccccc..kkkkkk..kkkkkkk..
//..AAAAAA........AAAAAA...tttttttt..ttttttttaaaaaaaaaaaaaaa...cccccccccccccc..kkkkkk..kkkkkkk..
//.AAAAAAA........AAAAAAA..tttttttt..tttttttt.aaaaaaaaaaaaaaa..ccccccccccccc...kkkkkk...kkkkkk..
//.AAAAAA.........AAAAAAA..tttttttt..tttttttt.aaaaaaaaaaaaaaa....cccccccccc....kkkkkk...kkkkkk..
//...........................tttttt....tttttt...aaaaa.............ccccccc.......................
//..............................................................................................

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
  damage: 11,
  actions: 1,
  price: 12,
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
  damage: 12,
  actions: 1,
  price: 8,
  action: '',
  img: "attack/rustyBow.png"
}
const longbow = {
  file: "longbow",
  name: "Longbow",
  type: "attack",
  damage: 18,
  actions: 1,
  price: 15,
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
  img: "minerals/flint.png"
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
  img: "minerals/gem.png"
}

//......................................................................................
//.............................................................giiii....................
//.MMMMMMMM......MMMMMMMM.....................................ggiiii....................
//.MMMMMMMM......MMMMMMMM.....................................ggiiii....................
//.MMMMMMMM.....MMMMMMMMM.....................................ggiiii....................
//.MMMMMMMM.....MMMMMMMMM.....................................ggiiii....................
//.MMMMMMMMM....MMMMMMMMM.....................................ggiiii....................
//.MMMMMMMMM....MMMMMMMMM.....aaaaaaaa.........ggggggggggggg..ggiiii......cccccccc......
//.MMMMMMMMM...MMMMMMMMMM....aaaaaaaaaaa......gggggggggggggg..ggiiii.....ccccccccccc....
//.MMMMMMMMM...MMMMMMMMMM...aaaaaaaaaaaaa....ggggggggggggggg..ggiiii...icccccccccccc....
//.MMMMMMMMM...MMMMMMMMMM..Maaaaaaaaaaaaa...aggggggggggggggg..ggiiii...iccccccccccccc...
//.MMMMMMMMMM..MMMMMMMMMM..Maaaaaaaaaaaaaa..aggggggggggggggg..ggiiii..iiccccccccccccc...
//.MMMMMMMMMM.MMMMMMMMMMM..Maaaaa...aaaaaa.aaggggg...ggggggg..ggiiii..iiccccc..ccccccc..
//.MMMMMMMMMM.MMMMMMMMMMM..Maaaa.aaaaaaaaa.aagggg.....gggggg..ggiiii..iicccc....cccccc..
//.MMMMM.MMMM.MMMMMMMMMMM....aaaaaaaaaaaaa.aagggg.....gggggg..ggiiii..iicccc............
//.MMMMM.MMMMMMMMM.MMMMMM...aaaaaaaaaaaaaa.aagggg.....gggggg..ggiiii..iiccc.............
//.MMMMM.MMMMMMMMM.MMMMMM..Maaaaaaaaaaaaaa.aagggg.....gggggg..ggiiii..iiccc.............
//.MMMMM.MMMMMMMMM.MMMMMM..Maaaaaaa.aaaaaa.aagggg.....gggggg..ggiiii..iicccc....ccccc...
//.MMMMM.MMMMMMMMM.MMMMMM.MMaaaa....aaaaaa.aaggggg...ggggggg..ggiiii..iicccc....cccccc..
//.MMMMM..MMMMMMMM.MMMMMM.MMaaaa...aaaaaaa.aagggggg.gggggggg..ggiiii..iiccccc..cccccc...
//.MMMMM..MMMMMMM..MMMMMM.MMaaaaaaaaaaaaaa..aggggggggggggggg..ggiiii..iiccccccccccccc...
//.MMMMM..MMMMMMM..MMMMMM.MMaaaaaaaaaaaaaa..aggggggggggggggg..ggiiii...iccccccccccccc...
//.MMMMM..MMMMMMM..MMMMMM..Maaaaaaaaaaaaaa...ggggggggggggggg..ggiiii...icccccccccccc....
//.MMMMM...MMMMMM..MMMMMM..Maaaaaaaaaaaaaa....gggggggggggggg..ggiiii.....cccccccccc.....
//...........................aaaaa................g...gggggg..............ccccccc.......
//.........................................aaggggg...ggggggg............................
//..........................................agggggggggggggg.............................
//..........................................agggggggggggggg.............................
//..........................................agggggggggggggg.............................
//...........................................ggggggggggggg..............................
//.............................................gggggggg.................................
//......................................................................................

const slimeball = {
  file: "slimeball",
  name: "Slimeball",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 6,
  action: 'Triggers first played attack card <span style="color:var(--magic);">twice</span>',
  img: "magic/slimeball.png"
}
const redSlimeball = {
  file: "redSlimeball",
  name: "Red Slimeball",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 20,
  action: 'Triggers first played attack card <span style="color:var(--magic);">thrice</span>',
  img: "magic/redSlimeball.png"
}
const greenToad = {
  file: "greenToad",
  name: "Green Toad",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 6,
  action: 'Repeat least expensive <span style="color: var(--attack)">Attack</span> card and earn half its <span style="var(--money)">sell value</span>',
  img: 'magic/greenToad.png',
}
const bone = {
  file: "bone",
  name: "Bone",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 8,
  action: '<span style="padding-left:4px;padding-right:4px;background:var(--healthFull);">2x</span> damage on all played attack cards below <span style="color:var(--healthFull)">10</span> damage',
  img: "magic/bone.png"
}
const skull = {
  file: "skull",
  name: "Skull",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 22,
  action: '<span style="padding-left:4px;padding-right:4px;background:var(--healthFull);">3x</span> damage on all played attack cards below <span style="color:var(--healthFull)">20</span> damage',
  img: "magic/skull.png"
}
const eyeball = {
  file: "eyeball",
  name: "Eyeball",
  type: "attack", // is actually magic
  damage: "???", // damage changes
  actions: 0,
  price: 15,
  action: 'Mimics enemy\'s attack',
  img: "magic/eyeball.png"
}

let forgePower = 0;
const forge = {
  file: "forge",
  name: "Forge",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 18,
  action: 'All played <span style="color: var(--attack)">Attack</span> cards will meld into a single one with the combined <span style="color: var(--healthFull)">damage</span> of all of them. Destroys on use.',
  loc_var: 'forgePower',
  loc_name: 'power',
  img: 'magic/forge.png'
}

const talon = {
  file: "talon",
  name: "Talon",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 18,
  action: 'All played cards will deal <span style="color:var(--magic);">2x damage</span> and be <span style="color: var(--healthFull)">destroyed</span>',
  img: 'magic/talon.png'
}

const poison = {
  file: "poison",
  name: "Poison",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 8,
  action: '<span style="color:var(--attack);">Destroy</span> a selected card in your inventory. <br/><span style="color:var(--healthFull);">consumable</span>',
  msg: "<div class='destroyText'>Choose a card to destroy</div>",
  img: "potions/poison.png"
}
const bitterPoison = {
  file: "bitterPoison",
  name: "Bitter Poison",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 14,
  action: '<span style="color:var(--attack);">Destroy</span> two selected cards in your inventory. <br/><span style="color:var(--healthFull);">consumable</span>',
  msg: "<div class='destroyText' style='color:var(--magic)'>Choose two cards to destroy</div>",
  img: "potions/bitterPoison.png"
}
let paleBuffedCards = []
const palePotion = {
  file: "palePotion",
  name: "Pale Potion",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 8,
  action: 'Add <span style="color:var(--bone);">+5 Damage</span> to a selected card in your inventory. <br/><span style="color:var(--healthFull);">consumable</span>',
  msg: "<div class='destroyText' style='color:var(--bone)'>Choose a card type to buff</div>",
  img: "potions/palePotion.png"
}

const bag = {
  file: "bag",
  name: "Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 12,
  action: '<span style="color:var(--magic);">+1</span> of each card slot avaiable in <span style="color:var(--money);">Shop</span>',
  img: "bags/bag.png"
}
const bigBag = {
  file: "bigBag",
  name: "Big Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 0,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--special);">All</span> slots available in <span style="color:var(--money);">Shop</span> <span style="color:grey;">(Destroys all other bags)</span>',
  img: "bags/bigBag.png"
}
const greenBag = {
  file: "greenBag",
  name: "Green Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--food);">Food</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "bags/greenBag.png"
}
const violetBag = {
  file: "violetBag",
  name: "Violet Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--magic);">Magic</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "bags/violetBag.png"
}
const crimsonBag = {
  file: "crimsonBag",
  name: "Crimson Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--attack);">Attack</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "bags/crimsonBag.png"
}
const scrollI = {
  file: "scrollI",
  name: "Scroll I",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 40,
  action: 'Permanently increases <span style="color:var(--healthFull);">max health</span> by <span style="color:var(--healthFull);">5</span>',
  img: "scrolls/scrollI.png"
}
const scrollII = {
  file: "scrollII",
  name: "Scroll II",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 40,
  action: 'Permanently increases <span style="color:var(--healthFull);">max health</span> by <span style="color:var(--healthFull);">5</span>',
  img: "scrolls/scrollII.png"
}
const scrollIII = {
  file: "scrollIII",
  name: "Scroll III",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 40,
  action: 'Permanently increases <span style="color:var(--healthFull);">max health</span> by <span style="color:var(--healthFull);">5</span>',
  img: "scrolls/scrollIII.png"
}
const scrollIV = {
  file: "scrollIV",
  name: "Scroll IV",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 40,
  action: 'Permanently increases <span style="color:var(--healthFull);">max health</span> by <span style="color:var(--healthFull);">5</span>',
  img: "scrolls/scrollIV.png"
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

let gainedVIPCard = false;
const vipCard = {
  file: "vipCard",
  name: "VIP Card",
  type: "special",
  damage: 0,
  actions: 1,
  price: 30,
  action: 'Grants you <span style="color:var(--special)">unique benefits</span> at the eatery and its chains.',
  img: "luckPotion.png"
}


//.........................................................................
//.FFFFFFFFFFFFFFFF.................................................ddddd..
//.FFFFFFFFFFFFFFFF.................................................ddddd..
//.FFFFFFFFFFFFFFFF.................................................ddddd..
//.FFFFFFFFFFFFFFFF.................................................ddddd..
//.FFFFFFFFFFFFFFFF.................................................ddddd..
//.FFFFF................ooooooooo.........ooooooooo.........ddddddd.ddddd..
//.FFFFF...............ooooooooooo.......oooooooooooo......dddddddddddddd..
//.FFFFF.............Fooooooooooooo.....oooooooooooooo....odddddddddddddd..
//.FFFFFFFFFFFFFFF...Foooooooooooooo...ooooooooooooooo....odddddddddddddd..
//.FFFFFFFFFFFFFFF..FFoooooooooooooo...oooooooooooooooo..oodddddddddddddd..
//.FFFFFFFFFFFFFFF..FFooooo...ooooooo.ooooooo....oooooo..oodddd...ddddddd..
//.FFFFFFFFFFFFFFF..FFoooo.....oooooo.oooooo.....oooooo..oodddd....dddddd..
//.FFFFFFFFFFFFFFF..FFooo......oooooo.oooooo......oooooooooddd.....dddddd..
//.FFFFF............FFooo......oooooo.oooooo......oooooooooddd......ddddd..
//.FFFFF............FFooo......oooooo.oooooo......oooooooooddd......ddddd..
//.FFFFF............FFooo......oooooo.oooooo......oooooooooddd.....dddddd..
//.FFFFF............FFoooo.....oooooo.oooooo.....oooooo..oodddd....dddddd..
//.FFFFF............FFooooo...ooooooo..oooooo...ooooooo..oodddd...ddddddd..
//.FFFFF............FFoooooooooooooo...oooooooooooooooo..oodddddddddddddd..
//.FFFFF.............Foooooooooooooo....oooooooooooooo....odddddddddddddd..
//.FFFFF..............ooooooooooooo.....oooooooooooooo....odddddddddddddd..
//.FFFFF...............ooooooooooo.......ooooooooooo.......dddddddddddddd..
//.......................ooooooo...........oooooooo..........ddddd.........
//.........................................................................

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
  img: "food/juice.png"
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
  img: "food/tea.png"
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
  img: "food/potato.png"
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
  img: "food/carrot.png"
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
  img: "food/tomato.png"
}
const pizza = {
  file: "pizza",
  name: "Pizza",
  type: "food",
  damage: 0,
  actions: 0,
  health: 100,
  overflow: true,
  price: 42,
  action: '<span style="color: grey">Greasy.</span><br/> Heals <span style="color:var(--healthFull);">100%</span> of total Health <span style="color:var(--special);">(can overflow)</span>',
  img: "food/pizza.png"
}

//......................................................................................................................................
//.MMMMMMMM......MMMMMMMM...............................................................................................................
//.MMMMMMMM......MMMMMMMM........................................................sttttt.................................................
//.MMMMMMMM.....MMMMMMMMM........................................................sttttt.................................................
//.MMMMMMMM.....MMMMMMMMM........................................................sttttt.................................................
//.MMMMMMMMM....MMMMMMMMM........................................................sttttt.................................................
//.MMMMMMMMM....MMMMMMMMM......ooooooooo......onnnn.nnnnnnn........ssssssss....sssttttttt.....eeeeeeee.....eerrrr.rrrr....ssssssss......
//.MMMMMMMMM...MMMMMMMMMM....oooooooooooo.....onnnnnnnnnnnnn.....ssssssssssss..sssttttttt...eeeeeeeeeee....eerrrrrrrrr..ssssssssssss....
//.MMMMMMMMM...MMMMMMMMMM...oooooooooooooo....onnnnnnnnnnnnnn...nsssssssssssss.sssttttttt..teeeeeeeeeeee...eerrrrrrrrr.rsssssssssssss...
//.MMMMMMMMM...MMMMMMMMMM...ooooooooooooooo...onnnnnnnnnnnnnn...nsssssssssssss.sssttttttt..teeeeeeeeeeeee..eerrrrrrrrr.rsssssssssssss...
//.MMMMMMMMMM..MMMMMMMMMM..Mooooooooooooooo...onnnnnnnnnnnnnn...nsssss..ssssss.sssttttttt.tteeeeeeeeeeeee..eerrrrrrrrr.rsssss..ssssss...
//.MMMMMMMMMM.MMMMMMMMMMM..Mooooo....ooooooo..onnnnn...nnnnnn...nsssss...sssss...sttttt...tteeee...eeeeee..eerrrrrrr...rsssss...sssss...
//.MMMMMMMMMM.MMMMMMMMMMM..Mooooo.....oooooo..onnnn.....nnnnn...nsssssssss.......sttttt...tteee.....eeeeee.eerrrrr.....rsssssssss.......
//.MMMMM.MMMM.MMMMMMMMMMM.MMoooo......oooooo..onnnn.....nnnnn...nsssssssssss.....sttttt..ttteeeeeeeeeeeeee.eerrrr......rsssssssssss.....
//.MMMMM.MMMMMMMMM.MMMMMM.MMoooo......oooooo..onnnn.....nnnnn...nsssssssssssss...sttttt..ttteeeeeeeeeeeeee.eerrrr......rsssssssssssss...
//.MMMMM.MMMMMMMMM.MMMMMM.MMoooo......oooooo..onnnn.....nnnnn....sssssssssssss...sttttt..ttteeeeeeeeeeeeee.eerrrr.......sssssssssssss...
//.MMMMM.MMMMMMMMM.MMMMMM.MMoooo......oooooo..onnnn.....nnnnn......ssssssssssss..sttttt..ttteeeeeeeeeeeeee.eerrrr.........ssssssssssss..
//.MMMMM.MMMMMMMMM.MMMMMM..Mooooo....ooooooo..onnnn.....nnnnn..nnssss.sssssssss..sttttt...tteee.....eeeee..eerrrr.....rrssss.sssssssss..
//.MMMMM..MMMMMMMM.MMMMMM..Moooooo...oooooo...onnnn.....nnnnn..nnssss....ssssss..sttttt...tteeee...eeeeeee.eerrrr.....rrssss....ssssss..
//.MMMMM..MMMMMMM..MMMMMM..Mooooooooooooooo...onnnn.....nnnnn..nnssssssssssssss..sttttttt.tteeeeeeeeeeeee..eerrrr.....rrssssssssssssss..
//.MMMMM..MMMMMMM..MMMMMM...oooooooooooooo....onnnn.....nnnnn...nssssssssssssss..sttttttt..teeeeeeeeeeeee..eerrrr......rssssssssssssss..
//.MMMMM..MMMMMMM..MMMMMM...oooooooooooooo....onnnn.....nnnnn...nsssssssssssss...sttttttt..teeeeeeeeeeee...eerrrr......rsssssssssssss...
//.MMMMM...MMMMMM..MMMMMM.....ooooooooooo.....onnnn.....nnnnn....ssssssssssss.....ttttttt...eeeeeeeeeee....eerrrr.......ssssssssssss....
//.............................oooooooo............................ssssssss.........ttttt.....eeeeeee.....................ssssssss......
//......................................................................................................................................

slimeLevel = 0;
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
    return getRandomItem([spider, minispiders, golem])
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

//.............................................................................
//......SSSSSSSS...............................................................
//....SSSSSSSSSSSS.....hhhhhh..................................................
//...SSSSSSSSSSSSSS....hhhhhh..................................................
//..SSSSSSSSSSSSSSSS...hhhhhh..................................................
//.SSSSSSSSSSSSSSSSS...hhhhhh..................................................
//.SSSSSSS...SSSSSSSS..hhhhhh..................................................
//.SSSSSS......SSSSSS..hhhhhhhhhhhhh.........ooooooooo......ppppp.ppppppp......
//.SSSSSS......SSSSSS..hhhhhhhhhhhhhhh......ooooooooooo.....pppppppppppppp.....
//.SSSSSSS.............hhhhhhhhhhhhhhh....oooooooooooooo....ppppppppppppppp....
//.SSSSSSSSSSS.........hhhhhhhhhhhhhhhh...ooooooooooooooo...pppppppppppppppp...
//.SSSSSSSSSSSSSSS.....hhhhhhhhhhhhhhhh..hooooooooooooooo...pppppppppppppppp...
//..SSSSSSSSSSSSSSSS...hhhhhhh...hhhhhh..hoooooo...ooooooo..ppppppp..ppppppp...
//...SSSSSSSSSSSSSSS...hhhhhh....hhhhhh..hooooo.....oooooo..pppppp....pppppp...
//.....SSSSSSSSSSSSSS..hhhhhh....hhhhhh..hoooo......oooooo..pppppp.....pppppp..
//.........SSSSSSSSSS..hhhhhh....hhhhhh..hoooo......oooooo..ppppp......pppppp..
//.SSSSS......SSSSSSSS.hhhhhh....hhhhhh..hoooo......oooooo..ppppp......pppppp..
//.SSSSSS.......SSSSSS.hhhhhh....hhhhhh..hoooo......oooooo..pppppp.....ppppp...
//.SSSSSS.......SSSSSS.hhhhhh....hhhhhh..hooooo.....oooooo..pppppp....pppppp...
//.SSSSSSS....SSSSSSS..hhhhhh....hhhhhh..hoooooo...ooooooo..ppppppp..ppppppp...
//.SSSSSSSSSSSSSSSSSS..hhhhhh....hhhhhh..hooooooooooooooo...pppppppppppppppp...
//..SSSSSSSSSSSSSSSSS..hhhhhh....hhhhhh...ooooooooooooooo...ppppppppppppppp....
//...SSSSSSSSSSSSSSS...hhhhhh....hhhhhh....ooooooooooooo....ppppppppppppppp....
//....SSSSSSSSSSSSS....hhhhhh....hhhhhh.....ooooooooooo.....pppppppppppppp.....
//......SSSSSSSSS.............................ooooooo.......ppppp.pppppp.......
//..........................................................ppppp..............
//..........................................................ppppp..............
//..........................................................ppppp..............
//..........................................................ppppp..............
//..........................................................ppppp..............
//..........................................................ppppp..............
//.............................................................................

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
  lootMagic: [slimeball, bone, greenToad],
  lootFood: [juice, tea]
}
const tavern = {
  name: "Old Tavern",
  description: "A lively yet strangely quiet tavern. The air smells musty and tired.",
  lootAttack: [claymore, rustyBow, sword, longbow, mace, mace, shield], // maces are popular here due to the strange number of orcs
  lootMagic: [greenToad, bag, poison, palePotion],
  lootFood: [juice, tea, potato]
}
const blacksmith = {
  name: "Black smith", // naming
  description: "The air is thick with soot and powerful tools gleam on the walls.",
  lootAttack: [claymore, sword, longbow, mace, scimitar, shield],
  lootMagic: [bone, forge],
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
  lootMagic: [eyeball, redSlimeball, skull, talon, palePotion],
  lootFood: [carrot, tomato]
}
const eatery = {
  name: "Eatery",
  description: "A lively restaurant.",
  lootAttack: [carrot, tomato, pizza, tea],
  lootMagic: [carrot, tomato, pizza, tea],
  lootFood: [carrot, tomato, pizza, tea]
}
const hut = {
  name: "Hut",
  description: "A hut",
  lootAttack: [eyeball, gem],
  lootMagic: [skull, talon, violetBag, scrollI, poison, palePotion, bitterPoison],
  lootFood: [carrot, tomato]
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
  lootMagic: [bone, skull, eyeball, poison],
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
  } else if (xp >= 4 && xp < 14) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket])
  } else if (xp >= 14 && xp < 20) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket, bagStore, apothecary])
  } else if (xp >= 20 && xp < 24) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket, bagStore, apothecary, hut, eatery])
  } else if (xp >= 24 && xp < 30) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket, bagStore, apothecary, hut, eatery, metalsmith, shady])
  } 

  else {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket, bagStore, apothecary, hut, eatery, metalsmith, shady, theBelovedScrollShop, potionShop]) // all of them
  }
}
/*Chimæra, and Basilisk!*/