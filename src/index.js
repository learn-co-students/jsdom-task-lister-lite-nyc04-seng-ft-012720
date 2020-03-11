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
let idnum = 0
function handleformsubmit(event){
  event.preventDefault()

  const form = event.target

  //const newtask = event.target.name.value;
  const newtask = form["new-task-description"].value;
  //debugger
  
  const task = {
    name: newtask,
    id: idnum
  }
  
  renderOneTask(task)

  form.reset()
}


function renderOneTask(task){
  idnum++;
  const list = document.querySelector("#tasks")
  const outerLi = document.createElement('li')
  outerLi.id = task.id
  outerLi.innerHTML =`
  <p> Task: ${task.name} <button type="button" id="${task.id}">Delete Me!</button></p>
  `
  list.append(outerLi)
}

const remo = document.querySelector("#tasks")

remo.addEventListener("Delete Me!", function (){
  badli = remo.querySelector("#id")
  debugger
  badli.remove()
})


