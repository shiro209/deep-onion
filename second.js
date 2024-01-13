
const header = document.querySelectorAll('.question');

header.forEach(question =>{
 question.addEventListener("click", event =>{
    question.classList.toggle("active");
 });
});