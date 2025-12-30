// Outfit state indices

console.log("code.js loaded!");

const state = {
  hair: 0, necklace: 0, shoes: 0,
  shirt: 0, skirt: 0, background: 0
};

/* Screen navigation */
function startGame() {
  console.log("Start button clicked");

  const menu = document.getElementById("main-menu");
  const game = document.getElementById("game-screen");

  if (menu && game) {
    menu.classList.add("hidden");
    game.classList.remove("hidden");
  } else {
    console.error("Menu or game screen not found in DOM");
  }

  // Initialize base layers only when game starts
  const hairback = document.getElementById("hairback");
  if (hairback) hairback.className = "hairback";

  const man = document.getElementById("man");
  if (man) man.className = "man";
}



function quitGame() {
  alert("Thanks for playing Whimsy Dress!");
}

/* Utility: preserve base ID styling and add clothing class */
function applyClass(elId, className) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.className = `${elId} ${className}`;
}

/* Dress-up cycles */
function cycleHair() {
  const options = ["hairfront1","hairfront2","hairfront3","hairfront4","hairfront5"];
  state.hair = (state.hair + 1) % options.length;
  applyClass("hairfront", options[state.hair]);
  applyClass("hairback", "hairback");
}

function cycleNecklace() {
  const options = ["necklace1","necklace2","necklace3","necklace4","necklace5"];
  state.necklace = (state.necklace + 1) % options.length;
  applyClass("necklace", options[state.necklace]);
}

function cycleShoes() {
  const options = ["shoe1","shoe2","shoe3","shoe4","shoe5"];
  state.shoes = (state.shoes + 1) % options.length;
  applyClass("shoes", options[state.shoes]);
}

function cycleShirt() {
  const options = ["shirt1","shirt2","shirt3","shirt4","shirt5"];
  state.shirt = (state.shirt + 1) % options.length;
  applyClass("shirt", options[state.shirt]);
}

function cycleSkirt() {
  const options = ["skirt1","skirt2","skirt3","skirt4","skirt5"];
  state.skirt = (state.skirt + 1) % options.length;
  applyClass("skirt", options[state.skirt]);
}

function cycleBackground() {
  const options = ["background1","background2","background3","background4","background5"];
  state.background = (state.background + 1) % options.length;
  applyClass("background", options[state.background]);
}