# Image Gallery Lightbox
## Objective:
  -  Develop an image gallery where clicking a thumbnail opens a larger version in a modal/lightbox overlay
## Requirements:
- Use event listeners to detect when a thumbnail is clicked
- Dynamically update the modal content with the selected image.
- Toggle CSS classes to show/hide the modal and add transitions for smooth effects.


## code


```js
//  get all component form DOM
let imageContainer = document.getElementById("container")
let cardImage = document.getElementById("card-image")  
let modelArea =document.getElementById("model-area")
let cardClose = document.getElementById("card-close");


//  to listen thumbnails which is clicked
imageContainer.addEventListener("click" ,e=>{
    let clickedClass = e.target.classList
  
    if(clickedClass=='thumb-img'){   // filter only thumbnail clicked
        let id = e.target.id;    // get the id
        cardImage.innerHTML=`<img src="./images/${id}.jpg" alt="${id} image">`   // update it dynamicaly using innerHTML
        modelArea.style.display="block";   // make model card visible

    }
})



cardClose.addEventListener("click",()=>{
    modelArea.style.display="none"   // make model card hide

})
```



## Preview


https://github.com/user-attachments/assets/78eb62ee-9e4d-44a4-8221-a19d389170f7

<img width="1903" height="978" alt="Image" src="https://github.com/user-attachments/assets/b4645cd4-65cb-4e65-ab31-f0fd2942f020" />

<img width="1907" height="974" alt="Image" src="https://github.com/user-attachments/assets/5a9a9fbf-2104-448e-8938-9fd7eeb1584f" />

<img width="1919" height="981" alt="Image" src="https://github.com/user-attachments/assets/de952f52-6b6e-42ec-93c3-712d2ba7f1cc" />