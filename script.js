// Obtener los elementos del DOM
const prevButton = document.getElementById('prev-section');
const nextButton = document.getElementById('next-section');
const contentSection = document.querySelector('.admin-content');
const usersSection = document.querySelector('.admin-users');
const title = document.querySelector('#admin-content-title');

// Añadir evento click al botón "Siguiente"
nextButton.addEventListener('click', () => {
    // Ocultar la sección actual con una animación (puedes personalizarla)
    contentSection.style.animation = 'slideOutRight 0.5s forwards'; 
    title.textContent = "GESTIÓN DE USUARIOS";

    // Mostrar la siguiente sección después de un pequeño retraso
    setTimeout(() => {
        contentSection.style.display = 'none';
        usersSection.style.display = 'block';
        usersSection.style.animation = 'slideInLeft 0.5s forwards';
    }, 500); // 500ms de retraso
});

// Añadir evento click al botón "Anterior" (similar al anterior)
prevButton.addEventListener('click', () => {
    usersSection.style.animation = 'slideOutLeft 0.5s forwards';
    title.textContent = "GESTIÓN DE CONTENIDO";

    setTimeout(() => {
        usersSection.style.display = 'none';
        contentSection.style.display = 'block';
        contentSection.style.animation = 'slideInRight 0.5s forwards';
    }, 500);
});