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
      // réinitialiser tous les champs au lancement de la popup au cas où elle aurait été fermée, suppression des contours rouges et messages d'erreur
      document.getElementById('first').value = '';
      document.getElementById('last').value = '';
      document.getElementById('email').value = '';
      document.getElementById('quantity').value = '';
      document.getElementById('birthdate').value = '';
      var radioChecks = document.getElementsByName("location");
      for(var i=0;i<radioChecks.length;i++)
         radioChecks[i].checked = false;
      document.getElementById('checkbox1').checked = true;
      firstValue.classList.remove("redborder");
      lastValue.classList.remove("redborder");
      emailValue.classList.remove("redborder");
      quantityValue.classList.remove("redborder");
      checkbox1Value.classList.remove("redborder");
      firstError.innerHTML = "";
      lastError.innerHTML = "";
      emailError.innerHTML = "";
      birthdateError.innerHTML = "";
      quantityError.innerHTML = "";
      locationError.innerHTML = "";
      checkbox1Error.innerHTML = "";
}


// MANAGEMENT OF ISSUE #1

// adding close button 
const closeButton = document.querySelector(".close");

// create a close function based on previous launchModal function
function closeModal () {
  modalbg.style.display = "none";
}

// trigger close function when clicking on close button
closeButton.addEventListener("click", closeModal);

// MANAGEMENT OF ISSUE #2

// Creation des conditons de validation
var firstValide = false;
var lastValide = false;
var emailValide = false;
var quantityValide = false;
var locationValide = false;
var checkbox1Valide = true;

// Ajout des div qui affichent les messages d'erreur
var firstError = document.getElementById("firstError");
var lastError = document.getElementById("lastError");
var emailError = document.getElementById("emailError");
var birthdateError = document.getElementById("birthdateError");
var quantityError = document.getElementById("quantityError");
var locationError = document.getElementById("locationError");
var checkbox1Error = document.getElementById("checkbox1Error");


// vérifier la valeur du champ prénom 
const firstValue = document.getElementById("first")
firstValue.addEventListener("input", function(e) {
  var value = e.target.value;
  if (value.match(/[A-Za-z]{2,}$/)) {
    firstValide = true;
    console.log("Prenom valide")
    firstError.innerHTML = "";
    firstError.classList.remove("texteErreur")
    firstValue.classList.remove("redborder");
  } else {
    firstValide = false;
    firstValue.classList.add("redborder");
    firstError.innerHTML = "<p>Veuillez entrer deux caractères ou plus pour le champ du prénom</p>";
    firstError.classList.add("texteErreur")
    console.log("Prenom non valide");
  }
  console.log(firstValide)
});

// vérifier la valeur du champ nom 
const lastValue = document.getElementById("last")
lastValue.addEventListener("input", function(e) {
  var value = e.target.value;
  if (value.match(/[A-Za-z]{2,}$/)) {
    lastValide = true;
    console.log("Nom Valide")
    lastError.innerHTML = "";
    lastError.classList.remove("texteErreur")
    lastValue.classList.remove("redborder")
  } else {
    lastValide = false;
    lastValue.classList.add("redborder");
    lastError.innerHTML = "<p>Veuillez entrer deux caractères ou plus pour le champ du nom</p>";
    lastError.classList.add("texteErreur")
    console.log("Nom non valide");
  }
});

// vérifier l'email
const emailValue = document.getElementById("email")
emailValue.addEventListener("input", function(e) {
  var value = e.target.value;
  if (value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
    emailValide = true;
    console.log("Email Valide")
    emailError.innerHTML = "";
    emailError.classList.remove("texteErreur")
    emailValue.classList.remove("redborder");
  } else {
    emailValide = false;
    emailValue.classList.add("redborder");
    emailError.innerHTML = "<p>Veuillez entrer un email valide</p>";
    emailError.classList.add("texteErreur")
    console.log("Email non valide");
  }
});

// vérifier le nombre de concours
const quantityValue = document.getElementById("quantity")
quantityValue.addEventListener("change", function(e) {
  var value = e.target.value;
  if (value.match(/^-?\d+\.?\d*$/)) {
    quantityValide = true;
    console.log("Nombre de concours Valide")
    quantityError.innerHTML = "";
    quantityError.classList.remove("texteErreur")
    quantityValue.classList.remove("redborder");
  } else {
    quantityValide = false;
    quantityValue.classList.add("redborder");
    console.log("Nombre de concours non Valide");
    quantityError.innerHTML = "<p>Veuillez remplir ce champ avec un nombre entre 0 et 99</p>";
    quantityError.classList.add("texteErreur")
  }
});

// vérifier qu'un bouton radio est sélectionne

// définition des variables pour chaque box radio
var locationValue1 = false;
var locationValue2 = false;
var locationValue3 = false;
var locationValue4 = false;
var locationValue5 = false;
var locationValue6 = false;

