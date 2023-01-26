/* validate form */
const form = document.querySelector('form');

const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');
const nameErrorIcon = document.getElementById('nameErrorIcon');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const emailErrorIcon = document.getElementById('emailErrorIcon');
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const messageTextArea = document.getElementById('message');
const messageError = document.getElementById('messageError');
const messageErrorIcon = document.getElementById('messageErrorIcon');


const errorIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>`

window.addEventListener('load', () => {
  const isValidName = nameInput.value !== '' && nameInput.value.length >= 3;
  nameInput.className = isValidName ? 'valid' : 'invalid';

  const isValidEmail = emailRegExp.test(emailInput.value);
  emailInput.className = isValidEmail ? 'valid' : 'invalid';

  const isValidMessage =
    messageTextArea.value !== '' && messageTextArea.value.length >= 10;
  messageTextArea.className = isValidMessage ? 'valid' : 'invalid';
});

nameInput.addEventListener('input', () => {
  const isValidName = nameInput.value.length >= 3;
  if (isValidName) {
    nameInput.className = 'valid';
    nameError.textContent = '';
    nameErrorIcon.innerHTML = ''
  } else {
    nameInput.className = 'invalid';
    nameError.className = 'error';
    nameError.textContent = 'Please enter your name';
    nameErrorIcon.innerHTML = errorIcon;
  }
});

emailInput.addEventListener('input', () => {
  const isValidEmail =
    emailInput.value.length === 0 || emailRegExp.test(emailInput.value);
  if (isValidEmail) {
    emailInput.className = 'valid';
    emailError.textContent = '';
    emailErrorIcon.innerHTML = ''
  } else {
    emailInput.className = 'invalid';
    emailError.className = 'error';
    emailErrorIcon.innerHTML = errorIcon;
    emailError.textContent = 'Please enter a valid email address';
  }
});

messageTextArea.addEventListener('input', () => {
  const isValidMessage = messageTextArea.value.length >= 10;
  if (isValidMessage) {
    messageTextArea.className = 'valid';
    messageError.textContent = '';
    messageErrorIcon.innerHTML = '';
   
  } else {
    messageTextArea.className = 'invalid';
    messageError.className = 'error';
   messageErrorIcon.innerHTML = errorIcon;
     messageError.textContent = 'Please enter a valid message';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid =
    nameInput.value.length >= 3 &&
    emailRegExp.test(email.value) &&
    messageTextArea.value.length >= 10;
  if (isValid) {
    messageError.className = 'valid';
    messageError.textContent = '';
  } else {
     nameError.textContent = '';
    emailError.textContent = '';
    nameErrorIcon.innerHTML = errorIcon;
emailErrorIcon.innerHTML = errorIcon;
 messageErrorIcon.innerHTML = errorIcon;
 nameInput.className = 'invalid';
    emailInput.className = 'invalid';
    messageTextArea.className = 'invalid';
      messageError.textContent = 'Please fill in all fields before submitting.';
    messageError.className = 'error active';
  }
});
