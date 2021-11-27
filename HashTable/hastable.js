class HashTable {
	//Creamos  el constructor con un tamaño  prefijado
	constructor(size) {
		//inicializamos el HashTable con la cantidad de Keys que vamos a inicializar
		this.data = new Array(size);
	}
	hashMethod(key) {
		//Creamos un hash Table en donde se va acrear el Address
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	//Metodo set en donde vamos a guardar nuestra Key:Value
	set(key, value) {
		//usando el hashMethod guardamos el dato en el address
		const address = this.hashMethod(key);
		//si en data no tiene valor  pues vamos a inicializarlo
		if (!this.data[address]) {
			this.data[address] = [];
		}
		//añadimos valores usando push un arreglo [key y value]
		this.data[address].push([key, value]);
		return this.data;
	}
	//Get obtine el value usando la clave (Key)
	get(keys) {
		const address = this.hashMethod(keys);
		const currentBucket = this.data[address];
		if (currentBucket) {
			return currentBucket
				.map(([key, value]) => (key === keys ? value : undefined))
				.filter((e) => e);
		} else {
			return undefined;
		}
	}
	//getAllKeys retorna un arreglo  con los Keys ingresados
	getAllKeys() {
		return this.data.reduce((instace, value) => {
			const keys = value.map(([e]) => e);
			return instace.concat(keys);
		}, []);
	}

	//igual que el metodo GetAllKeys
	//getAllKeys retorna un arreglo  con los Keys ingresados
	getAllValues() {
		return this.data.reduce((instace, key) => {
			const values = key.map(([e, j]) => j);
			return instace.concat(values);
		}, []);
	}
	delete(key) {
		const address = this.hashMethod(key);
		delete this.data[address]; //elimina el arreglo donde contiene la key
	}
}

const myHashTable = new HashTable(50);
console.log(myHashTable);
myHashTable.set('Diego', 1990);
myHashTable.set('Mariana', 1998);
myHashTable.set('Alejandra', 2000);
console.log(myHashTable.get('Diego'));
console.log(myHashTable.getAllKeys());
console.log(myHashTable.getAllValues());
console.log(myHashTable);
