let userInput = document.getElementById('user-input');
let sendButton =  document.getElementById("send-btn");

let chatArea = document.getElementById('chat-area');
let respondMessage = ['Shall we meet tomorrow?', 'Where?' , 'Ok fine share the location.','Timing?' ,'Ok we will meet there Byee']
let messageIndex =0;

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

function sendResponse(){
    
    let sendMessage = document.createElement('div');
    sendMessage.classList.add('receiver')
    sendMessage.classList.add('message')
    sendMessage.innerHTML=` ${respondMessage[messageIndex]}
                <div class="receiver-time timestamp">${currentTime()}</div>`
    chatArea.appendChild(sendMessage)
    messageIndex++;
    
}