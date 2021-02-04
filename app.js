
let controller,gridscene,voiceScene

function scroll(){

controller = new ScrollMagic.Controller();

const t1 = gsap.timeline({defaults: {duration: 1, ease: "power2.inOut"}});
 t1.fromTo(".invite", {opacity:0, y:"50%" }, {opacity:1, y: "0%"});

gridscene = new ScrollMagic.Scene({
  triggerElement: ".hero_body-links",
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