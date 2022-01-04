import * as bootstrap from 'bootstrap'

gsap.registerPlugin(ScrollTrigger);

/*  Hero & Nav Animation  */

const tl = gsap.timeline({
})

tl.from(".navbar-brand",{
    duration:.1,
    ease: "power4",
    y:5,
    opacity:0,

})

tl.from(".nav-item",{
    duration:1,
    ease: "power4",
    y:-10,
    opacity:0,
    stagger:.1

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

