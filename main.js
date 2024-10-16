// main.js

// Ejemplo: Mostrar un mensaje en la consola al cargar la página
console.log('Página cargada correctamente');


// Agregar un evento a los botones existentes para mostrar alertas

/* document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
        alert(`Vas a ver ${event.target.previousElementSibling.textContent}`);
    });
}); */

// Crear un nuevo botón dinámicamente y añadirlo al footer
const nuevoBoton = document.createElement('button');
nuevoBoton.textContent = 'Haz clic aquí';
nuevoBoton.classList.add('dynamic-button'); // Clase opcional para estilos

// Agregar un evento al botón nuevo
nuevoBoton.addEventListener('click', () => {
    alert('¡Has hecho clic en el botón dinámico!');
});

// Insertar el botón dentro del <footer>
document.querySelector('footer').appendChild(nuevoBoton);
