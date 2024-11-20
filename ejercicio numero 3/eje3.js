// Crear un nuevo <p> y agregarlo al final del <body>
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Este es un párrafo creado dinámicamente';
document.body.appendChild(nuevoParrafo);

// Agregar un evento click al botón para eliminar el primer <p>
const botonEliminar = document.querySelector('#eliminar');
botonEliminar.addEventListener('click', () => {
    const primerParrafo = document.querySelector('p');
    if (primerParrafo) {
        primerParrafo.remove(); // Elimina el primer párrafo encontrado
    }
});
