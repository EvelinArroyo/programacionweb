let capeIm = document.getElementById('cape');
let capeT = document.getElementById('textoC');

function moverC(){
	capeIm.style.paddingLeft='20px';
}

function devolver(){
	capeIm.style.paddingLeft='';
}

capeIm.addEventListener('mouseover',moverC);
capeIm.addEventListener('mouseout', devolver);
capeT.addEventListener('mouseover',moverC);
capeT.addEventListener('mouseout',devolver);