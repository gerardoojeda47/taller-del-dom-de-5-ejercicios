// Seleccionar el <div> con el ID info y mostrar su texto en la consola
const infoDiv = document.getElementById('info');
console.log(infoDiv.innerText);

// Seleccionar el primer elemento con la clase detalle y cambiar su texto
const detalleP = document.querySelector('.detalle');
detalleP.innerText = 'Este es un detalle modificado';

// Seleccionar todos los elementos <p> y cambiar su color de fondo
const fondo = document.querySelectorAll('p');
fondo.forEach(p => {
    p.style.backgroundColor = 'lightblue';
});
