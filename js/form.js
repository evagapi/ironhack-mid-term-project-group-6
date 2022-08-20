// eslint-disable-next-line no-unused-vars
function validateFormName() {
  let fullName = document.forms["contactForm"]["name"].value;
  if (fullName === "ironhack" || fullName === "Ironhack") {
    alert("You cannot be Ironhack, because I am Ironhack");
    return false;
  }
}
