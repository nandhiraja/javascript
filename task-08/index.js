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

async function locationhandler (){
    var location = window.location.hash.replace('#','')
    if (location.length==0){
        location='/'
    }

    const route = routers[location]  || routers['/']
    const htmlContent = await fetch(route.content).then((response)=> response.text())
    document.getElementById('content-area').innerHTML =htmlContent;
    document.title = route.title
}   


window.addEventListener('hashchange' , locationhandler)  
locationhandler()