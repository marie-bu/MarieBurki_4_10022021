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

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
};

// Validité du formulaire, messages d'erreur, message de confirmation :

// 1 : créer fonction pour ajouter les messages d'erreur

function validateInput(formData, message) {
    formData.setAttribute("data-error", message);
    formData.setAttribute("data-error-visible", "true");
}

// 2 : créer fonction pour retirer les messages d'erreur

function removeDataError(formData, message) {
  formData.removeAttribute("data-error", message);
  formData.removeAttribute("data-error-visible", "true");
};

// 3 : créer fonction pour ajuster message d'erreur lorsqu'une lettre est ajoutée

function checkAgain(condition, formData, message, inputVariable) {
    if (condition) {
    removeDataError(formData, message);
    inputVariable = true ;
  }
};

// 4 : créer les regex

const regex = {
  onlyText: /^[a-zA-Z\u00C0-\u0220]*$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,6})([\.a-z]{2,6})?$/,
  onlyNb: /^[0-9]*$/,
};

// 5 : créer fonction pour supprimer les données après validation du formulaire

function removeData() {
  first.value = "";
  last.value = "";
  email.value = "";
  birthdate.value = "";
  quantity.value = "";
  location1.checked = false;
  location2.checked = false;
  location3.checked = false;
  location4.checked = false;
  location5.checked = false;
  location6.checked = false;
  checkbox2.checked = false;
}

// 6 : message de confirmation (ajouté dans html et css) ; 
//     le définir dans une constante et le cacher par défaut

const popUpSuccess = document.querySelector(".popup-success");
popUpSuccess.style.display = "none";

// 7 : créer fonction validate (ref. <form> HTML), empêcher le comportement par défaut,
//     remplir avec les fonctions ci-dessus

function validate(event){
  event.preventDefault();

  //ajout de variables > ne pas faire de return pour chaque input > faire apparaitre tous les messages d'erreur simultanément
  let isFirstValid = false; 
  let isLastValid = false; 
  let isEmailValid = false;
  let isBirthdateValid = false;
  let isQuantityValid = false;
  let isLocationValid = false;
  let isCheckboxValid = false;

  if (first.value=="" || first.value.trim().length<=1 || !regex.onlyText.test(first.value)) {
    validateInput(formData[0], "Veuillez entrer 2 caractères ou plus pour le champ du prénom.") ;
    first.onchange = function() {
      checkAgain(first.value.trim().length>=2 && regex.onlyText.test(first.value), formData[0], "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", isFirstValid);
    };
  } else {
    isFirstValid = true;
  }

  if (last.value=="" || last.value.trim().length<=1 || !regex.onlyText.test(last.value)) {
    validateInput(formData[1], "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    last.onchange = function() {
      checkAgain(last.value.trim().length>=2 && regex.onlyText.test(last.value), formData[1], "Veuillez entrer 2 caractères ou plus pour le champ du nom.", isLastValid)
    };
  } else {
    isLastValid =true;
  }

  if (email.value=="" || !regex.email.test(email.value)) {
    validateInput(formData[2], "Vous devez entrer une adresse email valide.");
    email.onchange = function() {
      checkAgain(email.value.trim().length!=="" && regex.email.test(email.value), formData[2], "Vous devez entrer une adresse email valide.", isEmailValid)
    };
  } else {
    isEmailValid =true;
  }

  if (birthdate.value=="") {
    validateInput(formData[3], "Vous devez entrer votre date de naissance.");  
    birthdate.onchange = checkAgainBd=>{
        removeDataError(formData[3], "Vous devez entrer votre date de naissance.");
        isBirthdateValid = true;
    };
  } else {
    isBirthdateValid =true;
  }

  if (quantity.value=="" || !regex.onlyNb.test(quantity.value)) {
    validateInput(formData[4], "Vous devez entrer un chiffre.");
    quantity.onkeyup = function() {
      checkAgain(quantity.value!=="" && regex.onlyNb.test(quantity.value), formData[4], "Vous devez entrer un chiffre.", isQuantityValid)
    };
  } else {
    isQuantityValid=true;
  }

  if (!location1.checked && !location2.checked && !location3.checked && !location4.checked && !location5.checked && !location6.checked) {
    validateInput(formData[5], "Vous devez choisir une option");
    formData[5].onchange = function() {
      checkAgain(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked, formData[5], "Vous devez choisir une option", isLocationValid)
    };
  } else {
    isLocationValid =true;
  }

  if (!checkbox1.checked) {
    validateInput(formData[6], "Vous devez vérifier que vous acceptez les termes et conditions.");
    checkbox1.onchange = function() {
     checkAgain(checkbox1.checked, formData[6], "Vous devez vérifier que vous acceptez les termes et conditions.", isCheckboxValid)
    };
  } else {
    isCheckboxValid =true;
  }

  if (isFirstValid && isLastValid && isEmailValid && isBirthdateValid && isQuantityValid && isLocationValid && isCheckboxValid) {
    removeData();
    closeModal();
    // afficher message de confirmation :
    popUpSuccess.style.display = "block";
  } 

};