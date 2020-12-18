function multiplicar(x,y){
	return x*y;
}

console.log(multiplicar(4,5));
//las funciones son un tipo de dato de primera clase
//funciones tienen propiedades
multiplicar.version = "v.1.0.0";
console.log(multiplicar.version);
console.log(multiplicar.toString());//codigo de la funcion