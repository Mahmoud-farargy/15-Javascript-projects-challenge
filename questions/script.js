// Two different approaches

// #1 - selecting the all parents then target elements inside
const questions = document.querySelectorAll(".quiz-container");
questions.forEach(quiz => {
    // finding a button for each element
    const btn = quiz.querySelector(".quiz-btn");
    btn.addEventListener("click", function() {
        questions.forEach(el => {
            if(el !== quiz){
                el.classList.remove("show-answer");
            }
        })
        quiz.classList.toggle("show-answer");
    });
});


// #2 - selecting specific buttons then traverse to higher parents in the dom
// const quizBtns = document.querySelectorAll(".quiz-container .quiz-btn");
// quizBtns.forEach(el => {
//     el.addEventListener("click", function() {
//         el.parentElement.parentElement.classList.toggle("show-answer");
//     });
// });
