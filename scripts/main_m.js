


//function populate(){
//    let button
//    
//    
//    let link = document.createElement("a");
//    link.setAttribute("href", "#" + buttonId);
//}

//animacja wifi
var pause = 1500;
wifiAnimation();
function wifiAnimation(){
    document.getElementById("wifi2").style.display = "none";
    document.getElementById("wifi3").style.display = "none";
    document.getElementById("wifi4").style.display = "none";
    setTimeout('document.getElementById("wifi2").style.display = "block";', pause);
    setTimeout('document.getElementById("wifi3").style.display = "block";', pause*2);
    setTimeout('document.getElementById("wifi4").style.display = "block";', pause*3);
    setTimeout('wifiAnimation();', pause*4);
}



function showHide(elem) {
    var allElements = document.getElementsByClassName("opis");
    var descId = "desc" + elem.getAttribute("id").replace("button", "");      
    var clickedDiv = document.getElementById(descId);  
    
    for(var i = 0; i < allElements.length; i++)
    {
       if(allElements.item(i).getAttribute('id') != descId){
           allElements.item(i).classList.remove("showHide");
       }
    }
   
    if (clickedDiv.className.indexOf("showHide") == -1) {            
    clickedDiv.classList.add("showHide");            
    } else {        
    clickedDiv.classList.remove("showHide");
    }
    
        
}