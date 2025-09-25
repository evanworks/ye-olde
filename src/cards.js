function useAttackCard(animatedCard, oldCard, rect, cardNames) {
  let card = oldCard.card;
  if (card.context) {
    if (card.context.individual) card.context.individual(animatedCard, card, rect, cardNames);
  }

  let damage = card.damage;
  if (card === eyeball) {
    damage = monster.damage + Math.floor(monster.scaling / 2) * window[monster.file + "Level"]
  }

  if (oldCard.modifiers.length > 0) {
    for (let i in oldCard.modifiers) {
      oldCard.modifiers[i](rect, animatedCard, damage);
    }
  }

  juice_up(animatedCard);
  let damageAnim = new Animation(500, "text-effect",
    {left: rect.left + 20, top: rect.top + 70, color: colors.special, size: 24, text: `+${damage} damage`});
  animationQueue.add(damageAnim);

  attack(damage);

  // TODO wtf even is this
  if (paleBuffedCards.includes(card)) attack(card.damage + 5);
}

function useMagicCard(animatedCard, card, rect, cardNames) {
  removeItem(cardNames, card.file);
  if (card.context.individual) {
    card.context.individual(animatedCard, card, rect, cardNames);
  }
}


function useFoodCard(animatedCard, card, rect) {
  if (health >= maxHealth && card.overflow === false) return;

  let tinyHealth = maxHealth / 100;
  let healthToHeal = tinyHealth * card.health;

  let percent = 0;

  if (health + healthToHeal > maxHealth && card.overflow === false && healthOverflow === false) {
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

  juice_up(animatedCard)
  let healthAnim = new Animation(500, "text-effect",
    {left: rect.left + 20, top: rect.top + 70, color: colors.healthFull, size: 24, text: `+${card.health} health`});
  animationQueue.add(healthAnim);

  healthAnim.then(() => {
    let overflowing = false;
    if (healthOverflow) {
      overflowing = true;
      document.getElementById("player-health-bar").classList.add("gold-flash");
    } else {
      document.getElementById("player-health-bar").classList.add("flash");
    }

    document.getElementById("player-health-num").innerHTML = health;
    document.getElementById("player-health-bar").style.width = newWidth + unit;
    checkBars();

    setTimeout(function () {
      if (overflowing) {
        document.getElementById("player-health-bar").classList.remove("gold-flash");
      } else {
        document.getElementById("player-health-bar").classList.remove("flash");
      }
    }, 2500)
  });
}

n = 0;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// TODO delete this card entirely or make a context for it?
function useForge(targetX, targetY, cardNames) {
  n += 1;
  for (card in cardNames) {
    card = eval(cardNames[card]);
    if (card !== forge && card.type === "attack") {
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