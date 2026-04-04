# Drag and Drop List Reordering

## Objective:
  - Implement a list that allows users to reorder items using
drag and drop functionality

## Requirements:
- Leverage the HTML5 Drag and Drop API to manage drag events.
- Update the DOM to reflect the new order of items after a drop.
- Provide visual feedback during drag operations (e.g., highlight
potential drop targets)

## code


```JS
function getElementAfterDragging(y) {
    const items = [...document.querySelectorAll('.draggable:not(.dragging)')];

    return items.reduce((closest, item) => {
        const box = item.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        // Find the nearest element below the mouse
        if (offset < 0 && offset > closest.offset) {
            return { offset, element: item };
        }

        return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

```
```js
const afterElement = getElementAfterDragging(mouseY);

if (afterElement == null) {
    container.appendChild(draggingItem);
} else {
    container.insertBefore(draggingItem, afterElement);
}

```





## Preview


https://github.com/user-attachments/assets/89d1a372-1f3e-4027-acd3-d66054e39366