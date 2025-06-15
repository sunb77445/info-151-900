// blue bar close button
document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.getElementById("close-bar-btn");
  const blueBar = document.getElementById("blue-bar");

  if (closeBtn && blueBar) {
    closeBtn.addEventListener("click", function () {
      blueBar.style.display = "none";
    });
  }

  // back to top button
  const backToTopBtn = document.querySelector(".back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});