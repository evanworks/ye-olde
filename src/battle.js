function enterBattle() {
  battle = true;

  monster = chooseMonster()
  document.getElementById("shop").style.display = "none";
  document.getElementById("battle").style.display = "block";

  // displays monster info
  document.getElementById("monster-img").src = monster.img;
  document.getElementById("monster-name").innerHTML = monster.name;
  document.getElementById("monster-lvl").innerHTML = "Level " + window[monster.file+"Level"];
  document.getElementById("monster-desc").innerHTML = monster.description;
  document.getElementById("monster-health-bar").style.width = "93vw";

  enemyHealth = monster.health + (monster.scaling * window[monster.file+"Level"]);
  document.getElementById("monster-health-num").innerHTML = enemyHealth;

  currentMonster = monster;

  // resets all valuesf

  selectedCards = ["-", "-", "-", "-", "-", "-"];

  idonthaveagoodnameforthis = 0; // great job past self

  actions = maxActions;
  document.getElementById("actions-num").innerHTML = actions;
  hands = maxHands;
  document.getElementById("hands-num").innerHTML = hands;
  // clears slots in shop
  clearSlots(document.getElementById('attack-row'));
  clearSlots(document.getElementById('magic-row'));
  clearSlots(document.getElementById('food-row'));

  deal(6, true)
}

function play() {
  if (JSON.stringify(selectedCards) == JSON.stringify(["-", "-", "-", "-", "-", "-"])) return;
  
  actions = maxActions;
  hands -= 1;
  document.getElementById("hands-num").innerHTML = hands;
  document.getElementById("actions-num").innerHTML = hands;

  // turns array with empty slots ("-") into array with just the card names
  const animationArea = document.getElementById("animation-area");
  for (i in selectedCards) {
    if (selectedCards[i] == "-") {
      selectedCards = removeAllOccurrences(selectedCards, "-")
    }
  }
  const cardsToAnimate = [...selectedCards];
  const cardNames = [...cardsToAnimate]

  // e.g. rustySword7 -> rustySword
  cardNames.forEach((card, index) => {
    cardNames[index] = removeNumbers(card)
  });

  cardsToAnimate.forEach((card, index) => {
    let cardName = removeNumbers(card)
    const cardElement = document.getElementById(card);
    const rect = cardElement.getBoundingClientRect();

    const animatedCard = document.createElement("img");
    animatedCard.src = "res/img/" + cardName + ".png";
    animatedCard.className = "card-animation";
    animatedCard.style.left = `${rect.left}px`;
    animatedCard.style.top = `${rect.top + 140 + 150}px`;
    animationArea.appendChild(animatedCard);

    animatedCard.style.transition = "0.1s";

    // settimeout necessary for some reason
    setTimeout(() => {
      // moves card upward for scoring
      animatedCard.style.transform = `translate(0px,-200px)`
      animatedCard.classList.add("show");

      setTimeout(() => {
        card = eval(cardName); // e.g. str "rustySword" -> var rustySword
        if (card.type === "attack") {
          useAttackCard(animatedCard, card, rect, cardNames)
        } else if (card.type === "food") {
          useFoodCard(animatedCard, card, rect)
        } else {
          setTimeout(()=>{juice_up(animatedCard);}, 200)
        }

        // it's supposed to do a fade but it doesn't really work
        setTimeout(() => {
          animatedCard.style.opacity = 0;
          animatedCard.addEventListener("transitionend", () => animatedCard.remove());
        }, 1000);
      }, index * 200);

      // bye bye
      discardCard(card);
    });
    }, 0)

  setTimeout(() => {
    deal(5, false);
  }, 2000);

  selectedCards = ["-", "-", "-", "-", "-", "-"]
  setTimeout(() => {
    switchTurn();
  }, 4000)
}

function switchTurn() {
  if (turn == true) {
    // enemy turn (this is just blackjack again)
    turn = false;
    if (enemyHealth > 0) {
      monsterAttack();
    } 
  } else if (turn == false) {
    // player turn
    turn = true;
  } else {
    alert("Invalid turn sequence.")
    alert("Beginning escape process...")
    alert("Just kidding haha")
  }
}

function monsterAttack() {
  const healthBar = document.getElementById("player-health-bar");
  const healthNum = document.getElementById("player-health-num");
  
  let monster = currentMonster;

  damage = monster.damage;


  let percent = (damage * 100) / health;
  let newWidth = healthBar.offsetWidth - (healthBar.offsetWidth / 100) * percent;

  health -= damage;

  setTimeout(function(){
    healthBar.classList.add("flash");
  }, 900)

  

  setTimeout(function() {
    healthNum.innerHTML = health;
    healthBar.style.width = newWidth + "px";
  }, 1400);

  setTimeout(function() {
    healthBar.classList.remove("flash");
  }, 4000)

  if (health <= 0) {
    die();
  }
}

// THESE TWO ARE SEPARATE ( i've had enough mistakes already )

function attack(damage) {
  // healthbar
  const healthBar = document.getElementById("monster-health-bar");
  const healthNum = document.getElementById("monster-health-num");

  let percent = (damage * 100) / enemyHealth;
  let newWidth = healthBar.offsetWidth - (healthBar.offsetWidth / 100) * percent;

  enemyHealth -= damage;

  
  // Update health number and animate bar to shrink gosh chatgpt
  setTimeout(function() {
    
    if (enemyHealth > 0) {
      healthNum.innerHTML = enemyHealth;
      healthBar.style.width = newWidth + "px";
    } else {
      // win
      healthNum.innerHTML = 0;
      healthBar.style.width = "0px";
      battle = false;
      setTimeout(function() {
        collectLoot(currentMonster);
      }, 3000)
    }
  }, 200);
}


function chooseMonster() {
  if (xp < 2) {
    return getRandomItem([slime])
  } else if (xp >= 2 && xp < 4) {
    return getRandomItem([slime, skeleton])
  } else if (xp >= 4 && xp < 6) {
    return getRandomItem([slime, skeleton, spider])
  } else if (xp >= 6 && xp < 8) {
    return getRandomItem([skeleton, spider])
  }

  else {
    return getRandomItem([spider]) // APIder?
  } // fallback (hardest enemy)
}
