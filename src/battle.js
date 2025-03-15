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
    if (document.getElementById(parent + sample).innerHTML == "") {
      parent += sample;
      break;
    }
  }
  const element = document.getElementById(parent);

  element.appendChild(necessaryDiv);

  // tooltip insides

  const tooltip = document.createElement("span");
  tooltip.className = "tooltiptext";
  
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

  img.addEventListener("click", function() {
    // decreases actions
    if (actions > 0 || card.actions >= 1) {
      select();
      actions += card.actions;
      actions -= 1;
      document.getElementById("actions-num").innerHTML = actions;
      selectedCards.push(event.target.id);
      console.log(selectedCards)
    } else {
      document.getElementById("actions-num").style.color = "#e83b3b";
      document.getElementById("actions-num").classList.add("shake");
      setTimeout(() => {
        document.getElementById("actions-num").style.color = "white";
        document.getElementById("actions-num").classList.remove("shake");
      }, 800)
    }
  }); 

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

  console.log(selectedCards)

  const animationArea = document.getElementById("animation-area");
  const cardsToAnimate = [...selectedCards]; // Local copy of selectedCards
  const cardNames = [...cardsToAnimate]
  cardNames.forEach((card, index) => {
    cardNames[index] = card.slice(0, -1);
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
    let cardName = card.slice(0, -1);
    const cardElement = document.getElementById(card);
    const rect = cardElement.getBoundingClientRect();

    const animatedCard = document.createElement("img");
    animatedCard.src = "res/img/" + cardName + ".png";
    animatedCard.style.setProperty("filter", "drop-shadow(-5px 5px 10px black)");
    animatedCard.className = "card-animation";
    animatedCard.style.left = `${rect.left}px`;
    animatedCard.style.top = `${rect.top + 140 + 150}px`;
    animationArea.appendChild(animatedCard);

    setTimeout(() => {
      animatedCard.style.transform = `translate(0px,-150px)`
      //animatedCard.style.transform = `translate(${targetX - rect.left}px, ${targetY - rect.top}px)`;
      animatedCard.classList.add("show");

      setTimeout(() => {
        card = eval(cardName);
        if (card.type === "attack") {
          setTimeout(function(){
            juice_up(animatedCard, 1)
            const damageIndicator = document.createElement("div");
            console.log(card.damage)
            damageIndicator.className = "damage-indicator";
            damageIndicator.innerText = `+${card.damage} damage`;
            damageIndicator.style.left = `${rect.left + 30}px`;
            damageIndicator.style.top = `${rect.top+120}px`;
            animationArea.appendChild(damageIndicator);
  
            damageIndicator.addEventListener("animationend", () => damageIndicator.remove());
          }, 200)
          attack(card.damage);
          if (cardNames.includes("slimeball")) {
            setTimeout(function(){
              juice_up(animatedCard, 1)
              useSlimeball(rect.left, rect.top, card.damage);
            }, 400);
          }
        }

        setTimeout(() => {
          animatedCard.style.opacity = 0;
          animatedCard.addEventListener("transitionend", () => animatedCard.remove());
        }, 1000);

      }, index * 200);
    }, 0);

    discardCard(card);
  });

  function useSlimeball(targetX, targetY, damage) {
    
    const slimeEffectIndicator = document.createElement("div");
    slimeEffectIndicator.className = "slime-effect";
    slimeEffectIndicator.innerText = "Double Attack!";
    slimeEffectIndicator.style.left = `${targetX + 30}px`;
    slimeEffectIndicator.style.top = `${targetY + 105}px`;
    document.getElementById("animation-area").appendChild(slimeEffectIndicator);

    removeItem(selectedCards, slimeball);
    attack(damage);
    slimeEffectIndicator.addEventListener("animationend", () => slimeEffectIndicator.remove());
  }

  setTimeout(() => {
    deal(5, false);
  }, 2000);

  selectedCards = [];
  switchTurn();
}

function switchTurn() {
  if (turn == true) {
    // enemy turn (dang this is just blackjack again)
    turn == false;
    monsterAttack();
  } else if (turn == false) {
    // player turn
    turn == true;
  } else {
    alert("Invalid turn sequence.")
    alert("Beginning escape process...")
    alert("Just kidding haha")
  }
}

function enterBattle(monster) {
  deal(5, true)

  document.getElementById("monster-img").src = monster.img;
  document.getElementById("monster-name").innerHTML = monster.name;
  document.getElementById("monster-lvl").innerHTML = "Level " + 1;
  document.getElementById("monster-desc").innerHTML = monster.description;
  document.getElementById("monster-health-num").innerHTML = monster.health;
  enemyHealth = monster.health;
  currentMonster = monster;
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
    healthNum.innerHTML = enemyHealth;
    healthBar.style.width = newWidth + "px";
  }, 200);
}

// yells at a card to rotate
function juice_up(card, amount) {
  card.style.rotate = `${amount}deg`
  setTimeout(() => {
    card.style.rotate = `-${amount}deg`
    setTimeout(() => {
      card.style.rotate = `0deg`
    }, 100)
  }, 100)
}

// coolaj68 on Stack Overflow...

function shuffle(array) {
  shuffledArray = [...array];
  let currentIndex = shuffledArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex], shuffledArray[currentIndex]];
  }

  return shuffledArray
}
let arr = [2, 11, 37, 42];
bean = shuffle(arr);

function removeItem (array, item) {
  const index = array.indexOf(item);
  if (index > -1) { // only splice array when item is found
    array.splice(index, 1); // 2nd parameter means remove one item only
  }
}
