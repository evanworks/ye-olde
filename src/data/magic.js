const slimeball = {
  file: "slimeball",
  name: "Slimeball",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 6,
  action: 'Triggers first played attack card <span style="color:var(--magic);">twice</span>',
  img: "magic/slimeball.png",
  context: {
    individual: (animatedCard, card, rect, cardNames) => {
      let maybeAttackCard;
      for (let i = 0; i < cardNames.length; i++) {
        console.log(cardNames[i].card);
        if (cardNames[i].card) {
          if (cardNames[i].card.type === "attack") {
            maybeAttackCard = cardNames[i];
            break;
          }
        }
      }

      if (maybeAttackCard) {
        let attackRect = maybeAttackCard.rect;
        juice_up(animatedCard);
        let slimeAnim = new Animation(1000, "text-effect",
          {left: attackRect.left + 30, top: attackRect.top + 70, color: colors.magic, size: 24, text: `Again!`});
        animationQueue.add(slimeAnim);
        useAttackCard(maybeAttackCard.anim, maybeAttackCard.card, attackRect, cardNames);
      }
    }
  },
  modifier: (animatedCard, card, rect, cardNames) => {
    useAttackCard(animatedCard, card, rect, cardNames);
    juice_up(animatedCard);
    let slimeEffectAnim = new Animation(1000, "text-effect",
      {rect: rect.left + 50, top: rect.top + 50, color: colors.magic, size: 18, text: "Again!"});
    animationQueue.add(slimeEffectAnim);

      /*const slimeEffectIndicator = document.createElement("div");
      slimeEffectIndicator.className = "slime-effect";
      slimeEffectIndicator.innerText = `Again!`;
      slimeEffectIndicator.style.left = `${rect.left + 50}px`;
      slimeEffectIndicator.style.top = `${rect.top + 55}px`;
      document.getElementById("animation-area").appendChild(slimeEffectIndicator);*/
  }
}
const redSlimeball = {
  file: "redSlimeball",
  name: "Red Slimeball",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 20,
  action: 'Triggers first played attack card <span style="color:var(--magic);">thrice</span>',
  img: "magic/redSlimeball.png",
  modifier: (animatedCard, card, rect, cardNames) => {
    removeItem(cardNames, "redSlimeball");
    setTimeout(() => {
      juice_up(animatedCard)

      const slimeEffectIndicator = document.createElement("div");
      slimeEffectIndicator.className = "slime-effect";
      slimeEffectIndicator.innerText = `Again! Again!`;
      slimeEffectIndicator.style.left = `${rect.left + 50}px`;
      slimeEffectIndicator.style.top = `${rect.top + 55}px`;
      document.getElementById("animation-area").appendChild(slimeEffectIndicator);

      useAttackCard(animatedCard, card, rect, cardNames);
      useAttackCard(animatedCard, card, rect, cardNames);
      slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
    }, 400)
  }
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
  modifier: (animatedCard, card, rect, cardNames) => {
    lowestCard = "";
    lowestPrice = 1000000; // infinity
    for (i in cardNames) {
      if (cardNames[i] !== "greenToad") {
        cardPrice = eval(cardNames[i]).price;
        if (cardPrice < lowestPrice) {
          removeItem(cardNames, "greenToad");
          setTimeout(() => {
            const slimeEffectIndicator = document.createElement("div");
            slimeEffectIndicator.className = "slime-effect";
            slimeEffectIndicator.innerText = `Again!`;
            slimeEffectIndicator.style.left = `${rect.left + 40}px`;
            slimeEffectIndicator.style.top = `${rect.top + 55}px`;
            document.getElementById("animation-area").appendChild(slimeEffectIndicator);

            useAttackCard(animatedCard, card, rect, cardNames);
            slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());

            setTimeout(() => {
              const moneyEffectIndicator = document.createElement("div");
              moneyEffectIndicator.className = "money-effect";
              moneyEffectIndicator.innerText = "$" + Math.floor(card.price / 2);
              moneyEffectIndicator.style.left = `${rect.left + 60}px`;
              moneyEffectIndicator.style.top = `${rect.top + 35}px`;
              document.getElementById("animation-area").appendChild(moneyEffectIndicator);
              moneyEffectIndicator.addEventListener("animationend", () => moneyEffectIndicator.remove());

              money += Math.floor(card.price / 2);
              document.getElementById("money").innerHTML = "$" + money;
            }, 400)
          }, 400)
        }
      }
    }
    setTimeout(function () {
      juice_up(animatedCard);
    }, 400);
  }
}
const bone = {
  file: "bone",
  name: "Bone",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 8,
  action: '<span style="padding-left:4px;padding-right:4px;background:var(--healthFull);">2x</span> damage on all played attack cards below <span style="color:var(--healthFull)">10</span> damage',
  img: "magic/bone.png",
  modifier: (animatedCard, card, rect, cardNames) => {
    let ifithasbone = howMany(cardNames, "bone");
    if (ifithasbone > 0 && card.damage <= 10) {
      boneUsed = true;
      setTimeout(function () {
        juice_up(animatedCard);
        for (let i = 0; i < ifithasbone; i++) {
          let slimeEffectIndicator = document.createElement("div");
          slimeEffectIndicator.className = "bone-effect";
          slimeEffectIndicator.innerText = `2x damage`;
          slimeEffectIndicator.style.left = `${rect.left + 40}px`;
          slimeEffectIndicator.style.top = `${rect.top + 35}px`;
          document.getElementById("animation-area").appendChild(slimeEffectIndicator);

          attack(damage);
          slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
        }
      }, 400);
    }
  }
}
const skull = {
  file: "skull",
  name: "Skull",
  type: "magic",
  damage: 0,
  actions: 1,
  price: 22,
  action: '<span style="padding-left:4px;padding-right:4px;background:var(--healthFull);">3x</span> damage on all played attack cards below <span style="color:var(--healthFull)">20</span> damage',
  img: "magic/skull.png",
  modifier: (animatedCard, card, rect, cardNames) => {
    let ifithasskull = howMany(cardNames, "skull");
    if (ifithasskull > 0 && card.damage <= 20) {
      skullUsed = true;
      setTimeout(function () {
        juice_up(animatedCard);
        for (let i = 0; i < ifithasskull; i++) {
          let slimeEffectIndicator = document.createElement("div");
          slimeEffectIndicator.className = "bone-effect";
          slimeEffectIndicator.innerText = `3x damage`;
          slimeEffectIndicator.style.left = `${rect.left + 40}px`;
          slimeEffectIndicator.style.top = `${rect.top + 35}px`;
          document.getElementById("animation-area").appendChild(slimeEffectIndicator);

          attack(damage);
          attack(damage);
          slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
        }
      }, 400);
    }
  }
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
  img: 'magic/talon.png',
  modifier: (animatedCard, card, rect, cardNames) => {
    setTimeout(() => {
      juice_up(animatedCard);

      const slimeEffectIndicator = document.createElement("div");
      slimeEffectIndicator.className = "slime-effect";
      slimeEffectIndicator.innerText = `Destroyed!`;
      slimeEffectIndicator.style.left = `${rect.left + 50}px`;
      slimeEffectIndicator.style.top = `${rect.top + 55}px`;
      document.getElementById("animation-area").appendChild(slimeEffectIndicator);

      slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());

      for (card in cardNames) {
        card = eval(cardNames[card]);
        if (card != forge && card.type == "attack") {
          deck = deck.filter(item => item !== card);
        }
      }

      attack(card.damage);
    }, 400)
  }
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

