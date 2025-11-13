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
let globalSum = "";

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

let clearButton = document.querySelector("button.clear");

clearButton.addEventListener("click", () => {
	clearDisplay(displayResult, ".display .result");
	clearDisplay(displayPrevCalc, ".display .top");
});

function clearDisplay(display, selector, number = 0) {
	a = "";
	b = "";
	operator = null;
	globalSum = "";
	if (display === displayResult) displayResult = "";
	if (display === displayPrevCalc) displayPrevCalc = "";
	renderDisplay(selector, number);
}

function getNumericChars(e) {
	let SelectedInput = e.currentTarget.textContent.trim();
	if (operator == null) {
		a += SelectedInput;
		a = Number(a);
	} else {
		b += SelectedInput;
		b = Number(b);
	}
	renderDisplayResult(SelectedInput);
	renderDisplayPrevCalc(SelectedInput);
	showTopDisplay();
}

function getOperators(e) {
	let SelectedInput = e.currentTarget.textContent.trim();

	if (operator != null && SelectedInput === operator && b === "") return;

	if (SelectedInput !== "=") {
		if (b !== "") {
			sum = operate(operator, Number(a), Number(b));

			clearDisplay(displayResult, ".display .result");
			a = sum;
			b = "";
			renderDisplayResult(a);
			renderDisplayPrevCalc(SelectedInput);
		} else if (globalSum !== "" && b === "" && operator == null) {
			displayPrevCalc = globalSum + SelectedInput;
			renderDisplay(".display .top", displayPrevCalc);
		} else {
			renderDisplayPrevCalc(SelectedInput);
		}

		operator = SelectedInput;
	}

	if (SelectedInput === "=") {
		if (operator == null) return;
		let btnEqual = e.currentTarget;
		/* 	btnEqual.disabled = true; */
		console.log(btnEqual);

		let sum = operate(operator, Number(a), Number(b));
		clearDisplay(displayResult, ".display .result");
		clearDisplay(displayPrevCalc, ".display .top", sum);

		a = sum;
		b = "";
		globalSum = sum;

		renderDisplayResult(sum);
	}
}

let displayPrevCalc = "";
let displayResult = "";

function renderDisplay(selector, value) {
	document.querySelector(selector).textContent = value;
}

function updatedRender(currentDisplayValue, value) {
	return (currentDisplayValue += value);
}

function renderDisplayPrevCalc(updatedRenderValue) {
	displayPrevCalc = updatedRender(displayPrevCalc, updatedRenderValue);
	renderDisplay(".display .top", displayPrevCalc);
}

function renderDisplayResult(updatedRenderValue) {
	document.querySelector(".display .result").textContent = updatedRenderValue;
}

function showTopDisplay() {
	document.querySelector(".display .top").style.visibility = "visible";
}
