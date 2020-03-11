document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

//const submit = document.querySelector(`form.submit[value="Create New Task"]`)
//const submit = document.querySelector("#sub")
/*const submit = document.getElementsByTagName('input')
submit[0]
submit[1]*/

const taskform = document.querySelector("#create-task-form")

taskform.addEventListener("submit", handleformsubmit)

function handleformsubmit(event){
  event.preventDefault()

  const form = event.target

  //const newtask = event.target.name.value;
  const newtask = form["new-task-description"].value;
  //debugger
  const task = {
    name: newtask
  }
  
  renderOneTask(task)

  form.reset()
}


function renderOneTask(task){
  const list = document.querySelector("#tasks")
  const outerLi = document.createElement('li')

  outerLi.innerHTML =`
  <p> Label: ${task.name}<p>
  `

  list.append(outerLi)
}