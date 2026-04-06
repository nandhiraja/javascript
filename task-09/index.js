let container  =  document.getElementById('container')

window.addEventListener('scroll',()=>{
    console.log(window.scrollY)
    let canLoad = (window.innerHeight+window.scrollY) >= document.documentElement.scrollHeight
    if(canLoad){
        loadImages(10)
    }
})


function loadImages(max){
    let count = 0;
    while(count <=max){
        
        count++;
    }
}

