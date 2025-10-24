function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

let a = "";
let b = "";
let operator;

function operate(operator, a, b) {
	switch (operator) {
		case "add":
			return add(a, b);
		case "subtract":
			return subtract(a, b);
		case "multiply":
			return multiply(a, b);
		case "divide":
			return divide(a, b);
	}
}

let buttons = document.querySelectorAll("button.digit, button.dot");
buttons.forEach((button) => {
	button.addEventListener("click", (e) => getNumericChars(e));
});

let buttonOperators = document.querySelectorAll("button.operator");
buttonOperators.forEach((button) => {
	button.addEventListener("click", (e) => getOperators(e));
});
