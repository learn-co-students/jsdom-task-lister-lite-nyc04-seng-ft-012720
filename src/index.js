document.addEventListener("DOMContentLoaded", () => {
const tasksUl = document.querySelector("#tasks")
const createTaskForm = document.querySelector("#create-task-form");

createTaskForm.addEventListener('submit',handleCreateSubmit)

function handleCreateSubmit(event){
  event.preventDefault()
  const newTask = {
    description: createTaskForm["new-task-description"].value
  }
  renderTask(newTask)
}

function renderTask(task) {
  const taskLi = document.createElement("li")
  taskLi.textContent = task.description

  const deleteButton = document.createElement("button")
  deleteButton.textContent = "X"
  taskLi.append(deleteButton) 

  deleteButton.addEventListener("click", function () {
    taskLi.remove() 
  })

  tasksUl.append(taskLi) 
}








});
