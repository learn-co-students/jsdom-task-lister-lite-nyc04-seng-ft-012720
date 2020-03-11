
document.addEventListener('DOMContentLoaded', function () {
  const todos = document.querySelector("#list")
  form = document.querySelector("#create-task-form")
  
  form.addEventListener('submit', function formSubmitEventHandler(event) {
    event.preventDefault()

    const field = document.querySelector("#new-task-description")
    const input = field.value
    const todoli = document.createElement('li')
    
    todoli.textContent = input

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute("data-description", input)
    deleteButton.textContent = 'X'
    
    todoli.appendChild(deleteButton)
    deleteButton.addEventListener('click', function() {
      deleteButton.parentElement.remove()
    
    })

    todos.appendChild(todoli)

  })

})