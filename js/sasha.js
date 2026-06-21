//year
const yearOutput = document.querySelector(".year-output");
const yearForm = document.querySelector(".year-form");
yearForm.addEventListener("submit", (e) => {
  const elements = e.currentTarget.elements;
  e.preventDefault();
  if (elements.year.value % 4 === 0) {
    yearOutput.textContent = "Ви народилися у високосний рік!";
    yearOutput.classList.add("output-green");
  } else {
    yearOutput.textContent = "Ви народилися не у високосний рік!";
    yearOutput.classList.add("output-red");
  }
  yearForm.style.marginRight = "140px";
});
//rps
const rpsList = document.querySelector(".rps-list");
const rpsOutput = document.querySelector(".rps-output");
let compStats = 0;
let yourStats = 0;
const rpsBtn = document.querySelector(".rps-comp");
let choice = 0;
let comp = 0;
rpsList.addEventListener("click", (e) => {
  for (let btn of document.querySelectorAll(".rps-choice")) {
    btn.classList.remove("rps-red");
  }
  comp = Math.floor(Math.random() * 3) + 1;
  choice = e.target.name;
  if (comp == choice) {
    rpsOutput.textContent = "Нічия";
    rpsOutput.classList.remove("output-green");
    rpsOutput.classList.remove("output-red");
    rpsOutput.classList.add("output-black");
  } else if (
    (choice == 1 && comp === 2) ||
    (choice == 2 && comp === 3) ||
    (choice == 3 && comp === 1)
  ) {
    rpsOutput.textContent = "Ви виграли раунд!";
    rpsOutput.classList.add("output-green");
    rpsOutput.classList.remove("output-red");
    rpsOutput.classList.remove("output-black");
    yourStats += 1;
    document.querySelector(".your-stats").textContent = yourStats;
  } else {
    rpsOutput.textContent = "Комп'ютер виграв раунд!";
    rpsOutput.classList.remove("output-green");
    rpsOutput.classList.add("output-red");
    rpsOutput.classList.remove("output-black");
    compStats += 1;
    document.querySelector(".comp-stats").textContent = compStats;
  }
});
rpsBtn.addEventListener("click", (e) => {
  for (let btn of document.querySelectorAll(".rps-choice")) {
    if (btn.name == comp) {
      btn.classList.add("rps-red");
    }
  }
});
//calc
const calcForm = document.querySelector(".calc-form");
const calcList = document.querySelector(".calc-list");
const calcOutput = document.querySelector(".calc-output");
let oper = "";
calcList.addEventListener("click", (e) => {
  oper = e.target.textContent;
});
calcForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elem = e.currentTarget.elements;
  const a = Number(elem.num1.value);
  const b = Number(elem.num2.value);
  let output = 0;
  switch (oper) {
    case "+":
      output = a + b;
      break;
    case "-":
      output = a - b;
      break;
    case "*":
      output = a * b;
      break;
    case "/":
      if (b === 0) {
        output = "На нуль ділити не можна";
        break;
      }
      output = a / b;
      break;
  }
  calcOutput.textContent = output;
});
//dino
const dino = document.querySelector(".dino-char");
const cactus = document.querySelector(".dino-cactus");
let speed = 7;
const dinoOutput = document.querySelector(".dino-output");
const dinoRetry = document.querySelector(".dino-retry");
let positionX = 0;
let anim;
let isPlaying = "didn't start";
const target = 560;
let points = 0;
function move() {
  if (positionX < target) {
    positionX += speed;
    cactus.style.transform = `translate(-${positionX}px)`;
    const currentDino = dino.getBoundingClientRect();
    const currentCactus = cactus.getBoundingClientRect();
    const buffer = 20;
    if (
      currentDino.left + buffer < currentCactus.right &&
      currentDino.right - buffer > currentCactus.left &&
      currentDino.top + buffer < currentCactus.bottom &&
      currentDino.bottom - buffer > currentCactus.top
    ) {
      cancelAnimationFrame(anim);
      isPlaying = "false";
      dinoOutput.textContent = `Game over, ${points} points`;
      dinoOutput.classList.remove("output-black");
      dinoOutput.classList.add("output-red");
      dinoRetry.style.display = "block";
      points = 0;
      return;
    }
    points += 1;
    dinoOutput.textContent = points;
    anim = requestAnimationFrame(move);
  } else {
    cactus.style.transform = "translate(0px)";
    speed += 1;
    positionX = 0;
    if (cactus.firstElementChild.style.height === "40px") {
      cactus.lastElementChild.style.height = "40px";
    } else if (cactus.childElementCount >= 3) {
      cactus.firstElementChild.style.height = "40px";
      cactus.style.top = "180px";
    } else {
      cactus.insertAdjacentHTML(
        "beforeend",
        '<img src="./images/cactus.png" alt="" class="dino-cactus-img">',
      );
    }
    anim = requestAnimationFrame(move);
  }
}

document.addEventListener("keydown", (e) => {
  e.preventDefault()
  if (e.code === "Space") {
    // if (dinoOutput.textContent === "Game Over") return;
    if (isPlaying === "false") {
      return;
    }
    if (isPlaying === "didn't start") {
      isPlaying = "true";
      anim = requestAnimationFrame(move);
    }
    dino.style.transform = "translateY(-125px)";
    setTimeout(() => {
      dino.style.transform = "translateY(-75px)";
    }, 200);
  }
});

