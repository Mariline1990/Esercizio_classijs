class User {
  constructor(_name, _surname, _age, _location) {
    this.firstName = _name;
    this.lastName = _surname;
    this.age = _age;
    this.location = _location;
  }

  compareAge(nameToCompare) {
    if (this.age > nameToCompare.age) {
      return this.firstName + " è più grande di " + nameToCompare.firstName;
    }
  }
}

const matteoAletta = new User("Matteo", "Aletta", 32, "Firenze");
const giannaMorandi = new User("Gianna", "Morandi", 22, "Torino");

console.log(matteoAletta.compareAge(giannaMorandi));
