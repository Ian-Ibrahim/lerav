// loader
myVar = setTimeout(showPage, 2500);

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myBody").style.display = "block";
}
// testimonial carousel
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: false,
    navigation: false,
    slideSpeed: 100,
    autoPlay: true
  });
});
// products carousel
$(document).ready(function () {
  $("#product-carousel").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    navigation: false,
    slideSpeed: 100,
    autoPlay: true
  });
});
// for telephone inputs
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // any initialisation options go here
  hiddenInput: "full_phone",
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
  initialCountry: "ke",
});
// prevent entry of letters to phone number
document.querySelector("#phone").addEventListener("keypress", function (e) {
  if (
    e.key.length === 1 && e.key !== '.' && isNaN(e.key) && !e.ctrlKey ||
    e.key === '.' && e.target.value.toString().indexOf('.') > -1
  ) {
    e.preventDefault();
  }
});