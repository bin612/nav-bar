const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.nav-bar');
const icons = document.querySelector('.nav-icon-ins');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});