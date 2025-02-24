let car = {
    brand: "Porche",
    model: "911 GT3 RS",
    year: 2024,
    getCarInfo:function () {
        console.log(`Car is ${this.brand} model ${this.model}`)
    },
    updateYear: function(newY) {
        this.year = newY
    },
    displayInfo() {
        setTimeout( () => {
          console.log(`Car: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
        }, 1000); 
      },
}

car.getCarInfo()
car.updateYear(2000)
car.displayInfo()
