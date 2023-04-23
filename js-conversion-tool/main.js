// mass, length, temperature

// Input output
const inputField = document.getElementById('input');
const outputWeight = document.getElementById('output-weight');
const outputLength = document.getElementById('output-length');
const outputTemp = document.getElementById('output-temp');

// Weight variables
const lbsOutput = document.getElementById('lbsOutput');
const kgsOutput = document.getElementById('kgsOutput');
const stOutput = document.getElementById('stOutput');
const gmOutput = document.getElementById('gmOutput');
const ozOutput = document.getElementById('ozOutput');

// Length variables
const mmOutput = document.getElementById('mmOutput');
const cmOutput = document.getElementById('cmOutput');
const inOutput = document.getElementById('inOutput');
const ftOutput = document.getElementById('ftOutput');
const mOutput = document.getElementById('mOutput');

// Temperature variables
const cOutput = document.getElementById('cOutput');
const fOutput = document.getElementById('fOutput');
const kOutput = document.getElementById('kOutput');



const btnGroup = document.getElementById('main');
btnGroup.addEventListener('click', button =>{
	if (button.target.matches('button')){
		const btn = button.target;
		const btnValue = btn.textContent;

		if (btn.classList.contains('btn-group-weight')){
			outputWeight.style.visibility = 'visible';
			outputLength.style.visibility = 'hidden';
			outputTemp.style.visibility = 'hidden';

		} else if (btn.classList.contains('btn-group-length')){
			outputWeight.style.visibility = 'hidden';
			outputLength.style.visibility = 'visible';
			outputTemp.style.visibility = 'hidden';

		} else if (btn.classList.contains('btn-group-temp')){
			outputWeight.style.visibility = 'hidden';
			outputLength.style.visibility = 'hidden';
			outputTemp.style.visibility = 'visible';
		}


		if (btnValue === 'Lbs'){
			inputField.placeholder = 'Enter Pounds';
			inputField.addEventListener('input', convertLbs);
			convertLbs();
			

		} else if (btnValue ==='Kgs'){
			inputField.placeholder = 'Enter Kilograms';
			inputField.addEventListener('input', convertKgs);
			convertKgs();

		} else if (btnValue === 'St'){
			inputField.placeholder = 'Enter Stone';
			inputField.addEventListener('input', convertSt);
			convertSt();

		} else if (btnValue === 'Gm'){
			inputField.placeholder = 'Enter Grams';
			inputField.addEventListener('input', convertGm);
			convertGm();

		} else if (btnValue === 'Oz'){
			inputField.placeholder = 'Enter Ounces';
			inputField.addEventListener('input', convertOz);
			convertOz();

		} else if (btnValue === 'Mm'){
			inputField.placeholder = 'Enter Milimeters';
			inputField.addEventListener('input', convertMm);
			convertMm();

		} else if (btnValue === 'Cm'){
			inputField.placeholder = 'Enter Centimeters';
			inputField.addEventListener('input', convertCm);
			convertCm();

		}  else if (btnValue === 'In'){
			inputField.placeholder = 'Enter Inches';
			inputField.addEventListener('input', convertIn);
			convertIn();

		}  else if (btnValue === 'Ft'){
			inputField.placeholder = 'Enter Feet';
			inputField.addEventListener('input', convertFt);
			convertFt();

		}  else if (btnValue === 'M'){
			inputField.placeholder = 'Enter Meters';
			inputField.addEventListener('input', convertM);
			convertM();

		}	else if (btnValue === 'C'){
			inputField.placeholder = 'Enter Celsius';
			inputField.addEventListener('input', convertC);
			convertC();
			
		}	else if (btnValue === 'F'){
			inputField.placeholder = 'Enter Fahrenheit';
			inputField.addEventListener('input', convertF);
			convertF();
			
		}	else if (btnValue === 'K'){
			inputField.placeholder = 'Enter Kelvin';
			inputField.addEventListener('input', convertK);
			convertK();
		}	
	}
})


//conversion functions
function convertLbs(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lbsOutput.textContent = input;
		kgsOutput.textContent = Math.floor((input * 0.453592) * 10000) / 10000;
		stOutput.textContent = Math.floor((input / 14) * 10000) / 10000;
		gmOutput.textContent = Math.floor((input * 453.59237) * 10000) / 10000;
		ozOutput.textContent = Math.floor((input * 16) * 10000) / 10000;
	}

		// set length out put fields to 0
		// set temp output fields to 0
		// or change visibility of output cards to  hidden.
}

