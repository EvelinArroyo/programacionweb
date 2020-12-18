class Cirujano{

	constructor(nombre, departamento){
     this._nombre = nombre;
     this._departamento = departamento;
     this._diasVacacionesDisp = 20;
	} 

	set nombre(nombre){
		this._nombre = nombre;
	}

	set departamento(departamento){
		this._departamento = departamento;
	}

    get nombre(){
    	return this._nombre;
    }

	get departamento (){
		return this._departamento;
	}
	get diasVacacionesDisp(){
		return this._diasVacacionesDisp;
	}

	tomarVacaciones(dias){
		this._diasVacacionesDisp = this._diasVacacionesDisp - dias;
	}

}

const cirujanoDaniel = new Cirujano('Daniel', 'Cardiovascular');
const cirujanoAilyn = new Cirujano('Ailyn', 'Neurologia');

console.log(cirujanoDaniel.nombre); //se utiliza un get
cirujanoDaniel.tomarVacaciones(7); //usamos el metodo tomarVacaciones
console.log(`${cirujanoDaniel.nombre} tiene 
	${cirujanoDaniel.diasVacacionesDisp}
	 dias de vacaciones disponibles`);