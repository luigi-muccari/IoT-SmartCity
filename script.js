const button = document.getElementById("buttonScopri");
const leftSidebar = document.querySelector(".sidebar.left");
const rightSidebar = document.querySelector(".sidebar.right");
const content = document.querySelector(".content");

button.addEventListener("click", () => {
    leftSidebar.classList.toggle("active");
    rightSidebar.classList.toggle("active");
    content.classList.toggle("shifted");
});