document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const sidebarMenu = document.getElementById('sidebarMenu');
    const menuLinks = sidebarMenu.querySelectorAll('a');

    function toggleMenu() {
        sidebarMenu.classList.toggle('is-open');

        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        menuButton.setAttribute('aria-expanded', !isExpanded);
        
        if (isExpanded) {
            sidebarMenu.setAttribute('hidden', 'true');
        } else {
            sidebarMenu.removeAttribute('hidden');
        }
    }

    // Listener per il click sul bottone hamburger
    menuButton.addEventListener('click', toggleMenu);

    // Chiudi il menu quando si clicca su un link al suo interno (UX mobile)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebarMenu.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });
});