function convertKgs(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lbsOutput.textContent = Math.floor((input * 2.2046) * 10000) / 10000;
		kgsOutput.textContent = input;
		stOutput.textContent = Math.floor((input * 0.15747) * 10000) / 10000;
		gmOutput.textContent = Math.floor(input * 1000);
		ozOutput.textContent = Math.floor((input * 35.27396) * 10000) / 10000;
	}
}

function convertSt(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lbsOutput.textContent = Math.floor((input * 14) * 10000) / 10000;
		kgsOutput.textContent = Math.floor((input / 0.15747) * 10000) / 10000;
		stOutput.textContent = input;
		gmOutput.textContent = Math.floor((input * 6350.29) * 10000) / 10000;
		ozOutput.textContent = Math.floor((input * 224) * 10000) / 10000;
	}
}

function convertGm(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lbsOutput.textContent = Math.floor((input * 0.00220462) * 10000) / 10000;
		kgsOutput.textContent = input / 1000.00;
		stOutput.textContent = Math.floor((input * 0.000157473) * 10000) / 10000;
		gmOutput.textContent = input;
		ozOutput.textContent = Math.floor((input * 0.035274) * 10000) / 10000;
	}
}

function convertOz(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		lbsOutput.textContent = Math.floor((input * 0.0625) * 10000) / 10000;
		kgsOutput.textContent = Math.floor((input * 0.0283495) * 10000) / 10000;
		stOutput.textContent = Math.floor((input * 0.00446429) * 10000) / 10000;
		gmOutput.textContent = Math.floor((input * 28.3495) * 10000) / 10000;
		ozOutput.textContent = input;
	}
}

function convertMm(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		mmOutput.textContent = input;
		cmOutput.textContent = Math.floor((input / 10) * 10000) / 10000;
		inOutput.textContent = Math.floor((input / 25.4) * 10000) / 10000;
		ftOutput.textContent = Math.floor((input / 304.8) * 10000) / 10000;
		mOutput.textContent = Math.floor((input / 1000) * 10000) / 10000;
	}
}

function convertCm(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		mmOutput.textContent = Math.floor((input * 10) * 10000) / 10000;
		cmOutput.textContent = input;
		inOutput.textContent = Math.floor((input / 2.54) * 10000) / 10000;
		ftOutput.textContent = Math.floor((input / 30.48) * 10000) / 10000;
		mOutput.textContent = Math.floor((input / 100) * 10000) / 10000;
	}
}

function convertIn(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		mmOutput.textContent = Math.floor((input * 25.4) * 10000) / 10000;
		cmOutput.textContent = Math.floor((input * 2.54) * 10000) / 10000;
		inOutput.textContent = input;
		ftOutput.textContent = Math.floor((input / 12) * 10000) / 10000;
		mOutput.textContent = Math.floor((input / 39.37) * 10000) / 10000;
	}
}

function convertFt(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		mmOutput.textContent = Math.floor((input * 304.8) * 10000) / 10000;
		cmOutput.textContent = Math.floor((input * 30.48) * 10000) / 10000;
		inOutput.textContent = Math.floor((input * 12) * 10000) / 10000;
		ftOutput.textContent = input;
		mOutput.textContent = Math.floor((input / 3.281) * 10000) / 10000;
	}
}

function convertM(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		mmOutput.textContent = Math.floor((input * 1000) * 10000) / 10000;
		cmOutput.textContent = Math.floor((input * 100) * 10000) / 10000;
		inOutput.textContent = Math.floor((input * 39.3701) * 10000) / 10000;
		ftOutput.textContent = Math.floor((input * 3.281) * 10000) / 10000;
		mOutput.textContent = input;
	}
}

function convertC(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		cOutput.textContent = input
		fOutput.textContent = Math.floor((input * (9/5) + 32) * 100) / 100;
		kOutput.textContent = Math.floor((+input + 273.15) * 100) / 100;
	}
}

function convertF(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		cOutput.textContent = Math.floor(((input - 32) * (5/9)) * 100) / 100;
		fOutput.textContent = input;
		kOutput.textContent = Math.floor((((input - 32) * (5/9)) + 273.15) * 1000) / 1000;
	}
}

function convertK(){
	let input = inputField.value;

	if (!input){
		return;
	} else {
		cOutput.textContent = Math.floor((input - 273.15) * 100) / 100;
		fOutput.textContent = Math.floor(((input - 273.15) * (9/5) + 32) * 100) / 100;
		kOutput.textContent = input;
	}

}













