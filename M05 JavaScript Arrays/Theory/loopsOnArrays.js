// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

function encontrarLetraP(str) {
	const letras = str.split('');
	for (let i = 0; i < letras.length; i++) {
		if (letras[i] === 'p') console.log('Contiene P');
	}
}

encontrarLetraP('JavaScript');
encontrarLetraP('Henry');

// WHILE
var arr = [];
while (arr.length < 5) {
	arr.push('BOOM');
}
console.log(arr);
