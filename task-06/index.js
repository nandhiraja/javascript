let dragables = document.querySelectorAll('.dragable')


dragables.forEach(list=>{
    list.addEventListener('dragstart' , (e)=>{
        console.log(e.target.innerText,'is dragging')
        list.classList.add('dragging')

    })
    list.addEventListener('dragover',()=>{
        list.classList.remove('dragging')
    })
}) 