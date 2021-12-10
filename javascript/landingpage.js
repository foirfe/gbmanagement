const annereischmann = document.getElementById("annereischmann");
const danielbaekkegard = document.getElementById("danielbaekkegard");
const florianangert = document.getElementById("florianangert");
const kristianhoegenhaug = document.getElementById("kristianhoegenhaug");
const header1 = document.getElementById("header1")
const header2 = document.getElementById("header2")
const header3 = document.getElementById("header3")
const header4 = document.getElementById("header4")

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

annereischmann.addEventListener("click", function()
{
    if (window.matchMedia("(min-width: 930px)").matches){
        document.location.href = "annereischmann.html"
    }})

danielbaekkegard.addEventListener("mouseover", function(){
        if (window.matchMedia("(min-width: 930px)").matches){
            danielbaekkegard.style.cursor = "pointer";
            header2.style.display = "block";
        }
    }
    )
    
danielbaekkegard.addEventListener("mouseout", function(){
        if (window.matchMedia("(min-width: 930px)").matches){
            danielbaekkegard.style.cursor = "default";
            header2.style.display = "none";
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
            }
        }
        )
        
    florianangert.addEventListener("mouseout", function(){
            if (window.matchMedia("(min-width: 930px)").matches){
                florianangert.style.cursor = "default";
                header3.style.display = "none";
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
                }
            }
            )
            
        kristianhoegenhaug.addEventListener("mouseout", function(){
                if (window.matchMedia("(min-width: 930px)").matches){
                    kristianhoegenhaug.style.cursor = "default";
                    header4.style.display = "none";
                }
            }
            )
            
            kristianhoegenhaug.addEventListener("click", function()
            {
                if (window.matchMedia("(min-width: 930px)").matches){
                    document.location.href = "kristianhoegenhaug.html"
                }})