let valueStore = [];
let displayStore; 
let screenDisplay = document.getElementById("display");

function clearDisplay(){
	valueStore =[]
	displayStore =[]
	screenDisplay.textContent = ''
	
}

function populateDisplay(val){
	valueStore.push(val)
	displayStore = valueStore.toString().replace(/,/g,'')
	screenDisplay.textContent = displayStore

}


function operate(){

}

function add(){

}

function subtract(){

}

function multiply(){

}

function divide(){

}