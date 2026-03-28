
localStorage.setItem('task',JSON.stringify({"12345":"Learn Java" }))
let task_list = JSON.parse(localStorage.getItem('task'));





let add_btn = document.getElementById("add-task");
add_btn.addEventListener("click",(e)=>{
    let task=document.getElementById("input").value;
    let key = Date.now();
    console.log(task)
    task_list[key] =task
    localStorage.setItem('task',task_list)
    let container = document.getElementById("task-area");

    let card = document.createElement("div")
    card.classList.add("card");
    card.id="key"

    let innertext =    `
    <input type="checkbox" class="status" />
    <span class="task-name">${task}</span>
                    
     <button class="del-btn">Delete</button>`

     card.innerHTML =innertext;
    container.appendChild(card);

});

