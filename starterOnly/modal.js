




// MANAGEMENT OF ISSUE #1




// MANAGEMENT OF ISSUE #2

// vérifier qu'un bouton radio est sélectionne

// définition des variables pour chaque box radio
var locationValue1 = false;
var locationValue2 = false;
var locationValue3 = false;
var locationValue4 = false;
var locationValue5 = false;
var locationValue6 = false;

document // document.forms["reserve"].location.value  -- syntaxe pour récuper dans formulaire valeur cochée
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
      console.log("email non valide");
    }
    if (quantityValide == false) // parseInt("12").toString() == "12" exercice, appliquer à l'input, parseFloat pour décimale
    {
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
// fonction de validation des champs -- puis la rappeler au click 
let formulaireValide = false;
const boutonSoumettre = document.getElementById('formsend');
boutonSoumettre.addEventListener("click", function(event) // sur submit du formulaire pour éviter bug entrée
{
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


// REFACTOR 30/08/2022

//------------------- EXISTING CODE -------------------

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event -- replaced by onclick in html 
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


//------------------- MY CODE ------------------- 


// ISSUE 1 - OPEN AND CLOSE MODAL

const modalbg = document.querySelector(".bground");

// 1.1 OPEN MODAL 
function displayModalForm1() {
  modalbg.style.display = "block";
  console.log("Affichage du formulaire");
}

function resetFormInputs() {
  document.forms["reserve"].reset();
  console.log("Réinitialisation des valeurs du formulaire");
}

function resetErrorMessages() {
  firstError.style.display = "none";
  lastError.style.display = "none";
  emailError.style.display = "none";
  quantityError.style.display = "none";
  locationError.style.display = "none";
  checkbox1Error.style.display = "none";
  console.log("Réinitialisation des messages d'erreur du formulaire");
}

function resetErrorBorders () {
  firstInput.classList.remove("redborder");
  lastInput.classList.remove("redborder");
  emailInput.classList.remove("redborder");
  quantityInput.classList.remove("redborder");
  checkbox1Input.classList.remove("redborder");
  console.log("Réinitialisation des bordures rouges en cas d'erreur");
}


function launchModal() {
  displayModalForm1();
  resetFormInputs();
  resetErrorMessages();
  resetErrorBorders();
}


// 1.2 CLOSE MODAL 

const modalClose = document.getElementById("form-close");

function closeModal1 () {
  modalbg.style.display = "none";
}


// ISSUES 2 & 3 - VERIFY VALUES FOR EACH FIELD, DISPLAY ERRORS, VALIDATE FORM

// 2.1 VERIFY USER FIRST NAME (COMPLIANCE + NOT EMPTY)

// VARIABLES

var firstValide = false;
var firstInput = document.getElementById("first")
var firstError = document.getElementById("firstError");
firstError.style.display = "none";

// FIRST NAME ERRORS (Issue #3)

function firstValid() {
  firstValide = true;
  firstError.style.display = "none";
  firstInput.classList.remove("redborder");
  console.log("first name valid");
}

function firstInvalid() {
  firstValide = false;
  firstError.style.display = "block";
  firstInput.classList.add("redborder");
  console.log("first name not valid");
}

// FIRST NAME VALUES CHECK

function checkfirstEmpty() {
  if (firstInput.value.length == 0) { 
    firstInvalid() 
  }
}

function checkfirstValue() {
  firstInput.addEventListener("input", function(e) {
    var value = e.target.value;
    if (value.match(/[A-Za-z]{2,}$/)) {
      firstValid()
    } else {
      firstInvalid();
    }
  });
}

// FIRST NAME VALIDATION 

function checkfirstValidation() {
  checkfirstEmpty();
  checkfirstValue();
};

// 2.2 VERIFY USER LAST NAME (COMPLIANCE + NOT EMPTY)

// VARIABLES

var lastValide = false;
var lastInput = document.getElementById("last")
var lastError = document.getElementById("lastError");
lastError.style.display = "none";

// LAST NAME ERRORS (Issue #3)

function lastValid() {
  lastValide = true;
  lastError.style.display = "none";
  lastInput.classList.remove("redborder");
  console.log("last name valid");
}

function lastInvalid() {
  lastValide = false;
  lastError.style.display = "block";
  lastInput.classList.add("redborder");
  console.log("last name not valid");
}

// LAST NAME VALUES CHECK

function checklastEmpty() {
  if (lastInput.value.length == 0) { 
    lastInvalid() 
  }
}

function checklastValue() {
  lastInput.addEventListener("input", function(e) {
    var value = e.target.value;
    if (value.match(/[A-Za-z]{2,}$/)) {
      lastValid()
    } else {
      lastInvalid();
    }
  });
}

// LAST NAME VALIDATION 

function checklastValidation() {
  checklastEmpty();
  checklastValue();
};


// 2.3 VERIFY USER EMAIL (COMPLIANCE + NOT EMPTY)

// VARIABLES

var emailValide = false;
var emailInput = document.getElementById("email")
var emailError = document.getElementById("emailError");
emailError.style.display = "none";

// EMAIL ERRORS (Issue #3)

function emailValid() {
  emailValide = true;
  emailError.style.display = "none";
  emailInput.classList.remove("redborder");
  console.log("email valid");
}

function emailInvalid() {
  emailValide = false;
  emailError.style.display = "block";
  emailInput.classList.add("redborder");
  console.log("email not valid");
}

// EMAIL VALUES CHECK

function checkemailEmpty() {
  if (emailInput.value.length == 0) { 
    emailInvalid() 
  }
}

function checkemailValue() {
  emailInput.addEventListener("input", function(e) {
    var value = e.target.value;
    if (value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
      emailValid()
    } else {
      emailInvalid();
    }
  });
}

// EMAIL VALIDATION 

function checkemailValidation() {
  checkemailEmpty();
  checkemailValue();
};

// VERIFY BIRTHDATE -- won't do not required in specs 

// 2.4 VERIFY QUANTITY OF TOURNAMENTS COMPLETED BY USER (COMPLIANCE + NOT EMPTY)

// VARIABLES

var quantityValide = false;
var quantityInput = document.getElementById("quantity")
var quantityError = document.getElementById("quantityError");
quantityError.style.display = "none";

// quantity ERRORS (Issue #3)

function quantityValid() {
  quantityValide = true;
  quantityError.style.display = "none";
  quantityInput.classList.remove("redborder");
  console.log("quantity valid");
}

function quantityInvalid() {
  quantityValide = false;
  quantityError.style.display = "block";
  quantityInput.classList.add("redborder");
  console.log("quantity not valid");
}

// quantity VALUES CHECK

function checkquantityEmpty() {
  if (quantityInput.value.length == 0) { 
    quantityInvalid() 
  }
}

function checkquantityValue() {
  quantityInput.addEventListener("input", function(e) {
    var value = e.target.value;
    if (value.match(/^\d+$/)) {
      quantityValid()
    } else {
      quantityInvalid();
    }
  });
}

// quantity VALIDATION 

function checkquantityValidation() {
  checkquantityEmpty();
  checkquantityValue();
};



// 2.5 VERIFY LOCATION OF TOURNAMENT WANTED BY USER (COMPLIANCE + NOT EMPTY)

// 2.6 VERIFY IF CHECKBOX1 FOR TERMS AND CONDITIONS IS CHECKED (COMPLIANCE + NOT EMPTY)

// 2.7 VERIFY IF ALL CONDITIONS ARE MET AT FORM SUBMISSION (COMPLIANCE + NOT EMPTY)















// ISSUE 3 - DISPLAY ERROR MESSAGES FOR INCORRECT VALUES

// 2.1 DISPLAY ERROR MESSAGES FOR FIRST NAME (COMPLIANCE + NOT EMPTY)

// 2.2 DISPLAY ERROR MESSAGES FOR LAST NAME (COMPLIANCE + NOT EMPTY)

// 2.3 DISPLAY ERROR MESSAGES FOR EMAIL (COMPLIANCE + NOT EMPTY)

// DISPLAY ERROR MESSAGES FOR BIRTHDATE -- won't do not required in specs 

// 2.4 DISPLAY ERROR MESSAGES FOR QUANTITY OF TOURNAMENTS COMPLETED BY USER (COMPLIANCE + NOT EMPTY)

// 2.5 DISPLAY ERROR MESSAGES FOR LOCATION OF TOURNAMENT WANTED BY USER (COMPLIANCE + NOT EMPTY)

// 2.6 DISPLAY ERROR MESSAGES FOR FOR TERMS AND CONDITIONS (COMPLIANCE + NOT EMPTY)

// 2.7 DISPLAY ERROR MESSAGES FOR FORM SUBMISSION (COMPLIANCE)



// ISSUE 4 - DISPLAY VALIDATION POPUP

// 4.1 DISPLAY POPUP

// 4.2 CLOSE POPUP 



// ISSUE 5 - TESTING

// 5.1 IMPLEMENT TESTING SCENARIOS FOR FORM

// 5.2 FIX WRONG CODE 

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}