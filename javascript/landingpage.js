const annereischmann = document.getElementById("annereischmann");
const firstathlete = document.getElementById("firstathlete");
const header1 = document.getElementById("header1")

annereischmann.addEventListener("mouseover", function(){
    if (window.matchMedia("(min-width: 930px)").matches){
        annereischmann.style.cursor = "pointer";
        header1.style.display = "block";
    }
}
)

annereischmann.addEventListener("mouseout", function(){
    if (window.matchMedia("(min-width: 930px)").matches){
        annereischmann.style.cursor = "default";
        header1.style.display = "none";
    }
}
)