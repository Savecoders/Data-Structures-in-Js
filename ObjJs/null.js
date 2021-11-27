const suma = (a, b) => (a & b ? a + b : 'no hay resultado, debes introducir 2 numeros');
const result = suma(2, 2);
console.log(result);
function newSuma(a = 0, b = 0) {
	return a + b;
}
//console.log(newSuma(2,2))
const sumaArrow = (a = 0, b = 0) => a + b;
//console.log(sumaArrow(3))
