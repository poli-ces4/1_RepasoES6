/**
 * Function Declaration
 */
const resp = calcular(10);

function calcular(valor = 10) {
  return valor * 10;
}

console.log(resp);

/**
 * Function Expression
 */
const calculo = function (valor = 0) {
  return valor * 10;
};

const respuesta = calculo(20);
console.log(respuesta);

(function test() {
  return console.log("Test");
})();
