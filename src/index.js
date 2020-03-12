document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementsByTagName('input')
    const innerUl = document.querySelector("ul#tasks")
    let idnum = 0
    taskForm["new-task-description"].form.addEventListener("submit", handleformsubmit)
    function handleformsubmit(event){
        event.preventDefault()
        const newtask = taskForm["new-task-description"].value
        const task = {
            discr: newtask,
            id: idnum
        }
        renderOneTask(task)
        taskForm["new-task-description"].form.reset()
        idnum++
        document.querySelectorAll("li").forEach((item) => {
             const deleteTasks = item.children[item.value].children[item.value]
             deleteTasks.addEventListener("click", taskDelete)
            })
    }
    function renderOneTask(task){
        const innerLi = document.createElement('li')
        innerLi.id = task.id
        innerLi.innerHTML =`
        <p>Task: ${task.discr}  <button type="button" id="${task.id}"><strong>Delete Me!</strong></button></p>
        `
        innerUl.append(innerLi)
    }
    function taskDelete(event) {
         event["path"][3].remove()
    }
})
  