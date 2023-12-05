class User {
  constructor(_name, _surname, _age, _location) {
    this.firstName = _name;
    this.lastName = _surname;
    this.age = _age;
    this.location = _location;
  }

  compareAge(userToCompare) {
    if (this.age > userToCompare.age) {
      return this.firstName + " è più grande di " + userToCompare.firstName;
    } else {
      return userToCompare.firstName + " è più grande di " + this.firstName;
    }
  }
}

const matteoAletta = new User("Matteo", "Aletta", 32, "Firenze");
const giannaMorandi = new User("Gianna", "Morandi", 12, "Torino");

console.log(matteoAletta.compareAge(giannaMorandi));
