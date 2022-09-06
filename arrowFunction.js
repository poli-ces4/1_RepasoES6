const saludar = function (nombre) {
  return `Hola ${nombre} como estas?`;
};

console.log(saludar("Maria"));

const saludar2 = (nombre) => `Hola ${nombre} como estas?`;
console.log(saludar2("Ana"));

const calcular = (valor1, valor2) => valor1 + valor2;

console.log(calcular(10, 20));
