# Infinite Scrolling Content Loader

## Objective:
  -   Create a web page that loads additional content as the user
scrolls toward the bottom

## Requirements:
- Detect when the user is near the bottom of the page using the
scroll event
- Use the Fetch API to load more data asynchronously (simulate with
dummy data or an API) 
- Append new content to the page while ensuring smooth
performance and user experience

## code


```JS

// monitor the scroll event in site
window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    let canLoad = (window.innerHeight+window.scrollY) >= document.documentElement.scrollHeight   //  check scroll reach the bottom or not
    if(canLoad){
        loadImages(10)
    }
})

```
```js

function loadImages(max){
    let count = 0;

    while(count <=max){
        let card = document.createElement('div')    // create a card
        card.classList.add('card')

        let imageNo = Math.floor(Math.random()*19)+1;
        let image = document.createElement('img')     
        image.src=`./images/${imageNo}.png`    // add new random image to container
        card.appendChild(image)
        container.appendChild(card)
        count++;
    }
}

loadImages(7)    // load at initial site load

```





## Preview


https://github.com/user-attachments/assets/bbbcaca7-c7d5-4a88-867f-3938591b4212

<img width="1916" height="978" alt="Image" src="https://github.com/user-attachments/assets/4b7676b6-bf2f-4106-a724-f8f41358212b" />

<img width="1914" height="977" alt="Image" src="https://github.com/user-attachments/assets/b6e314b5-6df7-4e5c-9356-54cfe0409ebb" />