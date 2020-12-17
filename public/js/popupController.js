/* eslint-disable no-unused-vars */
function openModal(componente) {
  const name = componente.getAttribute('data-name');
  const email = componente.getAttribute('data-email');
  const lattes = componente.getAttribute('data-lattes');
  const linkedin = componente.getAttribute('data-linkedin');

  const nameDiv = document.getElementById('name');
  const emailDiv = document.getElementById('email');
  const lattesDiv = document.getElementById('lattes');
  const linkedinDiv = document.getElementById('link');

  nameDiv.textContent = name;
  emailDiv.textContent = email;
  lattesDiv.textContent = lattes;
  linkedinDiv.textContent = linkedin;

  document.getElementById('popup-1').classList.toggle('active');
  setTimeout(() => { document.addEventListener('click', handleClickOutside, false) }, 200);
}

const handleClickOutside = (event) => {
  let modal = document.getElementById("modal");

  if (!modal.contains(event.target)) {
    document.getElementById('popup-1').classList.toggle('active');
    document.removeEventListener('click', handleClickOutside, false);
  }
}