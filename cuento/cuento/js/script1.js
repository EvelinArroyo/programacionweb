let titulo = document.getElementById('titulo');
let mama = document.getElementById('mama');
let caperucita = document.getElementById('caperucita');
let textoCape = document.getElementById('cape');
let textoMama = document.getElementById('textoM');
function cambiaTitulo1(){
	titulo.style.color='red';
	titulo.style.fontSize= "4em";
	}
function cambiaTitulo2(){
	titulo.style.color='';
	titulo.style.fontSize='';
	}
function mueveM(){
	mama.style.paddingLeft='150px';
}
function devolverM(){
	mama.style.paddingLeft='';
}
function mueveC(){
	caperucita.style.paddingLeft='50px';
}
function devolverC(){
	caperucita.style.paddingLeft='';
}
titulo.addEventListener('mouseout',cambiaTitulo2);
titulo.addEventListener('mouseover',cambiaTitulo1);
mama.addEventListener('mouseover',mueveM);
mama.addEventListener('mouseout',devolverM);
caperucita.addEventListener('mouseover',mueveC);
caperucita.addEventListener('mouseout',devolverC);
textoCape.addEventListener('mouseover',mueveC);
textoCape.addEventListener('mouseout',devolverC);
textoMama.addEventListener('mouseover',mueveM);
textoMama.addEventListener('mouseout',devolverM);
