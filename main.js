let valueStore = []

function clear(displayStore, valueStore, screenDisplay){
	valueStore =[]
	displayStore =[]
	screenDisplay.textContent = ''
	
}

function populateDisplay(val){
	valueStore.push(val)
	let displayStore = valueStore.toString().replace(/,/g,'')
	let screenDisplay = document.getElementById("display")
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