class Animation {
  constructor(duration, animation, params = {}) {
    this.duration = duration;
    this.animation = animation;
    this.params = params;
    this._then = null;
  }

  then(callback) {
    this._then = callback;
    return this; // allow chaining (nice API!)
  }


  play() {
    return new Promise(resolve => {
      const start = performance.now();
      const animationFunction = this.figureOutAnimation();

      const tick = now => {
        let elapsed = now - start;
        let progress = Math.min(elapsed / this.duration, 1);

        // Call user-provided update function
        animationFunction(progress);

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          if (this._then) this._then();
          resolve();
        }
      }

      requestAnimationFrame(tick);
    });
  }

  figureOutAnimation() {
    if (this.animation === "text-effect") {
      let hasRun = false;

      return progress => {
        if (hasRun) return null;
        hasRun = true;
        const {left, top, color, size, text} = this.params;

        const effect = document.createElement("div");
        effect.className = "text-effect";
        effect.style.color = color;
        effect.style.fontSize = size + "px";
        effect.style.animationDuration = `${this.duration}ms`;
        effect.innerText = text;
        effect.style.left = `${left}px`;
        effect.style.top = `${top}px`;
        document.getElementById("animation-area").appendChild(effect);

        effect.addEventListener("animationend", () => {
          effect.remove();
        });
      }

    } else if (this.animation === "juice-up") {
      return progress => {
        const {card} = this.params;
        card.classList.add("juicy");
        setTimeout(() => {
          card.classList.remove("juicy");
        }, 500)
      }

    } else if (this.animation === "card-raise") {
      return progress => {
        const {card} = this.params;
        card.style.transform = `translate(0px,-200px)`;
        card.classList.add("show");
      }
    } else if (this.animation === "fade") {
      return progress => {
        const {element} = this.params;
        element.style.opacity = "0";
        element.addEventListener("transitionend", () => element.remove());
      }
    } else if (this.animation === "test") {
      return progress => console.log("animation progress", progress.toFixed(2));
    } else if (this.animation === "monster-health") {
      let hasRun = false;

      return progress => {
        if (hasRun) return null;
        hasRun = true;

        const {damage} = this.params;

        const healthBar = document.getElementById("monster-health-bar");
        const healthNum = document.getElementById("monster-health-num");

        enemyHealth -= damage;

        healthNum.innerHTML = enemyHealth;
        healthBar.style.width = (enemyHealth / (currentMonster.health + (monster.scaling * window[monster.file + "Level"])) * 100).toFixed(3) + "%";

        if (enemyHealth <= 0) {
          healthNum.innerHTML = "0";
          healthBar.style.width = "0px";
          turn = false;
        }
      }
    } else {
      return progress => console.warn("no animation!!");
    }
  }
}

class AnimationQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(animation) {
    this.queue.push(animation);
    this.runNext().then();

    return this;
  }

  async runNext() {
    if (this.running || this.queue.length === 0) return null;

    this.running = true;
    const nextAnim = this.queue.shift();

    await(nextAnim).play();
    this.running = false;
    this.runNext();
  }

  showQueue() {
    for (let i in this.queue) {
      console.log(this.queue[i].animation);
    }
    console.log("--");
  }
}



// List of background tunes (can be .mp3, .ogg, .wav)
const tracks = [
  "res/aud/bit.wav",
  "res/aud/cave noises 2.wav",
  "res/aud/descent.wav",
  "res/aud/drummed.wav",
  "res/aud/echo.wav",
  "res/aud/minecraft cave noises.wav",
  "res/aud/motif.wav",
  "res/aud/skeleton.wav",
  "res/aud/slime.wav",
  "res/aud/spider.wav",

];

let currentIndex = null;
let currentPlayer = 1;

function pickRandomTrack() {
  let next;
  do {
    next = Math.floor(Math.random() * tracks.length);
  } while (next === currentIndex); // no immediate repeat
  currentIndex = next;
  return tracks[next];
}

function playTrack(playerId, trackUrl) {
  const player = document.getElementById(playerId);
  player.src = trackUrl;
  player.volume = 1;
  player.play();
  return player;
}

function scheduleNext(currentPlayerEl) {
  // Preload next track a little before the current one ends
  currentPlayerEl.addEventListener("timeupdate", function checkTime() {
    if (currentPlayerEl.duration - currentPlayerEl.currentTime < 0.1) {
      // 0.5 sec before end, prepare next
      currentPlayerEl.removeEventListener("timeupdate", checkTime);

      // switch players for gapless play
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      const nextPlayerId = `bgm-player-${currentPlayer}`;
      const nextTrack = pickRandomTrack();

      const nextPlayerEl = playTrack(nextPlayerId, nextTrack);
      nextPlayerEl.currentTime = 0; // start immediately for overlap

      // fade out the old one for smoothness
      currentPlayerEl.pause();

      scheduleNext(nextPlayerEl);
    }
  });
}