dinoRetry.addEventListener("click", () => {
  if (isPlaying==="false") {
    cactus.innerHTML =
      '<img src="./images/cactus.png" alt="" class="dino-cactus-img">';

    cactus.style.transform = "translate(0px)";
    positionX = 0;
    isPlaying = "true";
    anim = requestAnimationFrame(move);
    dinoRetry.style.display = "none";
    dinoOutput.textContent = "Press space to jump";
    dinoOutput.classList.remove("output-red");
    dinoOutput.classList.add("output-black");
    cactus.style.top = "190px";
    speed = 7;
  }
});
//TEAM
const teamList = document.querySelector(".team-list");
const forw = document.querySelector(".team-forw");
const back = document.querySelector(".team-back");
let first = 0;
forw.addEventListener("click", () => {
  teamList.scroll({ left: 330, behavior: "smooth" });
  if (first == teamList.scrollLeft) {
    teamList.scroll({ left: 0, behavior: "instant" });
    first = 0;
  } else {
    first = teamList.scrollLeft;
  }
});
back.addEventListener("click", () => {
  teamList.scroll({ left: 0, behavior: "smooth" });
  if (first == teamList.scrollLeft) {
    teamList.scroll({ left: 330, behavior: "instant" });
    first = teamList.scrollLeft;
  } else {
    first = 0;
  }
});
//modal
const backdropFirst = document.querySelector("div[data-modal]");
const closeBtnFirst = document.querySelector("button[data-modal-close]");
const backdropSecond = document.querySelector(".sec-backdrop");
const closeBtnSecond = document.querySelector(".sec-close-btn");
closeBtnFirst.addEventListener("click", () => {
  backdropFirst.classList.add("is-hidden");
  backdropSecond.classList.remove("is-hidden");
});
closeBtnSecond.addEventListener("click", () => {
  backdropSecond.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
});
//modal input
const modalForm = document.querySelector(".modal-form");
const outputText = document.querySelector(".header-text").querySelector("span");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  outputText.textContent = e.currentTarget.elements.name.value || "User";
});
//dark theme
function dark() {
  document.body.classList.add("background");
  document.querySelector(".header").classList.add("background");
  document.querySelector(".footer").classList.add("background");
  const link = document.querySelectorAll("a");
  const text = document.querySelectorAll("p");
  const subtitle = document.querySelectorAll("h2");
  for (let item of document.querySelectorAll("h3")) {
    item.classList.add("text-white");
  }
  for (let item of subtitle) {
    item.classList.add("text-white");
  }
  for (let item of link) {
    item.classList.add("text-white");
  }
  for (let item of text) {
    item.classList.add("text-white");
  }
  document.querySelector("h1").classList.add("text-white");
  const btn = document.querySelectorAll("button");
  console.log(text);
  for (let b of btn) {
    b.classList.add("border");
  }
  for (let item of document.querySelectorAll(".logo-white")) {
    item.style.display = "block";
  }
  for (let item of document.querySelectorAll(".logo-black")) {
    item.style.display = "none";
  }
  document.querySelector(".white-modal-close").style.display = "block";
  document.querySelector(".black-modal-close").style.display = "none";
  document.querySelector("label").classList.add("text-white");
  document.querySelector(".dino").classList.add("this");
}
function light() {
  document.body.classList.remove("background");
  document.querySelector(".header").classList.remove("background");
  document.querySelector(".footer").classList.remove("background");
  const link = document.querySelectorAll("a");
  const text = document.querySelectorAll("p");
  const subtitle = document.querySelectorAll("h2");
  for (let item of document.querySelectorAll("h3")) {
    item.classList.remove("text-white");
  }
  for (let item of subtitle) {
    item.classList.remove("text-white");
  }
  for (let item of link) {
    item.classList.remove("text-white");
  }
  for (let item of text) {
    item.classList.remove("text-white");
  }
  document.querySelector("h1").classList.remove("text-white");
  const btn = document.querySelectorAll("button");
  for (let b of btn) {
    b.classList.remove("border");
  }
  for (let item of document.querySelectorAll(".logo-black")) {
    item.style.display = "block";
  }
  for (let item of document.querySelectorAll(".logo-white")) {
    item.style.display = "none";
  }
  document.querySelector(".white-modal-close").style.display = "none";
  document.querySelector(".black-modal-close").style.display = "block";
  document.querySelector("label").classList.remove("text-white");
  document.querySelector(".dino").classList.remove("this");
}
const darkBtn = document.querySelector(".header-btn");
let theme = "light";
darkBtn.addEventListener("click", () => {
  if (theme === "dark") {
    darkBtn.classList.remove("header-btn2");
    document.querySelector(".sun").style.display = "block";
    document.querySelector(".moon").style.display = "none";
    theme = "light";
    light()
  } else if (theme === "light") {
    theme = "dark";
    darkBtn.classList.add("header-btn2");
    document.querySelector(".sun").style.display = "none";
    document.querySelector(".moon").style.display = "block";
    dark()
  }
});
