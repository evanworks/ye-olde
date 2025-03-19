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
      let cardPlacement = event.target.parentElement.parentElement.id;
      let cardIndex = cardPlacement.charAt(cardPlacement.length - 1);
      selectedCards[parseInt(cardIndex) - 1] = event.target.id;
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

function clearSlots(parent) {
  const children = parent.children;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.id == "loot-money") {
      // pass cuz its just special like that
    } else {
      child.innerHTML = "";
    }
  }
}