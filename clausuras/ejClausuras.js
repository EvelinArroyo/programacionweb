function generadorDeNums(){
	//variable local
	var num = 5;
	function imprimeNumero(){
		console.log(num);
	}
	num++;
	return imprimeNumero;
}

var numero = generadorDeNums();
numero(); //6