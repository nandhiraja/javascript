# Single-Page Application (SPA) with Hash-based Routing

## Objective:
  -  Build a basic SPA that navigates between different views
without reloading the page

## Requirements:
- Implement hash-based routing by listening to the 
`window.onhashchange`  event
- Dynamically load different content sections based on the current
URL hash
- Maintain a consistent UI and state across route changes.

## code


```JS
//  use hashchange eventlistener  
window.addEventListener('hashchange' , locationhandler)  

```
 ```js
 const routers = {
    'home':{
        content: './home.html',
        title:"Home | Shopify"
    },
    'about':{
        content: './aboutus.html',
        title:"AboutUs | Shopify"
    },
    '/':{
        content: `./404.html`,
        title:`404 | Shopify`
    }

}
 ```
```js

async function locationhandler (){
    var location = window.location.hash.replace('#','')   // get the Hash endpoint form url Path
    if (location.length==0){
        location='/'     // for 404  
    }

    const route = routers[location]  || routers['/']    // map to routers path or 404
    const htmlContent = await fetch(route.content).then((response)=> response.text())
    document.getElementById('content-area').innerHTML =htmlContent;   // insert the HTML content
    document.title = route.title
}   


```





## Preview

https://github.com/user-attachments/assets/16fc9a73-4074-4f5e-84d7-a1cbfb9e52e2

<img width="1904" height="1079" alt="Image" src="https://github.com/user-attachments/assets/e0b31bc4-5737-4992-b3c8-0d66ca39eda2" />

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/4fd9d7ad-b704-4627-9cc8-7afd475c21ea" />

<img width="1907" height="1076" alt="Image" src="https://github.com/user-attachments/assets/e73d5e84-2fd6-4215-9ba5-a07364ab7549" />


