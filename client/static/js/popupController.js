/* eslint-disable no-unused-vars */
function openModal(componente) {
  const name = componente.getAttribute('data-name');
  const email = componente.getAttribute('data-email');
  const lattes = componente.getAttribute('data-lattes');
  const linkedin = componente.getAttribute('data-linkedin');
  const website = componente.getAttribute('data-website');
  const photo = componente.getAttribute('data-photo');

  const nameDiv = document.getElementById('name');
  const emailDiv = document.getElementById('email');
  const lattesDiv = document.getElementById('lattes');
  const linkedinDiv = document.getElementById('link');
  const websiteDiv = document.getElementById('website');
  const photoImg = document.getElementById('member-img');

  nameDiv.textContent = name;
  emailDiv.textContent = email;
  lattesDiv.textContent = lattes;
  linkedinDiv.textContent = linkedin;
  websiteDiv.textContent = website;

  emailDiv.href = email;
  lattesDiv.href = lattes;
  linkedinDiv.href = linkedin;
  websiteDiv.href = website;
  
  photoImg.src = photo;

  if(email){
    document.getElementById('email-div').style.display = "flex";
  } else {
    document.getElementById('email-div').style.display = "none";
  }

  if(lattes){
    document.getElementById('lattes-div').style.display = "flex";
  } else {
    document.getElementById('lattes-div').style.display = "none";
  }

  if(linkedin){
    document.getElementById('linkedin-div').style.display = "flex";
  } else {
    document.getElementById('linkedin-div').style.display = "none";
  }

  if(website){
    document.getElementById('website-div').style.display = "flex";
  } else {
    document.getElementById('website-div').style.display = "none";
  }

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