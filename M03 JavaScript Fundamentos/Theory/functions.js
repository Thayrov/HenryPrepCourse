//Función: sumaTres

function sumaTres(x) {
	return x + 3;
}

var sumaTres = function (x) {
	return x + 3;
};

var sumaTres = x => {
	return x + 3;
};

//Función: cuidadoConElConsoleLog / cuidadoConElReturn
function cuidadoConElConsoleLog(nombre) {
	console.log(nombre);
	return nombre;
}

function cuidadoConElReturn(nombre) {
	return nombre;
	console.log(nombre);
}
