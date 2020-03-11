const todos = document.querySelector("#list")
const form = document.querySelector("#create-task-form")
const field = document.querySelector("#new-task-description")
const dropdown = document.querySelector('#dropdown')
const sortButton = document.querySelector('#sortbutton')
  
  form.addEventListener('submit', function formSubmitEventHandler(event) {
    event.preventDefault()
    
    const input = field.value
    const colorChoice = dropdown.value
    const todoli = document.createElement('li')
    
    todoli.textContent = input
    todoli.style.color = colorChoice

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute("data-description", input)
    deleteButton.textContent = 'X'
    
    todoli.appendChild(deleteButton)
    deleteButton.addEventListener('click', function() {
      deleteButton.parentElement.remove()
    
    })

    todos.appendChild(todoli)

  })


// sortButton.addEventListener('click', function sortButtonEventHandler(event){
//   var i, shouldSwitch
//   const list = document.getElementById("id01")
//   var switching = true
//   while (switching) {
//     switching = false
//     const b = list.getElementsByTagName("LI")
//     // Loop through all list-items:
//     for (i = 0; i < (b.length - 1); i++) {
//       // start by saying there should be no switching:
//       shouldSwitch = false;
//       /* check if the next item should
//       switch place with the current item: */
//       if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//         /* if next item is alphabetically
//         lower than current item, mark as a switch
//         and break the loop: */
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /* If a switch has been marked, make the switch
//       and mark the switch as done: */
//       b[i].parentNode.insertBefore(b[i + 1], b[i]);
//       switching = true;
//     }
//   }

// })