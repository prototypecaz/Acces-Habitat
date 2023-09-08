
window.onload = function(){
    let tl = new TimelineMax({onComplete:pushContent});

    tl
    .from('.titreService',0.8,{y:-100,opacity:0})
    .from('.paraDescription',0.8,{opacity:0})
    .staggerFrom('nav a',1,{y:-50,opacity:0,ease:Back.easeInOut},0.25,0.5)
    .from(['#aContactAccueil, .coordonne'],1,{opacity:0})

    function pushContent(){
      tl.play();
    }
}

var bg = document.querySelector(".bg")
bg.style.backgroundImage = "url('../assets/img/writing-pad-g5a95156f9_1920.webp')";

function parralaxCoffee(div){

 
  div.style.backgroundPosition = `20% ${-innerHeight/ 10}px`
  
      gsap.from(div, {
        backgroundPosition: `20% ${innerHeight / 1.5}px`,
        scrollTrigger: {
          trigger:div,
          ease:"none",
          scrub: true,
         }
      });
}

parralaxCoffee(bg)

let tween = gsap.timeline({paused:true})
tween.from(".titreProjet",0.5,{opacity:0,y:-50})
     .from(".ligneTitre",0.5,{opacity:0,x:-100})

animationScroll("#sectProjet",tween,"-=130 center","+=700")