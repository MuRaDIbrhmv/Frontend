// TASK 1

// let hi = document.querySelector("#hello");
// let texts = document.getElementsByClassName("text")
// let paragraphs = document.getElementsByTagName("p")
// let btn = document.querySelector("button")
// let ps = document.querySelectorAll("p")


// TASK 2

// let start = document.querySelector("p")

// start.innerText = "It is changed"




// TASK 3


// let button = document.querySelector("button")
// let bg = document.querySelector("div")
// let color = ["green", "red", "gold", "yellow", "purple", "orange"];
// let i = 0
// button.addEventListener("click", function(){
//     bg.style.backgroundColor = color[i]
//     i = (i+1) % color.length
// })


// TASK 4

let addButton = document.querySelector(".add")
let deleteButton = document.querySelector(".delete")
let ul = document.querySelector("ul")
addButton.addEventListener("click", function(){
    ul.innerHTML += "<li></li>"
})

deleteButton.addEventListener("click", function(){
    ul.innerHTML = ul.innerHTML.replace("<li></li>","")
})