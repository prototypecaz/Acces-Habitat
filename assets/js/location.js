switch(true){
    case(document.URL.includes("nosServices")):
    var service = document.querySelector(".lienServ")
    service.style.borderBottom = "3px solid #C79C68"
    break;
    case(document.URL.includes("nosRealisations")):
    var realisation = document.querySelector(".lienNosRealisation")
    realisation.style.borderBottom = "3px solid #C79C68"
    break;
    case(document.URL.includes("contact")):
    var contact = document.querySelector(".lienContact")
    contact.style.borderBottom = "3px solid #C79C68"
    break;
    default: var accueil = document.querySelector(".lienAccueil")
    accueil.style.borderBottom = "3px solid #C79C68";

}
