const sidenav = document.getElementById("mySidenav");
const burgermenu = document.getElementById("burgermenu");
const burgerikon = document.getElementById("burgerikon");

// Function der åbner nav baren, og tilknyttet til burgermenuen// 
function openNav() {
  //Hvis skærm størrelsen er mindst 1080pxs bliver width på sidebaren 30% ellers blvier den 100%
  if (window.matchMedia("(min-width: 1080px)").matches){
    document.getElementById("mySidenav").style.width = "30%";
    document.getElementById("mySidenav").classList.add("openNav")
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
else {
    document.getElementById("mySidenav").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}
  // Function der lukker navbaren med at skifte width til 0, tilknyttet til X-et //
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("mySidenav").classList.remove("openNav")
  }

  //Hvis man klikker væk fra burgermenu, ikon eller sidenav så lukker den.
  document.onclick = function(event){
    if (sidenav.classList.contains('openNav') && !event.target.isEqualNode(burgermenu) && !event.target.isEqualNode(sidenav) && !sidenav.contains(event.target)&& !event.target.isEqualNode(burgerikon)) {
      closeNav();
    }
  }

  //Med hjælp fra W3Schools, functionen der giver et dropdown menu til atleter, når der bliver trykket på atleter.
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var arrow = document.getElementById("navarrow")
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active-sidebar");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      arrow.innerHTML = "▼"; //Tilføjer en pil op og ned efter om boxen er åben eller lukket.
    } else {
      dropdownContent.style.display = "block";
      arrow.innerHTML = "▲";
     
    }
  });
}