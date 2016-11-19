var link = document.querySelector(".write");
var open = document.querySelector(".modal-content");
var close = open.querySelector(".close");
var form = open.querySelector("form");
var login = open.querySelector("[name=login]");
var email = open.querySelector("[name=email]");
var letter = open.querySelector("[name=letter]");
var storage = localStorage.getItem("login");
var storage1 = localStorage.getItem("email");
      
     
link.addEventListener("click", function(event) {
  event.preventDefault();
  open.classList.add("modal-content-show");
  if (storage && storage1) {
    login.value = storage 
    email.value = storage1
    letter.focus();
    } else {
      login.focus();
    }
  });

close.addEventListener("click", function(event) {
  event.preventDefault();
  open.classList.remove("modal-content-show");
});
        
form.addEventListener("submit", function(event){
  if (!login.value || !email.value || !letter.value){
    event.preventDefault();
    login.classList.add("error");
    email.classList.add("error");
    letter.classList.add("letter-error");
  } else{
    localStorage.setItem("login", login.value);
    localStorage.setItem("email", email.value);            
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (open.classList.contains("modal-content-show")) {
      open.classList.remove("modal-content-show");
    }
  }
});
        
      