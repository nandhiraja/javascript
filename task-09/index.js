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
        let card = document.createElement('div')
        card.classList.add('card')

        let imageNo = Math.floor(Math.random()*19)+1;
        let image = document.createElement('img')
        image.src=`./images/${imageNo}.png`
        card.appendChild(image)
        container.appendChild(card)
        count++;
    }
}

loadImages(7)

