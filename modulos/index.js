/*let rect = {
	perimetro: (x,y) => (2*(x+y)),
	area: (x,y) => (x*y)
};
*/
let rect =require('./rectangulo');

function muestraRectangulo(b,h){
	console.log('Rectangulo de dimensiones: base = '+b+ ' altura = ' +h);

	if(b<=0 || h<=0){
		console.log('Las dimensiones del rectangulo deben ser mayores a 0');
	}else{
		console.log('El area del rectangulo es '+rect.area(b,h));
		console.log('El perimetro del rectangulo es : '+ rect.perimetro(h,b));
	}
}

muestraRectangulo(2,4);
muestraRectangulo(3,5);
muestraRectangulo(0,5);
muestraRectangulo(-3,5);