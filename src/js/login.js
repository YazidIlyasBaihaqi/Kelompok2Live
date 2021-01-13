function classToggle() {
    const navs = document.querySelectorAll('.navbar-tems')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.navbar-toggler')
    .addEventListener('click', classToggle);