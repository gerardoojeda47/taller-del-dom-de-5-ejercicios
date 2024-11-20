// Agregar un evento click al botón para reemplazar el primer <div>
const botonReemplazar = document.querySelector('#reemplazar');
botonReemplazar.addEventListener('click', () => {
    // Crear un nuevo <div>
    const nuevoDiv = document.createElement('div');
    nuevoDiv.textContent = 'Soy un nuevo div';

    // Seleccionar el primer <div> existente
    const divExistente = document.querySelector('div');

    // Reemplazar el div existente con el nuevo div
    if (divExistente) {
        divExistente.parentNode.replaceChild(nuevoDiv, divExistente);
        console.log('El div ha sido reemplazado correctamente');
    }
});
