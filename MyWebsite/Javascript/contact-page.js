let nameError = document.querySelector('#Name-Error');
let emailError = document.querySelector('#Email-Error');
let subjectError = document.querySelector('#Subject-Error');
let messageError = document.querySelector('#Message-Error');
let submitError = document.querySelector('#Submit-Error');

function validateName() {

  let name = document.getElementById('Full-Name').value;

  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }

  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {

  let email = document.getElementById('Email').value;

  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if(!(email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))){
    emailError.innerHTML = 'Invalid Email';
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateSubject() {

  let subject = document.getElementById('Subject').value;
  const required = 3;
  let remainder = required - subject.length;

  if(remainder > 0) {
    subjectError.innerHTML = remainder + ' more characters required';
    return false;
  }

  subjectError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {

  let message = document.getElementById('Message').value;
  const required = 15;
  let remainder = required - message.length;

  if(remainder > 0) {
    messageError.innerHTML = remainder + ' more characters required';
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validate () {

  submitError.style.display = 'block';
  submitError.style.color = 'rgb(255, 81, 81)';

  if(!validateName() && !validateEmail() && !validateSubject() && !validateMessage()) {
    submitError.innerHTML = 'Please input details';
    setTimeout(function(){
      submitError.style.display = 'none';}, 3000)
    return false;
  }

  if(!validateName()) {
    submitError.innerHTML = 'Please write in a valid name';
    setTimeout(function(){
      submitError.style.display = 'none';}, 3000)
    return false;
  }

  if(!validateEmail()) {
    submitError.innerHTML = 'Please write in a valid email';
    setTimeout(function(){
      submitError.style.display = 'none';}, 3000)
    return false;
  }


  if(!validateSubject()) {
    submitError.innerHTML = 'Please write in a valid subject';
    setTimeout(function(){
      submitError.style.display = 'none';}, 3000)
    return false;
  }


  if(!validateMessage()) {
    submitError.innerHTML = 'Please write in a valid message';
    setTimeout(function(){
      submitError.style.display = 'none';}, 3000)
    return false;
  }

  submitError.innerHTML = 'Thank You!';
  submitError.style.color = '#47AB3C';
  setTimeout(function(){
    submitError.style.display = 'none';}, 3000);
  return true;
}