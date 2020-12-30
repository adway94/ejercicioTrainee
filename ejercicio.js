class Automovil {
	constructor(marca, modelo, puertas, precio) {
		this.marca = marca
		this.modelo = modelo
		this.puertas = puertas
		this.precio = precio
	}
}

class Motocicleta {
	constructor(marca, modelo, cilindrada, precio) {
		this.marca = marca
		this.modelo = modelo
		this.cilindrada = cilindrada
		this.precio = precio
	}
}


class Sistema {
	constructor() {
		this.vehiculos = []
	}
		
		// Metodo de consulta
		cargarVehiculos() {
		let vehiculos = []
		vehiculos.push(new Automovil('Peugeot', '206', 4, 200000.00))
		vehiculos.push(new Motocicleta('Honda', 'Titan', 125, 60000.00))
		vehiculos.push(new Automovil('Peugeot', '208', 5, 250000.00))
		vehiculos.push(new Motocicleta('Yamaha', 'YBR', 125, 80500.50))
		this.vehiculos = vehiculos
	}

	//Impresion de vehiculos verificando si es moto o auto
	imprimirVehiculos() {
		this.vehiculos.forEach(vehiculo => {
			if (vehiculo.puertas) {
				console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas: ${vehiculo.puertas} // Precio: $${this.formatearPrecio(vehiculo.precio)}`)
			}
			if (vehiculo.cilindrada) {
				console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Cilindrada: ${vehiculo.cilindrada}cc // Precio: $${this.formatearPrecio(vehiculo.precio)}`)
			}
		});
	}

	//Imprimir precio maximo
	imprimirMaximo() {
		const maximo = this.vehiculos.reduce((anterior, actual) => (anterior.precio > actual.precio) ? anterior : actual)
		console.log(`El vehículo más caro: ${maximo.marca} ${maximo.modelo}`)
	}

	//Imprimir precio minimo
	imprimirMinimo() {
		const minimo = this.vehiculos.reduce((anterior, actual) => (anterior.precio < actual.precio) ? anterior : actual)
		console.log(`El veháculo más barato: ${minimo.marca} ${minimo.modelo}`)
	}

	//Buscar e imprimir letra Y en el modelo
	imprimirLetraY() {
		this.vehiculos.forEach(vehiculo => {
			if (vehiculo.modelo.search('Y') != -1) {
				console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculo.marca} ${vehiculo.modelo} $${this.formatearPrecio(vehiculo.precio)}`)
			}
		});
	}

	//Imprimir de Mayor a Menor
	imprimirMayorAMenor() {
		this.vehiculos.sort((v1, v2) => {
			return v2.precio - v1.precio
		})

		console.log('Vehiculos ordenados de mayor a menor:')

		this.vehiculos.forEach(vehiculo => {
			console.log(`${vehiculo.marca} ${vehiculo.modelo}`)
		});
	}

	//Formateo de precio
	formatearPrecio(precio) {
		return new Intl.NumberFormat("es-ES", { style: 'decimal', minimumFractionDigits: 2 }).format(precio)
	}
}

let app = new Sistema
app.cargarVehiculos()
app.imprimirVehiculos()
console.log('=============================')
app.imprimirMaximo()
app.imprimirMinimo()
app.imprimirLetraY()
console.log('=============================')
app.imprimirMayorAMenor()
