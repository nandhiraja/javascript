
var taskList = JSON.parse(localStorage.getItem('task')) || {};
// Load the old task at initial loading
updateList() 




let addBtn = document.getElementById("add-task");
// Monitor the Add button click event

addBtn.addEventListener("click",(e)=>{
    let task=document.getElementById("input").value;
    let key = Date.now();
    console.log(task)
    taskList[key] ={'status':0 ,"taskName":task}
    localStorage.setItem('task',JSON.stringify(taskList))
    //  clean the input
    document.getElementById("input").value=''

    updateList();

});


// check the event happen in task area
document.getElementById("task-area").addEventListener("click", (e) => {
    console.log(e)
    if (e.target.classList.contains("del-btn")) {
        let id = e.target.id;
        delItems(id)
    }
    else if (e.target.classList.contains("status")){
        let id = e.target.id;
        console.log("identified ,",id)
         markeAsComplete(id);
    }
});


function delItems(id){
    delete taskList[id]
    localStorage.setItem('task',JSON.stringify(taskList))        
    console.log('Going to update',taskList);
    
    updateList()
}

// update list to create the task from local storage

function updateList(){
    console.log(taskList)
    let container = document.getElementById("task-area");
    container.innerHTML=''

    for(let task in taskList){
        let item = taskList[task]
        console.log(task ,' : ', item.taskName);

         let card = document.createElement("div")
         card.classList.add("card");
         var status =`<input type="checkbox" id="${task}" class="status" /> `

         if(item.status==1){
           status= `<input type="checkbox" class="status"  id="${task}" checked/>`

         }
         let innerText = `
         ${status}
         <span class="task-name">${item.taskName}</span>

          <button class="del-btn" id="${task}">Delete</button>`

          card.innerHTML =innerText;
         container.appendChild(card);
    }
}


function markeAsComplete(id){
    if(taskList[id].status==0){
        taskList[id].status=1;
    }
    else{
        taskList[id].status=0;
    }
    
    console.log("taskList is updated")
    localStorage.setItem('task',JSON.stringify(taskList))
    updateList()
}