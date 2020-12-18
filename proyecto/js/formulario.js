
const nombre= document.getElementById("name");
const apellido = document.getElementById("apellido");
const form = document.getElementById("form");
let advertencias = document.getElementById('warnings');
let enviar = document.getElementById('suscrip');
let email = document.getElementById("email");

function enviarF(){
	nombre.value="";
	apellido.value="";
	email.value="";
	advertencias.innerHTML='Suscrito. <br> Puedes cerrar esta pestaña';
}
enviar.addEventListener('click',enviarF);