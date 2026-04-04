let dragables = document.querySelectorAll('.dragable')
let container = document.querySelector('.container')

dragables.forEach(list=>{
    list.addEventListener('dragstart' , (e)=>{
        console.log(e.target.innerText,'is dragging')
        list.classList.add('dragging')
        

    })
    list.addEventListener('dragend',()=>{
        list.classList.remove('dragging')
    })
}) 

container.addEventListener('dragover', (e)=>{
    e.preventDefault()

    let dragableItems =  [...document.querySelectorAll('.dragable:not(.dragging)')]

    dragableItems.reduce((near,child)=>{
        let box = child.getBoundingClientRect()
        console.log(box)
        })

})
