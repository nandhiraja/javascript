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
    let insertElement = getElemetAfterDragging(e.clientY)
    console.log(insertElement)

   
})

function getElemetAfterDragging(y ){
     let dragableItems =  [...document.querySelectorAll('.dragable:not(.dragging)')]

    return dragableItems.reduce((near,child)=>{
        let box = child.getBoundingClientRect()
        let offset = y-box.top-box.height/2
        if(offset<0 && offset >near.offset){
            return {offset: offset,element:child}
        }
        else{
            return near
        }
        },
    {
        offset:Number.NEGATIVE_INFINITY
    }).element

}
