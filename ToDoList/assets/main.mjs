let input = document.querySelector("input")
let taskList = document.querySelector("ul")
let addButton = document.querySelector(".addButton")
let saveButton = document.querySelector(".saveButton")
let editMode = "Off"
let currentEditItem = null 

function empty(){
    let empty = document.createElement("p")
    empty.innerText = "There is no list item"
    empty.className = "empty"
    if(taskList.children.length === 0 ){
    taskList.appendChild(empty)
    }
    else{
        let emptyMessage = document.querySelector(".empty")
        if(emptyMessage){
            emptyMessage.remove()
        }
    }
}
empty()

input.addEventListener("keyup", function (event) {
    if (input.value.trim() !== "" && editMode === "Off") {
        addButton.style.display = "block"
    } else {
        addButton.style.display = "none"
    }
    if (event.key === "Enter" && input.value.trim() !== "" && editMode === "Off") {
        addButton.click() 
    }
})



addButton.addEventListener("click", function () {
    if (input.value.trim() !== "" && editMode === "Off") {
        let inputValue = input.value.trim()
        let listItem = document.createElement("li")
        let itemText = document.createElement("span")
        let deleteButton = document.createElement("button")
        let editButton = document.createElement("button")
        let done = document.createElement("span")
        done.innerText = "DONE"
        done.className = "done"
        editButton.className = "editButton"
        deleteButton.className = "deleteButton"
        itemText.className = "itemText"
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        editButton.innerText = "EDIT"
        itemText.innerText = inputValue
        listItem.appendChild(deleteButton)
        listItem.appendChild(itemText)
        listItem.appendChild(editButton)
        taskList.appendChild(listItem)
        input.value = ""
        empty()
        deleteButton.addEventListener("click", function () {
            if(editMode === "Off"){
                listItem.remove()
                empty()
            }
            

        })

        editButton.addEventListener("click", function () {
            editMode = "On"
            input.value = itemText.innerText
            saveButton.style.display = "block"
            addButton.style.display = "none"
            currentEditItem = itemText
        })

        itemText.addEventListener("click", function(){
                editButton.replaceWith(done)
                itemText.style.textDecoration = "line-through"
                itemText.style.textDecorationColor = "red"
                itemText.style.textDecorationThickness = "3px"
            
        })
    }
})


saveButton.addEventListener("click", function (event) {
    if (currentEditItem && input.value.trim() !== "") {
        currentEditItem.innerText = input.value
        saveButton.classList.add("saved")
        saveButton.innerText = "SAVED SUCCESFULLY!" 
        setTimeout(()=>{
            saveButton.classList.remove("saved")
            saveButton.classList.add("saveButton") 
            saveButton.innerText = "SAVE"
            saveButton.style.display = "none"             
        },1999)

    } else if (currentEditItem) {
        currentEditItem.parentElement.remove()
        saveButton.style.display = "none"
        alert("Cannot save empty item. REMOVED...")
        empty()
    }
    input.value = ""
    addButton.style.display = "none"
    editMode = "Off"
    currentEditItem = null
})




