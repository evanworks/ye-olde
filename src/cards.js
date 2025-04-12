function useAttackCard(animatedCard, card, rect, cardNames) {
  setTimeout(function(){
    if (card == flint) {

      flintDamage += 1;
      card.damage = flintDamage;
    }
    if (card == gem) {

      gemDamage += 2;
      card.damage = gemDamage;
    }
    //document.getElementById("attack_aud").play();
    juice_up(animatedCard)
    const damageIndicator = document.createElement("div");
    damageIndicator.className = "damage-indicator";
    
    if (card == eyeball) {
      damageIndicator.innerText = `+${monster.damage + (monster.scaling * window[monster.file+"Level"])} damage`;
    } else {
      damageIndicator.innerText = `+${card.damage} damage`;
    }
    damageIndicator.style.left = `${rect.left + 30}px`;
    damageIndicator.style.top = `${rect.top+70}px`;
    document.getElementById("animation-area").appendChild(damageIndicator);

    damageIndicator.addEventListener("animationend", () => damageIndicator.remove());
  }, 200)
  if (card == eyeball) {
    attack(monster.damage + Math.floor(monster.scaling / 2) * window[monster.file+"Level"]);
    
  } else {
    attack(card.damage);
  }
  if (cardNames.includes("bone") && card.damage <= 10) {
    boneUsed = true;
    setTimeout(function(){
      juice_up(animatedCard);
      useBone(rect.left, rect.top, card.damage);
    }, 400);
  }
  if (cardNames.includes("skull") && card.damage <= 20) {
    skullUsed = true;
    setTimeout(function(){
      juice_up(animatedCard);
      useSkull(rect.left, rect.top, card.damage);
    }, 400);
  }
  if (cardNames.includes("slimeball")) {
    useSlimeball(rect, rect.left, rect.top, card, cardNames, animatedCard);
    setTimeout(function(){
      juice_up(animatedCard);
    }, 400);
  }
  if (cardNames.includes("redSlimeball")) {
    setTimeout(function(){
      juice_up(animatedCard);
      useRedSlimeball(rect.left, rect.top, card.damage);
    }, 400);
  }
  if (cardNames.includes("greenToad")) {
    lowestCard = "";
    lowestPrice = 1000000; // infinity
    for (i in cardNames) {
      if (cardNames[i] !== "greenToad") {
        cardPrice = eval(cardNames[i]).price;
        if (cardPrice < lowestPrice) {
          useFrog(rect, rect.left, rect.top, card, cardNames, animatedCard)
        }
      }
    }
    setTimeout(function(){
      juice_up(animatedCard);
    }, 400);
  }
}

function useFoodCard(animatedCard, card, rect) {
  tinyHealth = maxHealth / 100;
  healthToHeal = tinyHealth * card.health;

  let percent = 0

  if (health + healthToHeal > maxHealth && card.overflow == false && healthOverflow == false) {
    health = maxHealth
  } else {
    percent = (healthToHeal * 100) / health;
    health += healthToHeal;
  }
  let unit = "px"
  let newWidth = document.getElementById("player-health-bar").offsetWidth - (document.getElementById("player-health-bar").offsetWidth / 100) * -percent;
  if (card.health >= 100) {
    newWidth = "93";
    unit = "vw";
  }
  let overflowing = false;
  if (healthOverflow) {
    overflowing = true;
    document.getElementById("player-health-bar").classList.add("gold-flash");
  } else {
    document.getElementById("player-health-bar").classList.add("flash");
  }

  setTimeout(function() {
    document.getElementById("player-health-num").innerHTML = health;
    document.getElementById("player-health-bar").style.width = newWidth + unit;
  }, 500);

  setTimeout(function() {
    if (overflowing) {
      document.getElementById("player-health-bar").classList.remove("gold-flash");
    } else {
      document.getElementById("player-health-bar").classList.remove("flash");
    }
  }, 3100)
  
  // visual
  setTimeout(function() {
    juice_up(animatedCard)
    const healthIndicator = document.createElement("div");
    healthIndicator.className = "health-indicator";
    healthIndicator.innerText = `+${healthToHeal} Health`;
    healthIndicator.style.left = `${rect.left + 30}px`;
    healthIndicator.style.top = `${rect.top+70}px`;
    document.getElementById("animation-area").appendChild(healthIndicator);

    healthIndicator.addEventListener("animationend", () => healthIndicator.remove());
  }, 200)
}

