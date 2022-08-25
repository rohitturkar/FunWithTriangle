const angle=document.querySelectorAll(".angle");
const btnCheck=document.querySelector("#btn-isTriangle");
const output=document.querySelector("#displayOutput")


btnCheck.addEventListener("click", function checkIsTriangle(){
    output.style.display="none";
   let sum=sumOfAngles(Number(angle[0].value),Number(angle[1].value),Number(angle[2].value));
console.log(sum)
   if(sum===180){
    showOutput("Yes!! this angles forms a triangle 🕺")
   }
   else{
    showOutput("No!! this angles are not forming a triangle")
   }

})

function sumOfAngles(angle1,angle2,angle3){
 return angle1+angle2+angle3;
}

function showOutput(text){
    output.style.display="block"
    output.innerText=text;
}