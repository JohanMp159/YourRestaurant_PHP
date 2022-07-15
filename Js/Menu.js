let btnMenu = document.getElementById('btnmenu'); //denomino una variable llamada btnMenu y le decimos que busque en el documento un elemnto id llamado ('btnmenu')
let Menu = document.getElementById('menu'); // guardando el menu para poder aplicarle una acción
btnMenu.addEventListener('click', function(){ // este atento a que cuando de un click al btnMenu, actue con una funcion(){};
'use strict'; // esta es la accion
menu.classList.toggle('mostrar'); // con toggle yo puedo intercalar, "quitar o poner" si no la tinee la muestra, si está la oculta 
});