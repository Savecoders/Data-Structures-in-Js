/*Este es nuestro arreglo normal.
let Arr = [1,2,3,4]
Arr.push(5)
console.log(Arr)
*/
//Creando Array Dinamico
class MyArr {
	constructor() {
		this.key = 0; //Creamos la posicion o key en dinde se guardaran los datos
		this.data = {}; //creamos un objeto llamado data donde como llave recibe
		// un key(posicion) y el Valor.
	}
	get(index) {
		return this.data[index]; //obtiene el valor de index posicion
	}
	push(element) {
		this.data[this.key] = element; //añadimos el elemento
		this.key++; //aumentamos el numero de posiciones en mas 1
		return this.data; //retorna el arreglo
	}
	getLength() {
		return this.key; //numero de valores que contiene el arreglo.
	}
	deleteArr(index) {
		for (let element = 0; element < this.key - 1; element++) {
			if (this.data[element] === index) {
				delete this.data[element];
			}
		}
		for (let e = 0; e < this.key - 1; e++) {
			if (!this.data[e]) {
				this.data[e] = this.data[e + 1];
				this.data[e + 1] = undefined;
			}
		}
		this.key--;
	}
	pop() {
		const lastValue = this.data[this.key - 1];
		delete this.data[this.key - 1]; //elimina el  ultimo dato
		this.key--; //resta en 1 las posiciones.
		return lastValue;
	}

	shift() {
		const index = this.data['0'];
		console.log('esto: ' + index);
		this.deleteArr(index);
		return index;
	}
}

const myArr = new MyArr();

myArr.push(2);
myArr.push(4);
myArr.push(12);
myArr.push(6);
myArr.push(8);
myArr.push(10);
console.log('Lenght:' + myArr.getLength());
myArr.deleteArr(12);
for (let i = 0; i < myArr.getLength(); i++) {
	console.log(myArr.get(i));
}
console.log('Lenght:' + myArr.getLength());
