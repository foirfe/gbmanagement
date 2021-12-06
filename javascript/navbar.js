// Function der åbner nav baren, og tilknyttet til burgermenuen//
function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  // Function der lukker navbaren med at skifte width til 0, tilknyttet til X-et //
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  //Med hjælp fra W3Schools, functionen der giver et dropdown menu til atleter, når sidebaren er active.
  var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active-sidebar");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}