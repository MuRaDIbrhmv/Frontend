let picture = document.querySelector("img")
let box1 = document.querySelector(".first")
let box2 = document.querySelector(".second")
box2.ondragover = function(){
    box2.appendChild(picture)
}


box1.ondragover = function(){
    box1.appendChild(picture)
}
