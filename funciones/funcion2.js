//fabrica de funciones
function creaMultiplicador(multiplicador){
  let miFuncion = function (x){
  	return multiplicador * x;
  } 
  return miFuncion;
}

let multiplicadorX3 = creaMultiplicador(3);//recibe funcion ya creadaque multiplica 3 * x
console.log(multiplicadorX3(30));//se manda a llamar esa funcion

let duplicar = creaMultiplicador(2);
console.log(duplicar(100));

//pasando funciones como argumentos
function realizaOperacion(x,operacion){
	return operacion(x);
}

let resultado = realizaOperacion(5,multiplicadorX3);
console.log(resultado);

resultado = realizaOperacion(200,duplicar);
console.log(resultado);
