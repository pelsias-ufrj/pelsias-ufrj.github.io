const sendBut = document.querySelector('#send-form');
const invalidEmail = document.querySelector('#invalid-email');
const invalidName = document.querySelector('#invalid-name');
const invalidPeriod = document.querySelector('#invalid-period');
const invalidText = document.querySelector('#invalid-text');
const emailInput = document.querySelector('#email-input');
const nameInput = document.querySelector('#name-input');
const periodInput = document.querySelector('#period-input');
const textInput = document.querySelector('#text-input');
const inputList = [nameInput, textInput, periodInput, textInput];
const invalidDivList = [invalidEmail, invalidName, invalidPeriod, invalidText];

sendBut.addEventListener('click', (e) => {
  e.preventDefault();
  invalidDivList.forEach((item) => {
    item.style.opacity = 0;
  });
  if (!emailInput.value.trim().length) { // zero-length string AFTER a trim
    invalidEmail.style.opacity = 1;
  } else if (!nameInput.value.trim().length) {
    invalidName.style.opacity = 1;
  } else if (!periodInput.value.trim().length) {
    invalidPeriod.style.opacity = 1;
  } else if (!textInput.value.trim().length) {
    invalidText.style.opacity = 1;
  }
});
