const juice = {
  file: "juice",
  name: "Juice",
  type: "food",
  damage: 0,
  actions: 1,
  health: 10, // how much health it heals (in percentage)
  overflow: false, // whether it can overflow health bar
  price: 3,
  action: '<span style="color: grey">Fresh and energizing.</span><br/> Heals <span style="color:var(--healthFull);">10%</span> of total Health',
  img: "food/juice.png"
}

const blackTea = {
  file: "blackTea",
  name: "Black Tea",
  type: "food",
  damage: 0,
  actions: 0,
  health: 40,
  overflow: false,
  price: 12,
  action: '<span style="color: grey">A breakfast tea.</span><br/> Heals <span style="color:var(--healthFull);">40%</span> of total Health',
  img: "food/tea/blackTea.png"
}
const tea = blackTea;

const whiteTea = {
  file: "whiteTea",
  name: "White Tea",
  type: "food",
  damage: 0,
  actions: 0,
  health: 50,
  overflow: false,
  price: 12,
  action: '<span style="color: grey">Light and restorative.</span><br/> Heals <span style="color:var(--healthFull);">50%</span> of total Health',
  img: "food/tea/whiteTea.png"
}
const greenTea = {
  file: "greenTea",
  name: "Green Tea",
  type: "food",
  damage: 0,
  actions: 0,
  health: 60,
  overflow: false,
  price: 12,
  action: '<span style="color: grey">Deep and thick.</span><br/> Heals <span style="color:var(--healthFull);">60%</span> of total Health',
  img: "food/tea/greenTea.png"
}

const potato = {
  file: "potato",
  name: "Potato",
  type: "food",
  damage: 0,
  actions: 0,
  health: 100,
  overflow: false,
  price: 30,
  action: '<span style="color: grey">Down to earth.</span><br/> Heals <span style="color:var(--healthFull);">100%</span> of total Health',
  img: "food/potato.png"
}
const carrot = {
  file: "carrot",
  name: "Carrot",
  type: "food",
  damage: 0,
  actions: 0,
  health: 30,
  overflow: true,
  price: 17,
  action: '<span style="color: grey">Bright and juicy.</span><br/> Heals <span style="color:var(--healthFull);">30%</span> of total Health <span style="color:var(--special);">(can overflow)</span>',
  img: "food/carrot.png"
}
const tomato = {
  file: "tomato",
  name: "Tomato",
  type: "food",
  damage: 0,
  actions: 0,
  health: 60,
  overflow: true,
  price: 23,
  action: '<span style="color: grey">Smooth and velvety.</span><br/> Heals <span style="color:var(--healthFull);">60%</span> of total Health <span style="color:var(--special);">(can overflow)</span>',
  img: "food/tomato.png"
}
const pizza = {
  file: "pizza",
  name: "Pizza",
  type: "food",
  damage: 0,
  actions: 0,
  health: 100,
  overflow: true,
  price: 42,
  action: '<span style="color: grey">Greasy.</span><br/> Heals <span style="color:var(--healthFull);">100%</span> of total Health <span style="color:var(--special);">(can overflow)</span>',
  img: "food/pizza.png"
}
