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


// MANAGEMENT OF ISSUE #1

// adding close button 
const closeButton = document.querySelector(".close");

// create a close function based on previous launchModal function
function closeModal () {
  modalbg.style.display = "none";
}

// trigger close function when clicking on close button
closeButton.addEventListener("click", closeModal);
