// this
function test(){
	console.log(this);
}

test();

//agregando propiedades
function test2(){
	this.miClase = 'Programacion';
}
test2();
console.log(global.miClase);

//funciones constructoras
//van con mayus
function Circulo(radio){
  this.radio = radio;

  this.getArea = function(){
  	return Math.PI * Math.pow(this.radio,2);
  }
}

let miCirculo = new Circulo(10);
console.log(miCirculo);
let otroCirculo = new Circulo(5);
console.log(otroCirculo);