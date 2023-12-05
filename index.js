class User {
  constructor(_name, _surname, _age, _location) {
    this.firstName = _name;
    this.lastName = _surname;
    this.age = _age;
    this.location = _location;
  }

  compareAge(agetToCompare) {
    return this.firstName + " è più grande di" + agetToCompare.firstName;
  }
}

let compare = function () {};

const matteoAletta = new User("Matteo", "Aletta", 32, "Firenze");

console.log(matteoAletta.compareAge(42));

const giannaMorandi = new User("Gianna", "Morandi", 22, "Torino");
