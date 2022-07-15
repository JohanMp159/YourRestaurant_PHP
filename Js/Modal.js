//Obtener todos los elemtnos que tenga el sigiueinte selectos ('.galley__img')
let imagenes = document.querySelectorAll('.gallery__img');
//Obtenermos un solo elemento
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');

for (let i = 0; i < imagenes.length; i++){
		imagenes[i].addEventListener('click', function(e){
		modal.classList.toggle("modal--open");
		/* e crea un parametro (e) y lo obtendra ".target" 
		guardandola en la variable ".src"*/
		/*Guramos la ruta en la variable src al momento que le den lcick a cualqueir imagen*/
		let src = e.target.src;
		/* a al variable img le estamos paando la ruta "src" al atributo SRC*/
		img.setAttribute("src", src);
	});
}
boton.addEventListener('click', function(){
	modal.classList.toggle("modal--open");
});