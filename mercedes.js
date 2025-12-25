const sidebarBtn = document.querySelector('.sidebar-icon')
const navbarToggle = document.querySelector('.navbar-toggle')

sidebarBtn.addEventListener('click', function(){
    navbarToggle.classList.toggle('navbar-toggle')
})