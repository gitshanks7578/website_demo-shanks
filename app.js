function setActive(element) {
    let links = document.querySelectorAll('.sidebar a');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}
function darkmode() {
    document.body.classList.toggle('dark');
//   document.body.document.querySelector(".sections .sec").classList.toggle('dark');
}
let moon = document.querySelector("#moon");
let sun = document.querySelector("#sun");
let overlay = document.querySelector(".overlay");
function icon_move(){
    if(sun.classList.contains("hide")){
        sun.classList.remove("hide");
        moon.classList.add("hide");
        // overlay.classList.add("hide");
    }
    else{
        sun.classList.add("hide");
        moon.classList.remove("hide");
        // overlay.classList.remove("hide");
    }
  
}
let btn = document.querySelector(".btn");
let sidebar = document.querySelector(".sidebar");
let sec1pt1 = document.querySelector(".sec1_pt1");
let sec1pt2 = document.querySelector(".sec1_pt2");
let sec2 = document.querySelector(".sec2");
let sec3 = document.querySelector(".sec3");

btn.addEventListener("submit",()=>{
    // window.location.reload();
    window.location.reload(true);
})

gsap.registerPlugin(ScrollTrigger);
// gsap.from(".sidebar",{
//     opacity:0,
//     left:"-50px",
//     duration:0.7,
//     ease: "power4.out",
//     delay:0.3
// })




gsap.from(".sec2",{
    y:-100,
    opacity:0,
    ease:"power4.out",
    duration:1,
    delay:0.3,
 
})

gsap.from(".sec1_pt1",{

    opacity:0,
    ease:"power4.out",
    duration:1,
    delay:0.3,
    
})
gsap.from(".sec1_pt2",{

    opacity:0,
    ease:"power4.out",
    duration:1,
    delay:0.4
})
gsap.from(".sec3",{
    x:100,
    opacity:0,
    ease:"power4.out",
    duration:1,
    delay:0.3
})

gsap.from(".card",{
    x:-100,
    opacity:0,
    ease:"power1.out",
    duration:1,
    // delay:0.3,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        scrub:3,
        start:"top 60%",
        end:"top 30%"
    }
})

gsap.from(".pg3card",{
    // x:100,
    opacity:0,
    ease:"power2.out",
    duration:0.5,
    delay:0.3,
    stagger:0.4,
    scrollTrigger:{
        trigger:".pg3card",
        scroller:"body",
        // markers:true,
        scrub:3,
        start:"top 60%",
        end:"top 30%"
    }
})
gsap.from(".animate",{
    x:100,
    opacity:0,
    ease:"power2.out",
    duration:1,
    delay:0.3,
    stagger:0.4,
    scrollTrigger:{
        trigger:".animate",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 60%",
        end:"top 30%"
    }
})
 