document
  .getElementById("radioSelect")
  .addEventListener("input", function() {
    // vérifier un par un si les boutons sont sélectionnés
    if (document.getElementById('location1').checked) {
      locationValue1 = true;
    }  
    if (document.getElementById('location2').checked) {
      locationValue2 = true;
    }  
    if (document.getElementById('location3').checked) {
      locationValue3 = true;
    }      
    if (document.getElementById('location4').checked) {
      locationValue4 = true;
    }  
    if (document.getElementById('location5').checked) {
      locationValue5 = true;
    }  
    if (document.getElementById('location6').checked) {
      locationValue6 = true;
    }
    // si un bouton est sélectionné, on considère cette partie comme valide
    if (locationValue1 || locationValue2 || locationValue3 || locationValue4 || locationValue5 || locationValue6) {
      locationValide = true;
      console.log("Location Sélectionnée")
      locationError.innerHTML = "";
      locationError.classList.remove("texteErreur")
    } else {
      locationValide = false;
      console.log("Pas de location selectionnée")
      locationError.innerHTML = "<p>Veuillez choisir un lieu</p>";
      locationError.classList.add("texteErreur")
    }
});


// validation des conditions d'utilisation
const checkbox1Value = document.getElementById("checkbox1")
checkbox1Value.addEventListener("change", function() {
    if (document.getElementById('checkbox1').checked) {
      checkbox1Valide = true;
      checkbox1Error.innerHTML = "";
      checkbox1Error.classList.remove("texteErreur")
      console.log("Condition d'utilisation validées")
      checkbox1Value.classList.remove("redborder");
    } else {
      checkbox1Valide = false;
      checkbox1Error.innerHTML = "<p>Veuillez accepter les conditions</p>";
      checkbox1Error.classList.add("texteErreur")
      checkbox1Value.classList.add("redborder");
      console.log("Merci de valider les conditions d'utilisation")
    }
});

// fonction de vérification des champs vides au clic 
function checkEmpty () {
    if (firstValide == false) {
      firstError.innerHTML = "<p>Veuillez entrer deux caractères ou plus pour le champ du prénom</p>";
      firstError.classList.add("texteErreur")
      console.log("Prenom non valide");
      firstValue.classList.add("redborder");
    }
    if (lastValide == false) {
      lastValue.classList.add("redborder");
      lastError.innerHTML = "<p>Veuillez entrer deux caractères ou plus pour le champ du nom</p>";
      lastError.classList.add("texteErreur")
      console.log("Nom non valide");
    }
    if (emailValide == false) {
      emailValue.classList.add("redborder");
      emailError.innerHTML = "<p>Veuillez entrer un email valide</p>";
      emailError.classList.add("texteErreur")
      console.log("Email non valide");
    }
    if (quantityValide == false) {
      quantityValue.classList.add("redborder");
      console.log("Nombre de concours non Valide");
      quantityError.innerHTML = "<p>Veuillez remplir ce champ avec un nombre entre 0 et 99</p>";
      quantityError.classList.add("texteErreur")
    }
    if (locationValide == false) {
      console.log("Pas de location selectionnée")
      locationError.innerHTML = "<p>Veuillez choisir un lieu</p>";
      locationError.classList.add("texteErreur")
    }
    if (checkbox1Valide == false) {
      checkbox1Error.innerHTML = "<p>Veuillez accepter les conditions</p>";
      checkbox1Error.classList.add("texteErreur")
      checkbox1Value.classList.add("redborder");
      console.log("Merci de valider les conditions d'utilisation")
    }
  };


// vérification de la validité du formulaire au clic sur le bouton
let formulaireValide = false;
const boutonSoumettre = document.getElementById('formsend');
boutonSoumettre.addEventListener("click", function(event) {
    checkEmpty ();
    event.preventDefault();  
    if (firstValide && lastValide && emailValide && quantityValide && locationValide && checkbox1Valide) {
      formulaireValide = true;
      console.log("formulaire validé:", formulaireValide);
      submitError.innerHTML = "";
      submitError.classList.remove("texteErreur--centered")
      closeModal();
      launchthankYou();
    } else {
      formulaireValide = false;
      console.log("formulaire validé:", formulaireValide);
      submitError.innerHTML = "<p>Veuillez compléter tous les champs requis pour valider le formulaire</p>";
      submitError.classList.add("texteErreur--centered")
    }
}
)

// display Thank you page
const thankYou = document.getElementById("thankYou")
function launchthankYou() {
  thankYou.style.display = "block";
}

// close Thank you page
const thankYouCloseBtn = document.getElementById("thankYouCloseBtn")
const thankYouCloseCross = document.getElementById("thankYouCloseCross")

function thankYouClose() {
  thankYou.style.display = "none";
}
thankYouCloseBtn.addEventListener("click", thankYouClose);
thankYouCloseCross.addEventListener("click", thankYouClose);