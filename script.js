function locoScroll(){
    // Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"), // Ensure this matches your main scrolling element
  smooth: true
});

// Update ScrollTrigger on each Locomotive Scroll update
locoScroll.on("scroll", ScrollTrigger.update);

// Configure ScrollTrigger to use Locomotive Scroll
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Update Locomotive Scroll and ScrollTrigger on refresh
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
locoScroll()
function CursorEffect() {
    var pageonecontent = document.querySelector("#page-1-content");
    var cursor = document.querySelector("#cursor");
    var pagefourcontent =document.querySelector("#page4")

    pageonecontent.addEventListener("mousemove", function(dets) {
        gsap.to(cursor, {
            x: dets.clientX,
            y: dets.clientY
        });
    });

    pageonecontent.addEventListener("mouseenter", function() {
        gsap.to(cursor, {
            scale: 1
        });
    });
pagefourcontent.addEventListener("mouseleave", function() {
        gsap.to(cursor, {
            scale: 0
        });
    });   
}
CursorEffect();

function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            //markers: true,
            scrub: 2
        }
    });
}
page2Animation();

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
}
swiperAnimation()
var tl = gsap.timeline()
tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})  
tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
})
tl.to("#loader",{
    opacity:0
})
tl.to("#loader",{
    display: "none"
})
tl.from("#page-1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.3,
    duration: 0.5
})