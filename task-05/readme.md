# Dynamic Quiz Application

## Objective:
  -  Build a quiz app that dynamically loads questions and tracks user scores

## Requirements:
- Store quiz questions and options in a JavaScript object or load
them from an external JSON file.
- Use event listeners to capture user selections and move through
quiz questions
- Calculate and display the final score, providing feedback or explanations as needed


## code


```js
// Move to next question
function updateNextQuestion() {
    currentQuestion = questions[currentQuestionIndex];

    question_area.innerText = currentQuestion.question;

    option_1.querySelector('span').innerText = currentQuestion.options[0];
    option_2.querySelector('span').innerText = currentQuestion.options[1];
    option_3.querySelector('span').innerText = currentQuestion.options[2];
    option_4.querySelector('span').innerText = currentQuestion.options[3];

    currentQuestionIndex++;
}
```


```js
// Check selected answer
function checkAnswer(id) {
    if (currentQuestion.answer == id) {
        score++;
        document.getElementById(`opt-${id}`).classList.add('correct');
    } else {
        document.getElementById(`opt-${id}`).classList.add('incorrect');
        document.getElementById(`opt-${currentQuestion.answer}`).classList.add('correct');
    }

    buttons.forEach(button => {
        button.disabled = true;
    });
}
```


```js
// Handle next button
function handleOnClick() {
    if (currentQuestionIndex < questions.length) {
        updateNextQuestion();
    } else {
        showResult();
    }
}
```



```js
// Show final result
function showResult() {
    result.innerHTML = `Your score: ${score} / ${questions.length}`;
}
```






## Preview
<img width="1704" height="961" alt="Image" src="https://github.com/user-attachments/assets/49aa9a25-1af4-4693-b287-c07cb1b66992" />

<img width="1652" height="909" alt="Image" src="https://github.com/user-attachments/assets/f197cacc-8d98-4a12-bb0c-5d5201210cef" />

<img width="1460" height="907" alt="Image" src="https://github.com/user-attachments/assets/5d40ccbb-6f10-492d-b907-cefd23239047" />

<img width="1436" height="964" alt="Image" src="https://github.com/user-attachments/assets/ed5eee9f-20b1-4c86-9052-5731201801c7" />