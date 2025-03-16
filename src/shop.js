function enterShop() {
  // checks to make sure the shop is closed before opening it
  if (document.getElementById("shop").style.display == "none") { 
    // opens shop
    document.getElementById("battle").style.display = "none";
    document.getElementById("shop").style.display = "block";
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

function stockCardInShop(id, priceID, card) {
  displayCard(card, id)
  document.getElementById(priceID).style.display = "inline-block";
  document.getElementById(priceID).innerHTML = "$" + card.price;
}

function buyCardInShop(card, id) {
  if (money >= card.price) {
    money -= card.price;
    deck.push(card)
    document.getElementById(id).classList.add("fadeShrink-class");
    setTimeout(() => {
      document.getElementById(id).classList.remove("fadeShrink-class");
      document.getElementById(id).style.display = "none";
    }, 400)
    document.getElementById("price-"+id).style.display = "none";
  }
  document.getElementById("money").innerHTML = "$" + money;
}



function chooseShop() {
  if (level < 2) {
    return getRandomItem([firstMarketStall])
  }
}