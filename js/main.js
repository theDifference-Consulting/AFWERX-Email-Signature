const populate = function(inputElement, targetElement) {
	//get text from current field
	let input = document.getElementById(inputElement).value;

	if (/^[A-z|À-Ö|Ø-ö|ø-ÿ|¨|\´|0-9|.|@|,|(|)|\-|\—|\—|\ |À-ú]*$/.test(input)) { //character whitelist
   		document.getElementById(targetElement).innerHTML = input;
		//change html in the sig box
		if (targetElement === 'email') {	
			document.getElementById(targetElement).href = 'mailto:' + input;
		} else if (targetElement === 'phone') {
			document.getElementById(targetElement).href = 'tel:' + input;
		};
	} else {
		document.getElementById(inputElement).value = input.substring(0, input.length - 1);
		alert('error: invalid character');
	};

	let tableWidth = document.getElementById("signature").clientWidth + 20;
	document.getElementById("signature").setAttribute('width', tableWidth);
	console.log(tableWidth);
}

const copy = function() {
	var copyText = document.querySelector("#signature");
	window.getSelection().selectAllChildren(copyText);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	alert("Your signature has been copied to clipboard!");
}