const bomb = {
  file: "bomb",
  name: "Bomb",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 14,
  action: '<span style="color:var(--healthFull);">Destroy</span> 5 random cards in inventory',
  img: "magic/bomb.png",
  consumable: (card) => {
    removeItem(deck, card);
    for (let i = 0; i < 5; i++) {
      if (deck.length > 0) {
        setTimeout(() => {
          openInventory();
          let index = Math.floor(Math.random() * deck.length)
          deck.splice(index, 1);
        }, 200)
      }
    }
  }
}
const poisonBomb = {
  file: "poisonBomb",
  name: "Poison Bomb",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 26,
  action: '<span style="color:var(--attack);">Destroy</span> 8 random cards in inventory',
  img: "magic/posionBomb.png"
}


const poison = {
  file: "poison",
  name: "Poison",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 8,
  action: '<span style="color:var(--attack);">Destroy</span> a selected card in your inventory.',
  msg: "<div class='destroyText'>Choose a card to destroy</div>",
  img: "potions/poison.png",
  consumable: (card) => {
    removeItem(deck, card);
    setTimeout(() => {
      openInventory(true, poison);
    }, 400);
  }
}
const bitterPoison = {
  file: "bitterPoison",
  name: "Bitter Poison",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 14,
  action: '<span style="color:var(--attack);">Destroy</span> two selected cards in your inventory.',
  msg: "<div class='destroyText' style='color:var(--magic)'>Choose two cards to destroy</div>",
  img: "potions/bitterPoison.png",
  consumable: (card) => {
    removeItem(deck, card);
    setTimeout(() => {
      openInventory(true, bitterPoison);
    }, 400)
  }
}
let paleBuffedCards = []
const palePotion = {
  file: "palePotion",
  name: "Pale Potion",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 8,
  action: 'Add <span style="color:var(--bone);">+5 Damage</span> to a selected card in your inventory.',
  msg: "<div class='destroyText' style='color:var(--bone)'>Choose a card type to buff</div>",
  img: "potions/palePotion.png",
  consumable: (card) => {
    removeItem(deck, card);
    setTimeout(() => {
      openInventory(true, palePotion);
    }, 400)
  }
}


