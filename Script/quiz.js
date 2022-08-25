const quizForm=document.querySelector("#quiz-form")
const submitBtn=document.querySelector("#submit-btn")
const outputEl=document.querySelector("#displayOutput")


const correctAnswer=["70cm","Equilateral","10cm","4.5cm","16cm","1.5cm"]
submitBtn.addEventListener("click",function calculateScore(e){
e.preventDefault();
let score=0;
let index=0;
const formresults=new FormData(quizForm);
for(let value of formresults.values()){
    if(value===correctAnswer[index]){
         score=score+1;
    }
    index=index+1;
}

if(score>0){
    outputEl.innerText=`your score is ${score} out of 6`
}
else{
    outputEl.innerText=`please select the answer first`
}


})