myVar = setTimeout(showPage, 2500);

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myBody").style.display = "block";
}
