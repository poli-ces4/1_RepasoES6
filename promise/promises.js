//Callback  =  Una funcion callback es una funcion que se pasa como parametro a otra funcion

function respuesta(res) {
  console.log(res);
}

function sumar(op1, op2, funcionCallback) {
  let res = op1 + op2;
  funcionCallback(res);
}

sumar(10, 20, respuesta);

//Las Promesas por la naturaleza son asincronas
let promesa = new Promise((resuelto, rechazado) => {
  let estado = true;
  if (estado) {
    resuelto("Resolvio correcto");
  } else {
    rechazado("Se rechazo");
  }
});

/**Opcion 1 */
promesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);

/**Opcion 2 */
promesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));

/**SetTimeout para evidenciar lo asincrono */
let promesa2 = new Promise((res) => {
  console.log("inicio promesa2");
  setTimeout(() => res("Promesa con timeout"), 3000);
  console.log("fin promesa2");
});
promesa2.then((valor) => console.log(valor));

// async  indicar que una funcion regresa promesa
// await  esperar el resultado de una promesa

async function miFuncionConPromesa() {
  return "Return promesa con async";
}

miFuncionConPromesa().then((valor) => console.log(valor));

async function miFuncionConAsyncAwait() {
  let miPromesa = new Promise((res) => {
    res("Promesa con await");
  });
  console.log(await miPromesa);
}

miFuncionConAsyncAwait();

//promesa, asincrono, async, await, setTimeout

async function funtConPromesaAsyncAwaitSetTimeout() {
  console.log("Inicio fun()");
  let miPromesa = new Promise((res) => {
    setTimeout(() => {
      res("Return Promesa con await");
    }, 4000);
  });
  console.log(await miPromesa);
  console.log("Fin fun()");
}

funtConPromesaAsyncAwaitSetTimeout();
