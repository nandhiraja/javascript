let quizArea =  document.getElementById("quiz-area")
let question = document.getElementById('question')

let buttons = document.querySelectorAll('input')



quizArea.addEventListener('click', e=>{
    let id = e.target.id
    console.log(id ,e)
    if(['1','2','3','4'].includes(id)){
        console.log("passing..")
        checkAnswer(id)
    }

})


