var sidemenu = document.getElementById("sidemenu");
var hamburger = document.getElementById("hamburger");

function toggleMenu() {
  sidemenu.classList.toggle("active"); // Toggle the active class to show/hide the side menu
}

hamburger.addEventListener("click", toggleMenu);