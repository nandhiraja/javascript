
var taskList = JSON.parse(localStorage.getItem('task')) || {};
// Load the old task at initial loading
updateList() 




let addBtn = document.getElementById("add-task");
// Monitor the Add button click event

addBtn.addEventListener("click",(e)=>{
    let task=document.getElementById("input").value;
    let key = Date.now();
    console.log(task)
    taskList[key] =task
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
        let name = taskList[task]
        console.log(task ,' : ', name  );

         let card = document.createElement("div")
         card.classList.add("card");

         let innerText =    `
         <input type="checkbox" class="status" />
         <span class="task-name">${name}</span>

          <button class="del-btn" id="${task}">Delete</button>`

          card.innerHTML =innerText;
         container.appendChild(card);
    }
}