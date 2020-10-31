let abuelaIm = document.getElementById('abuela');
let loboIm = document.getElementById('lobo');
let abuelaT = document.getElementById('textoA');
let loboT = document.getElementById('textoL');

function mueveA(){
	abuelaIm.style.paddingLeft='20px';
}
function devolverA(){
	abuelaIm.style.paddingLeft='';
}

function mueveL(){
	loboIm.style.paddingLeft='20px';

}
function devolverL(){
	loboIm.style.paddingLeft='';
}

abuelaIm.addEventListener('mouseover',mueveA);
abuelaIm.addEventListener('mouseout',devolverA);
textoA.addEventListener('mouseover',mueveA);
textoA.addEventListener('mouseout',devolverA);

loboIm.addEventListener('mouseover',mueveL);
loboIm.addEventListener('mouseout',devolverL);
textoL.addEventListener('mouseover',mueveL);
textoL.addEventListener('mouseout',devolverL);