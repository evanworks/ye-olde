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

  // ups xp obv
  xp += 1;
  document.getElementById("XP").innerHTML = xp + " XP";

  // levels up monster
  slimeLevel += 1;
}


// inventory
function openInventory() {
  // makes it appear
  document.getElementById("inventory").style.display = "block";
  document.getElementById("inv-cards").innerHTML = "";

  for (let i = 1; i < deck.length + 1; i++) {
    // creates slots for cards
    const slot = document.createElement("div");
    slot.classList.add("slot");
    slot.id = "inv-slot" + i;
    document.getElementById("inv-cards").appendChild(slot)
    // creates cards
    let card = deck[i-1];
    displayCard(card, "inv-slot");
  }
}

function closeInventory() {
  console.log(deck)
  document.getElementById("inventory").style.display = "none";
}