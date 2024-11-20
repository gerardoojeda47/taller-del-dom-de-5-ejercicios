// Definir la función que mostrará el alert
function mostrarAlert() {
    alert('¡Botón clickeado!');
}

// Seleccionar el botón clickMe y agregar el evento click
const botonClickMe = document.querySelector('#clickMe');
botonClickMe.addEventListener('click', mostrarAlert);

// Seleccionar el botón removeEvent y agregar el evento click
const botonRemoveEvent = document.querySelector('#removeEvent');
botonRemoveEvent.addEventListener('click', () => {
    // Eliminar el evento de clic del botón clickMe
    botonClickMe.removeEventListener('click', mostrarAlert);
    console.log('Evento eliminado del botón clickMe');
});
