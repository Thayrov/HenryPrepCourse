// push()
// añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.

// unshift()
// agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// pop()
// elimina y devuelve el último elemento de un arreglo.

// shift()
// elimina y devuelve el primer elemento de un arreglo.

colores.shift();
colores.pop();

console.log(colores);

// split()
// convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.

var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// join()
//convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.

var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// includes()
// determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.

var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// every()
// determina si todos los elementos en un arreglo satisfacen una misma condición.

var numeros = [1, 6, 8, 9, 43];
var cumplenCondicion = numeros.every(num => {
	num > 5;
});

console.log(cumplenCondicion);

// forEach()
// nos permite recorrer un arreglo, realizando alguna acción en para cada elemento

var numeros = [1, 2, 3, 4];
numeros.forEach(num => {
	console.log(num);
});

// map()
// también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.

var numeros = [1, 2, 3, 4];
var masUno = numeros.map(num => {
	return num + 1;
});

console.log(masUno);
