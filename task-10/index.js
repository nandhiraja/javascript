const Data = {
  "categories": [
    "TV",
    "Fridge",
    "Furniture",
    "Mobile",
    "Monitor",
    "Headphones",
    "Laptop",
    "Accessories"
  ],
  "products": [
    {
      "id": 1,
      "title": "Monitor",
      "category": "Monitor",
      "price": 20000,
      "image": "./images/products/19.png",
      "description": "High-resolution display with vibrant colors and smooth performance."
    },
    {
      "id": 2,
      "title": "LG TV",
      "category": "TV",
      "price": 37000,
      "image": "./images/products/1.png",
      "description": "4K Smart TV with immersive sound and streaming apps."
    },
    {
      "id": 3,
      "title": "Laptop",
      "category": "Laptop",
      "price": 79000,
      "image": "./images/products/7.png",
      "description": "High-performance laptop for work and multitasking."
    },
    {
      "id": 4,
      "title": "Sony Headphones",
      "category": "Headphones",
      "price": 9999,
      "image": "./images/products/11.png",
      "description": "Noise-cancelling headphones with deep bass."
    },
    {
      "id": 5,
      "title": "Smartphone",
      "category": "Mobile",
      "price": 10000,
      "image": "./images/products/14.png",
      "description": "Fast smartphone with powerful battery and camera."
    },
    {
      "id": 6,
      "title": "Keyboard",
      "category": "Accessories",
      "price": 5000,
      "image": "./images/products/17.png",
      "description": "Ergonomic keyboard for comfortable typing."
    },

    {
      "id": 7,
      "title": "Refrigerator",
      "category": "Fridge",
      "price": 45000,
      "image": "./images/products/5.png",
      "description": "Energy-efficient fridge with large storage capacity."
    },
    {
      "id": 8,
      "title": "Sofa Set",
      "category": "Furniture",
      "price": 25000,
      "image": "./images/products/21.png",
      "description": "Comfortable and stylish sofa for living room."
    },
    {
      "id": 9,
      "title": "Gaming Mouse",
      "category": "Accessories",
      "price": 2500,
      "image": "./images/products/23.png",
      "description": "High precision gaming mouse with RGB lighting."
    },
    {
      "id": 10,
      "title": "Office Chair",
      "category": "Furniture",
      "price": 8000,
      "image": "./images/products/24.png",
      "description": "Ergonomic office chair with lumbar support."
    },
    {
      "id": 11,
      "title": "Bluetooth Speaker",
      "category": "Accessories",
      "price": 3500,
      "image": "./images/products/22.png",
      "description": "Portable speaker with powerful sound."
    },
    {
      "id": 12,
      "title": "Curved Monitor",
      "category": "Monitor",
      "price": 30000,
      "image": "./images/products/20.png",
      "description": "Ultra-wide curved display for immersive experience."
    }
  ]
}
function loadPurchaseArea(){
let dataSource = Data
let productArea =  document.querySelector('.products')
let items = {}
function loadProducts(data){
    console.log('Updating UI')
    productArea.innerHTML=''
    data['products'].forEach(item => {
        console.log('loadItems : ',item)
        items[item.id]= item
        
        let card = document.createElement('div')
        card.classList.add('card')
        card.id=item.id
        let content = `
                <img class="card-image" src="${item.image}" alt="card-image">
                <div class="details">
                     <div class="card-title">${item.title}</div>
                     <div class="card-description">${item.description}</div>
                     <div class="price-details">
                            <p class="product-price">Rs ${item.price}</p>

                         <button class="buy" id=item-${item.id}>Add</button>
                     </div>
                </div>
            
            `
        card.innerHTML=content
        productArea.appendChild(card)
    });
}

let cartData = {}

productArea.addEventListener('click' ,e=>{
    let target = e.target
    if(target.classList == 'buy'){
        let id =target.id.replace('item-','')
        if (id in cartData){
            cartData[id].count++
        }
        else{
        cartData[id]={item : items[id],
                    count : 1                   
                    }
            }

        console.log(id)

    }
    // console.log(cartData)
    loadCartItems()

})

let totalPrice  = document.querySelector('.price-amount')

let cartArea = document.querySelector('.cart-items');

function loadCartItems(){
    cartArea.innerHTML=''
    let totalAmount = 0;
    for (const[key, value] of Object.entries(cartData)){

        let cartItem = document.createElement('div')
        let amount  = value.item.price
        totalAmount +=(amount * value.count)

        cartItem.classList.add('cart-item')
        cartItem.id = `cart-${key}`

        content =   `
         <div class="cart-item-image">
                        <img class="item-image" src="${value.item.image}" alt="cart-item-image">
                        </div>
                        <div class="cart-details">
                            <div class="cart-item-title">${value.item.title}</div>
                            <div class="cart-item-price">Rs: ${amount} </div>

                            <div class="cart-price-details">

                                <p class="cart-product-price">Rs ${amount*value.count}</p>
                            
                                <div class='cart-button-area'>
                                <button class="cart-button increment" id=increment-item-${key}>+</button>
                                <div class="item-count">${value.count}</div>
                                <button class="cart-button decrement" id=decrement-item-${key}>-</button>
                                <button class="remove-item" id="removeitem-${key}">Del</button>
                                </div>
                            </div>
                        </div>
                    `

        cartItem.innerHTML= content
        cartArea.appendChild(cartItem)

        console.log('key : ',key, 'value : ',value)
    }
    totalPrice.innerHTML =  `<p>${totalAmount}</p>`
}


cartArea.addEventListener('click', (e) => {
    const target = e.target

    if(target.classList.contains('increment')){
        const id = target.id.replace('increment-item-', '')
       
        increaseItem(id)
    }

     if(target.classList.contains('decrement')){
        const id = target.id.replace('decrement-item-', '')
         decreaseItem(id)
    }

    
    if(target.classList.contains('remove-item')){
        const id = target.id.replace('removeitem-', '')
          deleteItem(id)
    }
})



function increaseItem(id){
     if(id in cartData){  
    
     cartData[id].count++;
     
     loadCartItems()
    }
}



function decreaseItem(id){
    if(id in cartData){
    if(cartData[id].count <=0){
        deleteItem(id)
        return    
    }
    else{
     cartData[id].count--;
     }
     loadCartItems()
    }
}


function deleteItem(id){
    delete cartData[id]
    loadCartItems()
}

let categoryFilter = document.querySelector('.category-filter')

function loadFilters(){
    dataSource.categories.forEach(category=>{
        let filter = document.createElement('div');
        filter.classList.add('filter-btn')
        filter.innerHTML =  `
                              <input type="checkbox" id="${category}">
                             <label for="${category}">${category}</label>
                          
                             `
        categoryFilter.append(filter)
    })
}




let input = document.getElementById('search')
input.addEventListener('input' ,(e)=>{
      searchFilter(input.value.toLowerCase())
    
    console.log(input.value)
})



function searchFilter(searchKeyWord){
    dataSource= Data
    let filteredItems ={"products":[]}
    dataSource.products.forEach(item=>{
        let category =item.category.toLowerCase()
        let title =item.title.toLowerCase()
        let description =item.description.toLowerCase()
        let price = item.price.toString()

        if(category.includes(searchKeyWord) || 
            title.includes(searchKeyWord ||
            price.includes(searchKeyWord) || 
            description.includes(searchKeyWord)
        ) ){

            filteredItems['products'].push(item)

        }
    //    dataSource = filteredItems
       loadProducts(filteredItems) 
    })
    
    console.log(filteredItems)
    

}

loadProducts(dataSource)
loadFilters()

}

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


window.addEventListener('hashchange' , locationhandler)  
locationhandler()