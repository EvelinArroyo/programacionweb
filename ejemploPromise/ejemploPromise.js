//ejemplo de promise all
console.log("\nEjemplo de promise.all():\n");
var prom1 = Promise.resolve('Soy la primera promesa');
var prom2 = 'Soy la segunda promesa';
var prom3 = new Promise((resolve, reject) => {
	
 
 if((1+1)>1){
 	// setTimeout(resolve, 100, 'Soy la tercera promesa');
 	resolve('Soy la tercera promesa');
 }else{

 	reject('La tercera promesa fue rechazada');
 }

}); 

Promise.all([prom1, prom2, prom3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});


// ejemplo uso de promise
setTimeout(()=>{console.log('-----------------------------\nEjemplo de encadenamiento:\n');},0900);
//console.log("\nEjemplo de encadenamiento:\n");
  const promesa = new Promise ((resolve, reject) => {
   setTimeout(()=>{console.log('-Vengo de Marte');},3000);
    

   resolve();///si no se llama a este metodo no se dirije a las siguientes secciones
})
.then(() => {
    throw new Error('Ocurrio un error no te asustes!');
        
    console.log('Suerte!');
})
.catch(() => {
	 setTimeout(()=>{console.log('-Hola!');},1000);
   
})
.then(() => {
    setTimeout(()=>{console.log('-Mi nombre es Lucy!');},2000);
    
});
promesa.then();

