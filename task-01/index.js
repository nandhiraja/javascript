
let task_list = JSON.parse(localStorage.getItem('task'));
// Load the old task at initial loading
update_list()   


let add_btn = document.getElementById("add-task");
// Monitor the Add button click event

add_btn.addEventListener("click",(e)=>{
    let task=document.getElementById("input").value;
    let key = Date.now();
    console.log(task)
    task_list[key] =task
    localStorage.setItem('task',JSON.stringify(task_list))
    let container = document.getElementById("task-area");

    let card = document.createElement("div")
    card.classList.add("card");
    card.id=key

    let innertext =    `
    <input type="checkbox" class="status" />
    <span class="task-name">${task}</span>
                    
     <button class="del-btn">Delete</button>`

     card.innerHTML =innertext;
    container.appendChild(card);

});

// update list to create the task from local storage

function update_list(){
    for(let task in task_list){
        let name = task_list[task]
        console.log(task ,' : ', name  );
         let card = document.createElement("div")
         card.classList.add("card");
         card.id=task

         let innertext =    `
         <input type="checkbox" class="status" />
         <span class="task-name">${name}</span>

          <button class="del-btn">Delete</button>`

          card.innerHTML =innertext;
         container.appendChild(card);
    }
}

