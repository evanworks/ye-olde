function useAttackCard(animatedCard, card, rect, cardNames) {
  // ups minerals
  if (card === flint) {
    flintDamage += 1;
    card.damage = flintDamage;
  }
  if (card === gem) {
    gemDamage += 2;
    card.damage = gemDamage;
  }

    // damage visual
    /*const damageIndicator = document.createElement("div");
    damageIndicator.className = "damage-indicator";*/

  juice_up(animatedCard);

  let damageAnim = new Animation(1000, "text-effect",
    {left: rect.left + 30, top: rect.top + 70, color: colors.special, size: 24, text: `+${card.damage} damage`});
  animationQueue.add(damageAnim);

    /*(if (card === eyeball) {
      damageIndicator.innerText = `+${monster.damage + Math.floor(monster.scaling / 2) * window[monster.file + "Level"]} damage`;
    } else {
      if (paleBuffedCards.includes(card)) damageIndicator.innerText = `+${card.damage + 5} damage`;
      else damageIndicator.innerText = `+${card.damage} damage`;
    }
    damageIndicator.style.left = `${rect.left + 30}px`;
    damageIndicator.style.top = `${rect.top + 70}px`;
    document.getElementById("animation-area").appendChild(damageIndicator);

    damageIndicator.addEventListener("animationend", () => damageIndicator.remove());*/

  // sends attack function
  if (card === eyeball) {
    attack(monster.damage + Math.floor(monster.scaling / 2) * window[monster.file + "Level"]);
  } else {
    if (paleBuffedCards.includes(card)) attack(card.damage + 5);
    else attack(card.damage);
  }

  // modifiers (eg. slimeball is called from attack method)
  for (i in cardNames) {
    actualCard = eval(cardNames[i])
    if (actualCard.modifier) {
      actualCard.modifier(animatedCard, card, rect, cardNames);
    }
  }
}

function useFoodCard(animatedCard, card, rect) {
  if (health >= maxHealth && card.overflow == false) {
  } else {
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

    setTimeout(function () {
      document.getElementById("player-health-num").innerHTML = health;
      document.getElementById("player-health-bar").style.width = newWidth + unit;
      checkBars();
    }, 500);

    setTimeout(function () {
      if (overflowing) {
        document.getElementById("player-health-bar").classList.remove("gold-flash");
      } else {
        document.getElementById("player-health-bar").classList.remove("flash");
      }
    }, 3100)

    // visual
    setTimeout(function () {
      juice_up(animatedCard)
      const healthIndicator = document.createElement("div");
      healthIndicator.className = "health-indicator";
      healthIndicator.innerText = `+${healthToHeal} Health`;
      healthIndicator.style.left = `${rect.left + 30}px`;
      healthIndicator.style.top = `${rect.top + 70}px`;
      document.getElementById("animation-area").appendChild(healthIndicator);

      healthIndicator.addEventListener("animationend", () => healthIndicator.remove());
    }, 200)
  }
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
  setTimeout(() => {
    document.getElementById("animation-area").appendChild(slimeEffectIndicator);
  }, 300)
  slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());

  removeItem(deck, forge)
  let a = forgePower;
  window["forgeSword" + alphabet[n]] = {
    file: "forgeSword" + alphabet[n],
    name: "Sword (Forged)",
    type: "attack",
    damage: a,
    actions: 0,
    price: 18,
    action: '',
    img: 'magic/forgeSword.png'
  }
  deck.push(window["forgeSword" + alphabet[n]]);
}