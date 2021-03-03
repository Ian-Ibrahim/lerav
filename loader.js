myVar = setTimeout(showPage, 4800);

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myBody").style.display = "block";
}
