
let LandRover = {
    name: "Land Rover",
    model:"RR sport",
    year:2023,
    color:"black",
    engine:{
        name:"AJ-48",
        fuel:"Petrol"
    }
}

let Mercedes = {
    name: "Mercedes",
    model:"GLE500",
    year:2022,
    color:"grey",
    engine:{
        name:"MT-88",
        fuel:"Dizel"
    }
}

let BMW = {
    name: "BMW",
    model:"M4 competition",
    year:2024,
    color:"green",
    engine:{
        name:"ZX-12",
        fuel:"Plug-in hybrid"
    }
}

let cars = [LandRover,Mercedes,BMW]
let carname = prompt("Enter a car")

carname = {
    name: prompt("Enter name"),
    model:prompt("Enter model"),
    year:+prompt("Enter year"),
    color:prompt("Enter color"),
    engine:{
        name:prompt("Enter engine name"),
        fuel:prompt("Enter engine fuel")
    }
}

cars[cars.length] = carname

let copy = {}

for(let i = cars.length-2; i>=0 ; i--){
    copy = cars[i]
    cars[i] = cars[i+1]
    cars[i+1]=copy
}



console.log(cars)

