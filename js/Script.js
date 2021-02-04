//Search bar js
function opensrch(){
    console.log("Open Search")
    document.getElementById("Ovelay").style.display = "block";
    document.getElementById("searchbox").style.display ="none";
    document.getElementById("divider").style.display ="none"; 
   }
   
function closeSearch(){
    console.log("Close Search")
    document.getElementById("Ovelay").style.display = "none";
    document.getElementById("searchbox").style.display ="block";
    document.getElementById("divider").style.display ="block"; 
}


