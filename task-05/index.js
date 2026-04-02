let quizArea =  document.getElementById("quiz-area")
let question_area = document.getElementById('question')
let nextButton = document.getElementById("next-btn")

let buttons = document.querySelectorAll('input')
let option_1 = document.getElementById('opt-1')
let option_2 = document.getElementById('opt-2')
let option_3 = document.getElementById('opt-3')
let option_4 = document.getElementById('opt-4')

let option = document.getElementById("option")
let result = document.getElementById("result")


let currentQuestion = null
let currentQuestionIndex = 0
let score =0
let questions = [
    {
        question: 'Which company created the iPhone?',
        options: ['Samsung', 'Apple', 'Google', 'Microsoft'],
        answer: '2'
    },
    {
        question: 'Which company owns Android?',
        options: ['Apple', 'Meta', 'Google', 'Amazon'],
        answer: '3'
    },
    {
        question: 'What does CPU stand for?',
        options: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Control Processing Utility'],
        answer: '2'
    },
    {
        question: 'Which device is mainly used to connect a computer to the internet wirelessly?',
        options: ['Router', 'Monitor', 'Printer', 'Keyboard'],
        answer: '1'
    },
    {
        question: 'Which company created Windows operating system?',
        options: ['Google', 'IBM', 'Microsoft', 'Intel'],
        answer: '3'
    },
    {
        question: 'What does RAM stand for?',
        options: ['Random Access Memory', 'Read Access Memory', 'Rapid Active Memory', 'Run Access Module'],
        answer: '1'
    }
];
quizArea.addEventListener('click', e=>{
   
    let id = e.target.id
    
    console.log(e.target.closest ,e.target.id)
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
        score++
    }
    else{
        console.log("not correct")
        document.getElementById(`opt-${currentQuestion.answer}`).classList.add('correct')
        document.getElementById(`opt-${id}`).classList.add('incorrect')

    }
    console.log(buttons)
    buttons.forEach(button =>{
        button.disabled=true
    })
}


function handleOnClick(){
       if (currentQuestionIndex< questions.length){
       updateNextQuestion()
       }
       else{
        if(nextButton.innerText=='Play Again'){
            currentQuestionIndex=0;
            result.style.display = 'none'
            option.style.display ='flex'
            updateNextQuestion()

        }
        else{
        showResult()
        nextButton.innerText='Play Again'
       }
       }
}

function updateNextQuestion() {
    currentQuestion = questions[currentQuestionIndex];

    question_area.innerText = currentQuestion.question;

    option_1.querySelector('span').innerText = currentQuestion.options[0];
    option_2.querySelector('span').innerText = currentQuestion.options[1];
    option_3.querySelector('span').innerText = currentQuestion.options[2];
    option_4.querySelector('span').innerText = currentQuestion.options[3];

    buttons.forEach(button => {
        button.disabled = false;
        button.checked = false;
    });

    option_1.classList.remove('correct', 'incorrect');
    option_2.classList.remove('correct', 'incorrect');
    option_3.classList.remove('correct', 'incorrect');
    option_4.classList.remove('correct', 'incorrect');

    currentQuestionIndex++;
}

function showResult(){
    
    question_area.innerText = 'Result:';
    option.style.display='none';
    feedback = ""
    if (score === currentQuestionIndex) {
        feedback = "Perfect score!  You answered every question correctly.";
    }
    else if (score >= Math.ceil((currentQuestionIndex) * 0.75)) {
        feedback = "Excellent work! You got most of the answers right.";
    }
    else if (score >= Math.ceil((currentQuestionIndex) * 0.5)) {
        feedback = "Nice job! You have a good understanding, just a little more practice.";
    }
    else if (score > 0) {
        feedback = "Good effort! You got a few correct—keep practicing and you'll improve quickly.";
    }
    else {
        feedback = "Don't worry! Everyone starts somewhere. Try again and see how much you improve.";
    }

    result.innerHTML = `<h2>Your score: ${score} / ${currentQuestionIndex}</h2>
                        <h3 id ="feedback-title">Feedback : </h3>
                        <h4 id='feedback'>${feedback}<h4>`
   result.style.display='block'
    
}

updateNextQuestion()
