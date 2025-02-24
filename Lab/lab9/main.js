let pluses = document.querySelectorAll(".plus")
console.log(pluses);

let playlist = document.querySelector("h4")
pluses.forEach(plus => {
    plus.addEventListener('click', () => {
        playlist.innerHTML = `<div>${plus.innerText}</div>`
    })
});


