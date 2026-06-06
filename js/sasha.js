//year
const yearOutput = document.querySelector(".year-output");
const yearForm = document.querySelector(".year-form");
yearForm.addEventListener("submit", (e) => {
  const elements = e.currentTarget.elements;
  e.preventDefault();
  if (elements.year.value % 4 === 0) {
    yearOutput.textContent = "Ви народилися у високосний рік!";
  } else {
    yearOutput.textContent = "Ви народилися не у високосний рік!";
  }
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
    btn.style.backgroundColor = "black";
  }
  comp = Math.floor(Math.random() * 3) + 1;
  choice = e.target.name;
  if (comp == choice) {
    rpsOutput.textContent = "Нічия";
  } else if (
    (choice == 1 && comp === 2) ||
    (choice == 2 && comp === 3) ||
    (choice == 3 && comp === 1)
  ) {
    rpsOutput.textContent = "Ви виграли раунд!";
    yourStats += 1;
    document.querySelector(".your-stats").textContent = yourStats;
  } else {
    rpsOutput.textContent = "Комп'ютер виграв раунд!";
    compStats += 1;
    document.querySelector(".comp-stats").textContent = compStats;
  }
});
rpsBtn.addEventListener("click", (e) => {
  for (let btn of document.querySelectorAll(".rps-choice")) {
    if (btn.name == comp) {
      btn.style.backgroundColor = "red";
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
// const dino = document.querySelector(".dino-char");
// const rectDino = dino.getBoundingClientRect();
// const cactus = document.querySelector(".dino-cactus");
// const rectCactus = cactus.getBoundingClientRect();
// const speed = 6;
// let positionX = 0;
// let anim;
// const target = screen.availWidth;
// function move() {
//   if (positionX < target) {
//     positionX += speed;
//     cactus.style.transform = `translate(-${positionX}px)`;
//     anim = requestAnimationFrame(move);
//   }
// }
// document.addEventListener("keydown", (e) => {
//   if (e.code === "Space") {
//     anim = requestAnimationFrame(move);
//     document.addEventListener("click", (e) => {
//       dino.style.transform = "translateY(-105px)";
//       setTimeout(() => {
//         dino.style.transform = "translateY(-55px)";
//       }, 200);
//     });
//   }
// });
const dino = document.querySelector(".dino-char");
const cactus = document.querySelector(".dino-cactus");
const speed = 7
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
    const buffer = 20
    if (
      currentDino.left + buffer < currentCactus.right &&
      currentDino.right - buffer > currentCactus.left &&
      currentDino.top + buffer < currentCactus.bottom &&
      currentDino.bottom - buffer > currentCactus.top
    ) {
      cancelAnimationFrame(anim);
      isPlaying = false;
      return;
    }
    anim = requestAnimationFrame(move);
  }else{
    cactus.style.transform = "translate(15px)";
    positionX = 0
    anim = requestAnimationFrame(move);
  }
}
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (!isPlaying) {
      isPlaying = true;
      anim = requestAnimationFrame(move);
    }
    dino.style.transform = "translateY(-105px)";
    setTimeout(() => {
      dino.style.transform = "translateY(-55px)";
    }, 200);
  }
});
