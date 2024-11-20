// Seleccionar el primer enlace <a> y cambiar su atributo href
const enlace = document.getElementsByTagName('a')[0];
enlace.href = "https://www.google.com";

// Seleccionar el elemento con la clase 'titulo' y cambiar su contenido
const titulo = document.querySelector('.titulo');
titulo.textContent = 'Título Modificado';

// Cambiar el color de fondo del <body>
document.body.style.backgroundColor = 'lightgreen'; // Puedes elegir cualquier color que prefieras
