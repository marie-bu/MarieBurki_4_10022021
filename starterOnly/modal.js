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
// step 1 : définir les labels dans des constantee
// écouter la validation du formulaire + fonction d'erreur + cas à ne pas valider