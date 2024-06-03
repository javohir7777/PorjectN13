function myFunction() {
  let x = document.getElementById("nav-menuId");
  console.log(x);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
