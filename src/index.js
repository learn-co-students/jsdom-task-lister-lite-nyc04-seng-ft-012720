document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskList = document.querySelector("#tasks")
  const taskForm = document.querySelector("#create-task-form")

  taskForm.addEventListener("submit", handleTaskFormSubmit)

  // Event Listeners
  function handleTaskFormSubmit(event) {
    event.preventDefault()
    // get form values and attach it to a new task so it can be added to the taskList; taskForm is the form that was filled out, the name of the input field is in the brackets, and value is what was entered in the input field 
    const newTask = {
      description: taskForm["new-task-description"].value,
      priority: taskForm["priority"].value
    }
    // render the new task
    renderTask(newTask)
    // reset the form
    taskForm.reset()
  }

  taskList.addEventListener("click", event => {
    // check to see if delere button was clicked using the data-action that was added to the delete button tag
    if (event.target.dataset.action === "delete") {
      // find the whole task by using the className that was attached to each task
      const task = event.target.closest(".task")
      // remove the task
      task.remove()
    }
  })


  function renderTask(task) {
    // create the element where the new task will be inside of
    const taskLi = document.createElement("li")
    
    // attach any classNames or IDs the certain task will need, we are adding className because later in the even delegation strategy we will need a way to access the whole task to delete it
    taskLi.className = "task"
    // attach the values of what was entered in the form to the new taskLi that is being created
    // taskLi.innerHTML = `${task.description}`
    taskLi.textContent = `${task.description}`
    // set the color of the text inside of the li to match the priority color that was entered
    taskLi.style.color = task.priority
    
    // create a delete button to each task so users have an option to delete a task
    const deleteTaskButton = document.createElement("button")
    deleteTaskButton.textContent = "X"
    // data-action was added because we want to be able to access this later when checking if the user clicked the delete button
    deleteTaskButton.dataset.action = "delete"
    
    // attach the delete button to the taskLi
    taskLi.append(deleteTaskButton)
    // add the new task to the taskList
    taskList.append(taskLi)
  }

});
