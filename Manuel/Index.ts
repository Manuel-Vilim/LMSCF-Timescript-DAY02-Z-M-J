class Person {
	firstName="" ;
	jobTitle= "";
	age:number;

constructor(firstName, jobTitle, age:number){
	this.firstName=firstName;
	this.jobTitle=jobTitle;
	this.age=age;
}

name(){
	return `Hello there, my name is ${this.firstName} and I am ${this.age} years old, and I am a ${this.jobTitle}`
}
}
console.log(Person)

let person1 = new Person ("Hansi", "Test-Job", 23)

console.log(person1.name())


//-----------------------------------------------------------------------------------------------------

class Person1 extends Person{	

constructor(firstName, jobTitle,age:number)
{
	super(firstName,jobTitle,age)
}
}
let person2 = new Person1("mario", "specter", 25)

console.log(person2.name())	


//-----------------------------------------------------------------------------------------------------

class Person2 extends Person{	

	location:string

constructor(firstName, jobTitle,age:number,location)
{
	super(firstName,jobTitle,age)
	this.location=location;
}
nameb()
	{
		return `${super.name()}, located in ${this.location}`
	}
	}
let person3 = new Person2("Sepp", "Nurse", 25, "Vienna")

console.log(person3.nameb())	