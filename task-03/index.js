
let imageContainer = document.getElementById("container")


imageContainer.addEventListener("click" ,e=>{
    console.log(e);
    let clickedClass = e.target.classList
    console.log(clickedClass);
    if(clickedClass=='thumb-img'){
        console.log(e.target.id)    //  get the clicked image
        
    }
})