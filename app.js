
let controller,gridscene,voiceScene 


// TO OPEN
const navbar = document.querySelector(".open");
navbar.addEventListener("click", showNav);

function showNav(e){
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
// burger.style.display = "flex";
// burger.style.width = "40vw";
body.style.overflowY = "hidden";

//  gsap.fromTo(".burger", 0.1 , {display:"none", width:"0vw", ease: "linear" }, {display:"flex", width:"40vw"});

 gsap.fromTo(".burger", 1, {display:"none", opacity:0, x:"100%" }, {display:"flex", opacity:1, x: "0%"});


e.preventDefault();
};

// TO CLOSE
const navbar_close = document.querySelector(".close");
navbar_close.addEventListener("click", hideNav);

function hideNav(e){
const burger = document.querySelector(".burger");
const body = document.querySelector("body");

body.style.overflowY = "scroll";

gsap.fromTo(".burger", 1, {display:"flex", opacity:1, x:"0%" }, {display:"none", opacity:0, x: "100%"});


e.preventDefault();
};


function scroll(){

controller = new ScrollMagic.Controller();

const t1 = gsap.timeline({defaults: {duration: 0.5, ease: "power2.inOut"}});
 t1.fromTo(".invite", {opacity:0, y:"50%" }, {opacity:1, y: "0%"});

gridscene = new ScrollMagic.Scene({
  triggerElement: ".hero_body-content",
  triggerHook: 0,
  // reverse: false
  
})
.setTween(t1)
// .addIndicators({
//   colorStart: "black",
//   colorTrigger: "black",
//   name: "page",
//   indent: 200})
.addTo(controller);

// ANIMATION
const t2 = gsap.timeline({defaults: {duration: 1, ease: "power2.inOut"}});
 t2.fromTo(".reliable", {opacity:0, y:"50%" }, {opacity:1, y: "0%"});
 t2.fromTo(".wave-left", {opacity:0, y:"50%" }, {opacity:1, y: "0%"});
 

voiceScene = new ScrollMagic.Scene({
  triggerElement: ".trigger-1",
  triggerHook: 0,
  reverse: false
  
})
.setTween(t2)
// .addIndicators({
//   colorStart: "black",
//   colorTrigger: "black",
//   name: "page",
//   indent: 200})
.addTo(controller);
}

scroll();