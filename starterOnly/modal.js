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
      prenomValue.classList.remove("redborder");
      nomValue.classList.remove("redborder");
      emailValue.classList.remove("redborder");
      dateValue.classList.remove("redborder");
      quantityValue.classList.remove("redborder");
      locationValue.classList.remove("redborder");
      birthdateValue.classList.remove("redborder");
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
var prenomValide = false;
var nomValide = false;
var emailValide = false;
var nbconcoursValide = false;
var placeValide = false;
var conditonsValide = true;

// Ajout des div qui affichent les messages d'erreur
var firstError = document.getElementById("firstError");
var lastError = document.getElementById("lastError");
var emailError = document.getElementById("emailError");
var birthdateError = document.getElementById("birthdateError");
var quantityError = document.getElementById("quantityError");
var locationError = document.getElementById("locationError");
var checkbox1Error = document.getElementById("checkbox1Error");


// vérifier la valeur du champ prénom 
const prenomValue = document.getElementById("first")
prenomValue.addEventListener("input", function(e) {
  var value = e.target.value;
  if (value.match(/[A-Za-z]{2,}$/)) {
    prenomValide = true;
    console.log("Prenom valide")
    firstError.innerHTML = "";
    firstError.classList.remove("texteErreur")
    prenomValue.classList.remove("redborder");
  } else {
    prenomValide = false;
    prenomValue.classList.add("redborder");
    firstError.innerHTML = "<p>Veuillez entrer deux caractères ou plus pour le champ du prénom</p>";
    firstError.classList.add("texteErreur")
    console.log("Prenom non valide");
  }
  console.log(prenomValide)
});

// vérifier la valeur du champ nom 
const nomValue = document.getElementById("last")
nomValue.addEventListener("input", function(e) {
  var value = e.target.value;
  if (value.match(/[A-Za-z]{2,}$/)) {
    nomValide = true;
    console.log("Nom Valide")
    lastError.innerHTML = "";
    lastError.classList.remove("texteErreur")
    nomValue.classList.remove("redborder")
  } else {
    nomValide = false;
    nomValue.classList.add("redborder");
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
const nbconcoursValue = document.getElementById("quantity")
nbconcoursValue.addEventListener("input", function(e) {
  var value = e.target.value;
  if (value.match(/^[0-9]$/)) {
    nbconcoursValide = true;
    console.log("Nombre de concours Valide")
    quantityError.innerHTML = "";
    quantityError.classList.remove("texteErreur")
    quantityValue.classList.remove("redborder");
  } else {
    nbconcoursValide = false;
    nbconcoursValue.classList.add("redborder");
    console.log("Nombre de concours non Valide");
    quantityError.innerHTML = "<p>Veuillez remplir ce champ avec un nombre entre 0 et 99</p>";
    quantityError.classList.add("texteErreur")
  }
});

// vérifier qu'un bouton radio est sélectionne

// définition des variables pour chaque box radio
var placeValue1 = false;
var placeValue2 = false;
var placeValue3 = false;
var placeValue4 = false;
var placeValue5 = false;
var placeValue6 = false;

document
  .getElementById("radioSelect")
  .addEventListener("input", function() {
    // vérifier un par un si les boutons sont sélectionnés
    if (document.getElementById('location1').checked) {
      placeValue1 = true;
    }  
    if (document.getElementById('location2').checked) {
      placeValue2 = true;
    }  
    if (document.getElementById('location3').checked) {
      placeValue3 = true;
    }      
    if (document.getElementById('location4').checked) {
      placeValue4 = true;
    }  
    if (document.getElementById('location5').checked) {
      placeValue5 = true;
    }  
    if (document.getElementById('location6').checked) {
      placeValue6 = true;
    }
    // si un bouton est sélectionné, on considère cette partie comme valide
    if (placeValue1 || placeValue2 || placeValue3 || placeValue4 || placeValue5 || placeValue6) {
      placeValide = true;
      console.log("Location Sélectionnée")
      locationError.innerHTML = "";
      locationError.classList.remove("texteErreur")
    } else {
      placeValide = false;
      radioSelect.classList.add("redborder");
      console.log("Pas de location selectionnée")
      locationError.innerHTML = "<p>Veuillez choisir un lieu</p>";
      locationError.classList.add("texteErreur")
    }
});


// validation des conditions d'utilisation
document
  .getElementById("checkbox1")
  .addEventListener("change", function() {
    if (document.getElementById('checkbox1').checked) {
      conditonsValide = true;
      checkbox1Error.innerHTML = "";
      checkbox1Error.classList.remove("texteErreur")
      console.log("Condition d'utilisation validées")
      checkbox1Value.classList.remove("redborder");
    } else {
      conditonsValide = false;
      checkbox1Error.innerHTML = "<p>Veuillez accepter les conditions</p>";
      checkbox1Error.classList.add("texteErreur")
      console.log("Merci de valider les conditions d'utilisation")
    }
});

// vérification de la validité du formulaire au clic sur le bouton
let formulaireValide = false;
const boutonSoumettre = document.getElementById('formsend');
boutonSoumettre.addEventListener("click", function(event) {
    event.preventDefault();   
    if (prenomValide && nomValide && emailValide && nbconcoursValide && placeValide && conditonsValide) {
      formulaireValide = true;
      console.log("formulaire validé:", formulaireValide);
      submitError.innerHTML = "";
      submitError.classList.remove("texteErreur--centered")
    } else {
      formulaireValide = false;
      console.log("formulaire validé:", formulaireValide);
      submitError.innerHTML = "<p>Veuillez compléter tous les champs requis pour valider</p>";
      submitError.classList.add("texteErreur--centered")
    }
}
)