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
let compStats = 0
let yourStats = 0
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
    yourStats+=1
    document.querySelector(".your-stats").textContent = yourStats
  } else {
    rpsOutput.textContent = "Комп'ютер виграв раунд!";
    compStats += 1;
    document.querySelector(".comp-stats").textContent = compStats
  }
});
rpsBtn.addEventListener("click", (e) => {
  for (let btn of document.querySelectorAll(".rps-choice")) {
    if (btn.name == comp) {
      btn.style.backgroundColor = "red";
    }
  }
});
