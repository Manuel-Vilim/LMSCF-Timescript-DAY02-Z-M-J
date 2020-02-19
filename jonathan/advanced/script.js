// Create an App that has to offer four different of types of vehicles
// and list the vehicle models based on the selected panel. 
// Once the user clicks on some vehicle show its details and possibility to view the price
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a Parent Class called Vehicles
var vehicles = /** @class */ (function () {
    function vehicles(name, horsepower, topspeed, carId, price) {
        this.name = name;
        this.horsepower = horsepower;
        this.topspeed = topspeed;
        this.carId = carId;
        this.price = price;
    }
    vehicles.prototype.basics = function () {
        document.getElementById("carsContainer").innerHTML += "\n\t\t<div class = \"box col-4 row\">\n\t\t\t<div class = \"leftside col-6\">\n\t\t\t\t<img class = \"vehicleimg\" src=\"img/auto.png\" alt=\"\">\n\t\t\t</div>\n\t\t\t<div class = \"rightside col-6\">\t\n\t\t\t\t<p class = \"carName\">" + this.name + "</p>\n\t\t\t\t<p class = \"horsepower\">" + this.horsepower + " PS</p>\n\t\t\t\t<p class = \"carColor\">" + this.topspeed + " Km/h</p>\n\t\t\t</div>\n\t\t\t<div class = \" buttondiv col-12 \">\n\t\t\t\t<button type=\"button\" class=\"priceButton\"><span id = " + this.carId + " class = \"price\">Show Price</span></button>\n\t\t\t</div>\n\t\t</div>\n\t</div>";
        console.log(this.carId);
    };
    return vehicles;
}());
// Define properties and methods for the super Class
// Consider the inheritance concept
var ColorOfVehicle = /** @class */ (function (_super) {
    __extends(ColorOfVehicle, _super);
    function ColorOfVehicle(name, horsepower, topspeed, carId, color) {
        var _this = _super.call(this, name, horsepower, topspeed, carId) || this;
        _this.color = color;
        return _this;
    }
    ColorOfVehicle.prototype.colorExtension = function () {
        return "...";
    };
    return ColorOfVehicle;
}(vehicles));
// Define 2 other Child classes and name them Motor and Truck
var motor = /** @class */ (function (_super) {
    __extends(motor, _super);
    function motor(name, horsepower, topspeed, carId, color, motor) {
        var _this = _super.call(this, name, horsepower, topspeed, carId) || this;
        _this.motor = motor;
        return _this;
    }
    motor.prototype.motorExtension = function () {
        return "...";
    };
    return motor;
}(vehicles));
var truck = /** @class */ (function (_super) {
    __extends(truck, _super);
    function truck(name, horsepower, topspeed, carId, color, truck) {
        var _this = _super.call(this, name, horsepower, topspeed, carId) || this;
        _this.truck = truck;
        return _this;
    }
    truck.prototype.motorExtension = function () {
        return "...";
    };
    return truck;
}(vehicles));
// Based on the personal vehicle performance, model, kilometers, 
//number of seats, fuel type and year of production calculate the price once 
//the user clicks on the button "show price" *use your dummy custom formula)
// Price = Performance x 1000 / Seats
var cars = [
    {
        "name": "CAR1",
        "horsepower": 300,
        "topspeed": 160,
        "color": "COLOR1",
        "motor": 000,
        "truck": "---",
        "kilometers": 000,
        "seats": 8,
        "fueltype": "petrol",
        "price": 1800
    },
    {
        "name": "CAR2",
        "horsepower": 400,
        "topspeed": 200,
        "color": "COLOR2",
        "motor": 000,
        "truck": "---",
        "kilometers": 000,
        "seats": 4,
        "fueltype": "petrol",
        "price": 1300
    },
    {
        "name": "CAR3",
        "horsepower": 500,
        "topspeed": 180,
        "color": "COLOR3",
        "motor": 000,
        "truck": "---",
        "kilometers": 000,
        "seats": 5,
        "fueltype": "petrol",
        "price": 1100
    },
    {
        "name": "CAR4",
        "horsepower": 600,
        "topspeed": 155,
        "color": "COLOR4",
        "motor": 000,
        "truck": "---",
        "kilometers": 000,
        "seats": 5,
        "fueltype": "petrol",
        "price": 1600
    },
];
// let car1 = new vehicles(cars[0].name, cars[0].horsepower, cars[0].topspeed);
// car1.basics()
for (var i = 0; i < cars.length; i++) {
    var car = new vehicles(cars[i].name, cars[i].horsepower, cars[i].topspeed, [i], cars[i].price);
    car.basics();
    var price = (cars[i].horsepower * 1000) / cars[i].seats;
    console.log(i);
}
var e = document.getElementsByClassName("priceButton");
var _loop_1 = function (i) {
    e[i].addEventListener("click", function () { $("#" + [i]).html((cars[i].price)); }, false);
};
//for changing the prices
for (var i = 0; i < e.length; i++) {
    _loop_1(i);
}
