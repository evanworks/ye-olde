function enterBattle() {
  clearSlots(document.getElementById('attack-row'));
  clearSlots(document.getElementById('magic-row'));
  clearSlots(document.getElementById('food-row'));

  document.getElementById("playButton").style.pointerEvents = "auto";
  document.getElementById("shop").style.display = "none";
  document.getElementById("battle").style.display = "block";

  battle = true; // these two may do nothing
  turn = true; 
  monster = chooseMonster()
  displayMonsterInfo(monster);
  currentMonster = monster;

  // resets all values
  selectedCards = ["-", "-", "-", "-", "-", "-"];
  idonthaveagoodnameforthis = 0; // great job past self
  actions = maxActions;
  document.getElementById("actions-num").innerHTML = actions;
  hands = maxHands;
  document.getElementById("hands-num").innerHTML = hands;

  deal(6, true);
}
function displayMonsterInfo(monster) {
  document.getElementById("monster-img").src = monster.img;
  document.getElementById("monster-name").innerHTML = monster.name;
  document.getElementById("monster-lvl").innerHTML = "Level " + window[monster.file+"Level"];
  document.getElementById("monster-desc").innerHTML = monster.description;
  document.getElementById("monster-health-bar").style.width = "93vw";

  enemyHealth = monster.health + (monster.scaling * window[monster.file+"Level"]);
  enemyDamage = monster.damage + (Math.floor(monster.scaling/2) * window[monster.file+"Level"]);
  document.getElementById("monster-health-num").innerHTML = enemyHealth;
  document.getElementById("monster-health-stat").innerHTML = enemyHealth + " HP";
  document.getElementById("monster-atk").innerHTML = enemyDamage + " ATK";
}

function play() {

  if (JSON.stringify(selectedCards) == JSON.stringify(["-", "-", "-", "-", "-", "-"])) return;

  document.getElementById("playButton").style.pointerEvents = "none";
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
    cardNames[index] = removeNumbers(card);
  });

  cardsToAnimate.forEach((card, index) => {
    let cardName = removeNumbers(card)
    const cardElement = document.getElementById(card);
    const rect = cardElement.getBoundingClientRect();

    const animatedCard = document.createElement("img");
    fakeCard = eval(cardName);
    animatedCard.src = "res/img/" + fakeCard.img;
    animatedCard.className = "card-animation";
    animatedCard.style.left = `${rect.left}px`;
    animatedCard.style.top = `${rect.top + 140 + 150}px`;
    animationArea.appendChild(animatedCard);

    animatedCard.style.transition = "0.1s";

    // settimeout necessary for some reason
    setTimeout(() => {
      // moves card upward for scoring
      animatedCard.style.transform = `translate(0px,-200px)`;
      animatedCard.classList.add("show");

      setTimeout(() => {
        card = eval(cardName); // e.g. str "rustySword" -> var rustySword
        if (card.type === "attack") {
          useAttackCard(animatedCard, card, rect, cardNames)
        } else if (card.type === "food") {
          useFoodCard(animatedCard, card, rect)
        } else {
          setTimeout(()=>{juice_up(animatedCard);}, 200);
          if (card == forge) {
            useForge(rect.left, rect.top, cardNames);
          }
        }
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
    deal(6, false);
  }, 2000 + selectedCards.length * 200);

  selectedCards = ["-", "-", "-", "-", "-", "-"]
  setTimeout(() => {
    if (turn == true) { monsterAttack() };
  }, 3000)
}

function monsterAttack() {
  const healthBar = document.getElementById("player-health-bar");
  const healthNum = document.getElementById("player-health-num");
  
  let monster = currentMonster;

  damage = monster.damage + Math.floor(monster.scaling / 2) * window[monster.file+"Level"];


  let percent = (damage * 100) / health;
  let newWidth = healthBar.offsetWidth - (healthBar.offsetWidth / 100) * percent;

  health -= damage;

  setTimeout(function(){
    healthBar.classList.add("flash");
    document.getElementById("playButton").style.pointerEvents = "auto";
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
  console.log("damage:"+damage)
  // healthbar
  const healthBar = document.getElementById("monster-health-bar");
  const healthNum = document.getElementById("monster-health-num");

  let percent = (damage * 100) / enemyHealth;
  let newWidth = healthBar.offsetWidth - (healthBar.offsetWidth / 100) * percent;

  enemyHealth -= damage;

  if (enemyHealth <= 0) {turn = false;}

  
  // Update health number and animate bar to shrink gosh chatgpt
  setTimeout(function() {
    
    if (enemyHealth > 0) {
      healthNum.innerHTML = enemyHealth;
      healthBar.style.width = newWidth + "px";
    } else {
      healthNum.innerHTML = 0;
      // win
      healthBar.style.width = "0px";
      battle = false;
      document.getElementById("win_aud").play();
      setTimeout(function() {
        collectLoot(currentMonster);
      }, 2000)
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
  } else if (xp >= 8 && xp < 10) {
    return getRandomItem([skeleton, spider, minispiders])
  } else if (xp >= 10 && xp < 12) {
    return getRandomItem([spider, minispiders, golem])
  } else if (xp >= 12 && xp < 16) {
    return getRandomItem([minispiders, golem, dragon])
  }
  else {
    return getRandomItem([golem, minispiders, dragon]) // fallback (toughest enemy)
  } 
}


// Idea based on spelling mistake: APIder?