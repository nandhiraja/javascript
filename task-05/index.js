let quizArea =  document.getElementById("quiz-area")
let question = document.getElementById('question')

let buttons = document.querySelectorAll('input')

let currentQuestion = {
    'question': 'Which is scriping language?',
    'options' : ['HTML' , 'JAVA','GO','Perl'],
    'answer' : '1'
     
}


quizArea.addEventListener('click', e=>{
    let id = e.target.id
    console.log(id ,e)
    if(['1','2','3','4'].includes(id)){
        console.log("passing..")
        checkAnswer(id)
    }

})



function checkAnswer(id){
    console.log("validation")
    if(currentQuestion.answer ==id){
        console.log("clickans is correct")
       document.getElementById(`opt-${id}`).classList.add('correct')
    }
    else{
        console.log("not correct")
        document.getElementById(`opt-${currentQuestion.answer}`).classList.add('correct')
        document.getElementById(`opt-${id}`).classList.add('incorrect')

    }
    console.log(buttons)
}

