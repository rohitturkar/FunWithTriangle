const inputHeight=document.querySelector("#height")
const inputBase=document.querySelector("#base");
const calculateBtn=document.querySelector("#calculate");
const output=document.querySelector("#displayOutput");

calculateBtn.addEventListener("click", function calculateArea(){
    if(inputHeight.value!=0 && inputBase.value!=0){
      let areaOfTriangle=areaCalculation();
      showOutput(`Area = ${areaOfTriangle} units`)
    }
    else{
       showOutput("Enter the valid height and base");
    }
})


function areaCalculation(){
    let result=0.5*inputHeight.value*inputBase.value;
    return result;
}

function showOutput(text){
    output.innerText=text;
}