class Media {
   constructor(titulo, prestado, calificaciones,autor){
    this._titulo = titulo;
    this._prestado = false;
    this._calificaciones = [];
    this._autor= autor;
   }

    
   set autor(autor){
   	this._autor = autor;
   }

   set titulo(titulo){
   	this._titulo = titulo;
   }
   
  
   set prestado(prestado){
   	this._prestado = prestado;
   }

   set calificaciones(calificaciones){
   	this._calificaciones = calificaciones;
   }

   get autor(){
   	return this._autor;
   }

   get titulo(){
    return this._titulo;
   }


   get prestado(){
   	if(this._prestado==true){
   		return "Prestado";
   	}else{
       return "Disponible";
   	}
   	
   }
   
   get calificaciones(){
   	return this._calificaciones;
   }

   obtenerCalificacionPromedio(){
   	let suma = 0;
   	let promedio = 0;
    for (let i = 0; i < this._calificaciones.length; i++) {
    	suma = suma + this._calificaciones[i];

    }
   
    promedio =  (suma / (this._calificaciones.length));

    return promedio;
   }

   cambiarEstatusPrestado(prestado){
     	this._prestado = prestado;
   }

  
   agregarCalificacion(numAgregar){
   for (let i = 0; i < numAgregar; i++) {
   		 this._calificaciones.push(Math.floor(Math.random()*10));
     }
   }

}

class Libro extends Media{
	constructor(titulo,prestado,calificaciones,autor,paginas){
    super(titulo,prestado,calificaciones,autor);
    this._paginas = paginas;
	} 

	set paginas(paginas){
   	this._paginas = paginas;
   }
    
     get paginas(){
   	return this._paginas;
   }
}

class Video extends Media{
	constructor(titulo,prestado,calificaciones,director,duracion){
     super(titulo,prestado,calificaciones);
     this._director = director;
     this._duracion = duracion;
	}

	set director(director){
		this._director = director;
	}

	set duracion(duracion){
		this._duracion = duracion;
	}

	get director(){
		return this._director;
	}

	get duracion(){
		return this._duracion;
	}
}

class CD extends Media{
	constructor(titulo,prestado,calificaciones,artista,canciones){
		super(titulo,prestado,calificaciones);
		this._artista = artista;
		this._canciones = canciones;
	}

	set artista(artista){
		this._artista = artista;
	}

	set canciones(canciones){
		this._canciones = canciones;
	}

	get artista(){
		return this._artista;
	}

	get canciones(){
		return this._canciones;
	}

}

//verificando el funcionamiento de las clases
//clase libro
const calificaciones_miLibro = [];
const miLibro = new Libro('Brida',false,calificaciones_miLibro,'Paulo Coelho',272);
console.log(`----------Libro----------
Estatus actual : "${miLibro.prestado}".`);
miLibro.cambiarEstatusPrestado(true);
console.log(`Se ha cambiado el estatus del libro ${miLibro.titulo} a "${miLibro.prestado}".`);
miLibro.agregarCalificacion(5);//5 es el numero de calificaciones a agregar
console.log(`Se han agregado 5 calificaciones al libro: ${miLibro.titulo}\n`);
console.log(`Titulo: ${miLibro.titulo}\nEstatus: ${miLibro.prestado}\nCalificaciones: ${miLibro.calificaciones}
Autor: ${miLibro.autor}\nNúmero de páginas: ${miLibro.paginas}`);
console.log(`Promedio de calificaciones : ${miLibro.obtenerCalificacionPromedio()}\n-------------------------\n` );

//clase Video
const calificaciones_miVideo = [];
const miVideo = new Video('Therefore I Am',false,calificaciones_miVideo,'Billie Eilish',4);
console.log(`----------Video----------
Estatus actual : "${miVideo.prestado}".`);
miVideo.cambiarEstatusPrestado(true);
console.log(`Se ha cambiado el estatus del video ${miVideo.titulo} a "${miVideo.prestado}".`);
miVideo.agregarCalificacion(5);//5 es el numero de calificaciones a agregar
console.log(`Se han agregado 5 calificaciones al video: ${miVideo.titulo}\n`);
console.log(`Titulo: ${miVideo.titulo}\nEstatus: ${miVideo.prestado}\nCalificaciones: ${miVideo.calificaciones}
Director: ${miVideo.director}\nDuración: ${miVideo.duracion}`);
console.log(`Promedio de calificaciones : ${miVideo.obtenerCalificacionPromedio()}\n-------------------------\n` );

//clase CD
const canciones = ['La cucarcha', 'Mi burrito', 'Las mañanitas'];
const calificaciones_miCD=[];
const miDisco = new CD ('Mexico Lindo',false,calificaciones_miCD,'Juanito Perez',canciones);

console.log(`----------Disco----------
Estatus actual : "${miDisco.prestado}".`);
miDisco.cambiarEstatusPrestado(true);
console.log(`Se ha cambiado el estatus del disco ${miDisco.titulo} a "${miDisco.prestado}".`);
miDisco.agregarCalificacion(5);//5 es el numero de calificaciones a agregar
console.log(`Se han agregado 5 calificaciones al disco: ${miDisco.titulo}\n`);
console.log(`Artista: ${miDisco.artista}\nTitulo: ${miDisco.titulo}
Estatus: ${miDisco.prestado}\nCalificaciones: ${miDisco.calificaciones}\nCanciones: ${miDisco.canciones}`);
console.log(`Promedio de calificaciones : ${miDisco.obtenerCalificacionPromedio()}` );


