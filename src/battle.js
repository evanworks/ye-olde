function enterBattle() {
  clearSlots(document.getElementById('attack-row'));
  clearSlots(document.getElementById('magic-row'));
  clearSlots(document.getElementById('food-row'));

  document.getElementById("playButton").style.pointerEvents = "auto";
  document.getElementById("shop").style.display = "none";
  document.getElementById("battle").style.display = "block";

  battle = true; // these two may do nothing
  turn = true;
  monster = chooseMonster();
  displayMonsterInfo(monster);
  let gradient = "linear-gradient(120deg, " + monster.bg[0] + ", " + monster.bg[1] + ")"
  document.body.style.backgroundImage = gradient;
  document.body.classList.remove("waveBackground");
  document.body.classList.add("waveBackground");
  currentMonster = monster;

  // resets all values
  selectedCards = ["-", "-", "-", "-", "-", "-"];
  hand = ["-", "-", "-", "-", "-", "-"];
  idonthaveagoodnameforthis = 0; // great job past self
  collectedLoot = false;
  enteredShop = false;

  actions = maxActions;
  document.getElementById("actions-num").innerHTML = actions;

  deal(5, true);
}

function displayMonsterInfo(monster) {
  document.getElementById("monster-img").src = monster.img;
  document.getElementById("monster-name").innerHTML = monster.name;
  document.getElementById("monster-lvl").innerHTML = "Level " + window[monster.file + "Level"];
  document.getElementById("monster-desc").innerHTML = monster.description;
  document.getElementById("monster-health-bar").style.width = "93vw";

  enemyHealth = monster.health + (monster.scaling * window[monster.file + "Level"]);
  enemyDamage = monster.damage + (Math.floor(monster.scaling / 2) * window[monster.file + "Level"]);
  document.getElementById("monster-health-num").innerHTML = enemyHealth;
  document.getElementById("monster-health-stat").innerHTML = enemyHealth + " HP";
  document.getElementById("monster-atk").innerHTML = enemyDamage + " ATK";
}

function play() {
  if (JSON.stringify(selectedCards) === JSON.stringify(["-", "-", "-", "-", "-", "-"])) return;

  let newHand = [...hand];

  for (let i = 0; i >= hand.length; i--) {
    if (selectedCards[i] !== "-") {
      newHand.splice(i, 1);
    }
  }
  hand = [...newHand];

  document.getElementById("playButton").style.pointerEvents = "none";
  actions = maxActions;
  document.getElementById("actions-num").innerHTML = actions;

  // turns array with empty slots ("-") into array with just the card names
  const animationArea = document.getElementById("animation-area");
  for (let i in selectedCards) {
    if (selectedCards[i] === "-") {
      selectedCards = removeAllOccurrences(selectedCards, "-")
    }
  }

  const cardsToAnimate = [...selectedCards];
  const cardNames = [...cardsToAnimate];

  // e.g. rustySword7 -> rustySword
  /*cardNames.forEach((card, index) => {
     cardNames[index] = card.card.file;
  });*/

  let animatedCards = [];

  cardsToAnimate.forEach(card => {
    if (card.card.context) if (card.card.context.before) {
      card.card.context.before(card, cardNames);
    }
  })

  const allPromises = cardsToAnimate.map((card, index) => {
    return new Promise((resolve) => {
      let cardName = card.card.file;
      let oldCard = card;
      const cardElement = card.el;
      const rect = cardElement.getBoundingClientRect();

      const animatedCard = document.createElement("img");
      let fakeCard = card.card;
      animatedCard.src = "res/img/" + fakeCard.img;
      animatedCard.src = "res/img/" + fakeCard.img;
      animatedCard.className = "card-animation";
      animatedCard.style.left = `${rect.left - 10}px`;
      animatedCard.style.top = `${rect.top + 140 + 150}px`;
      animationArea.appendChild(animatedCard);

      animatedCard.style.transition = "0.1s";

      card.anim = animatedCard;
      card.rect = rect;

      // moves card upward for scoring
      let raise = new Animation(0, "card-raise", {card: animatedCard});
      animationQueue.add(raise);

      raise.then(() => {
        setTimeout(() => {
          card = card.card; // e.g. str "rustySword" -> var rustySword

          if (card.type === "attack") {
            useAttackCard(animatedCard, oldCard, rect, cardNames);
          } else if (card.type === "food") {
            useFoodCard(animatedCard, card, rect);
            // TODO :/
            if (paleBuffedCards.includes(card)) attack(5);
          } else if (card.type === "magic") {
            useMagicCard(animatedCard, card, rect, cardNames);
          } else {
            juice_up(animatedCard);
            if (card === forge) {
              useForge(rect.left, rect.top, cardNames);
            }
            // TODO :/
            if (paleBuffedCards.includes(card)) attack(5);
          }
          resolve(animatedCards);
        }, 200)
      });
      // bye bye
      discardCard(card);
      animatedCards.push(animatedCard);
    });
  });

  Promise.all(allPromises).then((results) => {
    let fade;
    animatedCards.forEach((card, index) => {
      fade = new Animation(1, "fade", {element: card});
      animationQueue.add(fade);
    });

    fade.then(() => {
      if (enemyHealth < 1) {
        battle = false;
        if (!collectedLoot) {
          collectedLoot = true;
          collectLoot(currentMonster);
        }
      }

      if (turn === true) {
        monsterAttack();
      }
      deal(5, false);
    });
  });

  selectedCards = ["-", "-", "-", "-", "-", "-"];
}

function monsterAttack() {
  const healthBar = document.getElementById("player-health-bar");
  const healthNum = document.getElementById("player-health-num");

  let monster = currentMonster;

  let damage = monster.damage + Math.floor(monster.scaling / 2) * window[monster.file + "Level"];


  let percent = (damage * 100) / health;
  let newWidth = healthBar.offsetWidth - (healthBar.offsetWidth / 100) * percent;

  health -= damage;

  // hydra
  if (monster === hydra) {
    enemyHealth += 5;
    document.getElementById("monster-health-num").innerHTML = enemyHealth;

    // one half of the checkBars function
    document.getElementById("monster-health-bar").style.width = (enemyHealth / (currentMonster.health + (monster.scaling * window[monster.file + "Level"])) * 100).toFixed(3) + "%";
  }

  setTimeout(function () {
    healthBar.classList.add("flash");
    document.getElementById("playButton").style.pointerEvents = "auto";
  }, 900)


  setTimeout(function () {
    healthNum.innerHTML = health;
    healthBar.style.width = newWidth + "px";
  }, 1400);

  setTimeout(function () {
    healthBar.classList.remove("flash");
    checkBars();
  }, 4000)

  if (health <= 0) {
    die();
  }
}

function attack(damage) {
  // contains enemyHealth -= damage for some reason
  const attackAnim = new Animation(200, "monster-health", {damage: damage});
  animationQueue.add(attackAnim);

  attackAnim.then(() => {
    if (enemyHealth <= 0) {
      turn = false;
    }
  });
}

// Idea based on spelling mistake: APIder?