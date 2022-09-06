/**
 * Explicar VAR
 */

(function explicarVar() {
  var edad = 20;
  edad = 30;
  if (true) {
    var edad = 10;
    console.log(edad);
  }
  console.log(edad);
})();

/**
 * Explicar LET
 */

(function explicarLet() {
  let prom = 20;
  prom = 30;
  if (true) {
    let prom = 10;
    console.log(prom);
  }
  console.log(prom);
})();

/**
 * Explicar CONST
 */

(function explicarConst() {
  const PI = 3.14;
  const numeros = [1, 2, 3];
  if (true) {
    const PI = 10;
    console.log(PI);
  }
  console.log(numeros);
  console.log(PI);
  numeros.push(7);
  console.log(numeros);
})();
