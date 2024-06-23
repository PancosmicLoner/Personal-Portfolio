//menu icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

//scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// sticky navbar
window.onscroll= () =>{
    //scroll section active link
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

   //$('.header').toggleClass('sticky', window.scrollY > 30);
   let header = document.querySelector('.header');
   header.classList.toggle('sticky', window.scrollY > 30);


    //remove menu icon bar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

//dark light mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.addEventListener('click', ()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

    let theme;
    if(document.body.classList.contains('dark-mode')){
        theme = "DARK";
    }
    else{
        theme = "LIGHT";
    }
    localStorage.setItem("PageTheme",JSON.stringify(theme));
});

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

if(GetTheme === 'DARK'){
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList = "dark-mode";
}



//scroll reveal
ScrollReveal({ 
    reset: true,
    distance : '80px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.profession-box img, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });