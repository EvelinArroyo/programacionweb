let capeIm = document.getElementById('cape');
let texCape = document.getElementById('textoC');
let loboIm = document.getElementById('lobo');
let loboT = document.getElementById('textoL');

function moverC(){
	capeIm.style.paddingLeft='20px';
}
function devolverC(){
	capeIm.style.paddingLeft='';
}
function moverL(){
	loboIm.style.paddingLeft='20px';
}
function devolverL(){
	loboIm.style.paddingLeft='';
}

capeIm.addEventListener('mouseover',moverC);
capeIm.addEventListener('mouseout', devolverC);
texCape.addEventListener('mouseover',moverC);
texCape.addEventListener('mouseout',devolverC);

loboIm.addEventListener('mouseover',moverL);
loboIm.addEventListener('mouseout',devolverL);
textoL.addEventListener('mouseover',moverL);
textoL.addEventListener('mouseout',devolverL);