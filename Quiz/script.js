const correctAns = ["D","B","C","B","D"]

const result = document.querySelector(".result");
const form = document.querySelector(".quiz-form");
const questions = document.querySelectorAll(".question");


form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    scrollTo(0,0);
    let submittedAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]
    let score = 0;

    submittedAns.forEach((answer,index) => {
        if(answer === correctAns[index]){
            score+=1;
            questions[index].classList.add("correct");
        }
        else{
            questions[index].classList.add("wrong");
        }
    })

    result.removeAttribute("hidden");
    result.querySelector("p").textContent = `You scored ${score}/5!`

});