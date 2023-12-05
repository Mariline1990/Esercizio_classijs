class User {
  constructor(_name, _surname, _age, _location) {
    this.firstName = _name;
    this.lastName = _surname;
    this.age = _age;
    this.location = _location;
  }

  compareAge() {
    return this.firstName + "è più vecchio di ";
  }
}

const matteoAletta = new User("Matteo", "Aletta", 32, "Firenze");

console.log(matteoAletta.compareAge());

const giannaMorandi = new User("Gianna", "Morandi", 22, "Torino");

class compare = 