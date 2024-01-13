var display = document.getElementById("screen");


function numRemove(){

   display.value = "";
  
}

function numPer(){
   value = "%"
   display.value += value;  
}

function numDivide(){
   value = "/"
   display.value += value;  
}

function num7(){
   value = "7"
   display.value += value;  
}

function num8(){
   value = "8"
   display.value += value;  
}


function num9(){
   value = "9"
   display.value += value;  
}


function numMul(){
   value = "*"
   display.value += value; 
}

function num4(){
   value = "4"
   display.value += value; 
}

function num5(){
   value = "5"
   display.value += value; 
}

function num6(){
   value = "6"
   display.value += value; 
}

function numMinus(){
   value = "-"
   display.value += value; 
}

function num1(){

   value = "1"
   display.value += value; 
}

function num2(){
   value = "2"
   display.value += value; 
}

function num3(){
   value = "3"
   display.value += value; 
}

function numAdd(){
   value = "+"
   display.value += value; 
}

function num0(){
   value = "0"
   display.value += value; 
}

function numPoint(){
   value = "."
   display.value += value; 
}

function calulation(){
  
   display.value = eval(display.value);
   
}