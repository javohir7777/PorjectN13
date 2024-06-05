document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("nav-brand__iconsId");
  const navMenu = document.getElementById("nav-menuId");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
