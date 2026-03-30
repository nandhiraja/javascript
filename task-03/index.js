
let imageContainer = document.getElementById("container")

let cardImage = document.getElementById("card-image")  
let modelArea =document.getElementById("model-area")
imageContainer.addEventListener("click" ,e=>{
    console.log(e);
    let clickedClass = e.target.classList
    console.log(clickedClass);
    if(clickedClass=='thumb-img'){
        let id = e.target.id;
        console.log(id)    //  get the clicked image
        cardImage.innerHTML=`<img src="./images/${id}.jpg" alt="${id} image">`
        modelArea.style.display="block";

    }
})


