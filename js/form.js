function validateFormName() {
  let x = document.forms["contactForm"]["name"].value;
  if (x == "ironhack" || x == "Ironhack") {
    alert("You cannot be Ironhack, because I am Ironhack");
    return false;
  }
}
