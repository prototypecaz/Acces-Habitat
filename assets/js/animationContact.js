window.onload = function(){
    let tl = new TimelineMax({onComplete:pushContent});

    tl
    .from('.titreContact',0.8,{y:-100,opacity:0})
    .from('.pContact',0.8,{opacity:0,x:-100})
    .staggerFrom('nav a',1,{y:-50,opacity:0,ease:Back.easeInOut},0.25,0.5)
    .from(['#aContactAccueil, .coordonne'],1,{opacity:0})

    function pushContent(){
      tl.play();
    }
}



  let tween = gsap.timeline({paused:true})
     tween.from(".titreProjet",0.5,{opacity:0,y:-50})
          .from(".ligneTitre",0.5,{opacity:0,x:-100})

  animationScroll(".formulaireContact",tween,"-=130 center","+=700")