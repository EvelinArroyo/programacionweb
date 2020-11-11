//variables
let btnPrint1 = document.getElementById('btnPrint');
let title= document.getElementById('title_h1');
let indice = document.getElementById('lista_indice');
let btnIdx=document.getElementById('btnIndice');

function imprimir(){
	window.print();
}

function ilumina(){
	title.style.textShadow='2px 2px 5px #66D7D1';
	
}

function desilumina(){
title.style.textShadow='';	

}

function muestra_y_oculta() {
  
  if (indice.style.display === 'none') {
    indice.style.display = 'block';
    btnIdx.value='-';
   
      
  } else {
    indice.style.display = 'none';
      btnIdx.value='+';
  
  }
}

btnIdx.addEventListener('click',muestra_y_oculta);
btnPrint1.addEventListener('click', imprimir);
title.addEventListener('mouseout',desilumina);
title.addEventListener('mouseover',ilumina);
//btnPrint.addEventListener('onclick', imprimir);
//btnPrint1.onclick=imprimir;

