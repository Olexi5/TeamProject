//year
const yearOutput = document.querySelector(".year-output");
const yearForm = document.querySelector(".year-form");
yearForm.addEventListener("submit", (e) => {
  const elements = e.currentTarget.elements;
  e.preventDefault();
  if (elements.year.value % 4 === 0) {
    yearOutput.textContent = "Ви народилися у високосний рік!";
    yearOutput.classList.add("output-green")
  } else {
    yearOutput.textContent = "Ви народилися не у високосний рік!";
    yearOutput.classList.add("output-red");
  }
  yearForm.style.marginRight = "140px"
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
    btn.classList.remove("rps-red")
  }
  comp = Math.floor(Math.random() * 3) + 1;
  choice = e.target.name;
  if (comp == choice) {
    rpsOutput.textContent = "Нічия";
    rpsOutput.classList.remove("output-green");
    rpsOutput.classList.remove("output-red");
    rpsOutput.classList.add("output-black")
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
      btn.classList.add("rps-red")
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
let isPlaying = false;
const target = screen.availWidth;

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
      isPlaying = false;
      dinoOutput.textContent = "Game Over";
      dinoRetry.style.display = "block";
      return;
    }
    anim = requestAnimationFrame(move);
  } else {
    cactus.style.transform = "translate(0px)";
    speed += 1;
    if (cactus.firstChild.style.height === "40px") {
      cactus.lastChild.style.height = "40px";
    } else if (cactus.childElementCount >= 3) {
      cactus.firstChild.style.height = "40px";
      cactus.style.top = "150px";
    } else {
      cactus.insertAdjacentHTML(
        "beforeend",
        '<img src="./images/cactus.png" alt="" class="dino-cactus-img">',
      );
    }
    positionX = 0;
    anim = requestAnimationFrame(move);
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (dinoOutput.textContent === "Game Over") return;

    if (!isPlaying) {
      isPlaying = true;
      anim = requestAnimationFrame(move);
    }
    dino.style.transform = "translateY(-135px)";
    setTimeout(() => {
      dino.style.transform = "translateY(-85px)";
    }, 200);
  }
});

dinoRetry.addEventListener("click", () => {
  if (!isPlaying) {
    cactus.innerHTML =
      '<img src="./images/cactus.png" alt="" class="dino-cactus-img">';

    cactus.style.transform = "translate(0px)";
    positionX = 0;
    isPlaying = true;
    anim = requestAnimationFrame(move);
    dinoRetry.style.display = "none";
    dinoOutput.textContent = "Press space to jump";
  }
});
//TEAM
const teamList = document.querySelector(".team-list");
const forw = document.querySelector(".team-forw");
const back = document.querySelector(".team-back");
let first = 0;
console.log(teamList.scrollLeft);
forw.addEventListener("click", () => {
  teamList.scroll({ left: 330, behavior: "smooth" });
  console.log(teamList.scrollLeft);
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
  backdropSecond.classList.toggle("is-hidden");
});
closeBtnSecond.addEventListener("click", () => {
  backdropSecond.classList.add("is-hidden");
  document.body.classList.toggle("no-scroll");
});
//modal input
const modalForm = document.querySelector(".modal-form");
const outputText = document.querySelector(".header-text").querySelector("span");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  outputText.textContent = e.currentTarget.elements.name.value || "User"
});
