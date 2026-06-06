// guess number
// let randomNumber = Number(Math.round(Math.random() * (20 - 1) + 1));

const guessNumberResult = document.querySelector(".guess-number-result");
const guessNumberForm = document.querySelector(".guess-number-form");
guessNumberForm.addEventListener("submit", (e) => {
  const elements2 = e.currentTarget.elements;
  e.preventDefault();
  const randomNumber = Number(Math.round(Math.random() * (20 - 1) + 1));
  if (elements2.guessNumber.value == randomNumber) {
    guessNumberResult.textContent = `Вітаю, ви вгадали число! ${randomNumber}`;
  } else {
    guessNumberResult.textContent = `Ви програли, комп’ютер загадав ${randomNumber}`;
  }
});
