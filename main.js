const inputElement = document.querySelector('.input')
const addBtn = document.querySelector('.add-todo')
const todoList = document.querySelector('.todo-list')
const deleteAll = document.querySelector('.delete-all')
console.log(inputElement)
inputElement.onkeyup = function(){
    let userData = inputElement.value
    console.log(userData)
    if(userData.trim() != 0){
        addBtn.classList.add('active')
    }else {
        addBtn.classList.remove('active')
    }
}
showTask()
addBtn.onclick = function(){
    let userData = inputElement.value

    let getLocalStorage = localStorage.getItem("New todo")
    if(getLocalStorage == null){
        listArr = []
    }else {
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userData)
    localStorage.setItem("New todo", JSON.stringify(listArr))
    showTask()
}

function showTask (){
    let getLocalStorage = localStorage.getItem("New todo")
    if(getLocalStorage == null){
        listArr = []
    }else {
        listArr = JSON.parse(getLocalStorage)
    }
    const pendingNumber = document.querySelector('.pending-number')
    pendingNumber.textContent = listArr.length
    if(listArr.length > 0){
        deleteAll.classList.add('active')
    }else {
        deleteAll.classList.remove('active')

    }
    let newLitag = ''
    listArr.forEach(function(item,index){
        newLitag += ` <li>${item}<span onclick = "deleteTask(${index})"><i class="fa-solid fa-trash"></i></span></li>`
    })
    todoList.innerHTML = newLitag
    inputElement.value = ''
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New todo")
   listArr =  JSON.parse(getLocalStorage)
   listArr.splice(index, 1)
   localStorage.setItem("New todo", JSON.stringify(listArr))
   showTask()
}

deleteAll.onclick = function(){
    listArr = []
    localStorage.setItem("New todo", JSON.stringify(listArr))
    showTask()
}


