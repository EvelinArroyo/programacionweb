//Ejemplo de solicitud sincrona con eventos mas utilizados de res
//load, error, progress

//1. se crea objeto de solicitud XMLHttpRequest
let xhr = new XMLHttpRequest();

	//2. Se configura : solicitud-GET para url http://localhost:3000/archivo.txt
	xhr.open('GET','http://localhost:3000/archivo.txt');

	//3. se envia la solicitud
	xhr.send();

	//4. los sig seran invocados despues de quela espuesta sea recibida
	xhr.onload = function() {
		if (xhr.status != 200) { //analiza status de la respuesta HTTP
           alert(`Error ${xhr.status}: ${xhr.statusText}`); //ejemplo 404: Not Found
		}else{
			alert(`Listo, se recibieron ${xhr.response.length} bytes`);
		}
	};

	xhr.onprogress = function(event) {
		if (event.lengthComputable) {
			alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
		}else{
			alert(`Recibidos ${event.loaded} bytes`); //no se recibio longitud del contenido Content-Length	
		}
	};

	xhr.onerror = function(){
		alert("Fallo solicitud");
	};