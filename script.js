// Seleziona gli elementi tramite i loro ID
const menuButton = document.getElementById('menuButton');
const sidebarMenu = document.getElementById('sidebarMenu');

// Aggiunge un "ascoltatore di eventi" (event listener) al pulsante
menuButton.addEventListener('click', function() {
    // Quando cliccato, alterna la classe 'is-open' sul menu laterale
    sidebarMenu.classList.toggle('is-open');
});