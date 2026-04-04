let userInput = document.getElementById('user-input');
let sendButton =  document.getElementById("send-btn");

let chatArea = document.getElementById('chat-area');


sendButton.addEventListener('click',()=>{
    console.log(userInput.value)
    let userMessage = document.createElement('div');
    userMessage.classList.add('sender')
    userMessage.classList.add('message')
    userMessage.innerHTML=` ${userInput.value}
                <div class="sender-time timestamp">${currentTime()}</div>`
    chatArea.appendChild(userMessage)
})

function currentTime(){
    let timeNow = new Date();
    let time = timeNow.toLocaleDateString('en-US',{
        hour:'numeric',
        minute:'2-digit',
        hour12:true
    }).split(' ')
    console.log('time : ',time)
    return time[1]+" "+time[2]

}