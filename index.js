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
		case "+":
			return add(a, b);
		case "-":
			return subtract(a, b);
		case "*":
			return multiply(a, b);
		case "/":
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
