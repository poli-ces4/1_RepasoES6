/**
 * Operator Rest (Recibir parametros)
 */
function calcularSaldo(...saldos) {
  let total = 0;
  /*
  saldos.forEach(function (saldo) {
    return (total += saldo);
  });*/
  saldos.forEach((saldo) => (total += saldo));
  return total;
}
console.log(calcularSaldo(10, 20, 30, 40, 50));

/**
 * Operator Spread (Enviar argumentos)
 */

const saldoInicial = 100;
const saldos = [10, 20, 30, 40, 50];
const saldosTotal = [saldoInicial, ...saldos];
console.log(saldosTotal);
console.log(calcularSaldo(saldoInicial, ...saldos));