function useSlimeball(rect, targetX, targetY, card, cardNames, animatedCard) {
  removeItem(cardNames, "slimeball");
  setTimeout(() => {
    const slimeEffectIndicator = document.createElement("div");
    slimeEffectIndicator.className = "slime-effect";
    slimeEffectIndicator.innerText = `Again!`;
    slimeEffectIndicator.style.left = `${targetX + 50}px`;
    slimeEffectIndicator.style.top = `${targetY + 55}px`;
    document.getElementById("animation-area").appendChild(slimeEffectIndicator);
  
    useAttackCard(animatedCard, card, rect, cardNames);
    slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
  }, 400) 
}
function useFrog(rect, targetX, targetY, card, cardNames, animatedCard) {
  removeItem(cardNames, "greenToad");
  setTimeout(() => {
    const slimeEffectIndicator = document.createElement("div");
    slimeEffectIndicator.className = "slime-effect";
    slimeEffectIndicator.innerText = `Again!`;
    slimeEffectIndicator.style.left = `${targetX + 40}px`;
    slimeEffectIndicator.style.top = `${targetY + 55}px`;
    document.getElementById("animation-area").appendChild(slimeEffectIndicator);
  
    useAttackCard(animatedCard, card, rect, cardNames);
    slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());

    setTimeout(() => {
      const moneyEffectIndicator = document.createElement("div");
      moneyEffectIndicator.className = "money-effect";
      moneyEffectIndicator.innerText = "$" + Math.floor(card.price / 2);
      moneyEffectIndicator.style.left = `${targetX + 60}px`;
      moneyEffectIndicator.style.top = `${targetY + 35}px`;
      document.getElementById("animation-area").appendChild(moneyEffectIndicator);
      moneyEffectIndicator.addEventListener("animationend", () => moneyEffectIndicator.remove());

      money += Math.floor(card.price / 2);
      document.getElementById("money").innerHTML = "$" + money;
    }, 400)
  }, 400) 
}

function useRedSlimeball(targetX, targetY, damage) {
  let slimeEffectIndicator = document.createElement("div");
  slimeEffectIndicator.className = "slime-effect";
  slimeEffectIndicator.innerText = `${damage * 2} damage`;
  slimeEffectIndicator.style.left = `${targetX + 40}px`;
  slimeEffectIndicator.style.top = `${targetY + 55}px`;
  document.getElementById("animation-area").appendChild(slimeEffectIndicator);

  attack(damage);
  attack(damage);
  slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
  return "animationComplete";
}

function useBone(targetX, targetY, damage) {
  let slimeEffectIndicator = document.createElement("div");
  slimeEffectIndicator.className = "bone-effect";
  slimeEffectIndicator.innerText = `2x damage`;
  slimeEffectIndicator.style.left = `${targetX + 40}px`;
  slimeEffectIndicator.style.top = `${targetY + 35}px`;
  document.getElementById("animation-area").appendChild(slimeEffectIndicator);

  attack(damage);
  slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
  return "animationComplete";
}
function useSkull(targetX, targetY, damage) {
  let slimeEffectIndicator = document.createElement("div");
  slimeEffectIndicator.className = "bone-effect";
  slimeEffectIndicator.innerText = `3x damage`;
  slimeEffectIndicator.style.left = `${targetX + 40}px`;
  slimeEffectIndicator.style.top = `${targetY + 35}px`;
  document.getElementById("animation-area").appendChild(slimeEffectIndicator);

  attack(damage);
  attack(damage);
  slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
  return "animationComplete";
}

n = 0;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function useForge(targetX, targetY, cardNames) {
  n += 1;
  for (card in cardNames) {
    card = eval(cardNames[card]);
    if (card != forge && card.type == "attack") {
      forgePower += card.damage;
      deck = deck.filter(item => item !== card);
    }  
  }
  let slimeEffectIndicator = document.createElement("div");
  slimeEffectIndicator.className = "slime-effect";
  slimeEffectIndicator.innerText = `+${forgePower} power`;
  slimeEffectIndicator.style.left = `${targetX + 40}px`;
  slimeEffectIndicator.style.top = `${targetY + 75}px`;
  setTimeout(()=>{document.getElementById("animation-area").appendChild(slimeEffectIndicator);}, 300)
  slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());

  let index = fullDeck.indexOf(forge);
  deck.splice(index, 1);
  let a = forgePower;
  window["forgeSword"+alphabet[n]] = {
    file: "forgeSword"+alphabet[n],
    name: "Sword (Forged)",
    type: "attack",
    damage: a,
    actions: 0,
    price: 18,
    action: '',
    img: 'forgeSword.png'
  }
  deck.push(window["forgeSword"+alphabet[n]]);
}