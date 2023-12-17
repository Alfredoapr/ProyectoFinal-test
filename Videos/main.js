document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show')
})

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('dark-mode');
})


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.banner-one' , {delay:300});
ScrollReveal().reveal('.cards' , {delay:300});
ScrollReveal().reveal('.contact' , {delay:300});