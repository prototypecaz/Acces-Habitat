var question = document.querySelectorAll(".question")
var p = 0
var tab = [document.querySelector(".testR")]

question.forEach(function(element){
 element.onclick = function(){
   
  
   p++
   var affichage = this.nextElementSibling
   affichage.className = "d-block "
   let tween = gsap.timeline()
   //tween.fromTo(affichage, 0.3, {height:"0px",opacity:0}, {height:"auto",opacity:1,  ease:Power0.easeNone,})
   tween.set(affichage, { height: 'auto' }, 'start')
.from(affichage, 1, { height: 0, ease: Power4.easeOut}, 'start+=0.001')
.from(affichage,1,{opacity:0},'-=0.7')

   //.from(affichage, {autoAlpha:0, duration:1}, '-=1')
   tab.push(affichage)
   element.lastElementChild.className = "d-none"
   element.style.pointerEvents = "none"
   /* element.className="d-none"
     p++
     var parent = this.parentElement
     var autre = parent.nextElementSibling
     autre.className="d-block"
     
     test.push(autre)*/
     if(p >= 1){
        
      tab[0].className="d-none"
      //tween.to(tab[0],1,{height:0,opacity:0},"-=1.5")
      tab[0].previousElementSibling.style.pointerEvents = "auto"
      tab[0].previousElementSibling.lastElementChild.className="fas fa-plus-circle"
      tab.shift()
      p=0
        
        }
 }

})


// min Height

var conteneur = document.querySelector(".divFoire")
conteneur.style.minHeight = conteneur.clientHeight + "px"

/*var question = document.querySelectorAll(".question")
var p = 0
var tab = [document.querySelector(".testR")]

question.forEach(function(element){
 element.onclick = function(){
   
  
   p++
   var affichage = this.nextElementSibling
   affichage.className = "d-block "
   let tween = gsap.timeline()
   //tween.fromTo(affichage, 0.3, {height:"0px",opacity:0}, {height:"auto",opacity:1,  ease:Power0.easeNone,})
   tween//.set(affichage, { height: 'auto' }, 'start')
.to(affichage, 1, { height: "80px", ease: Power4.easeOut}, 'start+=0.001')
.to(affichage,1,{autoAlpha:1},'-=0.5')

   //.from(affichage, {autoAlpha:0, duration:1}, '-=1')
   tab.push(affichage)
   element.lastElementChild.className = "d-none"
   element.style.pointerEvents = "none"
   // element.className="d-none"
     //p++
     //var parent = this.parentElement
     //var autre = parent.nextElementSibling
     //autre.className="d-block"
     
     //test.push(autre)
     
     if(p >= 1){
        
      //tab[0].className="d-none"
      tween.to(tab[0],1,{height:0,autoAlpha:0},"-=1.5")
      tab[0].previousElementSibling.style.pointerEvents = "auto"
      tab[0].previousElementSibling.lastElementChild.className="fas fa-plus-circle"
      
      tab.shift()
      p=0
        
        }
 }

})*/