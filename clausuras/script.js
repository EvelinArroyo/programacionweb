function generaTamano(size){
	return function(){
		document.body.style.fontSize = size + 'px';
	};
}

var size12 = generaTamano(12);

var size14 = generaTamano(14);

var size16 = generaTamano(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;