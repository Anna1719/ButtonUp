const scrollToTopBtn = document.getElementById("scrollToStart");

function toggleScrollButton() {
  if (window.scrollY > window.innerHeight / 3) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", toggleScrollButton);