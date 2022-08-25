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
  // pour vérifier les variables au lancement de la popup
  console.log(prenomValide);
  console.log(nomValide);
  console.log(nbconcoursValide);
  console.log(placeValide);
  console.log(conditonsValide);
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
var conditonsValide = false;


// vérifier la valeur du champ prénom 
const prenomValue = document.getElementById("first")
prenomValue.addEventListener("change", function(e) {
  var value = e.target.value;
  if (value.match(/[A-Za-z]{2,}$/)) {
    prenomValide = true;
    console.log("Prenom valide")
  } else {
    prenomValide = false;
    console.log("Prenom nom valide");
  }
  console.log(prenomValide)
});

// vérifier la valeur du champ nom 
const nomValue = document.getElementById("last")
nomValue.addEventListener("change", function(e) {
  var value = e.target.value;
  if (value.match(/[A-Za-z]{2,}$/)) {
    nomValide = true;
    console.log("Nom Valide")
  } else {
    nomValide = false;
    console.log("Nom non valide");
  }
});

// vérifier l'email
const emailValue = document.getElementById("email")
emailValue.addEventListener("change", function(e) {
  var value = e.target.value;
  if (value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
    emailValide = true;
    console.log("Email Valide")
  } else {
    emailValide = false;
    console.log("Email non valide");
  }
});

// vérifier le nombre de concours
const nbconcoursValue = document.getElementById("quantity")
nbconcoursValue.addEventListener("change", function(e) {
  var value = e.target.value;
  if (value.match(/^[0-9]$/)) {
    nbconcoursValide = true;
    console.log("Nombre de concours Valide")
  } else {
    nbconcoursValide = false;
    console.log("Nombre de concours non Valide");
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
  .addEventListener("change", function() {
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
    } else {
      placeValide = false;
      console.log("Pas de location selectionnée")
    }
});


// validation des conditions d'utilisation
document
  .getElementById("checkbox1")
  .addEventListener("change", function() {
    if (document.getElementById('checkbox1').checked) {
      conditonsValide = true;
      console.log("Condition d'utilisation validées")
    } else {
      conditonsValide = false;
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
    } else {
      formulaireValide = false;
      console.log("formulaire validé:", formulaireValide);
    }
}
)