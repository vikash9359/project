function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    const display = document.getElementById("display");
    const result = eval(display.value);
    display.value = result;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}