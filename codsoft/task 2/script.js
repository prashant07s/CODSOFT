const display = document.getElementById('display');
const body = document.body;

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function power() {
  display.value += "**";
}

function applyFunction(funcName) {
  try {
    const value = eval(display.value || "0");
    display.value = eval(`${funcName}(${value})`);
  } catch {
    display.value = "Error";
  }
}

function toggleTheme() {
  const current = body.getAttribute("data-theme");
  body.setAttribute("data-theme", current === "light" ? "dark" : "light");
}

// Keyboard support
document.addEventListener('keydown', function (event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.%".includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

function convertToFahrenheit() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  } else {
    alert("Please enter a valid Celsius value.");
  }
}

function convertToCelsius() {
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  if (!isNaN(fahrenheit)) {
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
  } else {
    alert("Please enter a valid Fahrenheit value.");
  }
}
