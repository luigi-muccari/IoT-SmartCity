function menuShow() {
    const menuColonna = document.getElementById('sidebarMenu');
    const menuButton = document.getElementById('menuButton');

    menuButton.onclick = function () {
        menuColonna.classList.toggle('is-open');
    }
}