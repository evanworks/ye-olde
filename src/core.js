function deal(amount, first) {
  if (first) {
    shuffledDeck = shuffle(fullDeck);
  } else {
    if (JSON.stringify(shuffledDeck) != "[]") {
      shuffledDeck = shuffle(shuffledDeck);
    } else {
      if (noCards(document.getElementById("playercards")) == 0 && battle == true) {
        setTimeout(()=>{die()}, 200);
      }
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
  console.log(card);
  necessaryDiv.className = "tooltip";
  const img = document.createElement("img");
  img.src = "res/img/"+card.img;
  img.draggable = false;
  img.id = card.file + idonthaveagoodnameforthis;
  idonthaveagoodnameforthis += 1;
  necessaryDiv.appendChild(img);
  sample = 0;

  for (let i = 0; i < 10000; i++) {
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
    tooltip.innerHTML += "<i style='color: var(--healthFull)'>"+card.damage+" damage</i><br/>";
  }

  // displays extra actions in yellow
  if (card.actions != 0) {
    if (card.actions == 1) {
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

  img.cardHasBeenSelected = false;

  if (element.parentElement.id !== "inv-cards") {
    img.addEventListener("click", function() {
      selectCard(card, parent, img, img.cardHasBeenSelected)
    }); 
  }
}

function selectCard(card, parent, img) {
  document.getElementById("click_aud").play();

  if (document.getElementById("shop").style.display == "block") {
    selectShopCard(card, parent);
  } else {
    if (!img.cardHasBeenSelected) {
      // selecting cards in battle
      if (actions > 0 || card.actions >= 1) {
        img.cardHasBeenSelected = true;
        select();
        actions += card.actions;
        actions -= 1;
        document.getElementById("actions-num").innerHTML = actions;

        // adds to selectedCards array
        let cardPlacement = event.target.parentElement.parentElement.id;
        let cardIndex = cardPlacement.charAt(cardPlacement.length - 1);
        selectedCards[parseInt(cardIndex) - 1] = event.target.id;

        event.target.classList.add('selected-card');

        // deselection
        img.addEventListener("click", function() {
          img.removeEventListener("click", arguments.callee); // i can't believe this is a thing
          deselectCard(card,parent,img);
          img.addEventListener("click", function() {
            event.preventDefault();
            selectCard(card, parent, img);
          });
        });
      } else {
        document.getElementById("actions").classList.add("pulse");
        setTimeout(() => {
          document.getElementById("actions").classList.remove("pulse");
        }, 800)
      }
    }
  }
}
function deselectCard(card,parent,img) {
  actions -= card.actions;
  actions += 1;
  document.getElementById("actions-num").innerHTML = actions;

  // anim
  deselect();

  // removes from selectedCards array
  let cardPlacement = event.target.parentElement.parentElement.id;
  let cardIndex = cardPlacement.charAt(cardPlacement.length - 1);
  selectedCards[parseInt(cardIndex) - 1] = "-";

  event.target.classList.remove('selected-card');

  document.getElementById("click_aud").play();
  if (img.cardHasBeenSelected) {
    img.cardHasBeenSelected = false;
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
function deselect() {
  element = event.target;
  elementH = element.parentElement;
  element.parentElement.style.position = "initial";
  element.parentElement.style.top = "0px";
  /*elementH.parentElement.style.background = "transparent";*/
}

function clearSlots(parent) {
  const children = parent.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.id == "loot-money") {
      // pass
    } else {
      child.innerHTML = "";
    }
  }
}

function noCards(parent) {
  let amnt = 0;
  const children = parent.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.children[0]) {
      amnt += 1;
      // pa
    }
  }
  return amnt;
}

function die() {
  document.getElementById("deathScreen").style.display = "block";
  document.getElementById("game_over_aud").play();
}