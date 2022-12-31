//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


// Extend VehicleModule Constructor
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10
        this.scheduleService = false
        
    }  
    // checkService
    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService
        }
    }
    // start
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started");
        } else {
            return this.started = false;
            console.log("gas tank empty");
        }
    }
    // passenger
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

import "/vehicle.js"
