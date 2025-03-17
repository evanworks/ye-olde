function enterBattle() {
  monster = chooseMonster()
  document.getElementById("shop").style.display = "none";
  document.getElementById("battle").style.display = "block";
  deal(5, true)

  // displays monster info
  document.getElementById("monster-img").src = monster.img;
  document.getElementById("monster-name").innerHTML = monster.name;
  document.getElementById("monster-lvl").innerHTML = "Level " + 1;
  document.getElementById("monster-desc").innerHTML = monster.description;
  document.getElementById("monster-health-num").innerHTML = monster.health;
  document.getElementById("monster-health-bar").style.width = "93vw";

  enemyHealth = monster.health;
  currentMonster = monster;

  // resets all values
  idonthaveagoodnameforthis = 0; // great job past self

  actions = maxActions;
  hands = maxHands;

  document.getElementById("hands-num").innerHTML = hands;
  document.getElementById("actions-num").innerHTML = actions;
}

function chooseMonster() {
  if (xp < 2) {
    return getRandomItem([slime])
  }
}

function deal(amount, first) {
  if (first) {
    shuffledDeck = shuffle(fullDeck);
  } else {
    if (shuffledDeck != []) {
      shuffledDeck = shuffle(shuffledDeck);
    } else {
      alert("out of cards!");
    }
  }
  for (let i = 0; i < amount; i++) { 
    if (shuffledDeck.length < amount) {
      for (let card in shuffledDeck) {
        displayCard(shuffledDeck.pop(), 'slot');
      }
    } else {
      displayCard(shuffledDeck.pop(), 'slot');
    }
  }
}

function displayCard(card, parent) {
  // img/tooltip prep
  const necessaryDiv = document.createElement("div");
  necessaryDiv.className = "tooltip";
  const img = document.createElement("img");
  img.src = "res/img/"+card.img;
  img.draggable = false;
  img.id = card.file + idonthaveagoodnameforthis;
  idonthaveagoodnameforthis += 1;
  necessaryDiv.appendChild(img);
  sample = 0;

  for (let i = 0; i < 6; i++) {
    sample += 1;
    if (document.getElementById(parent + sample).innerHTML == null || document.getElementById(parent + sample).innerHTML == "") {
      parent += sample;
      
      break;
    }
  }
  const element = document.getElementById(parent);
  element.appendChild(necessaryDiv);

  // tooltip insides

  const tooltip = document.createElement("span");
  tooltip.classList.add("tooltiptext");
  if (card.type == "food" && parent.includes("food"))
  tooltip.classList.add("above");
  
  // displays name in bold
  tooltip.innerHTML = "<b>"+card.name+"</b><br/>";

  // displays damage
  if (card.damage != 0) {
    tooltip.innerHTML += "<i>"+card.damage+" damage</i><br/>";
  }

  // displays extra actions in yellow
  if (card.actions != 0) {
    if (card.actions = 1) {
      g = "action"
    } else {
      g = "actions"
    }
    tooltip.innerHTML += "<i style='color: #fbff86;'>+"+card.actions+" "+g+"</i><br/>";
  }

  // displays card effect which i dumbly called actions
  if (card.action != "") {
    tooltip.innerHTML += card.action;
  }

  necessaryDiv.appendChild(tooltip);

  // selects cards

  img.addEventListener("click", function() {
    selectCard(card, parent)
  }); 
}

function selectCard(card, parent) {
  if (document.getElementById("shop").style.display == "block") {

    // 'are you sure?'
    let parentelmnt = event.target.parentElement;
    setTimeout(()=>{
      parentelmnt.parentElement.previousElementSibling.innerHTML = "BUY";
      parentelmnt.parentElement.previousElementSibling.style.color = "white";
      parentelmnt.parentElement.previousElementSibling.style.cursor = "pointer";
    }, 150)
    parentelmnt.parentElement.previousElementSibling.classList.add("goesDownAndBackUp");

    // completes purchase
    parentelmnt.parentElement.previousElementSibling.addEventListener("click", function() {
      buyCardInShop(card, parent);
    });

    // resets purchase or whatever
    event.target.addEventListener("click", function() {
      event.preventDefault()
      let parentelmnt = event.target.parentElement;
      parentelmnt.parentElement.previousElementSibling.innerHTML = "$" + card.price;
      parentelmnt.parentElement.previousElementSibling.style.color = "#fbb954";
      parentelmnt.parentElement.previousElementSibling.style.background = "#252928";
      parentelmnt.parentElement.previousElementSibling.style.cursor = "default";
      
      // future-proof totally
      event.target.addEventListener("click", function() {
        selectCard(card)
      })
    });
  } else {
    // decreases actions
    if (actions > 0 || card.actions >= 1) {
      select();
      actions += card.actions;
      actions -= 1;
      document.getElementById("actions-num").innerHTML = actions;
      selectedCards.push(event.target.id);
      event.target.classList.add('selected-card');
    } else {
      document.getElementById("actions-num").style.color = "#e83b3b";
      document.getElementById("actions-num").classList.add("shake");
      setTimeout(() => {
        document.getElementById("actions-num").style.color = "white";
        document.getElementById("actions-num").classList.remove("shake");
      }, 800)
    }
  }
}

function discardCard(card) {
  document.getElementById(card).parentElement.remove();
}

function select() {
  element = event.target;
  elementH = element.parentElement;
  element.parentElement.style.position = "relative";
  element.parentElement.style.top = "-30px";
  /*elementH.parentElement.style.background = "transparent";*/
}

function play() {
  if (selectedCards.length === 0) return;

  hands -= 1;
  document.getElementById("hands-num").innerHTML = hands;

  const animationArea = document.getElementById("animation-area");
  const cardsToAnimate = [...selectedCards]; // Local copy of selectedCards
  const cardNames = [...cardsToAnimate]
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

  selectedCards = [];
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
        healthNum.innerHTML = 0;
        healthBar.style.width = "0px";
        setTimeout(function() {
          collectLoot(currentMonster);
        }, 3000)
      }
    }, 200);
}