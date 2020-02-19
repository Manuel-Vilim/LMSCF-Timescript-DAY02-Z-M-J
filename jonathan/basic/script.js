//Create a class constructor named Person that should hold information about name, 
//age,  jobTitle and have a function that will return a string “Hello there, 
//My name is (name) and I am (age) years old, and I am a (jobTitle)”
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, jobtitle) {
        this.firstName = "";
        this.lastName = "";
        this.jobtitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobtitle = jobtitle;
    }
    Person.prototype.name = function () {
        return "My name is " + this.firstName + " " + this.lastName + " and I am " + this.age + " years old, and I am a " + this.jobtitle;
    };
    return Person;
}());
console.log(Person);
var hansi = new Person("Hansi", "Hortl", 23, "Test-Job");
console.log(hansi.name());
//Create a class based on the Person class and add some other properties like salary, 
//jobLocation and a function that will call the function that is inside the Person 
//class and add “and I get (salary) every month, and I work in (jobLocation)”
var pBased = /** @class */ (function (_super) {
    __extends(pBased, _super);
    function pBased(firstName, lastName, age, jobtitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, age, jobtitle) || this;
        _this.jobLocation = "";
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    pBased.prototype.secondfct = function () {
        return _super.prototype.name.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return pBased;
}(Person));
var student = new pBased("mario", "specter", 23, "JOB", 3500, "vienna");
console.log(student.secondfct());
