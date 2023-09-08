function animationScroll(element3,tween,start,fin){



    st = ScrollTrigger.create({
          trigger: element3,
          start: start,
          end: fin,
          onEnter: () => tween.play(),
          onEnterBack: () => tween.play(),
          onLeave: () => tween.reverse(),
    onLeaveBack: () => tween.reverse(),
          //animation: tween Permet de faire l'apparation mais reste sur son style declencher
         //markers:true
        });
  }


function parralax(div){

    var taille = 2
    if(div.offsetWidth <= 576){
      taille = 1
    }
    
    div.style.backgroundPosition = `50% ${-innerHeight/ 2}px`
    
        gsap.from(div, {
          backgroundPosition: `50% ${innerHeight / taille}px`,
          scrollTrigger: {
            ease:"none",
            scrub: true,
            }
        });
      }
  
function removeHash () { 
  history.pushState("", document.title, window.location.pathname + window.location.search);
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}






        