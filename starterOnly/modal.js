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

// 1 : définir le boutton "fermer" dans une constante
const closeBtn = document.querySelector(".close");

// 2 : écouter le click + fonction pour fermer la fenêtre
closeBtn.addEventListener("click", closeModal=>{
  modalbg.style.display = "none";
}) ;

// Validité du formulaire et messages d'erreur :

// 1 : créer fonction pour ajouter les messages d'erreur
function validateInput(formData, message) {
    formData.setAttribute("data-error", message);
    formData.setAttribute("data-error-visible", "true");
    return false;
};

// 2 : créer fonction pour retirer les messages d'erreur
function removeDataError(formData, message) {
  formData.removeAttribute("data-error", message);
  formData.removeAttribute("data-error-visible", "true");
};

// 3 : créer les regex
const regex = {
  onlyText: /^[a-zA-Z ]*$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})([\.a-z]{2,3})?$/,
  onlyNb: /^[0-9]*$/
};

// 4 créer fonction validate (ref. <form> HTML), remplir avec fonctions ci-dessus pour chaque input
// adapter conditions du if/else pour les différents input
function validate() {
  if (first.value=="" || first.value.trim().length<=1 || !regex.onlyText.test(first.value)) {
    const isValid = validateInput(formData[0], "Veuillez entrer 2 caractères ou plus pour le champ du prénom.") ;
    return isValid;
  } else {
    removeDataError(formData[0], "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
  };
  if (last.value=="" || last.value.trim().length<=1 || !regex.onlyText.test(last.value)) {
    const isValid = validateInput(formData[1], "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    return isValid;
  } else {
    removeDataError(formData[1], "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  };
  if (email.value=="" || !regex.email.test(email.value)) {
    const isValid = validateInput(formData[2], "Vous devez entrer une adresse email valide.");
    return isValid;
  } else {
    removeDataError(formData[2], "Vous devez entrer une adresse email valide.");
  };
  if (birthdate.value=="") {
    const isValid = validateInput(formData[3], "Vous devez entrer votre date de naissance.");
    return isValid;
  } else {
    removeDataError(formData[3], "Vous devez entrer votre date de naissance.");
  }
  if (quantity.value=="" || !regex.onlyNb.test(quantity.value)) {
    const isValid = validateInput(formData[4], "Vous devez entrer un chiffre.");
    return isValid;
  } else {
    removeDataError(formData[4], "Vous devez entrer un chiffre.");
  }
  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    const isValid = validateInput(formData[5], "Vous devez choisir une option");
    return isValid;
  } else {
    removeDataError(formData[5], "Vous devez choisir une option");
  }
  if (!checkbox1.checked) {
    const isValid = validateInput(formData[6], "Vous devez vérifier que vous acceptez les termes et conditions.");
    return isValid;
  } else {
    removeDataError(formData[6], "Vous devez vérifier que vous acceptez les termes et conditions.");
  }
};

// Message de confirmation

const submitBtn = document.querySelector(".btn-submit");
const main = document.querySelector("main");
const popUpSuccess = document.createElement("div");


submitBtn.addEventListener("click", openSuccess=>{
  if (validate()==true) {
    main.appendChild(popUpSuccess);
    popUpSuccess.innerHTML = "Merci, nous avons bien reçu votre inscription.";
    console.log("ca marche");
  };
});

// messages d'erreur ne viennent pas tous en même temps...
// disparaitre erreur "keyup"
// fonction popup success ne fonctionne pas