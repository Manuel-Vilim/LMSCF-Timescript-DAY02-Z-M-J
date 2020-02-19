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
    function Person(firstName, jobTitle, age) {
        this.firstName = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.jobTitle = jobTitle;
        this.age = age;
    }
    Person.prototype.name = function () {
        return "Hello there, my name is " + this.firstName + " and I am " + this.age + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
console.log(Person);
var person1 = new Person("Hansi", "Test-Job", 23);
console.log(person1.name());
//-----------------------------------------------------------------------------------------------------
var Person1 = /** @class */ (function (_super) {
    __extends(Person1, _super);
    function Person1(firstName, jobTitle, age) {
        return _super.call(this, firstName, jobTitle, age) || this;
    }
    return Person1;
}(Person));
var person2 = new Person1("mario", "specter", 25);
console.log(person2.name());
//-----------------------------------------------------------------------------------------------------
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2(firstName, jobTitle, age, location) {
        var _this = _super.call(this, firstName, jobTitle, age) || this;
        _this.location = location;
        return _this;
    }
    Person2.prototype.nameb = function () {
        return _super.prototype.name.call(this) + ", located in " + this.location;
    };
    return Person2;
}(Person));
var person3 = new Person2("Sepp", "Nurse", 25, "Vienna");
console.log(person3.nameb());
