// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");

function openModal(imageSrc, text) {
  modal.style.display = "flex";
  modalImg.src = imageSrc;
  modalText.textContent = text;
}

function closeModal() {
  modal.style.display = "none";
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
