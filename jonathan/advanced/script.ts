// Create an App that has to offer four different of types of vehicles
// and list the vehicle models based on the selected panel. 
// Once the user clicks on some vehicle show its details and possibility to view the price

// Create a Parent Class called Vehicles

class vehicles
{
	name:string;
	horsepower:number;
	topspeed:number;
	carId:number;
	price:number;

	constructor(name:string,horsepower:number,topspeed:number,carId:number,price:number)
	{
		this.name=name;
		this.horsepower=horsepower;
		this.topspeed=topspeed;
		this.carId=carId;
		this.price=price;
	}

	basics()
	{
		document.getElementById("carsContainer").innerHTML += `
		<div class = "box col-4 row">
			<div class = "leftside col-6">
				<img class = "vehicleimg" src="img/auto.png" alt="">
			</div>
			<div class = "rightside col-6">	
				<p class = "carName">${this.name}</p>
				<p class = "horsepower">${this.horsepower} PS</p>
				<p class = "carColor">${this.topspeed} Km/h</p>
			</div>
			<div class = " buttondiv col-12 ">
				<button type="button" class="priceButton"><span id = ${this.carId} class = "price">Show Price</span></button>
			</div>
		</div>
	</div>`

	console.log(this.carId)
	}

	

}

// Define properties and methods for the super Class
// Consider the inheritance concept

class ColorOfVehicle extends vehicles
{
	color:string;

	constructor(name:string,horsepower:number,topspeed:number,carId:number,color:string)
	{
		super(name,horsepower,topspeed,carId)
		this.color=color;
	}

	colorExtension()
	{
		return `...`;
	}
}


// Define 2 other Child classes and name them Motor and Truck

class motor extends vehicles
{
	motor:number;

	constructor(name:string,horsepower:number,topspeed:number,carId:number,color:string,motor:number)
	{
		super(name,horsepower,topspeed,carId)
		this.motor=motor;

	}

	motorExtension()
	{
		return `...`
	}

}

class truck extends vehicles
{
	truck:string;

	constructor(name:string,horsepower:number,topspeed:number,carId:number,color:string,truck:string)
	{
		super(name,horsepower,topspeed,carId)
		this.truck=truck;

	}

	motorExtension()
	{
		return `...`
	}

}

// Based on the personal vehicle performance, model, kilometers, 
//number of seats, fuel type and year of production calculate the price once 
//the user clicks on the button "show price" *use your dummy custom formula)



// Price = Performance x 1000 / Seats

var cars = 
[
	{
		"name":"CAR1",
		"horsepower":300,
		"topspeed":160,
		"color":"COLOR1",
		"motor":000,
		"truck":"---",
		"kilometers":000,
		"seats":8,
		"fueltype":"petrol",
		"price": 1800
	},
	{
		"name":"CAR2",
		"horsepower":400,
		"topspeed":200,
		"color":"COLOR2",
		"motor":000,
		"truck":"---",
		"kilometers":000,
		"seats":4,
		"fueltype":"petrol",
		"price": 1300
	},
	{
		"name":"CAR3",
		"horsepower":500,
		"topspeed":180,
		"color":"COLOR3",
		"motor":000,
		"truck":"---",
		"kilometers":000,
		"seats":5,
		"fueltype":"petrol",
		"price": 1100
	},
	{
		"name":"CAR4",
		"horsepower":600,
		"topspeed":155,
		"color":"COLOR4",
		"motor":000,
		"truck":"---",
		"kilometers":000,
		"seats":5,
		"fueltype":"petrol",
		"price": 1600
	},
]	


// let car1 = new vehicles(cars[0].name, cars[0].horsepower, cars[0].topspeed);
// car1.basics()
 

for(let i=0; i < cars.length; i++)
{
	let car = new vehicles(cars[i].name, cars[i].horsepower, cars[i].topspeed, [i], cars[i].price);
	car.basics()

	
	

	let price = (cars[i].horsepower * 1000) / cars[i].seats
	console.log(i)
}

let e = document.getElementsByClassName("priceButton")

//for changing the prices

for(let i = 0; i < e.length; i++)
{
	e[i].addEventListener("click", function(){ $("#"+[i]).html((cars[i].price))} ,false)
}
	



	







