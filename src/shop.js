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
      // makes room for loot next round
      clearSlots(document.getElementById('lootslots'));
    }, 1000)

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

// is called from clicking a card while in shop, moved to preserve attention
function selectShopCard(card, parent) {
  // 'are you sure?'
  let parentelmnt = event.target.parentElement;
  setTimeout(()=>{
    parentelmnt.parentElement.previousElementSibling.innerHTML = "BUY";
    //parentelmnt.parentElement.previousElementSibling.style.color = "white";
    parentelmnt.parentElement.previousElementSibling.style.cursor = "pointer";
  }, 150)
  parentelmnt.parentElement.previousElementSibling.classList.add("goesDownAndBackUp");

  // completes purchase
  parentelmnt.parentElement.previousElementSibling.addEventListener("click", function() {
    parentelmnt.parentElement.previousElementSibling.style.color = "#fbb954";
    buyCardInShop(card, parent);
  });

  // resets purchase or whatever
  event.target.addEventListener("click", function() {
    event.preventDefault()
    let parentelmnt = event.target.parentElement;
    parentelmnt.parentElement.previousElementSibling.innerHTML = "$" + card.price;
    parentelmnt.parentElement.previousElementSibling.style.color = "#fbb954";
    parentelmnt.parentElement.previousElementSibling.style.background = "#252928";
    parentelmnt.parentElement.previousElementSibling.style.cursor = "default";
    
    // future-proof totally
    event.target.addEventListener("click", function() {
      selectCard(card)
    })
  });
}

// buys a card, complete with horrid animation (dont know why i added the word 'shop', where else would you be buying cards?)
function buyCardInShop(card, id) {
  if (money >= card.price) {
    document.getElementById("money_aud").play();
    money -= card.price;
    deck.push(card);
    newID = document.getElementById(id).childNodes[0].childNodes[0].id; // best line of code ever written
    document.getElementById(newID).classList.add("fadeShrink-class");
    setTimeout(() => {
      document.getElementById(newID).classList.remove("fadeShrink-class");
      document.getElementById(newID).style.opacity = 0;
    }, 400)
    document.getElementById("price-"+id).style.display = "none";

    if (card == bag) {
      maxShopAttackSlots += 1;
      maxShopMagicSlots += 1;
      maxShopFoodSlots += 1;
    }
  }
  document.getElementById("money").innerHTML = "$" + money;
}


// chooses valid shops and returns a random one based on xp
function chooseShop() {
  if (xp < 2) {
    return getRandomItem([firstMarketStall])
  } else if (xp >= 2 && xp < 4) {
    return getRandomItem([marketStall])
  } else if (xp >= 4 && xp < 8) {
    return getRandomItem([marketStall, tavern, blacksmith])
  } else if (xp >= 4 && xp < 16) {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket])
  }

  else {
    return getRandomItem([marketStall, tavern, blacksmith, farmersmarket]) // all of them
  }
}