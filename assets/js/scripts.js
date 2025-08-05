const themeIcon = document.getElementById("theme-icon");
const rootHtml = document.documentElement
const logoImage = document.getElementById("logo");

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  themeIcon.classList.toggle("bi-sun")
  themeIcon.classList.toggle("bi-moon-stars")

  logoImage.src = currentTheme === "dark"
  ? "assets/images/logo_black.png"
  : "assets/images/logo.png";

}

themeIcon.addEventListener("click", changeTheme);
