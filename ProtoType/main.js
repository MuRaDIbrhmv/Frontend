function Vehicle(brand,year) {
    this.brand= brand
    this.year = year

};

Vehicle.prototype.getInfo = function(){
    console.log(`This is ${this.year} ${this.brand}`);  
}

const car = new Vehicle("Audi",2015)


car.getInfo()

function Car(brand, year, fuelType){
    Vehicle.call(this,brand,year)
    this.fuelType = fuelType
}

Car.prototype = Object.create(Vehicle.prototype)

Car.prototype.getInfo = function(){

    return `This is ${this.year} ${this.brand} with ${this.fuelType} fuel type `

}

let lambo = new Vehicle("Lamborghini Aventador", 2024)
console.log(lambo.getInfo());

let porche = new Car("Porche", 2024, "gas")
console.log(porche.getInfo());
