let caperucita = document.getElementById('caperucita');
let lobo = document.getElementById('lobo');
let textoLobo = document.getElementById('textoLobo');
let textoCap= document.getElementById('cape');
function moverC(){
	caperucita.style.paddingLeft='30px';
}
function devolverC(){
	caperucita.style.paddingLeft='';
}
function moverL(){
	lobo.style.paddingLeft='90px';
}
function devolverL(){
	lobo.style.paddingLeft='';
}

caperucita.addEventListener('mouseover',moverC);
caperucita.addEventListener('mouseout',devolverC);
textoCap.addEventListener('mouseover',moverC);
textoCap.addEventListener('mouseout',devolverC);
lobo.addEventListener('mouseover',moverL);
lobo.addEventListener('mouseout',devolverL);
textoLobo.addEventListener('mouseover',moverL);
textoLobo.addEventListener('mouseout',devolverL);