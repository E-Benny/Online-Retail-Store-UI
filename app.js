const navSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');
    
    //toggle nav

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        body.classList.toggle('scroll');
        

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else { //navLinkFade is the keyframe in css
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1.1}s`
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();