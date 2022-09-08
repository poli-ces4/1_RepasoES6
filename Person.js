class Person {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }

  saludar() {
    return `Hola ${this._nombre}`;
  }
}

const person1 = new Person("ANa", "Lopez");
console.log(person1.nombre);
console.log(person1.saludar());
