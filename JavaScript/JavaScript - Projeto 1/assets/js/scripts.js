var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
	if (currentNumber <= 0) {
		return document.getElementById("currentNumber").style.color="red";
	}
	else{
		return document.getElementById("currentNumber").style.color="black";
	}
}

function able(){
	if(currentNumber > 10){
		document.getElementById("adicionar").disabled = true;
	}	
	else{
		document.getElementById("subtrair").disabled = false;
	}
}

function disable(){
	if (currentNumber < -2){
		document.getElementById("subtrair").disabled = true;
	}
	else{
		document.getElementById("subtrair").disabled = false;
	}
}