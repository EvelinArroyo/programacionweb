//variables
let america = document.getElementById('card_america');
let asia = document.getElementById('card_asia');
let africa = document.getElementById('card_africa');
let oceania = document.getElementById('card_oceania');

//numero aleatorio
let num1 = 0; 

function num(){
num1 = Math.floor((Math.random() * 4 )+ 1 )-1;
 return num1;

}

//ASIGNACION DE IMAGENES
imagen_america = ['imagenes_js/america.jpeg','imagenes_js/america1.jpeg','imagenes_js/america2.jpeg','imagenes_js/america3.jpeg'];
imagen_asia = ['imagenes_js/asia.jpeg','imagenes_js/asia1.jpeg','imagenes_js/asia2.jpeg','imagenes_js/asia3.jpeg'];
imagen_africa = ['imagenes_js/africa.jpeg','imagenes_js/africa1.jpeg','imagenes_js/africa2.jpeg','imagenes_js/africa3.jpeg'];
imagen_oceania = ['imagenes_js/oceania.jpeg','imagenes_js/oceania1.jpeg','imagenes_js/oceania2.jpeg','imagenes_js/oceania3.jpeg'];

//funcion de cambio

function Cambia(){
 america.style.backgroundImage = "url("+imagen_america[num()]+")";
asia.style.backgroundImage = "url("+imagen_asia[num()]+")";
africa.style.backgroundImage = "url("+imagen_africa[num()]+")";
oceania.style.backgroundImage = "url("+imagen_oceania[num()]+")";
}

//EVENTOS

document.body.addEventListener('onload',Cambia());