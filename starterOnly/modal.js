function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la modale :
// step 1 : définir le boutton "fermer" dans une constante
// step 2 : écouter le click + fonction pour fermer la fenêtre

const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", closeModal=>{
  modalbg.style.display = "none";
}) ;

// Validité du formulaire :
// step 1 : définir la fonction validate (présente dans HTML)
// step 2 : dans fonction, demander champs à être remplis (nom, prénom, mail, nombre de tournois)
// step 3 : dans fonction, demander au moins un boutton radio à être selectionné
// step 4 : dans fonction, demander checkbox conditions d'utilisation à être selectioné
// note : pas besoin d'autres demandes (nombre de lettres etc.), elles sont inscrites dans le HTML (sauf pour "last", à ajouter)
// note : les données du formulaire sont conservées par défaut tant qu'il n'est pas valide

function validate() {
  if (first.value=="" || last.value=="" || email.value=="" || quantity.value=="") {
    alert ("Tous les champs doivent être remplis")
    return false ;
  };
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    alert ("Merci de sélectionner une ville")
    return false;
  };
  if (!checkbox1.checked) {
    alert ("Veuillez accepter les conditions d'utilisation")
    return false;
  };
};