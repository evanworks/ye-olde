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

  // resets all values

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
  if (selectedCards == ["-", "-", "-", "-", "-", "-"]) return;

  hands -= 1;
  document.getElementById("hands-num").innerHTML = hands;
  console.log(selectedCards)
  const animationArea = document.getElementById("animation-area");
  for (i in selectedCards) {
    if (selectedCards[i] == "-") {
      selectedCards = removeAllOccurrences(selectedCards, "-")
    }
  }
  const cardsToAnimate = [...selectedCards]; // Local copy of selectedCards
  const cardNames = [...cardsToAnimate]
  console.log(cardNames)
  cardNames.forEach((card, index) => {
    cardNames[index] = removeNumbers(card)
  });
  document.getElementById("actions-num").innerHTML = actions;

  const cardCount = cardsToAnimate.length;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const spacing = 150; // Distance between cards in the blank space

  cardsToAnimate.forEach((card, index) => {
    const offsetX = (index - Math.floor(cardCount / 2)) * spacing;
    const targetX = centerX + offsetX - 62.5;
    const targetY = centerY - 62.5 - 100;
    let cardName = removeNumbers(card)
    const cardElement = document.getElementById(card);
    const rect = cardElement.getBoundingClientRect();

    const animatedCard = document.createElement("img");
    animatedCard.src = "res/img/" + cardName + ".png";
    animatedCard.className = "card-animation";
    animatedCard.style.left = `${rect.left}px`;
    animatedCard.style.top = `${rect.top + 140 + 150}px`;
    animationArea.appendChild(animatedCard);

    setTimeout(() => {
      animatedCard.style.transform = `translate(0px,-200px)`
      //animatedCard.style.transform = `translate(${targetX - rect.left}px, ${targetY - rect.top}px)`;
      animatedCard.classList.add("show");

      setTimeout(() => {
        card = eval(cardName);
        if (card.type === "attack") {
          useAttackCard(animatedCard, card, rect, cardNames)
        } else if (card.type === "food") {
          useFoodCard(animatedCard, card, rect)
        } else {
          setTimeout(()=>{juice_up(animatedCard);}, 200)
        }
        setTimeout(() => {
          animatedCard.style.opacity = 0;
          animatedCard.addEventListener("transitionend", () => animatedCard.remove());
        }, 1000);
      }, index * 200);
    }, 0);

    discardCard(card);
  });

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
    // enemy turn (dang this is just blackjack again)
    turn == false;
    if (enemyHealth > 0) {
      monsterAttack();
    } 
  } else if (turn == false) {
    // player turn
    turn == true;
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
  }

  else {
    return getRandomItem([slime])
  }
}
