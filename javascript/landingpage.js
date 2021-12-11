//Tilknyttelse til elementer fra documentet
const annereischmann = document.getElementById("annereischmann");
const annereischmannimg = document.getElementById("annereischmannpicture");
const danielbaekkegard = document.getElementById("danielbaekkegard");
const danielbaekkegardimg = document.getElementById("danielbaekkegardpicture")
const florianangert = document.getElementById("florianangert");
const florianangertimg = document.getElementById("florianangertpicture");
const kristianhoegenhaug = document.getElementById("kristianhoegenhaug");
const kristianhoegenhaugimg = document.getElementById("kristianhoegenhaugpicture");
const header1 = document.getElementById("header1")
const header2 = document.getElementById("header2")
const header3 = document.getElementById("header3")
const header4 = document.getElementById("header4")

annereischmann.addEventListener("mouseover", function(){
    if (window.matchMedia("(min-width: 930px)").matches){
        annereischmann.style.cursor = "pointer";
        header1.style.display = "block";
        annereischmannimg.style.transform = "scale(1.1)"; //Zoomer ind på billedet på hover
        annereischmannimg.style.transformOrigin = "50% 50%";
    }
}
)

annereischmann.addEventListener("mouseout", function(){
    if (window.matchMedia("(min-width: 930px)").matches){
        annereischmann.style.cursor = "default";
        header1.style.display = "none";
        annereischmannimg.style.transform = "scale(1)"; //Zoomer den tilbage

    }
}
)

annereischmann.addEventListener("click", function()
{
    if (window.matchMedia("(min-width: 930px)").matches){
        document.location.href = "annereischmann.html"
    }})

danielbaekkegard.addEventListener("mouseover", function(){
        if (window.matchMedia("(min-width: 930px)").matches){
            danielbaekkegard.style.cursor = "pointer";
            header2.style.display = "block";
            danielbaekkegardimg.style.transform = "scale(1.1)";
        danielbaekkegardimg.style.transformOrigin = "50% 50%";
        }
    }
    )
    
danielbaekkegard.addEventListener("mouseout", function(){
        if (window.matchMedia("(min-width: 930px)").matches){
            danielbaekkegard.style.cursor = "default";
            header2.style.display = "none";
            danielbaekkegardimg.style.transform = "scale(1)";
        }
    }
    )
    
 danielbaekkegard.addEventListener("click", function()
    {
        if (window.matchMedia("(min-width: 930px)").matches){
            document.location.href = "danielbaekkegard.html"
        }})
    
    florianangert.addEventListener("mouseover", function(){
            if (window.matchMedia("(min-width: 930px)").matches){
                florianangert.style.cursor = "pointer";
                header3.style.display = "block";
                florianangertimg.style.transform = "scale(1.1)";
                florianangertimg.style.transformOrigin = "50% 50%";
            }
        }
        )
        
    florianangert.addEventListener("mouseout", function(){
            if (window.matchMedia("(min-width: 930px)").matches){
                florianangert.style.cursor = "default";
                header3.style.display = "none";
                florianangertimg.style.transform = "scale(1)";
            }
        }
        )
        
        florianangert.addEventListener("click", function()
        {
            if (window.matchMedia("(min-width: 930px)").matches){
                document.location.href = "florianangert.html"
            }})

            kristianhoegenhaug.addEventListener("mouseover", function(){
                if (window.matchMedia("(min-width: 930px)").matches){
                    kristianhoegenhaug.style.cursor = "pointer";
                    header4.style.display = "block";
                    kristianhoegenhaugimg.style.transform = "scale(1.1)";
                    kristianhoegenhaugimg.style.transformOrigin = "50% 50%";
                }
            }
            )
            
        kristianhoegenhaug.addEventListener("mouseout", function(){
                if (window.matchMedia("(min-width: 930px)").matches){
                    kristianhoegenhaug.style.cursor = "default";
                    header4.style.display = "none";
                    kristianhoegenhaugimg.style.transform = "scale(1)";
                }
            }
            )
            
            kristianhoegenhaug.addEventListener("click", function()
            {
                if (window.matchMedia("(min-width: 930px)").matches){
                    document.location.href = "kristianhoegenhaug.html"
                }})