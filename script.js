document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navUl = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function() {
      navUl.classList.toggle("show");
  });
});





function openProfileModal() {
  document.getElementById("profileModal").style.display = "flex";
}

function closeProfileModal() {
  document.getElementById("profileModal").style.display = "none";
}


const roles = [
  "a budding physicist",
  "an amateur coder",
  "a football enthusiast",
  "a Nerd",
];
let index = 0;

function changeRole() {
  const dynamicText = document.getElementById("dynamic-text");
  dynamicText.textContent = roles[index];
  index = (index + 1) % roles.length;
}

setInterval(changeRole, 1500);




const images = document.querySelectorAll('.about-pic');
let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImage").src = images[currentIndex].src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function navigateModal(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("modalImage").src = images[currentIndex].src;
}

document.addEventListener("keydown", function(event) {
  if (document.getElementById("imageModal").style.display === "flex") {
    if (event.key === "ArrowRight") {
      navigateModal(1);
    } else if (event.key === "ArrowLeft") {
      navigateModal(-1);
    } else if (event.key === "Escape") {
      closeModal();
    }
  }
});