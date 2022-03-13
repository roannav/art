/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the hamburger icon */
function toggle_responsive_menu() {
  var x = document.getElementById("navbarmenu");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
