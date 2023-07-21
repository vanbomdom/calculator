function add(a, b){
	return a + b;
}

function substract(a, b){
	return a - b;
}

function multiply(a ,b){
	return a * b;
}

function divide(a, b){
	return a / b;
}

let a ;
let b ;
let operator ;
let total = 0;

function operate(a, b, operator){
	if (operator == "+") {
  	return add(a, b)
  }
  if (operator == "-") {
  	return substract(a, b)
  } 
	if (operator == "*") {
  	return multiply(a, b)
  }
  if (operator == "/") {
  	return divide(a, b)
  }
}

a = parseInt(a);
b = parseInt(b);

total = operate(a, b, operator);
console.log(total);