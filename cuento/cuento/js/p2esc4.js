let abuelaIm = document.getElementById('abuela');
let loboIm = document.getElementById('lobo');
let abuelaT = document.getElementById('textoA');
let loboT = document.getElementById('textoL');
let capeIm = document.getElementById('cape');
let texCape = document.getElementById('textoC');
let leñadorIm = document.getElementById('leñador');
let textoLe= document.getElementById('textoLe');

function moverC(){
	capeIm.style.paddingLeft='20px';
}
function devolverC(){
	capeIm.style.paddingLeft='';
}
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
function mueveLe(){
	leñadorIm.style.paddingLeft='20px';
}
function devolverLe(){
	leñadorIm.style.paddingLeft='';
}

abuelaIm.addEventListener('mouseover',mueveA);
abuelaIm.addEventListener('mouseout',devolverA);
textoA.addEventListener('mouseover',mueveA);
textoA.addEventListener('mouseout',devolverA);

loboIm.addEventListener('mouseover',mueveL);
loboIm.addEventListener('mouseout',devolverL);
textoL.addEventListener('mouseover',mueveL);
textoL.addEventListener('mouseout',devolverL);

capeIm.addEventListener('mouseover',moverC);
capeIm.addEventListener('mouseout', devolverC);
texCape.addEventListener('mouseover',moverC);
texCape.addEventListener('mouseout',devolverC);

leñadorIm.addEventListener('mouseover',mueveLe);
leñadorIm.addEventListener('mouseout',devolverLe);
textoLe.addEventListener('mouseover',mueveLe);
textoLe.addEventListener('mouseout',devolverLe);