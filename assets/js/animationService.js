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


let tween = gsap.timeline({paused:true})

tween.to(".titre1",{y:400})
.to('.titre2',{x:480},"-=0.5")
.to('.titre3',{x:500},"-=0.5")



ScrollTrigger.matchMedia({
    "(min-width:1200px)": function(){
    
    ScrollTrigger.create({
   
        scrub:true,
        animation:tween
    })
}
    
})



const image1 = document.getElementsByClassName('imgPompe');

new simpleParallax(image1,{orientation:'right',scale:1.2});


const image2 = document.getElementsByClassName('imgChaudiere');
new simpleParallax(image2,{orientation:'left',scale:1.3});


const image3 = document.getElementsByClassName('imgSanitaire')
new simpleParallax (image3,{scale:1.15,orientation:'right'});

