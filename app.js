
var display = "";
function num7(value){

   display += value;
   document.getElementById("screen").value = display;
   

    
    

}
function numRemove(){

    display = "";
    document.getElementById("screen").value = display;
    
     
     
 
 }

 function cal(){
    if (num7(value) == "+"){
        display = num7 + num7 ;
        document.getElementById("screen").value = display; 
    }
 }
