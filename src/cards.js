function useAttackCard(animatedCard, card, rect, cardNames) {
  setTimeout(function(){
    juice_up(animatedCard)
    const damageIndicator = document.createElement("div");
    damageIndicator.className = "damage-indicator";
    damageIndicator.innerText = `+${card.damage} damage`;
    damageIndicator.style.left = `${rect.left + 30}px`;
    damageIndicator.style.top = `${rect.top+70}px`;
    document.getElementById("animation-area").appendChild(damageIndicator);

    damageIndicator.addEventListener("animationend", () => damageIndicator.remove());
  }, 200)
  attack(card.damage);
  if (cardNames.includes("bone") && card.damage <= 10) {
    boneUsed = true;
    setTimeout(function(){
      juice_up(animatedCard);
      useBone(rect.left, rect.top, card.damage);
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

  if (health + healthToHeal > maxHealth) {
    health = maxHealth
  } else {
    percent = (healthToHeal * 100) / health;
    health += healthToHeal;
  }
  
  // new healthbar width *obviously* (my comments are incredibly good)
  let newWidth = document.getElementById("player-health-bar").offsetWidth - (document.getElementById("player-health-bar").offsetWidth / 100) * -percent;

  document.getElementById("player-health-bar").classList.add("flash");

  setTimeout(function() {
    document.getElementById("player-health-num").innerHTML = health;
    document.getElementById("player-health-bar").style.width = newWidth + "px";
  }, 500);

  setTimeout(function() {
    document.getElementById("player-health-bar").classList.remove("flash");
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
      moneyEffectIndicator.innerText = "$" + card.price;
      moneyEffectIndicator.style.left = `${targetX + 60}px`;
      moneyEffectIndicator.style.top = `${targetY + 35}px`;
      document.getElementById("animation-area").appendChild(moneyEffectIndicator);
      moneyEffectIndicator.addEventListener("animationend", () => moneyEffectIndicator.remove());

      money += card.price
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
  attack(damage);
  slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
  return "animationComplete";
}