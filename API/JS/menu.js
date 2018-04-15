
var x = document.getElementById("MenuTrigger");
var b= document.getElementById("TopNavMenu");  
var c=document.getElementById("MovieSearchId");  
var d=document.getElementById("Logo");  

x.addEventListener("click",function(){
    
    if(document.getElementById("Hamberg")){
    x.innerHTML='<img src="../API/responsive-assets/close.png" alt="" id="Close">';
     b.className += " responsive";
      c.className +=  " responsive";
        d.className +=  " responsive";
        
    } else if (document.getElementById("Close")){
         x.innerHTML='<img src="../API/responsive-assets/hamburger.png" alt="" id="Hamberg">';
         b.className = "NavMenu";
         c.className  = "movieSearch";
        d.className ="LogoClass";
    }
});