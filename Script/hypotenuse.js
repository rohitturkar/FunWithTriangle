const firstNumber=document.querySelector("#number-1")
const secondnumber=document.querySelector("#number-2")
const submitBtn=document.querySelector("#check-hyp")
const output=document.querySelector("#displayOutput")

submitBtn.addEventListener("click",function checkHypotenuseValue(){
  if((firstNumber.value>0 && firstNumber.value!="") &&(secondnumber.value>0 && secondnumber.value!="")){
   let C=CalculateHypotenuse();
   showOutput(`C = ${C}`)
  }
  else{
    showOutput("Please Enter the valid values of a and b")
  }
})

function CalculateHypotenuse(){
    let valueOfC= Math.sqrt((firstNumber.value*firstNumber.value)+(secondnumber.value*secondnumber.value));
    return valueOfC;
}

function showOutput(text){
output.style.display="block";
output.innerText=text;
}