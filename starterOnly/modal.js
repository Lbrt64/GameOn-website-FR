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

var firstValide = null;
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
    if (value.match(/^[A-Za-z-éèêàâäiîçô]{2,}$/)) {
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

var lastValide = null;
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
    if (value.match(/^[A-Za-z-éèêàâäiîçô]{2,}/)) {
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

var emailValide = null;
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

var quantityValide = null;
var quantityInput = document.getElementById("quantity")
var quantityError = document.getElementById("quantityError");
quantityError.style.display = "none";

// QUANTITY ERRORS (Issue #3)

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

// QUANTITY VALUES CHECK

function checkquantityEmpty() {
  if (quantityInput.value.length == 0) { 
    quantityInvalid() 
  }
}

function checkquantityValue() {
  quantityInput.addEventListener("input", function(e) {
    var value = e.target.value;
    if (value.match(/(^\d{1,10}$)/g)) {
      quantityValid()
    } else {
      quantityInvalid();
    }
  });
}

// QUANTITY VALIDATION 

function checkquantityValidation() {
  checkquantityEmpty();
  checkquantityValue();
};

// 2.5 VERIFY LOCATION OF TOURNAMENT WANTED BY USER (COMPLIANCE + NOT EMPTY)

// VARIABLES

var locationValide = null;
var locationInput = document.getElementById("location")
var locationError = document.getElementById("locationError");
locationError.style.display = "none";

// LOCATION ERRORS (Issue #3)

function locationValid() {
  locationValide = true;
  locationError.style.display = "none";
  console.log("location valid");
}

function locationInvalid() {
  locationValide = false;
  locationError.style.display = "block";
  console.log("location not valid");
}

// LOCATION VALUES CHECK

function checklocationEmpty() {
  if (document.forms["reserve"].location.value.length  == 0) { 
    locationInvalid() 
  } else {
    locationValid();
  }
}

function checklocationValue() {
  console.log(document.forms["reserve"].location.value);
}

// LOCATION VALIDATION 

function checklocationValidation() {
  checklocationEmpty();
  checklocationValue();
};

// 2.6 VERIFY IF CHECKBOX1 FOR TERMS AND CONDITIONS IS CHECKED (COMPLIANCE + NOT EMPTY)

// VARIABLES

var checkbox1Valide = null;
var checkbox1Input = document.getElementById("checkbox1")
var checkbox1Error = document.getElementById("checkbox1Error");
checkbox1Error.style.display = "none";

// CHECKBOX1 ERRORS (Issue #3)

function checkbox1Valid() {
  checkbox1Valide = true;
  checkbox1Error.style.display = "none";
  checkbox1Input.classList.remove("redborder");
  console.log("checkbox1 valid");
}

function checkbox1Invalid() {
  checkbox1Valide = false;
  checkbox1Error.style.display = "block";
  checkbox1Input.classList.add("redborder");
  console.log("checkbox1 not valid");
}

// CHECKBOX1 VALUES CHECK

function checkcheckbox1Empty() {
  if (checkbox1Input.checked) { 
    checkbox1Valid();
  } else {
    checkbox1Invalid();
  }
}

function checkcheckbox1Value() {
  console.log(checkbox1Input.checked);
}

// CHECKBOX1 VALIDATION 

function checkcheckbox1Validation() {
  checkcheckbox1Empty();
  checkcheckbox1Value();
};

// 2.7 VERIFY IF ALL CONDITIONS ARE MET AT FORM SUBMISSION (COMPLIANCE + NOT EMPTY)

// VARIABLES

var formValide = null;
var formError = document.getElementById("formError");
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", function(e) {
 e.preventDefault();
 console.log("form default prevented")
})

formError.style.display = "none";

// FORM ERRORS (Issue #3)

function formValid() {
  formValide = true;
  formError.style.display = "none";
  console.log("form valid");
  closeModal1();
  launchthankYou();
}

function formInvalid() {
  formValide = false;
  formError.style.display = "block";
  console.log("form not valid");
}

// FORM VALUES CHECK

function checkformCompletion() {
  checkfirstValidation();
  checklastValidation();
  checkemailValidation();
  checkquantityValidation();
  checklocationValidation();
  checkcheckbox1Validation();
};

function formvalueCheck() {
  if (firstValide && lastValide && emailValide && quantityValide && locationValide && checkbox1Valide) {
    formValid();
  } else {
    formInvalid();
  }
}

// FORM VALIDATION
function checkformValidation() {
  checkformCompletion();
  formvalueCheck();
}



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