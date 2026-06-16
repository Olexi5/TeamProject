// guess number

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



// time-calculator

const totalSeconds = document.querySelector(".time-calculator-input");
const minutesForm = document.querySelector(".time-calculator-form");


function convertTime(e) {
    e.preventDefault();
    let totalSecondsValue = Number(totalSeconds.value);

    
    const days = Math.floor(totalSecondsValue / 86400);
    totalSecondsValue %= 86400;

    const hours = Math.floor(totalSecondsValue / 3600);
    totalSecondsValue %= 3600;

    const minutes = Math.floor(totalSecondsValue / 60);
    const seconds = totalSecondsValue % 60;

    // const timeCalculator = `${days}, ${hours}, ${minutes}, ${seconds}`
    
    const parts = [];

    if (days > 0) {
        parts.push(days + " днів");
    }

    if (hours > 0) {
        parts.push(hours + " годин");
    }

    if (minutes > 0) {
        parts.push(minutes + " хвилин");
    }

    if (seconds > 0) {
        parts.push(seconds + " секунд");
    }

    if (parts.length === 0) {
        parts.push("0 секунд");
    }

    document.querySelector(".time-calculator-output").textContent = parts.join(", ");
}
minutesForm.addEventListener("submit", convertTime);



// three-numbers

const inputs = document.querySelectorAll(".three-numbers-input");
const result = document.querySelector(".three-numbers-result");

function findMax() {
    let values = [];

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== "") {
            values.push(Number(inputs[i].value));
        }
    }

    if (values.length === 0) {
        result.textContent = "Покищо ви ще не ввели число";
        return;
    }

    let max = values[0];

    for (let i = 1; i < values.length; i++) {
        if (values[i] > max) {
            max = values[i];
        }
    }

    result.textContent = `Найбільше число, яке ви ввели - ${max}`;
}

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", findMax);
}