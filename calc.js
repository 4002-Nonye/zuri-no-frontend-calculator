"strict mode";
const a = Number(prompt("input first digit"));
const operator = prompt(`select operator:(+, -, *, /)`);
const b = Number(prompt("input second digit"));

const arithmetics = () => {
	if (isNaN(a) || isNaN(b)) {
		alert(`wrong input `);
	} else if (operator === "+") {
		alert(`${a} + ${b} = ${addition()}`);
	} else if (operator === "-") {
		alert(`${a} - ${b} = ${subtraction()}`);
	} else if (operator === "*") {
		alert(`${a} * ${b} = ${multiplication()}`);
	} else if (operator === "/") {
		alert(`${a} / ${b} = ${division()}`);
	}
};
const addition = () => a + b;
const subtraction = () => a - b;
const division = () => a / b;
const multiplication = () => a * b;

arithmetics();
