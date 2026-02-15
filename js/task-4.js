const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (email.value.trim() && password.value.trim()) {
    console.log({email: email.value.trim(), password:password.value.trim()});
    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
});