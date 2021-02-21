const sendBut = document.querySelector('#send-form');
const form = document.querySelector('#form');
const invalidEmail = document.querySelector('#invalid-email');
const invalidName = document.querySelector('#invalid-name');
const invalidPeriod = document.querySelector('#invalid-period');
const invalidText = document.querySelector('#invalid-text');
const emailInput = document.querySelector('#email-input');
const nameInput = document.querySelector('#name-input');
const periodInput = document.querySelector('#period-input');
const textInput = document.querySelector('#text-input');
const inputList = [[nameInput, invalidName], [emailInput, invalidEmail],
  [periodInput, invalidPeriod], [textInput, invalidText]];

sendBut.addEventListener('click', (e) => {
  let i = 0;
  e.preventDefault();
  inputList.forEach((item) => {
    item[1].style.opacity = 0;
    if (!item[0].value.trim()) {
      i++;
      item[1].style.opacity = 1;
    }
  });
  if (!i) {
    console.log('ola');
    form.submit();
  }
});

function formSubmited() {
  form.reset();
}
