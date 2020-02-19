//Create a class constructor named Person that should hold information about name, 
//age,  jobTitle and have a function that will return a string “Hello there, 
//My name is (name) and I am (age) years old, and I am a (jobTitle)”



class Person { 
   firstName = ""; 
   lastName = ""; 
   age : number;
   jobtitle = "";

constructor(firstName, lastName, age:number , jobtitle) 
	{ 
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.jobtitle = jobtitle;

   	}
   name() { 
       return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old, and I am a ${this.jobtitle}`;
   }
   
}

console.log(Person)

let hansi = new Person ("Hansi", "Hortl", 23 , "Test-Job")

console.log(hansi.name())


//Create a class based on the Person class and add some other properties like salary, 
//jobLocation and a function that will call the function that is inside the Person 
//class and add “and I get (salary) every month, and I work in (jobLocation)”


class pBased extends Person
{
	salary:number;
	jobLocation:string="";

	constructor(firstName,lastName,age:number,jobtitle,salary:number,jobLocation)
	{
		super(firstName,lastName,age,jobtitle);
		this.salary = salary;	
		this.jobLocation = jobLocation;
	}

	secondfct()
	{
		return `${super.name()} and I get ${this.salary} every month, and I work in ${this.jobLocation}`
	}
}

let student = new pBased("mario", "specter", 23, "JOB", 3500, "vienna")

console.log(student.secondfct())


