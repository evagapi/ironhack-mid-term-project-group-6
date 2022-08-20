const button = document.getElementById("btn");
const nav = document.getElementById("nav_list");

button.addEventListener('click', () => {
  nav.classList.toggle('show');
});