# Full-featured eCommerce Shopping Cart


## Objective:
  -    Build a comprehensive eCommerce simulation that includes product listings, a shopping cart, and dynamic price calculations.

## Requirements:
- *Product Listing:* Dynamically load and display product information (images, prices, descriptions) from a data source. 

- *Shopping Cart:* Implement add-to-cart functionality, allowing users to adjust quantities and remove items.

- *State Management:* Use JavaScript to manage cart state and persist data using techniques like `localStorage`

- *Price Calculations:* Dynamically compute totals, taxes, and discounts based on cart contents.

- *Product Filtering/Search:* Add features for filtering products by category or searching by keywords.

- *Responsive UI:* Ensure the interface adapts well to various screen sizes and devices

- *Advanced Concepts:* Incorporate modular JavaScript (using ES6 modules), advanced error handling, and efficient DOM manipulation techniques

## code


```js
// routing 

const routers = {
    'home':{
        content: './home.html',
        title:"Home | Shopify"
    },
    'shop':{
        content: './purchase.html',
        title:"AboutUs | Shopify"
    },
  

}


async function locationhandler (){
    var location = window.location.hash.replace('#','')
    if (location.length==0){
        location='home'
    }
    else if (location == 'cart'){
        return
    }   

    const route = routers[location]  || routers['/']
    const htmlContent = await fetch(route.content).then((response)=> response.text())
    document.getElementById('container-area').innerHTML =htmlContent;
    document.title = route.title
    loadPurchaseArea()


}   



```

```js
function loadPurchaseArea(){
    function loadProducts(data){ } 
    function loadFilters(){}
    function loadCartItems(){}
    function increaseItem(id){}
    function decreaseItem(id){}
    function deleteItem(id){}
    function searchFilter(searchKeyWord){}

}

```






## Preview


https://github.com/user-attachments/assets/9ece1e9a-e4c1-4624-844b-e6e21668d683


<img width="1891" height="977" alt="Image" src="https://github.com/user-attachments/assets/5c6cb37c-60ae-4d2f-b709-8466a07b05df" />

<img width="1894" height="979" alt="Image" src="https://github.com/user-attachments/assets/740111ce-41ef-4c9a-9373-0292a5394cb9" />

<img width="1893" height="971" alt="Image" src="https://github.com/user-attachments/assets/9de1ec8b-2983-4def-a107-f2fdcd8ef3eb" />

<img width="1888" height="980" alt="Image" src="https://github.com/user-attachments/assets/68a0d8a7-1cb6-4095-9044-09b79087b875" />

<img width="1910" height="976" alt="Image" src="https://github.com/user-attachments/assets/b9b0c8c1-f8b2-4869-b40f-2a85dd3a3f82" />