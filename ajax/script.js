function cargaDoc(){
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
	if(this.readyState == 4 && this.status == 200){
	let obj =JSON.parse(this.responseText);
	document.getElementById('demo').innerHTML = '<h1>'+
	obj.nombre+' '+obj.apellido+'</h1>';
	}
 };
 xhttp.open("GET","archivo.txt",true);
 xhttp.send();
}