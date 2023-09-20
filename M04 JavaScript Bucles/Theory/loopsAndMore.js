var suma = 0;
var sum = 0;

/* suma = suma + 1;
suma = suma + 2;
suma = suma + 3;
suma = suma + 4;

console.log(suma); */

// FOR
for (var i = 0; i < 10; i++) {
	suma = suma + i;
	console.log('Variable de iteración: ' + i);
}
console.log('Variable suma: ' + suma);

// WHILE
while (sum < 3) {
	sum = sum + 1;
	console.log(sum);
}

// SWITCH

var Animal = 'Jirafa';
switch (Animal) {
	case 'Vaca':
	case 'Jirafa':
	case 'Perro':
	case 'Cerdo':
		console.log('Este animal subirá al Arca de Noé.');
		break;
	case 'Dinosaurio':
	default:
		console.log('Este animal no lo hará.');
}

// DO WHILE

let result = '';
let e = 0;

do {
	e = e + 1;
	result = result + e;
} while (e < 5);

console.log(result);

// CONTINUE

j = 0;
n = 0;
while (j < 5) {
	j++;
	if (j == 3) {
		continue;
	}
	n += j;
	console.log(j);
	//console.log(n);
}

// LABEL + CONTINUE
/* 
var k = 0;
checkiandj: while (k < 4) {
	document.write(k + '<br>');
	k += 1;

	checkj: while (l > 4) {
		document.write(l + '<br>');
		l -= 1;
		if (l % 2 == 0) continue checkj;
		document.write(l + ' is odd.<br>');
	}
	document.write('k= ' + k + '<br>');
	document.write('l = ' + l + '<br>');
} */

// BREAK

var m = 0;
function comprobarBreak(x) {
	while (m < 6) {
		if (m == 3) break;
		m++;
		console.log(m);
	}
	return m * x;
}

console.log('cb: ' + comprobarBreak(1));
