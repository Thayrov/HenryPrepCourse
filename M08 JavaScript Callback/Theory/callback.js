function devuelvoUsuario() {
	return 'Manuel';
}
function devuelvoSaludo() {
	return 'Hola';
}
function saludar(cb1, cb2) {
	return cb1() + ' ' + cb2();
}
var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
console.log(resultado);

const devuelvoFrase = comida => `Hoy quiero comer: ${comida}`;
const hablar = (comida, cb) => cb(comida);
const fraseFinal = hablar('Pizza', devuelvoFrase);
console.log(fraseFinal);
