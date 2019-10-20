//copy of the main.js file but without the fixed witdh
const populate = function(inputElement, targetElement) {
	//get text from current field
	let input = document.getElementById(inputElement).value;

	if (/^[A-z|À-Ö|Ø-ö|ø-ÿ|¨|\´|0-9|.|@|,|(|)|\-|\—|\—|\ |À-ú]*$/.test(input)) { //character whitelist
   		document.getElementById(targetElement).innerHTML = input;
		//change html in the sig box
		if (targetElement === 'email') {	
			document.getElementById(targetElement).href = 'mailto:' + input;
		} else if (targetElement === 'phone' | targetElement === 'office') {
			document.getElementById(targetElement).href = 'tel:' + input;
		};
	} else {
		document.getElementById(inputElement).value = input.substring(0, input.length - 1);
		alert('Error: invalid character. \nPlease only use A-Z, 0-9, @, or basic punctuation.');
	};
}

const copy = function() {
	var copyText = document.querySelector("#signature");
	window.getSelection().selectAllChildren(copyText);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	alert("Your signature has been copied to clipboard!");
}