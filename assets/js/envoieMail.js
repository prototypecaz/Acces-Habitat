var btnEnvoieFormulaire = document.querySelector("#envoieFormulaire")
var nom = document.querySelector(".nom")
var prenom = document.querySelector(".prenom")
var telephone = document.querySelector(".telephone")
var email = document.querySelector(".email")
var sujet = document.querySelector(".sujet")
var message = document.querySelector(".message")
var loading = document.querySelector("#loading")
var formulaireAccueil = document.querySelector("#formulaireAccueil")


btnEnvoieFormulaire.onclick = function(){

   if(window.location.pathname == "/AccesHabitat/pages/plombier-accesHabitat-contact.html"){
       var chemin = "../envoieMail.php"
   }else{
        chemin = "./envoieMail.php"
   }
    
    if(nom.value !== "" && prenom.value !== "" && telephone.value !== "" && telephone.value.length > 9 && validateEmail(email.value) && email.value !== "" && sujet.value !== "" && message.value !== "" ){
        
        //window.location.href += "#eF";
        //location.reload("./");

        formulaireAccueil.className="d-none"
        loading.className="d-flex justify-content-center align-items-center h-50"

    fetch(chemin+'?nom='+nom.value+"&prenom="+prenom.value+"&telephone="+telephone.value+"&email="+email.value+"&sujet="+sujet.value+"&message="+message.value).then(function(response){
        response.text().then(function(reponse){
            
            window.location.href += "#eF";
            location.reload("./");
                                                })
            })
        }

        
}


if(window.location.hash == "#eF"){
    //window.location.href.split('#')[0]
    window.onload = function(){
        let tween = gsap.timeline()
        tween.from("#confirmationMail",1,{opacity:0,y:170})
        document.querySelector("#confirmationMail").className="d-flex align-items-center position-absolute"

        setTimeout(function(){
            tween.to("#confirmationMail",1,{opacity:0,y:170})
            
            //document.querySelector("#confirmationMail").className="d-none"
        },5000)
        setTimeout(function(){document.querySelector("#confirmationMail").className="d-none"},6000)
    }
  
   
    removeHash()
    
}


