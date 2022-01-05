import * as bootstrap from 'bootstrap'

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');


        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation =''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        })
        
    });

    
}

navSlide();



gsap.registerPlugin(ScrollTrigger);

/*  Hero & Nav Animation  */

const tl = gsap.timeline({
})

/* Hero  */

tl.from(".hero-img-container ", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
}, 1)

tl.from(".landing-img", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
}, 1)

tl.from(".anim1", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
},'<0.1' )
tl.from(".anim2", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
},'<0.1' )
tl.from(".anim3", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
},'<0.1' )
tl.from(".anim4", {
    duration: 1,
    opacity:0,
    ease: "power4",
    y:20
},'<0.1' )





gsap.from(".box", {
    scrollTrigger:".box",
    y:25,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})

gsap.from(".box1", {
    scrollTrigger:".box1",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})

gsap.from(".box2", {
    scrollTrigger:".box2",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})

gsap.from(".box3", {
    scrollTrigger:".box3",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})
gsap.from(".box4", {
    scrollTrigger:".box4",
    y:10,
    ease: "power4",
    duration:1,
    opacity:0,
    delay:.5
})

