// get loot from monster (didn't know where else to put it)
function collectLoot(monster) {
  // clears remaining cards
  clearSlots(document.getElementById('playercards'));

  document.getElementById("battle").style.display = "none";
  document.getElementById("loot").style.opacity = 1;
  document.getElementById("loot").style.display = "block";

  document.getElementById("win-msg").innerHTML = "You defeated " + monster.name + "!"

  // displays loot
  for (let i = 0; i < monster.loot.length; i++ ) {
    displayCard(monster.loot[i], "loot-slot")
    deck.push(monster.loot[i]);
  }
  document.getElementById("loot-money-txt").innerHTML = "$" + monster.money;
  money += monster.money;
  document.getElementById("money").innerHTML = "$" + money;

  // more xp
  xp += 1;
  document.getElementById("XP").innerHTML = xp + " XP";

  // levels up monster
  slimeLevel += 1;
}

// initializes shop
function enterShop() {

  // checks to make sure the shop is closed before opening it
  if (document.getElementById("shop").style.display == "none") { 
    // opens shop
    document.getElementById("battle").style.display = "none";
    document.getElementById("loot").style.opacity = 0;
    document.getElementById("loot").style.transition = "1s";
    setTimeout(() => {
      document.getElementById("loot").style.display = "none";
      document.getElementById("shop").style.display = "block";
      document.getElementById("loot").style.transition = "2s";
    }, 1000)
    // makes room for loot next round
    clearSlots(document.getElementById('lootslots'));
    let shop = chooseShop()

    // displays shop info (nearly identical to monster info, in fact)
    document.getElementById("shop-name").innerHTML = shop.name;
    document.getElementById("shop-desc").innerHTML = shop.description

    // STOCKS SHOP
    for (let i = 1; i < maxShopAttackSlots + 1; i++) {
      let slotID = "price-attack-slot"+i;
      let card = getRandomItem(shop.lootAttack);
      stockCardInShop("attack-slot", slotID, card);
    }
    for (let i = 1; i < maxShopMagicSlots + 1; i++) {
      let slotID = "price-magic-slot"+i;
      let card = getRandomItem(shop.lootMagic)
      stockCardInShop("magic-slot", slotID, card)
    }
    for (let i = 1; i < maxShopFoodSlots + 1; i++) {
      let slotID = "price-food-slot"+i;
      let card = getRandomItem(shop.lootFood)
      stockCardInShop("food-slot", slotID, card)
    }
  }
}

// displays a card and its price (dont know why i added the word 'shop', where else would you be stocking cards)
function stockCardInShop(id, priceID, card) {
  displayCard(card, id)
  document.getElementById(priceID).style.display = "inline-block";
  document.getElementById(priceID).innerHTML = "$" + card.price;
}

// buys a card, complete with horrid animation (dont know why i added the word 'shop', where else would you be buying cards)
function buyCardInShop(card, id) {
  if (money >= card.price) {
    money -= card.price;
    deck.push(card);
    newID = document.getElementById(id).childNodes[0].childNodes[0].id; // best line of code ever written
    document.getElementById(newID).classList.add("fadeShrink-class");
    setTimeout(() => {
      document.getElementById(newID).classList.remove("fadeShrink-class");
      document.getElementById(newID).style.opacity = 0;
    }, 400)
    document.getElementById("price-"+id).style.display = "none";
  }
  document.getElementById("money").innerHTML = "$" + money;
}


// chooses valid shops and returns a random one based on xp
function chooseShop() {
  if (xp < 2) {
    return getRandomItem([firstMarketStall])
  }

  else {
    return getRandomItem([marketStall])
  }
}