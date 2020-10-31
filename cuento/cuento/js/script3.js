let lobo = document.getElementById('r2');
let textoL = document.getElementById('textoLobo');
function mover(){
	lobo.style.paddingLeft='250px';
}
function devolver(){
	lobo.style.paddingLeft='';
}

lobo.addEventListener('mouseover',mover);
lobo.addEventListener('mouseout',devolver);
textoL.addEventListener('mouseover',mover);
textoL.addEventListener('mouseout',devolver);