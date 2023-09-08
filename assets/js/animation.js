

//----------------------------------------------Animation Page d'accueil

window.onload = function(){
    let tl = new TimelineMax({onComplete:pushContent});

    tl
    .from(['#titreGrp,.pDescription'],0.8,{x:-100,opacity:0})
    .staggerFrom('nav a',1,{y:-50,opacity:0,ease:Back.easeInOut},0.25,0.5)
    .from(['#aContactAccueil, .coordonne'],1,{opacity:0})

    
    function pushContent(){
      tl.play();
    }
}

var bg = document.querySelector(".bg")

parralax(bg)

// Section qualification


let tween1 = gsap.timeline({paused:true})
  
tween1.from(".divQualification",0.6,{opacity:0})
.from(".logoQualif",0.6, {opacity:0})
.from(".fa-bookmark",0.6,{x:innerWidth / 42})


if(document.querySelector("#sectionQualification").offsetHeight > 272){
  var end = "900"
}else{
  end = "650"
}

animationScroll("#sectionQualification", tween1,"-=150 center ","+="+end)


// Section etape

let tween = gsap.timeline({paused:true})
  
tween.from(".iconeEtape",0.6,{opacity:0,y:-50})
.from(".etape, .etapePara",0.6, {opacity:0})

var container = document.querySelector(".allEtape")

if(container.offsetHeight > 305){
  end = "1300"
}else{
  end = "700"
}

animationScroll(".allEtape", tween,"-=200 center ","+="+end)

// Section FAQ 

let tween2 = gsap.timeline({paused:true})
  
tween2.from('.divFaq',0.6,{x:-innerWidth / 27.2},"+=0.6")
tween2.staggerFrom('.imgCoupe .imgC',0.6,{y:-50,opacity:0,ease:Back.easeInOut},0.35,1)


animationScroll(".sectionFaq", tween2,"-=200 center ", "+=950")

// Section formulaire

let tween3  = gsap.timeline({paused:true})
tween3.from('.titreFormulaire',0.6,{opacity:0,y:-50})

animationScroll(".sectionContact", tween3,"-=180 center ", "+=750")


//-----------------------------------------------Fin animation Page d'accueil 

 






















/* let tween = gsap.timeline({paused:true})
  
  tween.from(".iconeEtape",0.6,{opacity:0,y:-50})
  .from(".etape",0.6, {opacity:0})
  
    st = ScrollTrigger.create({
        trigger: ".allEtape",
        start: "-=200 center ",
        end: "+=650",
        onEnter: () => tween.play(),
        onEnterBack: () => tween.play(),
        onLeave: () => tween.reverse(),
  onLeaveBack: () => tween.reverse(),
        //animation: tween Permet de faire l'apparation mais reste sur son style declencher
       // markers:true
      });*/








       
    