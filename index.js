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

function getNumericChars(e) {
	let SelectedInput = e.currentTarget.textContent.trim();
	if (operator == null) {
		a += SelectedInput;
		a = Number(a);
	} else {
		b += SelectedInput;
		b = Number(b);
	}
	render(SelectedInput);
}

function getOperators(e) {
	let SelectedInput = e.currentTarget.textContent.trim();
	render(SelectedInput);

	if (SelectedInput !== "=") {
		operator = SelectedInput;
		a = a;
		b = b;
	}

	if (SelectedInput === "=") {
		let sum = operate(operator, Number(a), Number(b));
		a = sum;
		b = "";

		render(sum);
	}
}

let displayValue = "";

function renderDisplay(value) {
	document.querySelector(".display").textContent = value;
}

function updatedRender(currentDisplayValue, value) {
	return (currentDisplayValue += value);
}

function render(updatedRenderValue) {
	displayValue = updatedRender(displayValue, updatedRenderValue);
	renderDisplay(displayValue);
}
