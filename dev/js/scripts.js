/* ------------------------------------------------------
   Blue Status Bar
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
    const blueBar = document.querySelector("#blue-bar");
    const closeBarBtn = document.querySelector("#close-bar-btn");
  
    if (blueBar && closeBarBtn) {
      // Hide if previously closed
      if (localStorage.getItem("bannerClosed") === "true") {
        blueBar.style.display = "none";
      }
  
      // Set click event
      closeBarBtn.addEventListener("click", () => {
        blueBar.style.display = "none";
        localStorage.setItem("bannerClosed", "true");
      });
    }
  
    /* ------------------------------------------------------
       Takeover Burger Menu
    ------------------------------------------------------ */
    const burgerBtn = document.querySelector("#burger-btn");
    const mainNav = document.querySelector("#main-nav");
    const closeTakeoverBtn = document.querySelector("#close-takeover-btn");
  
    if (burgerBtn && mainNav && closeTakeoverBtn) {
      burgerBtn.addEventListener("click", () => {
        mainNav.style.display = "flex";
      });
  
      closeTakeoverBtn.addEventListener("click", () => {
        mainNav.style.display = "none";
      });
    }
  });