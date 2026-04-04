# Real-time Chat Simulation

## Objective:
  -  Develop a chat interface that simulates real-time messaging without a backend.

## Requirements:
- Create a chat window that displays messages as they are sent 
-Use `setTimeout` or `setInterval`  to simulate incoming messages.
- Handle user input, display timestamps, and update the
conversation dynamically

## code


```JS
sendButton.addEventListener('click',()=>{
    if(userInput.value=='') {   // no input skip that
        return
    }
    console.log(userInput.value)
    let userMessage = document.createElement('div');
    userMessage.classList.add('sender')
    userMessage.classList.add('message')
    userMessage.innerHTML=` ${userInput.value}
                <div class="sender-time timestamp">${currentTime()}</div>`
    chatArea.appendChild(userMessage)
    setTimeout(sendResponse,2000)    // replay after 2 sec
    userInput.value=''
    userInput.focus()
})

```
```js

function sendResponse(){
    
    let sendMessage = document.createElement('div');
    sendMessage.classList.add('receiver')
    sendMessage.classList.add('message')
    sendMessage.innerHTML=` ${respondMessage[messageIndex]}
                <div class="receiver-time timestamp">${currentTime()}</div>`
    chatArea.appendChild(sendMessage)
    messageIndex++;
    
}

```





## Preview



https://github.com/user-attachments/assets/595e4589-d46e-4998-adaf-6aa3048b5a55


<img width="1911" height="978" alt="Image" src="https://github.com/user-attachments/assets/03c6aa0f-cedd-4e80-b031-1b40372a8305" />

<img width="1909" height="973" alt="Image" src="https://github.com/user-attachments/assets/6b75bdd8-7e58-42d0-84d1-53fb49cfc926" />

