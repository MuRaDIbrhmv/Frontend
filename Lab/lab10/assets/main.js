let input = document.querySelector("input")
let search = document.querySelector("button")
let username = ""
let image = document.querySelector("img")
let name = document.querySelector(".name")
let bio = document.querySelector(".bio")



async function getData(username) {
    let url = "https://api.github.com/users/" + username
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error.message);
      }
    
}


search.addEventListener("click",async function (){
    username = input.value
    let data = await getData(username)
    image.setAttribute("src", data["avatar_url"])
    name.innerText = username
    bio.innerText = data["bio"]
    console.log(data);
    
})

