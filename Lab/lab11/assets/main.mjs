let lyrics = [
    { word:"This ",
    time: 0.2},
    { word:"place ",
        time: 1},
    { word:"is ",
    time: 0.5},
    { word:"never ",
        time: 0.8},
    { word:"what ",
        time: 1},
    { word:"it ",
    time: 0.7},
    { word:"seems ",
        time: 0.9},
    { word:"",
        time: 1},
    { word:"Take ",
    time: 2},
    { word:"me ",
        time: 0.2},
    { word:"out ",
        time: 0.7},
    {word:"LA",
        time:0.5
    },
    {word:"",
        time:2
    },
    {word:"Take ",
        time:0.5
    },
    {word:"me ",
        time:0.4
    },
    {word:"out ",
        time:0.3
    },
    {word:"of ",
        time:0.3
    },
    {word:"LA ",
        time:0.5
    }
]

let text = document.querySelector(".text")

for(i of lyrics){
    if(i.word === ""){
        text.innerHTML += "<br>"
    }
    else{
        console.log(i);
        let span = document.createElement("span")
        span.innerText = i.word
        text.appendChild(span)
    }
    
}

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms*1000))
}

async function loop(){
    let index = 0
    for(i of lyrics){
        await delay(i.time);
        console.log(i);
        text.children[index].className = "newSpan"
        index++
        
    }
}

loop()




   
    

    
    // ,"place","is","never", "what" , "it", "seems",
    //  "Take", "me", "out","LA", 
    //  "Take", "me", "out", "of", "LA",
    //  "("
