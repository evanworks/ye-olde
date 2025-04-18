function collectLoot(monster) {
  // make sure all the health bars are in the right place
  checkBars()

  fullDeck = deck;
  // clears remaining cards
  clearSlots(document.getElementById('playercards'));

  document.getElementById("battle").style.display = "none";
  document.getElementById("loot").style.display = "block";
  setTimeout(() => {
    document.getElementById("loot").style.opacity = 1
  }, 400)

  document.getElementById("win-msg").innerHTML = "You defeated " + monster.name + "!"

  document.body.style.backgroundImage = "linear-gradient(120deg, #313638, #3d4345)";

  let loot;
  // displays loot
  if (xp == 0) {
    /*
    In the following line of code, we witness a crucial operation that

    might at first glance seem trivial, but in fact serves a deeply important role in the overarching logic of this program.

    Let us now attempt to unpack the rationale, the motivation, and the subtle nuances that led to this specific implementation choice.

    First and foremost, consider the philosophical underpinnings of the statement itself:

    we are not merely assigning a variable, we are encapsulating an idea—a concept that perhaps reflects the very essence of computation.

    Some developers might be tempted to dismiss this line as ‘just code,’ but that would be a grievous mistake.

    In fact, many sleepless nights, gallons of coffee, and hours of contemplation have gone into crafting this masterpiece.

    The syntax, the semantics, the spiritual resonance—everything aligns to produce this line,

    and so, it remains not only a part of this file, but a part of us all. Forever. Amen.
    */
    loot = slimeball
  } else {
    loot = getRandomItem(monster.loot)
  }
  displayCard(loot, "loot-slot");
  deck.push(loot);
  document.getElementById("loot-money-txt").innerHTML = "$" + monster.money;
  money += monster.money;
  document.getElementById("money").innerHTML = "$" + money;

  // ups xp obv
  xp += 1;
  document.getElementById("XP").innerHTML = xp + " XP";

  // levels up monster
  window[monster.file+"Level"] += 1;
}


// inventory
function openInventory(destroy = false, triggerCard = "") {
  clickedBitterPoison = 0;
  // makes it appear
  document.getElementById("inventory").style.display = "block";
  document.getElementById("inv-cards").innerHTML = "";
  if (destroy) document.getElementById("inv-cards").innerHTML = triggerCard.msg;

  for (let i = 1; i < deck.length + 1; i++) {
    // creates slots for cards
    const slot = document.createElement("div");
    slot.classList.add("slot");
    slot.id = "inv-slot" + i;
    if (destroy) slot.classList.add("victim");
    document.getElementById("inv-cards").appendChild(slot)
    // creates cards
    let card = deck[i-1];
    displayCard(card, "inv-slot");

    if (destroy) {
      slot.addEventListener("click", () => {
        if (triggerCard == poison) { 
          slot.style.transition = "1.5s";
          slot.style.opacity = "0%";
          removeItem(deck, card); 
          setTimeout(closeInventory, 2000)
        } else if (triggerCard == palePotion) {
          paleBuffedCards.push(card);
          setTimeout(closeInventory, 2000);
        } else if (triggerCard == bitterPoison) {
          slot.style.transition = "1.5s";
          slot.style.opacity = "0%";
          removeItem(deck, card); 
          clickedBitterPoison += 1;
          if (clickedBitterPoison >= 2) {
            setTimeout(closeInventory, 2000);
          }
        }
      })
    }
  }
  
}

function closeInventory() {
  console.log(deck)
  document.getElementById("inventory").style.display = "none";
}

// debug
/*document.addEventListener("keydown", e => {
  if (e.key === "[" && debug) {
    if (document.getElementById("debug").style.display == "none") document.getElementById("debug").style.display = "block";
    else document.getElementById("debug").style.display = "none";
  }
});*/

setInterval(() => {
  // healthbar debug
  let r = window.getComputedStyle(document.getElementById("monster-health-bar"))
  document.getElementById("debug-amwidth").innerHTML = ((parseFloat(r.getPropertyValue("width")) / parseFloat(a)) * 100).toFixed(3) + "%";
  if (typeof enemyHealth !== 'undefined') {document.getElementById("debug-truemwidth").innerHTML = (enemyHealth / (currentMonster.health + (monster.scaling * window[monster.file+"Level"])) * 100).toFixed(3) + "%"; }

  let t = window.getComputedStyle(document.getElementById("player-health-bar"))
  document.getElementById("debug-apwidth").innerHTML = ((parseFloat(t.getPropertyValue("width")) / parseFloat(b)) * 100).toFixed(3) + "%";
  document.getElementById("debug-truepwidth").innerHTML = (health / maxHealth * 100).toFixed(3) + "%";

}, 100)

function checkBars() {
  document.getElementById("monster-health-bar").style.width = (enemyHealth / (currentMonster.health + (monster.scaling * window[monster.file+"Level"])) * 100).toFixed(3) + "%";
  document.getElementById("player-health-bar").style.width = (health / maxHealth * 100).toFixed(3) + "%";
}

function healFully() {
  health = maxHealth;
  checkBars();
  document.getElementById("player-health-num").innerHTML = health;
}
function fifthSuicide() {
  health -= 10;
  checkBars();
  document.getElementById("player-health-num").innerHTML = health;
}