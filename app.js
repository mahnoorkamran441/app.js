const employee ={
    calcTax () {
        console.log("Calculating tax is 10% of salary");
    }
}
 
const karanarjun1 = {
    __proto__: employee,
    name: "Karan Arjun",
    salary: 50000
}
const karanarjun2 = {
    __proto__: employee,
    name: "Karan Arjun",
    salary: 60000
}
const karanarjun3 = {
    __proto__: employee,
    name: "Karan Arjun",
    salary: 70000
}
const karanarjun4 = {
    __proto__: employee,
    name: "Karan Arjun",
    salary: 80000
}
const karanarjun5 = {
    __proto__: employee,
    name: "Karan Arjun",
    salary: 90000
}
class ToyotCar{
    constructor(brand) {
        console.log("creating new objects");
        this.brand = brand || "Toyota";
    }
    stopEngine() {
        console.log("Engine stopped");
    }
    start() {
        console.log("Engine started for ");
    }
}
let fortuner = new ToyotCar("Fortuner");
let innova = new ToyotCar("Innova");
let corolla = new ToyotCar("Corolla");