const bag = {
  file: "bag",
  name: "Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 12,
  action: '<span style="color:var(--magic);">+1</span> of each card slot avaiable in <span style="color:var(--money);">Shop</span>',
  img: "bags/bag.png",
  consumable: (card) => {
    if (maxShopAttackSlots < 5) {
      maxShopAttackSlots += 1;
    }
    if (maxShopMagicSlots < 5) {
      maxShopMagicSlots += 1;
    }
    if (maxShopFoodSlots < 5) {
      maxShopFoodSlots += 1;
    }
  }
}
const bigBag = {
  file: "bigBag",
  name: "Big Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 0,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--special);">All</span> slots available in <span style="color:var(--money);">Shop</span> <span style="color:grey;">(Destroys all other bags)</span>',
  img: "bags/bigBag.png",
  consumable: (card) => {
    maxShopAttackSlots = 5;
    maxShopMagicSlots = 5;
    maxShopFoodSlots = 5;
    deck = deck.filter(item => item !== bag);
    deck = deck.filter(item => item !== greenBag);
    deck = deck.filter(item => item !== crimsonBag);
    deck = deck.filter(item => item !== violetBag);
    fullDeck = deck;
  }
}
const greenBag = {
  file: "greenBag",
  name: "Green Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--food);">Food</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "bags/greenBag.png",
  consumable: (card) => {
    maxShopFoodSlots = 5;
  }
}
const violetBag = {
  file: "violetBag",
  name: "Violet Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--magic);">Magic</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "bags/violetBag.png",
  consumable: (card) => {
    maxShopMagicSlots = 5;
  }
}
const crimsonBag = {
  file: "crimsonBag",
  name: "Crimson Bag",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 16,
  action: '<span style="color:var(--magic);">Max</span> <span style="color:var(--attack);">Attack</span> slots available in <span style="color:var(--money);">Shop</span>',
  img: "bags/crimsonBag.png",
  consumable: (card) => {
    maxShopAttackSlots = 5;
  }
}
const scrollI = {
  file: "scrollI",
  name: "Scroll I",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 40,
  action: 'Permanently increases <span style="color:var(--healthFull);">max health</span> by <span style="color:var(--healthFull);">5</span>',
  img: "scrolls/scrollI.png",
  consumable: (card) => {
    const healthBar = document.getElementById("player-health-bar");
    maxHealth += 5;
    checkBars();
    setTimeout(() => {
      health = maxHealth;
      document.getElementById("player-health-num").innerHTML = health;
      setTimeout(function () {
        healthBar.classList.add("betterflash");
      }, 900);
      setTimeout(function () {
        checkBars();
      }, 1400);
      setTimeout(function () {
        document.getElementById("player-health-num").innerHTML = health;
        healthBar.classList.remove("betterflash");
      }, 4000);
    }, 1000)
  }
}
const scrollII = {
  file: "scrollII",
  name: "Scroll II",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 40,
  action: 'Permanently increases <span style="color:var(--healthFull);">max health</span> by <span style="color:var(--healthFull);">5</span>',
  img: "scrolls/scrollII.png",
  consumable: (card) => {
    const healthBar = document.getElementById("player-health-bar");
    maxHealth += 5;
    checkBars();
    setTimeout(() => {
      health = maxHealth;
      document.getElementById("player-health-num").innerHTML = health;
      setTimeout(function () {
        healthBar.classList.add("betterflash");
      }, 900);
      setTimeout(function () {
        checkBars();
      }, 1400);
      setTimeout(function () {
        document.getElementById("player-health-num").innerHTML = health;
        healthBar.classList.remove("betterflash");
      }, 4000);
    }, 1000)
  }
}
const scrollIII = {
  file: "scrollIII",
  name: "Scroll III",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 40,
  action: 'Permanently increases <span style="color:var(--healthFull);">max health</span> by <span style="color:var(--healthFull);">5</span>',
  img: "scrolls/scrollIII.png",
  consumable: (card) => {
    const healthBar = document.getElementById("player-health-bar");
    maxHealth += 5;
    checkBars();
    setTimeout(() => {
      health = maxHealth;
      document.getElementById("player-health-num").innerHTML = health;
      setTimeout(function () {
        healthBar.classList.add("betterflash");
      }, 900);
      setTimeout(function () {
        checkBars();
      }, 1400);
      setTimeout(function () {
        document.getElementById("player-health-num").innerHTML = health;
        healthBar.classList.remove("betterflash");
      }, 4000);
    }, 1000)
  }
}
const scrollIV = {
  file: "scrollIV",
  name: "Scroll IV",
  type: "magic",
  damage: 0,
  actions: 0,
  price: 40,
  action: 'Permanently increases <span style="color:var(--healthFull);">max health</span> by <span style="color:var(--healthFull);">5</span>',
  img: "scrolls/scrollIV.png",
  consumable: (card) => {
    const healthBar = document.getElementById("player-health-bar");
    maxHealth += 5;
    checkBars();
    setTimeout(() => {
      health = maxHealth;
      document.getElementById("player-health-num").innerHTML = health;
      setTimeout(function () {
        healthBar.classList.add("betterflash");
      }, 900);
      setTimeout(function () {
        checkBars();
      }, 1400);
      setTimeout(function () {
        document.getElementById("player-health-num").innerHTML = health;
        healthBar.classList.remove("betterflash");
      }, 4000);
    }, 1000)
  }
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