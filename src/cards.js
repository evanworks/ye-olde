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
  if (cardNames.includes("slimeball")) {
    setTimeout(function(){
      juice_up(animatedCard);
      useSlimeball(rect.left, rect.top, card.damage);
    }, 400);
  }
  if (cardNames.includes("redSlimeball")) {
    setTimeout(function(){
      juice_up(animatedCard);
      useRedSlimeball(rect.left, rect.top, card.damage);
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
    animationArea.appendChild(healthIndicator);

    healthIndicator.addEventListener("animationend", () => healthIndicator.remove());
  }, 200)
}
function useSlimeball(targetX, targetY, damage) {
    
  const slimeEffectIndicator = document.createElement("div");
  slimeEffectIndicator.className = "slime-effect";
  slimeEffectIndicator.innerText = "Double Attack!";
  slimeEffectIndicator.style.left = `${targetX + 30}px`;
  slimeEffectIndicator.style.top = `${targetY + 55}px`;
  document.getElementById("animation-area").appendChild(slimeEffectIndicator);

  removeItem(selectedCards, slimeball);
  attack(damage);
  slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
}

function useRedSlimeball(targetX, targetY, damage) {
  let slimeEffectIndicator = document.createElement("div");
  slimeEffectIndicator.className = "slime-effect";
  slimeEffectIndicator.innerText = "Triple attack!";
  slimeEffectIndicator.style.left = `${targetX + 30}px`;
  slimeEffectIndicator.style.top = `${targetY + 55}px`;
  document.getElementById("animation-area").appendChild(slimeEffectIndicator);

  removeItem(selectedCards, slimeball);
  attack(damage);
  attack(damage);
  slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
}