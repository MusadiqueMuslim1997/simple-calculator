
var operator = ["+", "-", "*", "/"];


var display = document.getElementById("screen");
function numRemove(){

   display.value = "";
  
}

function numPer(){
   display.value += "%"; 
}

function numDivide(){
   display.value += "/"; 
}

function num7(){
   display.value += "7"; 
}

function num8(){
   display.value += "8"; 
}


function num9(){
   display.value += "9"; 
}


function numMul(){
   display.value += "*"; 
}

function num4(){
   display.value += "4"; 
}

function num5(){
   display.value += "5"; 
}

function num6(){
   display.value += "6"; 
}

function numMinus(){
   display.value += "-"; 
}

function num1(){
   display.value += "1"; 
}

function num2(){
   display.value += "2"; 
}

function num3(){
   display.value += "3"; 
}

function numAdd(){
   display.value += "+"; 
}

function num0(){
   display.value += "0"; 
}

function numPoint(){
   display.value += "."; 
}

function cal(){
   if(operator === numAdd){
    display.value = display.value + display.value;    
 
   }
}